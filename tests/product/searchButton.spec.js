const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Search Button Visibility', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await expect(
        productPage.searchBtn
    ).toBeVisible();

});