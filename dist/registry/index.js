import notion from "./notion.js";
const servers = [
    notion
];
export function getServer(id) {
    return servers.find(server => server.id.toLowerCase() === id.toLowerCase());
}
export function listServers() {
    return servers;
}
//# sourceMappingURL=index.js.map