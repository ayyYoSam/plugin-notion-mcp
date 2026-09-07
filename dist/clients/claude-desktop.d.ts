import type { ClientDetection } from "./types.js";
export interface ClaudeDesktopConfig {
    mcpServers?: Record<string, unknown>;
    [key: string]: unknown;
}
export declare function getClaudeDesktopConfigPath(): string;
export declare function getClaudeDesktopDir(): string;
export declare function detectClaudeDesktop(): ClientDetection;
export declare function readClaudeConfig(): ClaudeDesktopConfig;
export declare function backupClaudeConfig(): string | null;
export declare function writeClaudeConfig(config: ClaudeDesktopConfig): void;
export declare function mergeNotionServer(server: unknown): ClaudeDesktopConfig;
export declare function removeNotionServer(): ClaudeDesktopConfig;
export declare function hasNotionServer(): boolean;
export declare function getNotionServer(): {} | null;
export declare function uninstallNotionServer(): void;
//# sourceMappingURL=claude-desktop.d.ts.map