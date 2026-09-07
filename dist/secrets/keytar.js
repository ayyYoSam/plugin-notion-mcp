export class KeytarStore {
    async keytar() {
        return await import("keytar");
    }
    async set(service, account, secret) {
        try {
            const keytar = await this.keytar();
            await keytar.default.setPassword(service, account, secret);
        }
        catch {
            throw new Error("Unable to store credentials securely.");
        }
    }
    async get(service, account) {
        try {
            const keytar = await this.keytar();
            return await keytar.default.getPassword(service, account);
        }
        catch {
            return null;
        }
    }
    async delete(service, account) {
        try {
            const keytar = await this.keytar();
            return await keytar.default.deletePassword(service, account);
        }
        catch {
            return false;
        }
    }
}
//# sourceMappingURL=keytar.js.map