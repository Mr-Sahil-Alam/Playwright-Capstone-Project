const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Product Price Visibility', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.openFirstProduct();

    await expect(
        productPage.productPrice
    ).toBeVisible();

});