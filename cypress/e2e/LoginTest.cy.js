import LoginPage from "../pages/LoginPage"

describe("Testing Login Functionality",()=>{
    const loginPage = new LoginPage();
    beforeEach(()=>{
        cy.viewport(1920,1080)
    })
    
    it("Testing with invalid creadential",()=>{
        loginPage.userLogin("standarduser","secret_sauce");
        loginPage.invalidAssertion();
    
    })
    
    it("Testing with valid creadential",()=>{
        loginPage.userLogin("standard_user","secret_sauce");
    
    })

})