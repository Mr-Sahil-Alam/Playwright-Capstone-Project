const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Product Visibility In Cart', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await productPage.openCart();

    await expect(
        productPage.cartProduct.first()
    ).toBeVisible();

});