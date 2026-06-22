class AddToCart {

 constructor(page) {
   this.page = page;

   this.product = page.locator("#add-to-cart-sauce-labs-backpack");
   
 }


}

module.exports = AddToCart;