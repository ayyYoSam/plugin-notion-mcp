import { detectClaudeDesktop } from "./claude-desktop.js";
import { detectCursor } from "./cursor.js";
import { detectVSCode } from "./vscode.js";
import { detectWindsurf } from "./windsurf.js";

export async function detectClients() {
  return [
    detectClaudeDesktop(),
    await detectCursor(),
    await detectVSCode(),
    detectWindsurf()
  ];
}