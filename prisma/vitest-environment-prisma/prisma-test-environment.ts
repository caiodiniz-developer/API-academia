import type { Environment } from "vitest/runtime";

export default <Environment>{
  name: "prisma",
  viteEnvironment: "ssr",
  async setup() {
    console.log("Setup");

    return {
      async teardown() {
        console.log("Teardown");
      },
    };
  },
};
