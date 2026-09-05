import { detectClaudeDesktop } from "./claude-desktop.js";
import { detectCursor } from "./cursor.js";
import { detectVSCode } from "./vscode.js";

export function detectClients() {
  return [
    detectClaudeDesktop(),
    detectCursor(),
    detectVSCode()
  ];
}