import { Command } from "commander";

import { secrets } from "../secrets/index.js";

export const logoutCommand = new Command("logout")
  .description("Remove stored credentials")
  .argument("<server>", "MCP server name")
  .action(async (server: string) => {
    if (server !== "notion") {
      console.error(`Unknown MCP server: ${server}`);
      process.exit(1);
    }

    const removed = await secrets.delete(
      "plugin-notion-mcp",
      "notion"
    );

    if (removed) {
      console.log("✔ Credentials removed.");
    } else {
      console.log("No stored credentials found.");
    }
  });