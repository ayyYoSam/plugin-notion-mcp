import fs from "node:fs";
import path from "node:path";
import { getAppDataDir } from "../utils/paths.js";
const CLAUDE_DIR = "Claude";
const CONFIG_FILE = "claude_desktop_config.json";
export function getClaudeDesktopConfigPath() {
    return path.join(getAppDataDir(), CLAUDE_DIR, CONFIG_FILE);
}
export function getClaudeDesktopDir() {
    return path.dirname(getClaudeDesktopConfigPath());
}
export function detectClaudeDesktop() {
    const appDir = getClaudeDesktopDir();
    const configPath = getClaudeDesktopConfigPath();
    return {
        id: "claude-desktop",
        name: "Claude Desktop",
        method: "oauth",
        detected: fs.existsSync(appDir),
        configPath,
        hasConfig: fs.existsSync(configPath),
        scope: "global",
    };
}
export function readClaudeConfig() {
    const configPath = getClaudeDesktopConfigPath();
    if (!fs.existsSync(configPath)) {
        return {};
    }
    const content = fs.readFileSync(configPath, "utf8");
    if (!content.trim()) {
        return {};
    }
    try {
        return JSON.parse(content);
    }
    catch {
        throw new Error("Invalid Claude Desktop configuration.");
    }
}
export function backupClaudeConfig() {
    const configPath = getClaudeDesktopConfigPath();
    if (!fs.existsSync(configPath)) {
        return null;
    }
    const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, "-");
    const backupPath = `${configPath}.bak.${timestamp}`;
    fs.copyFileSync(configPath, backupPath);
    return backupPath;
}
export function writeClaudeConfig(config) {
    const configPath = getClaudeDesktopConfigPath();
    fs.mkdirSync(getClaudeDesktopDir(), { recursive: true });
    backupClaudeConfig();
    fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
export function mergeNotionServer(server) {
    const config = readClaudeConfig();
    config.mcpServers ??= {};
    config.mcpServers.notion = server;
    return config;
}
export function removeNotionServer() {
    const config = readClaudeConfig();
    if (config.mcpServers) {
        delete config.mcpServers.notion;
    }
    return config;
}
export function hasNotionServer() {
    const config = readClaudeConfig();
    return Boolean(config.mcpServers?.notion);
}
export function getNotionServer() {
    const config = readClaudeConfig();
    return config.mcpServers?.notion ?? null;
}
export function uninstallNotionServer() {
    const config = removeNotionServer();
    writeClaudeConfig(config);
}
//# sourceMappingURL=claude-desktop.js.map