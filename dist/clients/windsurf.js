import fs from "node:fs";
import path from "node:path";
import { getAppDataDir } from "../utils/paths.js";
export function detectWindsurf() {
    const appDir = path.join(getAppDataDir(), "Windsurf", "User");
    const configPath = path.join(appDir, "mcp_config.json");
    return {
        id: "windsurf",
        name: "Windsurf",
        method: "config",
        detected: fs.existsSync(appDir),
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "global"
    };
}
//# sourceMappingURL=windsurf.js.map