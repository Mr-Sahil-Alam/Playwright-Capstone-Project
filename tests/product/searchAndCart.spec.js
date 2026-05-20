const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

test('Search Product And Add To Cart', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.goto();

    await productPage.openProductsPage();

    await productPage.searchProduct('Blue Top');

    await productPage.addFirstProductToCart();

    await productPage.continueShopping();

    await productPage.openCart();

    await expect(
        productPage.cartProduct
    ).toBeVisible();

});