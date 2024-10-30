const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,// Set to true to enable video recording
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter', //Report Generate

  e2e: {
    waitForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      config.specPattern = [
        'cypress/e2e/LoginTest.cy.js',
        'cypress/e2e/AddToCart.cy.js',
          'cypress/e2e/ProductCheckout.cy.js',
        ]
        return config;
    },
  },
});
