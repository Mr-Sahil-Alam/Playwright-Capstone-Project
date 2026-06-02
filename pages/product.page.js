class ProductPage {

    async proceedToCheckout() {

        await this.proceedToCheckoutBtn.waitFor({
            state: 'visible'
        });

        await this.proceedToCheckoutBtn.click({
            force: true
        });
    }

    async verifyCheckoutPage() {

        await this.checkoutText.waitFor({
            state: 'visible'
        });
    }

    constructor(page) {

        this.page = page;

        // Block Google Ads and external trackers to prevent WebKit test failures and click interception
        page.route('**/*', (route) => {
            const url = route.request().url();
            if (url.includes('google') || url.includes('ads') || url.includes('doubleclick') || url.includes('analytics') || url.includes('adservice')) {
                route.abort();
            } else {
                route.continue();
            }
        }).catch(() => {});

        this.productPrice = page.locator(
            '.product-information span span'
        );

        this.productAvailability = page.locator(
            '.product-information p'
        ).nth(0);

        this.productCondition = page.locator(
            '.product-information p'
        ).nth(1);

        this.productBrand =
            page.locator('.brands_products');
        this.allProductsHeading = page.getByText(
            'All Products'
        );

        this.proceedToCheckoutBtn = page.getByText(
            'Proceed To Checkout'
        );

        this.checkoutText = page.locator(
            '#cart_items'
        );

        this.registerLoginBtn = page.getByRole(
            'link',
            { name: 'Register / Login' }
        );

        // Product Buttons
        this.productsBtn = page.getByRole(
            'link',
            { name: 'Products' }
        );

        this.viewProductBtn = page.locator(
            'a[href*="/product_details/"]'
        ).first();

        // Search
        this.searchInput = page.locator(
            '#search_product'
        );

        this.searchBtn = page.locator(
            '#submit_search'
        );

        this.productTitles = page.locator(
            '.productinfo p'
        );

        // Product Details
        this.productDetailName = page.locator(
            '.product-information h2'
        );

        // Cart
        this.addToCartBtn = page.locator(
            '.add-to-cart'
        ).first();
        this.secondAddToCartBtn = page.locator(
            '.features_items .product-image-wrapper'
        ).nth(1).locator('.add-to-cart').first();

        this.continueShoppingBtn = page.getByRole(
            'button',
            { name: 'Continue Shopping' }
        );

        this.cartBtn = page.getByRole('link', {
            name: /cart/i
        });

        this.cartProduct = page.locator(
            '.cart_description h4 a'
        );

        this.removeCartBtn = page.locator(
            '.cart_quantity_delete'
        );

        this.cartQuantity = page.locator(
            '.cart_quantity'
        );
    }

    async goto() {

        await this.page.goto(
    'https://automationexercise.com/',
    {
        waitUntil: 'domcontentloaded',
        timeout: 90000
    }
);

await this.page.waitForTimeout(3000);
    }

  async openProductsPage() {

    await this.page.goto(
        'https://automationexercise.com/products',
        {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
    );
}


    async searchProduct(productName) {

        await this.searchInput.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.searchInput.fill(productName);

       await this.searchBtn.click();
    }

    async openFirstProduct() {

        await this.viewProductBtn.click({
            force: true
        });
    }
async addFirstProductToCart() {

    await this.addToCartBtn.click({
        force: true
    });

    await this.page.waitForTimeout(3000);

    if (
        await this.continueShoppingBtn
            .isVisible()
            .catch(() => false)
    ) {
        return;
    }

    await this.page.reload();

    await this.page.waitForTimeout(3000);

    await this.addToCartBtn.click({
        force: true
    });

    await this.continueShoppingBtn.waitFor({
        state: 'visible',
        timeout: 15000
    });
}

    async addSecondProductToCart() {

        await this.secondAddToCartBtn.scrollIntoViewIfNeeded();

        await this.secondAddToCartBtn.click();
    }

    async continueShopping() {

        await this.continueShoppingBtn.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.continueShoppingBtn.click();
    }

    async openCart() {
        await Promise.all([
            this.page.waitForURL('**/view_cart'),
            this.cartBtn.click()
        ]);
    }

    async removeProductFromCart() {

        await this.removeCartBtn.click({
            force: true
        });
    }

}

module.exports = ProductPage;