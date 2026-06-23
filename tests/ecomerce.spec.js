const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const AddToCart = require("../pages/AddToCart");
const data = require("../utils/testData");
const FilterForProducts = require("../pages/FilterForProduct");

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigate();
  await login.login(data.username, data.password);
});



test("Verify user can add and remove product from cart", async ({ page }) => {
  const addtocart = new AddToCart(page);

  await addtocart.addtocart();
  await expect(addtocart.removeBtn).toBeVisible();

  await addtocart.cartremove();
  await expect(addtocart.product).toBeVisible();
});


test("Verify user can filter product successfully", async ({ page }) => {
  const sortDropdown = new FilterForProducts(page);

  await sortDropdown.selectName();


});
