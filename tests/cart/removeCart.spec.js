const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Remove Product From Cart', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await productPage.openCart();

    await productPage.removeProductFromCart();

    await expect(
        productPage.cartProduct
    ).not.toBeVisible();

});