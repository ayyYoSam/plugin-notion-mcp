import { configureClient } from "../config/index.js";
export const configStrategy = {
    async install(ctx) {
        await configureClient(ctx.client, ctx.server, ctx.env);
    },
    async verify(ctx) {
        return ctx.client.hasConfig;
    }
};
//# sourceMappingURL=config.js.map