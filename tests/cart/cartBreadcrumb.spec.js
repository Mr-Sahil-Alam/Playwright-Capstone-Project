const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Cart Breadcrumb Visible', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openCart();

    await expect(
        page.getByText('Shopping Cart')
    ).toBeVisible();

});