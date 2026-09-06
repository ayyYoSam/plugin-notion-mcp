import type { SecretStore } from "./types.js";
export declare class KeytarStore implements SecretStore {
    set(service: string, account: string, secret: string): Promise<void>;
    get(service: string, account: string): Promise<string | null>;
    delete(service: string, account: string): Promise<boolean>;
}
