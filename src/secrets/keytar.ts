import keytar from "keytar";
import type { SecretStore } from "./types.js";

export class KeytarStore implements SecretStore {
  async set(service: string, account: string, secret: string) {
    try {
      await keytar.setPassword(service, account, secret);
    } catch {
      throw new Error(
        "Unable to store credentials securely."
      );
    }
  }

  async get(service: string, account: string) {
    try {
      return await keytar.getPassword(service, account);
    } catch {
      return null;
    }
  }

  async delete(service: string, account: string) {
    try {
      return await keytar.deletePassword(service, account);
    } catch {
      return false;
    }
  }
}