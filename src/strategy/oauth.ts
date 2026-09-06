import { execa } from "execa";
import type { ClientStrategy } from "./types.js";

export const oauthStrategy: ClientStrategy = {
  async install() {
    const url =
      "https://www.notion.so/profile/integrations";

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

    await new Promise<void>(resolve => {
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