import { Command } from "commander";

import { askEnv } from "../prompts/env.js";
import { validateNotionKey } from "../utils/validate.js";
import { secrets } from "../secrets/index.js";

export const loginCommand = new Command("login")
  .description("Store credentials securely")
  .argument("<server>", "MCP server name")
  .action(async (server) => {

    if (server !== "notion") {
      console.error("Only Notion is supported right now.");
      process.exit(1);
    }

    let key: string;

    while (true) {
      try {
        key = validateNotionKey(
          await askEnv("NOTION_API_KEY")
        );

        break;
      } catch (error) {
        console.log(`✖ ${(error as Error).message}`);
      }
    }

    await secrets.set(
      "plugin-notion-mcp",
      "notion",
      key
    );

    console.log();
    console.log("✔ Secret stored securely.");
  });