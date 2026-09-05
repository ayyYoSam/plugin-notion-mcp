import { readJson, writeJson } from "./json.js";

export async function configureCursor(
  configPath: string,
  apiKey: string
) {
  const config = await readJson(configPath);

  config.mcpServers ??= {};

  config.mcpServers.notion = {
    command: "npx",
    args: [
      "-y",
      "@notionhq/notion-mcp-server"
    ],
    env: {
      NOTION_API_KEY: apiKey
    }
  };

  await writeJson(configPath, config);
}