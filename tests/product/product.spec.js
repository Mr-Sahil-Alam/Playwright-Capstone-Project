const { test, expect } = require('@playwright/test');

const ProductPage = require('../../pages/product.page');

const productData = require('../../data/productData');

productData.forEach((data) => {

    test(`Search Product ${data.product}`, async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.goto();

        await productPage.openProductsPage();

        await productPage.searchProduct(
            data.product
        );

        await expect(
            productPage.productTitles.first()
        ).toContainText(
            data.product
        );

    });

});