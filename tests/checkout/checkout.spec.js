const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Proceed To Checkout', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await productPage.openCart();

    await productPage.proceedToCheckout();

    await expect(
        productPage.checkoutText
    ).toBeVisible();

});