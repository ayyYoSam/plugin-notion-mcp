import type { ClientDetection } from "./types.js";
export interface CursorConfig {
    mcpServers?: Record<string, unknown>;
    [key: string]: unknown;
}
export declare function getCursorConfigPath(): string;
export declare function getCursorDir(): string;
export declare function detectCursor(): Promise<ClientDetection>;
export declare function readCursorConfig(): CursorConfig;
export declare function backupCursorConfig(): string | null;
export declare function writeCursorConfig(config: CursorConfig): void;
export declare function mergeNotionCursorServer(server: unknown): CursorConfig;
export declare function removeNotionCursorServer(): CursorConfig;
export declare function hasCursorNotionServer(): boolean;
export declare function uninstallCursorNotionServer(): void;
//# sourceMappingURL=cursor.d.ts.map