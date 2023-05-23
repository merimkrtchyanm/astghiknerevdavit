const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const dotenv = require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",

    env: {
      globalUrl:process.env.Global_URL,
      windowpageurl:process.env.WindowPage_URL,
      samplepageurl:process.env.SamplePage_URL,
      alertpageurl:process.env.AlertsPage_URL,
      framespageurl:process.env.FramesPage_URL,
      nestedframespageurl:process.env.NestedframesPage_URL,
      modaldialogspageurl:process.env.ModaldialogsPage_URL,
      alertswindowpageurl:process.env.Alertswindowpage_URl
    },
  },
});