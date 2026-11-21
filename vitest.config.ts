import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["tests/**/*.test.ts"],
    // The SDK ships TypeScript source, which Node cannot load from node_modules.
    server: { deps: { inline: ["@denote/plugin-sdk"] } },
  },
});
