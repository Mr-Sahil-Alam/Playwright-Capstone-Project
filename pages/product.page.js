class ProductPage {
    async openFirstProduct() {

    await this.viewProductBtn.click({
        force: true
    });
}
    constructor(page) {

        this.page = page;

        this.viewProductBtn = page.locator(
        'a[href*="/product_details/"]'
        ).first();

    this.productDetailName = page.locator(
         '.product-information h2'
            );

        this.productsBtn = page.getByRole(
            'link',
            { name: 'Products' }
        );

        this.searchInput = page.locator(
            '#search_product'
        );

        this.searchBtn = page.locator(
            '#submit_search'
        );

        this.productTitles = page.locator(
            '.productinfo p'
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

        await this.searchInput.fill(productName);

        await this.searchBtn.click({
            force: true
        });
    }

}

module.exports = ProductPage;