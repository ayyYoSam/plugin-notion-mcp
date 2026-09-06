import { configStrategy } from "./config.js";
import { oauthStrategy } from "./oauth.js";
export function getStrategy(method) {
    switch (method) {
        case "config":
            return configStrategy;
        case "oauth":
            return oauthStrategy;
        case "cli":
            throw new Error("CLI strategy is not implemented yet.");
        default: {
            const exhaustive = method;
            throw new Error(`Unsupported strategy: ${exhaustive}`);
        }
    }
}
//# sourceMappingURL=index.js.map