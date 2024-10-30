import AddToCart from "../pages/AddToCart";
import LoginPage from "../pages/LoginPage"

describe("Adding product to AddToCart",()=>{
    const loginPage = new LoginPage();
    const addtoCart = new AddToCart();

    beforeEach(()=>{
        loginPage.userLogin("standard_user","secret_sauce");
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