const fs = require('fs').promises; // Use promises version of fs

class Utils {
    constructor() {
        this.username = "";
        this.password = "";
    }

    // Method to set credentials from a JSON file at the given position
    getAdminCreds(pos) {
        cy.fixture('login.json').then((jsonArray) => {
            if (pos >= jsonArray.length) {
                throw new Error("Position out of range for login.json");
            }

            const jsonObject = jsonArray[pos];
            this.username = jsonObject.username;
            this.password = jsonObject.password;

            // Log the retrieved values for debugging
            console.log("Retrieved Username:", this.username);
            console.log("Retrieved Password:", this.password);
        });
    }

    // Getter methods for username and password
    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    // Method to save user data via Cypress task
    saveUserData(userData) {
        // Call the custom Cypress task to save data
        return cy.task('saveUserData', userData);
    }
}

export default Utils