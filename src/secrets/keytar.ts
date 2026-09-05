import keytar from "keytar";
import type { SecretStore } from "./types.js";

export class KeytarStore implements SecretStore {
  async set(service: string, account: string, secret: string) {
    await keytar.setPassword(service, account, secret);
  }

  async get(service: string, account: string) {
    return keytar.getPassword(service, account);
  }

  async delete(service: string, account: string) {
    return keytar.deletePassword(service, account);
  }
}