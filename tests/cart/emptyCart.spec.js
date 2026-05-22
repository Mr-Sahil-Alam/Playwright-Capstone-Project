const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Cart Is Empty Initially', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openCart();

    await expect(
        productPage.cartProduct
    ).toHaveCount(0);

});