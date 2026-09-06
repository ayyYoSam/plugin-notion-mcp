import { Command } from "commander";
import { askEnv } from "../prompts/env.js";
import { validateNotionKey } from "../utils/validate.js";
import { secrets } from "../secrets/index.js";
export const loginCommand = new Command("login")
    .description("Store Notion credentials securely")
    .argument("<server>", "Server name")
    .action(async (server) => {
    if (server !== "notion") {
        console.error(`Unknown server: ${server}`);
        console.error("Supported server: notion");
        process.exit(1);
    }
    while (true) {
        try {
            const key = validateNotionKey(await askEnv("NOTION_API_KEY"));
            await secrets.set("plugin-notion-mcp", "notion", key);
            console.log();
            console.log("✔ Credentials stored securely.");
            return;
        }
        catch (error) {
            console.log();
            console.log(`✖ ${error.message}`);
        }
    }
});
//# sourceMappingURL=login.js.map