import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        a: "src/a.ts",
        b: "src/b.ts",
      },
      formats: ["es"],
    },
  },
});
