import fs from "node:fs";
import path from "node:path";
import { getHomeDir } from "../utils/paths.js";
export function detectCursor() {
    const configPath = path.join(getHomeDir(), ".cursor", "mcp.json");
    return {
        id: "cursor",
        name: "Cursor",
        detected: fs.existsSync(path.dirname(configPath)),
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "global",
        method: "config",
    };
}
//# sourceMappingURL=cursor.js.map