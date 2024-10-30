class LoginPage{
    userLogin(username,password){
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click();
    }
    invalidAssertion(){
        cy.get('[data-test="error"]', { timeout: 10000 }).should("contain.text","Username and password do not match" );
    }
}
export default LoginPage