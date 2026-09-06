import fs from "node:fs";
import path from "node:path";
import { getAppDataDir } from "../utils/paths.js";
export function detectClaudeDesktop() {
    const configPath = path.join(getAppDataDir(), "Claude", "claude_desktop_config.json");
    return {
        id: "claude-desktop",
        name: "Claude Desktop",
        detected: fs.existsSync(path.dirname(configPath)),
        method: "oauth",
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "global"
    };
}
//# sourceMappingURL=claude-desktop.js.map