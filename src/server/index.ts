import express, { type Request, type Response } from "express";
import open from "open";

const PORT = 3210;

export async function startServer() {
  const app = express();

  app.use(express.json());

  app.get("/api/ping", (_: Request, res: Response) => {
    res.json({
      ok: true,
      name: "Plugin MCP"
    });
  });

  app.listen(PORT, async () => {
    console.log();
    console.log("Plugin MCP");
    console.log("────────────────────────────────");
    console.log(`Running at http://localhost:${PORT}`);
    console.log();

    await open(`http://localhost:${PORT}`);
  });
}