import type { ClientMethod } from "../clients/types.js";

import { configStrategy } from "./config.js";
import { oauthStrategy } from "./oauth.js";

export function getStrategy(method: ClientMethod) {
  switch (method) {
    case "config":
      return configStrategy;

    case "oauth":
      return oauthStrategy;

    case "cli":
      throw new Error("CLI strategy is not implemented yet.");

    default: {
      const exhaustive: never = method;
      throw new Error(`Unsupported strategy: ${exhaustive}`);
    }
  }
}