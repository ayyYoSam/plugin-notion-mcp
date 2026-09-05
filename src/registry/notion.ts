import type { MCPServer } from "./types.js";

const notion: MCPServer = {
  id: "notion",

  name: "Notion",

  runtime: "npm",

  package: "@notionhq/notion-mcp-server",

  env: ["NOTION_API_KEY"],

  homepage: "https://github.com/makenotion/notion-mcp-server",

  description: "Official Notion MCP server."
};

export default notion;