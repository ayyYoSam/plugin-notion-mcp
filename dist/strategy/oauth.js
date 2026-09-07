import { execa } from "execa";
import { mergeNotionServer, writeClaudeConfig } from "../clients/claude-desktop.js";
export const oauthStrategy = {
    async install({ client, server, env }) {
        if (client.id === "claude-desktop") {
            const config = mergeNotionServer({
                command: "npx",
                args: ["-y", server.package],
                env: {
                    NOTION_API_KEY: env.NOTION_API_KEY
                }
            });
            writeClaudeConfig(config);
            console.log("✔ Claude Desktop configured.");
            return;
        }
        const url = "https://www.notion.so/profile/integrations";
        switch (process.platform) {
            case "win32":
                await execa("cmd", ["/c", "start", "", url]);
                break;
            case "darwin":
                await execa("open", [url]);
                break;
            default:
                await execa("xdg-open", [url]);
        }
        console.log();
        console.log("Finish the Notion connection.");
        console.log("Press Enter when finished.");
        await new Promise(resolve => {
            process.stdin.resume();
            process.stdin.once("data", () => {
                process.stdin.pause();
                resolve();
            });
        });
    },
    async verify() {
        return true;
    }
};
//# sourceMappingURL=oauth.js.map