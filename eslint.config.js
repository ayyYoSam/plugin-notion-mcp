import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "**/*.d.ts",
      "**/*.js",
      "**/*.js.map",
      "**/*.d.ts.map"
    ]
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.ts", "tests/**/*.ts"],

    languageOptions: {
      globals: globals.node,

      parserOptions: {
        project: "./tsconfig.json"
      }
    },

    rules: {
      "no-console": "off"
    }
  }
);