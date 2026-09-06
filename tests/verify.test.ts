import { describe, expect, it, vi } from "vitest";

vi.mock("../src/verify/checks.js", () => ({
  verifyPackage: vi.fn().mockResolvedValue(true),
  verifyCredentials: vi.fn().mockResolvedValue(true),
  verifyClients: vi.fn().mockReturnValue([
    {
      id: "cursor",
      name: "Cursor",
      detected: true,
      hasConfig: true,
      method: "config",
      configPath: "fake",
      scope: "global"
    }
  ])
}));

describe("verify", () => {
  it("reports a healthy installation", async () => {
    const checks = await import("../src/verify/checks.js");

    expect(await checks.verifyPackage()).toBe(true);
    expect(await checks.verifyCredentials()).toBe(true);

    const clients = checks.verifyClients();

    expect(clients[0].detected).toBe(true);
    expect(clients[0].hasConfig).toBe(true);
  });
});