import { describe, expect, it } from "vitest";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { removeServer } from "../src/uninstall/config.js";

describe("removeServer", () => {
  it("removes only the Notion MCP", async () => {
    const dir = join(tmpdir(), "plugin-notion-mcp-uninstall");
    await mkdir(dir, { recursive: true });

    const configPath = join(dir, "mcp.json");

    await writeFile(
      configPath,
      JSON.stringify({
        mcpServers: {
          github: {
            command: "github"
          },
          notion: {
            command: "npx"
          }
        }
      })
    );

    const removed = await removeServer(configPath, "notion");

    expect(removed).toBe(true);

    const result = JSON.parse(
      await readFile(configPath, "utf8")
    );

    expect(result.mcpServers.github).toBeDefined();
    expect(result.mcpServers.notion).toBeUndefined();
  });

  it("returns false when the server does not exist", async () => {
    const dir = join(tmpdir(), "plugin-notion-mcp-uninstall-missing");
    await mkdir(dir, { recursive: true });

    const configPath = join(dir, "mcp.json");

    await writeFile(
      configPath,
      JSON.stringify({
        mcpServers: {
          github: {}
        }
      })
    );

    const removed = await removeServer(configPath, "notion");

    expect(removed).toBe(false);

    const result = JSON.parse(
      await readFile(configPath, "utf8")
    );

    expect(result.mcpServers.github).toBeDefined();
  });

  it("creates a backup before removing", async () => {
    const dir = join(tmpdir(), "plugin-notion-mcp-uninstall-backup");
    await mkdir(dir, { recursive: true });

    const configPath = join(dir, "mcp.json");

    await writeFile(
      configPath,
      JSON.stringify({
        mcpServers: {
          notion: {}
        }
      })
    );

    await removeServer(configPath, "notion");

    const backup = await readFile(
      `${configPath}.bak`,
      "utf8"
    );

    expect(JSON.parse(backup).mcpServers.notion).toBeDefined();
  });
});