const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Navigation Menu Visible On Checkout Page', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openCart();

    await expect(
        page.locator('header')
    ).toBeVisible();

});