const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Search Invalid Product', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.searchProduct('InvalidProduct123');

    await expect(
        productPage.productTitles
    ).toHaveCount(0);

});