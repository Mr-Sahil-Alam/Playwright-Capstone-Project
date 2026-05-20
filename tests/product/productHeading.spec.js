const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify All Products Heading', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await expect(
        productPage.allProductsHeading
    ).toContainText('All Products');

});