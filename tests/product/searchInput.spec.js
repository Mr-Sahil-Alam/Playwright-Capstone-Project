const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Search Input Accepts Text', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.searchInput.fill('Blue Top');

    await expect(
        productPage.searchInput
    ).toHaveValue('Blue Top');

});