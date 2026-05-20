const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Products Page Navigation', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await expect(page).toHaveURL(
        /products/
    );

});