import { Command } from "commander";
import ora from "ora";

import { getPlatform } from "../platforms/index.js";
import { commandVersion } from "../utils/exec.js";
import { detectClients } from "../clients/index.js";

import { ensureConfig } from "../doctor/fix.js";

export const doctorCommand = new Command("doctor")
  .description("Inspect your Notion MCP environment")
  .option("--fix", "Automatically fix supported issues")
  .action(async (options) => {
    console.log();
    console.log("Plugin MCP Doctor");
    console.log("─".repeat(32));

    console.log(`Platform: ${getPlatform()}`);
    console.log();

    const nodeSpinner = ora("Checking Node.js").start();
    const nodeVersion = await commandVersion("node");

    if (nodeVersion) {
      nodeSpinner.succeed(`Node.js ${nodeVersion}`);
    } else {
      nodeSpinner.fail("Node.js not found");
    }

    const npmSpinner = ora("Checking npm").start();
    const npmVersion = await commandVersion("npm");

    if (npmVersion) {
      npmSpinner.succeed(`npm ${npmVersion}`);
    } else {
      npmSpinner.fail("npm not found");
    }

    console.log();
    console.log("Notion Clients");
    console.log("─".repeat(32));

    const clients = await detectClients();

    for (const client of clients) {
      const icon = client.detected ? "✔" : "✖";

      console.log(`${icon} ${client.name}`);
      console.log(`  Scope : ${client.scope}`);
      console.log(`  Method: ${client.method}`);
      console.log(`  Config: ${client.configPath}`);
      console.log(
        `  Status: ${
          client.hasConfig
            ? "configuration found"
            : "configuration missing"
        }`
      );
      console.log();
    }

    if (!options.fix) return;

    console.log("Fixes");
    console.log("─".repeat(32));

    let fixed = 0;

    for (const client of clients) {
      if (client.hasConfig) continue;

      await ensureConfig(client.configPath);

      console.log(`✔ Created ${client.configPath}`);

      fixed++;
    }

    if (!fixed) {
      console.log("Nothing to fix.");
    }
  });