import fs from "node:fs";
import path from "node:path";
import { getAppDataDir } from "../utils/paths.js";
export function detectVSCode() {
    const userDir = path.join(getAppDataDir(), "Code", "User");
    return {
        id: "vscode",
        name: "VS Code",
        detected: fs.existsSync(userDir),
        configPath: path.join(userDir, "settings.json"),
        hasConfig: fs.existsSync(path.join(userDir, "settings.json")),
        scope: "global"
    };
}
//# sourceMappingURL=vscode.js.map