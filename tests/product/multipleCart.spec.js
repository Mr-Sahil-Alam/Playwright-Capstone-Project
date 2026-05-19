const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Add Multiple Products To Cart', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await productPage.addSecondProductToCart();

    await productPage.continueShopping();

    await productPage.openCart();

    await expect(
        productPage.cartProduct
    ).toHaveCount(2);

});