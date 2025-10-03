import { defineConfig } from "cypress";
import * as dotenv from "dotenv";

// Carrega .env para que process.env.CYPRESS_BASE_URL seja preenchido ao iniciar o Cypress
dotenv.config({ path: ".env" });

export default defineConfig({
  e2e: {
    baseUrl:
      process.env.CYPRESS_BASE_URL || process.env.API_BASE_URL || "http://localhost:4000",
    specPattern: "cypress/e2e/**/*.ts",
    supportFile: "cypress/support/index.ts",
    setupNodeEvents(/*on, config*/) {
      // implement node event listeners here
    },
  },
  video: false,
});
