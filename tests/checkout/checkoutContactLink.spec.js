const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Contact Us Link Visible On Checkout Page', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openCart();

    await expect(
        page.getByRole('link', { name: 'Contact us' })
    ).toBeVisible();

});