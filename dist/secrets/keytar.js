import keytar from "keytar";
export class KeytarStore {
    async set(service, account, secret) {
        try {
            await keytar.setPassword(service, account, secret);
        }
        catch {
            throw new Error("Unable to store credentials securely.");
        }
    }
    async get(service, account) {
        try {
            return await keytar.getPassword(service, account);
        }
        catch {
            return null;
        }
    }
    async delete(service, account) {
        try {
            return await keytar.deletePassword(service, account);
        }
        catch {
            return false;
        }
    }
}
//# sourceMappingURL=keytar.js.map