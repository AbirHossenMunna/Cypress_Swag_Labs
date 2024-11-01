import AddToCart from "../pages/AddToCart";
import LoginPage from "../pages/LoginPage";
import Utils from "../pages/Utils";

describe("Adding product to AddToCart",()=>{
    const loginPage = new LoginPage();
    const addtoCart = new AddToCart();
    const utils = new Utils();

    beforeEach(()=>{
      utils.getAdminCreds(1); // Get valid user credentials
      cy.wrap(null).then(() => {
          loginPage.userLogin(utils.getUsername(), utils.getPassword());
      });
    })
    
    it("Single product add to cart",()=>{
       addtoCart.userInDashboard();
       addtoCart.viewProduct();
       addtoCart.addtoCart();
       addtoCart.assertionText();
    })

    it("Multiple product add to cart",()=>{
        addtoCart.userInDashboard();
        addtoCart.viewProduct();
        addtoCart.multipleAddtocart();
     })
     it("Multiple product add to cart to one remove",()=>{
        addtoCart.userInDashboard();
        addtoCart.viewProduct();
        addtoCart.removeProductToAddtocart();
     })
})