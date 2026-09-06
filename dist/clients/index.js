import { detectClaudeDesktop } from "./claude-desktop.js";
import { detectCursor } from "./cursor.js";
import { detectVSCode } from "./vscode.js";
import { detectWindsurf } from "./windsurf.js";
export function detectClients() {
    return [
        detectClaudeDesktop(),
        detectCursor(),
        detectVSCode(),
        detectWindsurf()
    ];
}
//# sourceMappingURL=index.js.map