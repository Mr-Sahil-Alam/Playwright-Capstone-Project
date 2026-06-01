# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\searchAndCart.spec.js >> Search Product And Add To Cart
- Location: tests\cart\searchAndCart.spec.js:5:1

# Error details

```
Error: locator.click: Element is outside of the viewport
Call log:
  - waiting for locator('.features_items .product-image-wrapper').first().locator('.add-to-cart').first()
    - locator resolved to <a data-product-id="1" class="btn btn-default add-to-cart">…</a>
  - attempting click action
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]: Blue Top
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - generic [ref=e97]:
      - heading "Searched Products" [level=2] [ref=e98]
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - img "ecommerce website products" [ref=e103]
            - heading "Rs. 500" [level=2] [ref=e104]
            - paragraph [ref=e105]: Blue Top
            - generic [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: Add to cart
          - generic [ref=e108]:
            - heading "Rs. 500" [level=2] [ref=e109]
            - paragraph [ref=e110]: Blue Top
            - generic [ref=e111] [cursor=pointer]:
              - generic [ref=e112]: 
              - text: Add to cart
        - list [ref=e114]:
          - listitem [ref=e115]:
            - link " View Product" [ref=e116] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e117]: 
              - text: View Product
  - contentinfo [ref=e118]:
    - generic [ref=e123]:
      - heading "Subscription" [level=2] [ref=e124]
      - generic [ref=e125]:
        - textbox "Your email address" [ref=e126]
        - button "" [ref=e127] [cursor=pointer]:
          - generic [ref=e128]: 
        - paragraph [ref=e129]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e133]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
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
  118 |         await this.page.goto(
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
> 163 |         await this.addToCartBtn.click({
      |                                 ^ Error: locator.click: Element is outside of the viewport
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
  185 |     async openCart() {
  186 | 
  187 |         await this.cartBtn.click({
  188 |             force: true
  189 |         });
  190 |     }
  191 | 
  192 |     async removeProductFromCart() {
  193 | 
  194 |         await this.removeCartBtn.click({
  195 |             force: true
  196 |         });
  197 |     }
  198 | 
  199 | }
  200 | 
  201 | module.exports = ProductPage;
```