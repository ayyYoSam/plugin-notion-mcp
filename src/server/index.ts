import express, {
  type Request,
  type Response
} from "express";

import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { openBrowser } from "./browser.js";

const PORT = 3210;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WEB_DIST = path.resolve(
  __dirname,
  "../../web/dist"
);

export async function startServer() {
  const app = express();

  app.use(express.json());

  app.get(
    "/api/ping",
    (_: Request, res: Response) => {
      res.json({
        ok: true,
        name: "Plugin MCP",
        version: "1.0.0"
      });
    }
  );

  app.use(express.static(WEB_DIST));

    app.get("/{*splat}", (_: Request, res: Response) => {
    res.sendFile(path.join(WEB_DIST, "index.html"));
    });

  const server = createServer(app);

  await new Promise<void>((resolve) => {
    server.listen(PORT, () => resolve());
  });

  console.log();
  console.log("Plugin MCP");
  console.log("────────────────────────────────");
  console.log(`Running at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop.");
  console.log();

  await openBrowser(`http://localhost:${PORT}`);

  return server;
}