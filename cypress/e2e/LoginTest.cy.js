import LoginPage from "../pages/LoginPage"
import Utils from "../pages/Utils";

describe("Testing Login Functionality",()=>{
    const loginPage = new LoginPage();
    const utils = new Utils();

    beforeEach(()=>{
        cy.viewport(1920,1080)
    })
    
    it("Testing with invalid creadential",()=>{
        utils.getAdminCreds(0); // Get invalid user credentials
        cy.wrap(null).then(() => { // Ensure the Promise resolves before using values
            loginPage.userLogin(utils.getUsername(), utils.getPassword());
            loginPage.invalidAssertion();
        });
    
    })
    
    it("Testing with valid creadential",()=>{
        utils.getAdminCreds(1); // Get valid user credentials
        cy.wrap(null).then(() => {
            loginPage.userLogin(utils.getUsername(), utils.getPassword());
            // Add assertion for successful login if needed
            cy.url().should("include", "/inventory.html"); // Example assertion for successful login
        });
        loginPage.userLogOut()
    })

})