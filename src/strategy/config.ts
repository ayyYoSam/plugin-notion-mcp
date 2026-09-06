import { configureClient } from "../config/index.js";
import type { ClientStrategy } from "./types.js";

export const configStrategy: ClientStrategy = {
  async install(ctx) {
    await configureClient(
      ctx.client,
      ctx.server,
      ctx.env
    );
  },

  async verify(ctx) {
    return ctx.client.hasConfig;
  }
};