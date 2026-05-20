const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Product Search Results', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.searchProduct('Blue Top');

    await expect(
        productPage.productTitles.first()
    ).toContainText('Blue Top');

});
