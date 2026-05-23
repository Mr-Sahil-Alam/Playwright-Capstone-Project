const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Checkout Button Visibility', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await productPage.openCart();

    await expect(
        productPage.proceedToCheckoutBtn
    ).toBeVisible();

});