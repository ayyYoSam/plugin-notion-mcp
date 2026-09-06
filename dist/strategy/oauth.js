import { execa } from "execa";
export const oauthStrategy = {
    async install() {
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