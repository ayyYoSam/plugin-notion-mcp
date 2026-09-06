export type SecretProvider = "keytar";
export interface SecretStore {
    set(service: string, account: string, secret: string): Promise<void>;
    get(service: string, account: string): Promise<string | null>;
    delete(service: string, account: string): Promise<boolean>;
}
//# sourceMappingURL=types.d.ts.map