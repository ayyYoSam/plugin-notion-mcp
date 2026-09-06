import { Command } from "commander";

import { getServer } from "../registry/index.js";
import { installWithNpm, runStep } from "../installer/index.js";

import { askEnv } from "../prompts/env.js";
import { detectClients } from "../clients/index.js";
import { getStrategy } from "../strategy/index.js";

import { validateNotionKey } from "../utils/validate.js";
import { secrets } from "../secrets/index.js";

export const installCommand = new Command("install")
  .description("Install an MCP server")
  .argument("<server>", "MCP server name")
  .action(async (serverId: string) => {
    const server = getServer(serverId);

    if (!server) {
      console.error(`Unknown MCP server: ${serverId}`);
      process.exit(1);
    }

    const started = Date.now();

    console.log();
    console.log(`Installing ${server.name}`);
    console.log("─".repeat(32));

    console.log(`Runtime : ${server.runtime}`);
    console.log(`Package : ${server.package}`);

    if (server.env.length) {
      console.log(`Requires: ${server.env.join(", ")}`);
    }

    console.log();

    let clients = detectClients();

    await runStep(
      "[1/4] Detecting environment",
      async () => {
        clients = detectClients();

        if (!clients.some(client => client.detected)) {
          throw new Error("No supported MCP client found.");
        }
      }
    );

    await runStep(
      "[2/4] Installing package",
      async () => {
        switch (server.runtime) {
          case "npm":
            await installWithNpm(server.package);
            break;

          default:
            throw new Error(
              `Runtime ${server.runtime} is not supported yet.`
            );
        }
      }
    );

    let apiKey = "";

    if (server.env.length) {
      apiKey = (await secrets.get(
        "plugin-notion-mcp",
        "notion"
      )) ?? "";

      if (!apiKey) {
        while (true) {
          try {
            apiKey = validateNotionKey(
              await askEnv("NOTION_API_KEY")
            );

            await secrets.set(
              "plugin-notion-mcp",
              "notion",
              apiKey
            );

            console.log("✔ Secret stored securely.");
            break;
          } catch (error) {
            console.log();
            console.log(`✖ ${(error as Error).message}`);
            console.log("Try again.\n");
          }
        }
      } else {
        console.log("✔ Using stored credentials.");
      }
    }

    await runStep(
      "[3/4] Configuring clients",
      async () => {
        for (const client of clients) {
          if (!client.detected) continue;

          const strategy = getStrategy(client.method);

          await strategy.install({
            client,
            server,
            env: {
              NOTION_API_KEY: apiKey
            }
          });
        }
      }
    );

    await runStep(
      "[4/4] Verifying installation",
      async () => {
        clients = detectClients();

        if (!clients.some(client => client.detected)) {
          throw new Error("Verification failed.");
        }
      }
    );

    const elapsed = ((Date.now() - started) / 1000).toFixed(1);

    console.log();

    for (const client of clients) {
      if (!client.detected) continue;

      console.log(`✔ ${client.name}`);
      console.log(`  ${client.configPath}`);
    }

    console.log();
    console.log(`Done in ${elapsed}s.`);
  });