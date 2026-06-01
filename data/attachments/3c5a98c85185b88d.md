# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product\productBrand.spec.js >> Verify Product Brand Visibility
- Location: tests\product\productBrand.spec.js:5:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('a[href*="/product_details/"]').first() to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=e2]
  - paragraph [ref=e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
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
  87  |             '.productinfo .add-to-cart'
  88  |         ).first();
  89  |         this.secondAddToCartBtn = page.locator(
  90  |             '.features_items .product-image-wrapper'
  91  |         ).nth(1).locator('.add-to-cart').first();
  92  | 
  93  |         this.continueShoppingBtn = page.getByRole(
  94  |             'button',
  95  |             { name: 'Continue Shopping' }
  96  |         );
  97  | 
  98  |         this.cartBtn = page.locator(
  99  |             'a[href="/view_cart"]'
  100 |         ).first();
  101 | 
  102 |         this.cartProduct = page.locator(
  103 |             '.cart_description h4 a'
  104 |         );
  105 | 
  106 |         this.removeCartBtn = page.locator(
  107 |             '.cart_quantity_delete'
  108 |         );
  109 | 
  110 |         this.cartQuantity = page.locator(
  111 |             '.cart_quantity'
  112 |         );
  113 |     }
  114 | 
  115 |     async goto() {
  116 | 
  117 |         await this.page.goto(
  118 |             'https://automationexercise.com/',
  119 |             {
  120 |                 waitUntil: 'domcontentloaded',
  121 |                 timeout: 60000
  122 |             }
  123 |         );
  124 |     }
  125 | 
  126 |     async openProductsPage() {
  127 | 
  128 |         await this.productsBtn.waitFor({
  129 |             state: 'visible'
  130 |         });
  131 | 
  132 |         await this.productsBtn.click({
  133 |             force: true
  134 |         });
  135 |     }
  136 | 
  137 |     async searchProduct(productName) {
  138 | 
  139 |         await this.searchInput.waitFor({
  140 |             state: 'visible',
  141 |             timeout: 10000
  142 |         });
  143 | 
  144 |         await this.searchInput.fill(productName);
  145 | 
  146 |         await this.searchBtn.click({
  147 |             force: true
  148 |         });
  149 |     }
  150 | 
  151 |     async openFirstProduct() {
  152 | 
> 153 |         await this.viewProductBtn.waitFor({
      |                                   ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  154 |             state: 'visible'
  155 |         });
  156 | 
  157 |         await this.viewProductBtn.click({
  158 |             force: true
  159 |         });
  160 |     }
  161 |     async addFirstProductToCart() {
  162 | 
  163 |         await this.addToCartBtn.waitFor({
  164 |             state: 'visible'
  165 |         });
  166 | 
  167 |         await this.addToCartBtn.click();
  168 |     }
  169 |     async addSecondProductToCart() {
  170 | 
  171 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  172 | 
  173 |         await this.secondAddToCartBtn.click();
  174 |     }
  175 | 
  176 |     async continueShopping() {
  177 | 
  178 |         await this.continueShoppingBtn.waitFor({
  179 |             state: 'visible',
  180 |             timeout: 10000
  181 |         });
  182 | 
  183 |         await this.continueShoppingBtn.click();
  184 |     }
  185 | 
  186 |     async openCart() {
  187 | 
  188 |         await this.cartBtn.waitFor({
  189 |             state: 'visible'
  190 |         });
  191 | 
  192 |         await this.cartBtn.click({
  193 |             force: true
  194 |         });
  195 | 
  196 |         await this.page.waitForURL(
  197 |             /view_cart/,
  198 |             {
  199 |                 timeout: 15000
  200 |             }
  201 |         );
  202 |     }
  203 | 
  204 |     async removeProductFromCart() {
  205 | 
  206 |         await this.removeCartBtn.click({
  207 |             force: true
  208 |         });
  209 |     }
  210 | 
  211 | }
  212 | 
  213 | module.exports = ProductPage;
```