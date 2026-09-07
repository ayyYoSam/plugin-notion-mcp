import fs from "node:fs";
import path from "node:path";
import { execa } from "execa";
const CURSOR_DIR = ".cursor";
const CONFIG_FILE = "mcp.json";
export function getCursorConfigPath() {
    return path.join(process.env.USERPROFILE ?? "", CURSOR_DIR, CONFIG_FILE);
}
export function getCursorDir() {
    return path.dirname(getCursorConfigPath());
}
export async function detectCursor() {
    const configPath = getCursorConfigPath();
    let detected;
    try {
        await execa("cursor", ["--version"]);
        detected = true;
    }
    catch {
        detected = fs.existsSync(getCursorDir());
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
export function readCursorConfig() {
    const configPath = getCursorConfigPath();
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
        throw new Error("Invalid Cursor configuration.");
    }
}
export function backupCursorConfig() {
    const configPath = getCursorConfigPath();
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
export function writeCursorConfig(config) {
    const configPath = getCursorConfigPath();
    fs.mkdirSync(getCursorDir(), { recursive: true });
    backupCursorConfig();
    fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
export function mergeNotionCursorServer(server) {
    const config = readCursorConfig();
    config.mcpServers ??= {};
    config.mcpServers.notion = server;
    return config;
}
export function removeNotionCursorServer() {
    const config = readCursorConfig();
    if (config.mcpServers) {
        delete config.mcpServers.notion;
    }
    return config;
}
export function hasCursorNotionServer() {
    return Boolean(readCursorConfig().mcpServers?.notion);
}
export function uninstallCursorNotionServer() {
    writeCursorConfig(removeNotionCursorServer());
}
//# sourceMappingURL=cursor.js.map