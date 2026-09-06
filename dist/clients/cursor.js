import fs from "node:fs";
import path from "node:path";
import { execa } from "execa";
export async function detectCursor() {
    const configPath = path.join(process.env.USERPROFILE ?? "", ".cursor", "mcp.json");
    let detected;
    try {
        await execa("cursor", ["--version"]);
        detected = true;
    }
    catch {
        detected = fs.existsSync(path.dirname(configPath));
    }
    return {
        id: "cursor",
        name: "Cursor",
        method: "config",
        detected,
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "global"
    };
}
//# sourceMappingURL=cursor.js.map