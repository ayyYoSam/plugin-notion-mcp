import type { ClientDetection } from "../clients/types.js";
import type { MCPServer } from "../registry/types.js";

export interface InstallContext {
  client: ClientDetection;
  server: MCPServer;
  env: Record<string, string>;
}

export interface ClientStrategy {
  install(ctx: InstallContext): Promise<void>;
  verify(ctx: InstallContext): Promise<boolean>;
}