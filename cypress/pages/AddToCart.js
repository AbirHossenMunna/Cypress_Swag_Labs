class AddToCart{
    userInDashboard(){
        cy.get('[data-test="title"]',{ timeout: 1000}).should("contain.text","Products")
    }
    viewProduct(){
        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').click()
    }
    addtoCart(){
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
    }
    assertionText(){
        cy.get('[data-test="title"]',{timeout:1000}).should("contain.text","Your Cart")
        cy.get('[data-test="inventory-item-name"]',{timeout:1000}).should("contain.text","Sauce Labs Fleece Jacket")
    }
    multipleAddtocart(){
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').should("contain.text","Sauce Labs Fleece Jacket")
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should("contain.text","Sauce Labs Backpack")
    }
    removeProductToAddtocart(){
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    }

}
export default AddToCart;