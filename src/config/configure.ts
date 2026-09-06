import { createBackup } from "./backup.js";
import { readJson, writeJson } from "./json.js";

import type { ClientDetection } from "../clients/types.js";
import type { MCPServer } from "../registry/types.js";

export async function configureClient(
  client: ClientDetection,
  server: MCPServer,
  env: Record<string, string>
) {

    await createBackup(client.configPath);

    const config = await readJson(client.configPath);

    if (!config || typeof config !== "object") {
        throw new Error("Invalid configuration file.");
    }

    config.mcpServers ??= {};

  const command =
    server.command ??
    (server.runtime === "npm" ? "npx" : server.runtime);

  const args =
    server.args ??
    (server.runtime === "npm"
      ? ["-y", server.package]
      : []);

  config.mcpServers[server.id] = {
    command,
    args,
    env
  };

  await writeJson(client.configPath, config);
}