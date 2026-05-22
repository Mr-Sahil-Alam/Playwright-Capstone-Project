const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Verify Cart Persistence After Navigation', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await page.goto(
        'https://automationexercise.com/'
    );

    await productPage.openCart();

    await expect(
        productPage.cartProduct
    ).toBeVisible();

});