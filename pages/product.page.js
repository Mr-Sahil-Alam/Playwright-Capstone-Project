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

        this.productPrice = page.locator(
            '.product-information span span'
        );

        this.productAvailability = page.locator(
            '.product-information p'
        ).nth(0);

        this.productCondition = page.locator(
            '.product-information p'
        ).nth(1);

        this.productBrand = page.getByText(
            'Brand:'
        );
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
            '.features_items .product-image-wrapper'
        ).first().locator('.add-to-cart').first();

        this.secondAddToCartBtn = page.locator(
            '.features_items .product-image-wrapper'
        ).nth(1).locator('.add-to-cart').first();

        this.continueShoppingBtn = page.getByRole(
            'button',
            { name: 'Continue Shopping' }
        );

        this.cartBtn = page.locator(
            'a[href="/view_cart"]'
        ).first();

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
                timeout: 60000
            }
        );
    }

    async openProductsPage() {

        await this.productsBtn.waitFor({
            state: 'visible'
        });

        await this.productsBtn.click({
            force: true
        });
    }

    async searchProduct(productName) {

        await this.searchInput.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.searchInput.fill(productName);

        await this.searchBtn.click({
            force: true
        });
    }

    async openFirstProduct() {

        await this.viewProductBtn.click({
            force: true
        });
    }

    async addFirstProductToCart() {

        await this.addToCartBtn.scrollIntoViewIfNeeded();

        await this.addToCartBtn.click({
            force: true
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

        await this.cartBtn.click({
            force: true
        });
    }

    async removeProductFromCart() {

        await this.removeCartBtn.click({
            force: true
        });
    }

}

module.exports = ProductPage;