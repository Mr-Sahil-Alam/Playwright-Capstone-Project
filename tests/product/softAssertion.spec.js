const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Soft Assertions Demo', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await expect.soft(
        productPage.productsBtn
    ).toBeVisible();

    await expect.soft(
        productPage.searchInput
    ).toBeVisible();

    await expect.soft(
        productPage.searchBtn
    ).toBeVisible();

});