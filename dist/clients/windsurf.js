import fs from "node:fs";
import path from "node:path";
import { getAppDataDir } from "../utils/paths.js";
export function detectWindsurf() {
    const configPath = path.join(getAppDataDir(), "Windsurf", "User", "mcp_config.json");
    return {
        id: "windsurf",
        name: "Windsurf",
        detected: fs.existsSync(path.dirname(configPath)),
        method: "config",
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "global"
    };
}
//# sourceMappingURL=windsurf.js.map