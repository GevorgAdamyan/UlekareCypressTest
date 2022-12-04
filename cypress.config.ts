
import {defineConfig} from 'cypress'

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://app.ulekare.cz/login",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
