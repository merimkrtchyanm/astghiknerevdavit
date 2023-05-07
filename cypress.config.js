const { defineConfig } = require("cypress");
require('dotenv').config()
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://www.uitestingplayground.com/visibility',
    env: {
    globalUrl:process.env.GLOBAL_URL
    }
  },
});
