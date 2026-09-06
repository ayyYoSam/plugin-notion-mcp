import { describe, expect, it } from "vitest";

import { validateNotionKey } from "../src/utils/validate.js";

describe("validateNotionKey", () => {
  it("accepts valid Notion keys", () => {
    expect(
      validateNotionKey("secret_test123456")
    ).toBe("secret_test123456");
  });

  it("rejects invalid keys", () => {
    expect(() => validateNotionKey("abc123")).toThrow(
      "Invalid NOTION_API_KEY. Expected a key starting with 'secret_'."
    );
  });

  it("rejects empty values", () => {
    expect(() => validateNotionKey("")).toThrow();
  });
});