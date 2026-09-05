import notion from "./notion.js";
import type { MCPServer } from "./types.js";

const servers: MCPServer[] = [
  notion
];

export function getServer(id: string) {
  return servers.find(
    server => server.id.toLowerCase() === id.toLowerCase()
  );
}

export function listServers() {
  return servers;
}