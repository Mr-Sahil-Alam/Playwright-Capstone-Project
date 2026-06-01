# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product\searchResult.spec.js >> Verify Product Search Results
- Location: tests\product\searchResult.spec.js:5:1

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/
Call log:
  - navigating to "https://automationexercise.com/", waiting until "domcontentloaded"

```

# Test source

```ts
  18  |         });
  19  |     }
  20  | 
  21  |     constructor(page) {
  22  | 
  23  |         this.page = page;
  24  | 
  25  |         this.productPrice = page.locator(
  26  |             '.product-information span span'
  27  |         );
  28  | 
  29  |         this.productAvailability = page.locator(
  30  |             '.product-information p'
  31  |         ).nth(0);
  32  | 
  33  |         this.productCondition = page.locator(
  34  |             '.product-information p'
  35  |         ).nth(1);
  36  | 
  37  |         this.productBrand = page.getByText(
  38  |             'Brand:'
  39  |         );
  40  |         this.allProductsHeading = page.getByText(
  41  |             'All Products'
  42  |         );
  43  | 
  44  |         this.proceedToCheckoutBtn = page.getByText(
  45  |             'Proceed To Checkout'
  46  |         );
  47  | 
  48  |         this.checkoutText = page.locator(
  49  |             '#cart_items'
  50  |         );
  51  | 
  52  |         this.registerLoginBtn = page.getByRole(
  53  |             'link',
  54  |             { name: 'Register / Login' }
  55  |         );
  56  | 
  57  |         // Product Buttons
  58  |         this.productsBtn = page.getByRole(
  59  |             'link',
  60  |             { name: 'Products' }
  61  |         );
  62  | 
  63  |         this.viewProductBtn = page.locator(
  64  |             'a[href*="/product_details/"]'
  65  |         ).first();
  66  | 
  67  |         // Search
  68  |         this.searchInput = page.locator(
  69  |             '#search_product'
  70  |         );
  71  | 
  72  |         this.searchBtn = page.locator(
  73  |             '#submit_search'
  74  |         );
  75  | 
  76  |         this.productTitles = page.locator(
  77  |             '.productinfo p'
  78  |         );
  79  | 
  80  |         // Product Details
  81  |         this.productDetailName = page.locator(
  82  |             '.product-information h2'
  83  |         );
  84  | 
  85  |         // Cart
  86  |         this.addToCartBtn = page.locator(
  87  |             '.features_items .product-image-wrapper'
  88  |         ).first().locator('.add-to-cart').first();
  89  | 
  90  |         this.secondAddToCartBtn = page.locator(
  91  |             '.features_items .product-image-wrapper'
  92  |         ).nth(1).locator('.add-to-cart').first();
  93  | 
  94  |         this.continueShoppingBtn = page.getByRole(
  95  |             'button',
  96  |             { name: 'Continue Shopping' }
  97  |         );
  98  | 
  99  |         this.cartBtn = page.locator(
  100 |             'a[href="/view_cart"]'
  101 |         ).first();
  102 | 
  103 |         this.cartProduct = page.locator(
  104 |             '.cart_description h4 a'
  105 |         );
  106 | 
  107 |         this.removeCartBtn = page.locator(
  108 |             '.cart_quantity_delete'
  109 |         );
  110 | 
  111 |         this.cartQuantity = page.locator(
  112 |             '.cart_quantity'
  113 |         );
  114 |     }
  115 | 
  116 |     async goto() {
  117 | 
> 118 |         await this.page.goto(
      |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/
  119 |             'https://automationexercise.com/',
  120 |             {
  121 |                 waitUntil: 'domcontentloaded',
  122 |                 timeout: 60000
  123 |             }
  124 |         );
  125 |     }
  126 | 
  127 |     async openProductsPage() {
  128 | 
  129 |         await this.productsBtn.waitFor({
  130 |             state: 'visible'
  131 |         });
  132 | 
  133 |         await this.productsBtn.click({
  134 |             force: true
  135 |         });
  136 |     }
  137 | 
  138 |     async searchProduct(productName) {
  139 | 
  140 |         await this.searchInput.waitFor({
  141 |             state: 'visible',
  142 |             timeout: 10000
  143 |         });
  144 | 
  145 |         await this.searchInput.fill(productName);
  146 | 
  147 |         await this.searchBtn.click({
  148 |             force: true
  149 |         });
  150 |     }
  151 | 
  152 |     async openFirstProduct() {
  153 | 
  154 |         await this.viewProductBtn.click({
  155 |             force: true
  156 |         });
  157 |     }
  158 | 
  159 |     async addFirstProductToCart() {
  160 | 
  161 |         await this.addToCartBtn.scrollIntoViewIfNeeded();
  162 | 
  163 |         await this.addToCartBtn.click({
  164 |             force: true
  165 |         });
  166 |     }
  167 | 
  168 |     async addSecondProductToCart() {
  169 | 
  170 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  171 | 
  172 |         await this.secondAddToCartBtn.click();
  173 |     }
  174 | 
  175 |     async continueShopping() {
  176 | 
  177 |         await this.continueShoppingBtn.waitFor({
  178 |             state: 'visible',
  179 |             timeout: 10000
  180 |         });
  181 | 
  182 |         await this.continueShoppingBtn.click();
  183 |     }
  184 | 
  185 |    async openCart() {
  186 | 
  187 |     await this.cartBtn.waitFor({
  188 |         state: 'visible'
  189 |     });
  190 | 
  191 |     await this.cartBtn.click({
  192 |         force: true
  193 |     });
  194 | 
  195 |     await this.page.waitForURL(
  196 |         '**/view_cart',
  197 |         {
  198 |             timeout: 15000
  199 |         }
  200 |     );
  201 | }
  202 |     async removeProductFromCart() {
  203 | 
  204 |         await this.removeCartBtn.click({
  205 |             force: true
  206 |         });
  207 |     }
  208 | 
  209 | }
  210 | 
  211 | module.exports = ProductPage;
```