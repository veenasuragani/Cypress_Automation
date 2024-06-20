const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',//add line 1 for reporting
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //add line 2 for reporting
      screenshotOnRunFailure=true;

      //to launch browser in incognito mode
      // on('before:browser:launch', (browser={}, launchOptions)=>{
      //   if(browser.family === 'chromium' && browser.family !== 'electron'){
      //     launchOptions.args.push("--incognito");
      //     return launchOptions
      //   }
      // })

    },
    // viewportWidth:1000,
    //  viewportHeight:535
     
  },
});


require('@applitools/eyes-cypress')(module);
