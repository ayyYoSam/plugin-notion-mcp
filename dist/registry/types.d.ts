export type Runtime = "npm" | "uvx" | "docker";
export interface MCPServer {
    id: string;
    name: string;
    runtime: Runtime;
    package: string;
    env: string[];
    homepage?: string;
    description?: string;
}
