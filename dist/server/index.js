import express, {} from "express";
import { createServer } from "node:http";
import { openBrowser } from "./browser.js";
const PORT = 3210;
export async function startServer() {
    const app = express();
    app.use(express.json());
    app.get("/api/ping", (_, res) => {
        res.json({
            ok: true,
            name: "Plugin MCP",
            version: "1.0.0"
        });
    });
    const server = createServer(app);
    await new Promise((resolve) => {
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
//# sourceMappingURL=index.js.map