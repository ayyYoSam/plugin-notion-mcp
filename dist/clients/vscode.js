import fs from "node:fs";
import path from "node:path";
import { execa } from "execa";
export async function detectVSCode() {
    const configPath = path.join(process.cwd(), ".vscode", "mcp.json");
    let detected;
    try {
        await execa("code", ["--version"]);
        detected = true;
    }
    catch {
        detected = false;
    }
    return {
        id: "vscode",
        name: "VS Code",
        method: "config",
        detected,
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "project"
    };
}
//# sourceMappingURL=vscode.js.map