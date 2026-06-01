const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Proceed To Checkout', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await productPage.openCart();

    console.log(
        'Current URL:',
        await page.url()
    );

    await expect(
        page
    ).toHaveURL(
        /view_cart/
    );

    await page.screenshot({
        path: 'checkout-debug.png',
        fullPage: true
    });

    await expect(
        productPage.proceedToCheckoutBtn
    ).toBeVisible();

});