import { describe, expect, it } from "vitest";

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { configureClient } from "../src/config/configure.js";

const notionServer = {
  id: "notion",
  name: "Notion",
  runtime: "npm" as const,
  package: "@notionhq/notion-mcp-server",
  env: ["NOTION_API_KEY"]
};

const cursorClient = (configPath: string) => ({
  id: "cursor",
  name: "Cursor",
  detected: true,
  method: "config" as const,
  configPath,
  hasConfig: true,
  scope: "global" as const
});

describe("configureClient", () => {
  it("preserves existing MCP servers", async () => {
    const dir = join(tmpdir(), "plugin-notion-mcp-tests");
    await mkdir(dir, { recursive: true });

    const configPath = join(dir, "mcp.json");

    await writeFile(
      configPath,
      JSON.stringify({
        mcpServers: {
          github: {
            command: "github"
          }
        }
      })
    );

    await configureClient(
      cursorClient(configPath),
      notionServer,
      {
        NOTION_API_KEY: "secret_test"
      }
    );

    const result = JSON.parse(
      await readFile(configPath, "utf8")
    );

    expect(result.mcpServers.github).toBeDefined();
    expect(result.mcpServers.notion).toBeDefined();
  });

  it("creates a backup before writing", async () => {
    const dir = join(tmpdir(), "plugin-notion-mcp-tests-backup");
    await mkdir(dir, { recursive: true });

    const configPath = join(dir, "mcp.json");

    await writeFile(
      configPath,
      JSON.stringify({})
    );

    await configureClient(
      cursorClient(configPath),
      notionServer,
      {
        NOTION_API_KEY: "secret_test"
      }
    );

    const backup = await readFile(
      `${configPath}.bak`,
      "utf8"
    );

    expect(backup).toBe("{}");
  });
});