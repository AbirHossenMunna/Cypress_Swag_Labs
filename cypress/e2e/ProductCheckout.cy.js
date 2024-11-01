import AddToCart from "../pages/AddToCart";
import ProductCheckout from "../pages/ProductCheckout";
import LoginPage from "../pages/LoginPage";
import Utils from "../pages/Utils";
import { faker } from '@faker-js/faker';
const { expect } = require('chai');

describe("Proceed to checkout", () => {
  const productCheckout = new ProductCheckout();
  const loginPage = new LoginPage();
  const addtoCart = new AddToCart();
  const utils = new Utils();

  beforeEach(() => {
    utils.getAdminCreds(1); // Get valid user credentials
    cy.wrap(null).then(() => {
      loginPage.userLogin(utils.getUsername(), utils.getPassword());
      cy.url().should("include", "/inventory.html"); // Example assertion for successful login
    });
  });

  it('Proceed to checkout for blank UserInfo', () => {
    addtoCart.userInDashboard();
    addtoCart.viewProduct();
    addtoCart.addtoCart();
    addtoCart.assertionText();
    productCheckout.goingToCheckoutPage();
    productCheckout.blankUserInfo();
    productCheckout.assertionError();
  });

  it('Proceed to checkout for valid UserInfo', () => {
    addtoCart.userInDashboard();
    addtoCart.viewProduct();
    addtoCart.addtoCart();
    addtoCart.assertionText();
    productCheckout.goingToCheckoutPage();

    // Generate random values for user information
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const zipcode = faker.location.zipCode();

    // Fill in valid user information for checkout
    productCheckout.validUserInfo(firstname, lastname, zipcode);
    
    // Save new user data
    const userData = { firstname, lastname, zipcode };
    cy.task('saveUserData', userData);

    // Read the JSON file and assert user data
    const fileName = 'cypress/fixtures/users.json';
    cy.readFile(fileName).then((jsonArray) => {
      // Ensure the JSON file has data
      expect(jsonArray).to.not.be.empty;

      // Access the last element in the array
      const jsonMap = jsonArray[jsonArray.length - 1];

      // Extract values from the parsed JSON
      const actualFirstName = jsonMap.firstname;
      const actualLastName = jsonMap.lastname;
      const actualZipCode = jsonMap.zipcode;

      // Perform assertions based on expected values
      expect(actualFirstName).to.equal(firstname, "First name doesn't match");
      expect(actualLastName).to.equal(lastname, "Last name doesn't match");
      expect(actualZipCode).to.equal(zipcode, "Zip code doesn't match");
    });

    // Proceed with the checkout
    cy.get('[data-test="continue"]').click();
    productCheckout.assertionText();
    productCheckout.finishCheckout();
  });

  it('Proceed to checkout for cancelled', () => {
    addtoCart.userInDashboard();
    addtoCart.viewProduct();
    addtoCart.addtoCart();
    addtoCart.assertionText();
    productCheckout.goingToCheckoutPage();
    productCheckout.cancel();
  });
});
