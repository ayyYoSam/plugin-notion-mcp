import { createBackup } from "./backup.js";
import { readJson, writeJson } from "./json.js";

import type { ClientDetection } from "../clients/types.js";
import type { MCPServer } from "../registry/types.js";

import {
  mergeNotionCursorServer,
  writeCursorConfig
} from "../clients/cursor.js";

export async function configureClient(
  client: ClientDetection,
  server: MCPServer,
  env: Record<string, string>
) {
  const command =
    server.command ??
    (server.runtime === "npm" ? "npx" : server.runtime);

  const args =
    server.args ??
    (server.runtime === "npm"
      ? ["-y", server.package]
      : []);

  if (client.id === "cursor") {
    const config = mergeNotionCursorServer({
      command,
      args,
      env
    });

    writeCursorConfig(config);
    return;
  }

  await createBackup(client.configPath);

  const config = await readJson(client.configPath);

  if (!config || typeof config !== "object") {
    throw new Error("Invalid configuration file.");
  }

  config.mcpServers ??= {};

  config.mcpServers[server.id] = {
    command,
    args,
    env
  };

  await writeJson(client.configPath, config);
}