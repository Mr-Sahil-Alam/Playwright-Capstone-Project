const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Continue Shopping Button Visibility', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.addFirstProductToCart();

    await expect(
        productPage.continueShoppingBtn
    ).toBeVisible();

});