class AddToCart {
  constructor(page) {
    this.page = page;
    this.product = page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]');
    this.removeBtn = page.locator("#remove-sauce-labs-backpack");
  }

  async addtocart() {
    await this.product.click();
  }

  async cartremove() {
    await this.removeBtn.click();
  }
}


module.exports = AddToCart;