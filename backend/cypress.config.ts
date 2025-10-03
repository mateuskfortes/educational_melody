import { defineConfig } from "cypress";
import * as dotenv from "dotenv";
import registerPlugins from "./cypress/plugins";

// Carrega .env para que process.env.CYPRESS_BASE_URL seja preenchido ao iniciar o Cypress
dotenv.config({ path: ".env" });

export default defineConfig({
  e2e: {
    baseUrl: process.env.SITE_URL || "http://localhost:3000",
    specPattern: "cypress/**/*.spec.ts",
    supportFile: "cypress/support/index.ts",
    setupNodeEvents(on, config) {
      // Register tasks and other node-side hooks from cypress/plugins
      if (typeof registerPlugins === "function") {
        registerPlugins(on, config);
      }
      return config;
    },
  },
  video: false,
});
