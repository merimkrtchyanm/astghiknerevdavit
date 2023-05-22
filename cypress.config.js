const { verifyDownloadTasks } = require('cy-verify-downloads');
const { defineConfig } = require("cypress");
const fs = require("fs");
const { removeDirectory } = require('cypress-delete-downloads-folder');
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks);
      on("task", {
        isFileExist( filePath ) {
         return new Promise((resolve, reject) => {
           try {
             let isExists = fs.existsSync(filePath)
             resolve(isExists);
           } catch (e) {
             reject(e);
           }
         });
       }
     });
   //to remove directory
   on('task', { removeDirectory });
   }
    },
    env: {
      globalUrl:process.env.GLOBAL_URL

    },
  })