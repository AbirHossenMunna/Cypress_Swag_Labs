const { defineConfig } = require("cypress");
const fs = require('fs').promises;

module.exports = defineConfig({
  video: true, // Enable video recording
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter', // Generate report

  e2e: {
    waitForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // Define the pattern for spec files
      config.specPattern = [
        'cypress/e2e/LoginTest.cy.js',
        'cypress/e2e/AddToCart.cy.js',
        'cypress/e2e/ProductCheckout.cy.js',
      ];

      // Define custom tasks here
      on('task', {
        async saveUserData(userData) {
          const fileName = 'cypress/fixtures/users.json';
          try {
            let jsonArray = [];

            // Read existing data from the file
            try {
              const data = await fs.readFile(fileName, 'utf8');
              if (data) {
                jsonArray = JSON.parse(data);
              }
            } catch (err) {
              console.error('File read error or file does not exist, creating new:', err);
            }

            // Add new user data to the array
            jsonArray.push(userData);

            // Write updated array back to the file
            await fs.writeFile(fileName, JSON.stringify(jsonArray, null, 3));
            console.log('User data saved successfully');
            return null;  // Task must return something
          } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
          }
        }
      });

      return config;
    },
  },
});