export declare function verifyPackage(): Promise<boolean>;
export declare function verifyCredentials(): Promise<boolean>;
export declare function verifyClients(): Promise<{
    valid: boolean;
    id: string;
    name: string;
    detected: boolean;
    method: import("../clients/types.js").ClientMethod;
    configPath: string;
    hasConfig: boolean;
    scope: "global" | "project";
}[]>;
//# sourceMappingURL=checks.d.ts.map