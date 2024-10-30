import AddToCart from "../pages/AddToCart";
import ProductCheckout from "../pages/ProductCheckout";
import LoginPage from "../pages/LoginPage";

describe("Proceed to checkout",()=>{
    const productCheckout = new ProductCheckout();
    const loginPage = new LoginPage();
    const addtoCart = new AddToCart();

    beforeEach(()=>{
        loginPage.userLogin("standard_user","secret_sauce");
    })

    it('Proceed to checkout for blank UserInfo', () => {
        addtoCart.userInDashboard();
        addtoCart.viewProduct();
        addtoCart.addtoCart();
        addtoCart.assertionText();
        productCheckout.goingToCheckoutPage();
        productCheckout.blankUserInfo("","","");
        productCheckout.assertionError();
      });

      it('Proceed to checkout for valid UserInfo', () => {
        addtoCart.userInDashboard();
        addtoCart.viewProduct();
        addtoCart.addtoCart();
        addtoCart.assertionText();
        productCheckout.goingToCheckoutPage();
        productCheckout.validUserInfo("Abir","Hossen","12345")
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
})