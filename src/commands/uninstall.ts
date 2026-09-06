import { Command } from "commander";

import { getServer } from "../registry/index.js";
import { detectClients } from "../clients/index.js";

import {
  removeServer,
  uninstallPackage
} from "../uninstall/index.js";

import { secrets } from "../secrets/index.js";

export const uninstallCommand = new Command("uninstall")
  .description("Remove an MCP server")
  .argument("<server>", "MCP server name")
  .action(async (serverId: string) => {
    const server = getServer(serverId);

    if (!server) {
      console.error(`Unknown MCP server: ${serverId}`);
      process.exit(1);
    }

    console.log();
    console.log(`Removing ${server.name}`);
    console.log("─".repeat(32));

    const clients = detectClients();

    for (const client of clients) {
      if (!client.detected) continue;

      const removed = await removeServer(
        client.configPath,
        server.id
      );

      if (removed) {
        console.log(`✔ ${client.name} cleaned`);
      }
    }

    await secrets.delete(
      "plugin-notion-mcp",
      "notion"
    );

    console.log("✔ Credentials removed");

    const removedPackage =
      await uninstallPackage(server.package);

    if (removedPackage) {
      console.log("✔ Package removed");
    }

    console.log();
    console.log("Done.");
  });