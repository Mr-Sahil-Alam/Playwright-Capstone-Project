# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\searchAndCart.spec.js >> Search Product And Add To Cart
- Location: tests\cart\searchAndCart.spec.js:5:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Continue Shopping' }) to be visible

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
      - generic:
        - insertion:
          - generic:
            - iframe
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
          - generic [ref=e109]:
            - heading "Rs. 500" [level=2] [ref=e110]
            - paragraph [ref=e111]: Blue Top
            - generic [ref=e112] [cursor=pointer]:
              - generic [ref=e113]: 
              - text: Add to cart
        - list [ref=e115]:
          - listitem [ref=e116]:
            - link " View Product" [ref=e117] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e118]: 
              - text: View Product
  - contentinfo [ref=e119]:
    - generic [ref=e124]:
      - heading "Subscription" [level=2] [ref=e125]
      - generic [ref=e126]:
        - textbox "Your email address" [ref=e127]
        - button "" [ref=e128] [cursor=pointer]:
          - generic [ref=e129]: 
        - paragraph [ref=e130]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e134]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
```

# Test source

```ts
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
  154 |         await this.viewProductBtn.waitFor({
  155 |             state: 'visible',
  156 |             timeout: 10000
  157 |         });
  158 | 
  159 |         await this.viewProductBtn.scrollIntoViewIfNeeded();
  160 | 
  161 |         await this.viewProductBtn.click({
  162 |             force: true
  163 |         });
  164 | 
  165 |         await this.page.waitForLoadState(
  166 |             'domcontentloaded'
  167 |         );
  168 | 
  169 |         await this.page.waitForURL(
  170 |             /product_details/,
  171 |             {
  172 |                 timeout: 15000
  173 |             }
  174 |         );
  175 |     }
  176 | 
  177 |     async addFirstProductToCart() {
  178 | 
  179 |         await this.addToCartBtn.waitFor({
  180 |             state: 'visible',
  181 |             timeout: 10000
  182 |         });
  183 | 
  184 |         await this.addToCartBtn.scrollIntoViewIfNeeded();
  185 | 
  186 |         await this.addToCartBtn.click({
  187 |             force: true
  188 |         });
  189 | 
> 190 |         await this.continueShoppingBtn.waitFor({
      |                                        ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  191 |             state: 'visible',
  192 |             timeout: 10000
  193 |         });
  194 |     }
  195 | 
  196 |     async addSecondProductToCart() {
  197 | 
  198 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  199 | 
  200 |         await this.secondAddToCartBtn.click();
  201 |     }
  202 | 
  203 |     async continueShopping() {
  204 | 
  205 |         await this.continueShoppingBtn.waitFor({
  206 |             state: 'visible',
  207 |             timeout: 10000
  208 |         });
  209 | 
  210 |         await this.continueShoppingBtn.click();
  211 |     }
  212 | 
  213 |     async openCart() {
  214 | 
  215 |         await this.cartBtn.waitFor({
  216 |             state: 'visible'
  217 |         });
  218 | 
  219 |         await this.cartBtn.click({
  220 |             force: true
  221 |         });
  222 | 
  223 |         await this.page.waitForURL(
  224 |             /view_cart/,
  225 |             {
  226 |                 timeout: 15000
  227 |             }
  228 |         );
  229 |     }
  230 | 
  231 |     async removeProductFromCart() {
  232 | 
  233 |         await this.removeCartBtn.click({
  234 |             force: true
  235 |         });
  236 |     }
  237 | 
  238 | }
  239 | 
  240 | module.exports = ProductPage;
```