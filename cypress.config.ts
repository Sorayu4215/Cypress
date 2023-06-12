import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    supportFile: 'tests/cypress/support/*.page.{js,jsx,ts,tsx}',
    specPattern: 'tests/cypress/integration/*.spec.{js,jsx,ts,tsx}'
  },  
  video:false,
  videosFolder:"tests/cypress/video",
  screenshotsFolder:"tests/cypress/screenshots"  
  
});
