import type { SecretStore } from "./types.js";

export class KeytarStore implements SecretStore {
  private async keytar() {
    return await import("keytar");
  }

  async set(service: string, account: string, secret: string) {
    try {
      const keytar = await this.keytar();
      await keytar.default.setPassword(service, account, secret);
    } catch {
      throw new Error("Unable to store credentials securely.");
    }
  }

  async get(service: string, account: string) {
    try {
      const keytar = await this.keytar();
      return await keytar.default.getPassword(service, account);
    } catch {
      return null;
    }
  }

  async delete(service: string, account: string) {
    try {
      const keytar = await this.keytar();
      return await keytar.default.deletePassword(service, account);
    } catch {
      return false;
    }
  }
}