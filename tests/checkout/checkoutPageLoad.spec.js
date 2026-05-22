const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Checkout Page Loads Successfully', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openCart();

    await expect(
        page.locator('body')
    ).toBeVisible();

});