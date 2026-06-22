const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const AddToCart = require("../pages/AddToCart");
const data = require("../utils/testData");

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login(data.username, data.password);
    await page.pause(5000)
});


test("Verify user can add product to cart successfully", async ({ page }) => {
    const cart = new AddToCart(page);

    await cart.product.click();


});