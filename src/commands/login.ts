import { Command } from "commander";

import { askEnv } from "../prompts/env.js";
import { validateNotionKey } from "../utils/validate.js";
import { secrets } from "../secrets/index.js";

export const loginCommand = new Command("login")
  .description("Store credentials securely")
  .argument("<server>", "MCP server name")
  .action(async (server: string) => {
    if (server !== "notion") {
      console.error(`Unknown MCP server: ${server}`);
      process.exit(1);
    }

    while (true) {
      try {
        const key = validateNotionKey(
          await askEnv("NOTION_API_KEY")
        );

        await secrets.set(
          "plugin-notion-mcp",
          "notion",
          key
        );

        console.log();
        console.log("✔ Credentials stored securely.");

        return;
      } catch (error) {
        console.log();
        console.log(`✖ ${(error as Error).message}`);
      }
    }
  });