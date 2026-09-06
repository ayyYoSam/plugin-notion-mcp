import fs from "node:fs";
import path from "node:path";
export function detectVSCode() {
    const configPath = path.join(process.cwd(), ".vscode", "mcp.json");
    return {
        id: "vscode",
        name: "VS Code",
        detected: fs.existsSync(path.join(process.cwd(), ".vscode")),
        method: "config",
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "project"
    };
}
//# sourceMappingURL=vscode.js.map