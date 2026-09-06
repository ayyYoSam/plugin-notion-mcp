import { Command } from "commander";

import { listServers } from "../registry/index.js";

export const listCommand = new Command("list")
  .description("List supported Notion MCP servers")
  .action(() => {
    console.log();
    console.log("Supported Servers");
    console.log("─".repeat(32));

    for (const server of listServers()) {
      console.log(`• ${server.id}`);
      console.log(`  ${server.description}`);
      console.log();
    }
  });