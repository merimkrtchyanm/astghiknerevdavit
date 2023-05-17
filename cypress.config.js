const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
<<<<<<< HEAD
  chromeWebSecurity: false,
=======
>>>>>>> 6964d326a10a16b6036fb80dc948bb7a43fcae4c
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
<<<<<<< HEAD

      });
/// add dotenv file here please 
=======
      });

>>>>>>> 6964d326a10a16b6036fb80dc948bb7a43fcae4c
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 6964d326a10a16b6036fb80dc948bb7a43fcae4c
});