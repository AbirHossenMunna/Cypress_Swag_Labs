class ProductCheckout {
    goingToCheckoutPage() {
        cy.timeout(10000)
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="title"]').should("contain.text", "Checkout: Your Information")
    }

    blankUserInfo() {
        cy.get('[data-test="continue"]').click()
    }
    assertionError() {
        cy.get('[data-test="error"]').should("contain.text", "First Name is required")
    }
    validUserInfo(firstName, lastName, zipCode) {
        cy.get('[data-test="firstName"]').type(firstName)
        cy.get('[data-test="lastName"]',).type(lastName)
        cy.get('[data-test="postalCode"]',).type(zipCode)
    }
    assertionText() {
        cy.get('[data-test="title"]', { timeout: 10000 }).should("contain.text", "Checkout: Overview")
        cy.get('[data-test="total-label"]', { timeout: 10000 }).should("contain.text", "Total: $53.99")
    }
    finishCheckout() {
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should("contain.text", "Thank you for your order!")
    }
    cancel() {
        cy.get('[data-test="cancel"]').click()
        cy.get('[data-test="title"]', { timeout: 1000 }).should("contain.text", "Your Cart")
    }
}

export default ProductCheckout