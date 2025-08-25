import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8002",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.spec.ts",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    experimentalStudio: true,
    trashAssetsBeforeRuns: true,
  },
});