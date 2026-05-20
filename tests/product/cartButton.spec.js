const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Cart Button Visibility', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await expect(
        productPage.cartBtn
    ).toBeVisible();

});