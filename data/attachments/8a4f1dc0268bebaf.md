# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\cartPageTitle.spec.js >> Verify Cart Page Title
- Location: tests\cart\cartPageTitle.spec.js:5:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /cart/i })
    - locator resolved to <a href="/view_cart">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

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
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=e43]: Shopping Cart
    - paragraph [ref=e46]:
      - text: Cart is empty! Click
      - link "here" [ref=e47] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
  - contentinfo [ref=e48]:
    - generic [ref=e53]:
      - heading "Subscription" [level=2] [ref=e54]
      - generic [ref=e55]:
        - textbox "Your email address" [ref=e56]
        - button "" [ref=e57] [cursor=pointer]:
          - generic [ref=e58]: 
        - paragraph [ref=e59]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e63]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e64]:
    - iframe [ref=e67]
```

# Test source

```ts
  91  | 
  92  |         this.continueShoppingBtn = page.getByRole(
  93  |             'button',
  94  |             { name: 'Continue Shopping' }
  95  |         );
  96  | 
  97  |         this.cartBtn = page.getByRole('link', {
  98  |             name: /cart/i
  99  |         });
  100 | 
  101 |         this.cartProduct = page.locator(
  102 |             '.cart_description h4 a'
  103 |         );
  104 | 
  105 |         this.removeCartBtn = page.locator(
  106 |             '.cart_quantity_delete'
  107 |         );
  108 | 
  109 |         this.cartQuantity = page.locator(
  110 |             '.cart_quantity'
  111 |         );
  112 |     }
  113 | 
  114 |     async goto() {
  115 | 
  116 |         await this.page.goto(
  117 |     'https://automationexercise.com/',
  118 |     {
  119 |         waitUntil: 'domcontentloaded',
  120 |         timeout: 90000
  121 |     }
  122 | );
  123 | 
  124 | await this.page.waitForTimeout(3000);
  125 |     }
  126 | 
  127 |   async openProductsPage() {
  128 | 
  129 |     await this.page.goto(
  130 |         'https://automationexercise.com/products',
  131 |         {
  132 |             waitUntil: 'domcontentloaded',
  133 |             timeout: 60000
  134 |         }
  135 |     );
  136 | }
  137 | 
  138 | 
  139 |     async searchProduct(productName) {
  140 | 
  141 |         await this.searchInput.waitFor({
  142 |             state: 'visible',
  143 |             timeout: 10000
  144 |         });
  145 | 
  146 |         await this.searchInput.fill(productName);
  147 | 
  148 |        await this.searchBtn.click();
  149 |     }
  150 | 
  151 |     async openFirstProduct() {
  152 | 
  153 |         await this.viewProductBtn.click({
  154 |             force: true
  155 |         });
  156 |     }
  157 | async addFirstProductToCart() {
  158 | 
  159 |     await this.addToCartBtn.click({
  160 |         force: true
  161 |     });
  162 | 
  163 |     await this.page.waitForTimeout(2000);
  164 | 
  165 |     await this.continueShoppingBtn.waitFor({
  166 |         state: 'visible',
  167 |         timeout: 15000
  168 |     });
  169 | }
  170 | 
  171 |     async addSecondProductToCart() {
  172 | 
  173 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  174 | 
  175 |         await this.secondAddToCartBtn.click();
  176 |     }
  177 | 
  178 |     async continueShopping() {
  179 | 
  180 |         await this.continueShoppingBtn.waitFor({
  181 |             state: 'visible',
  182 |             timeout: 10000
  183 |         });
  184 | 
  185 |         await this.continueShoppingBtn.click();
  186 |     }
  187 | 
  188 |     async openCart() {
  189 |         await Promise.all([
  190 |             this.page.waitForURL('**/view_cart'),
> 191 |             this.cartBtn.click()
      |                          ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  192 |         ]);
  193 |     }
  194 | 
  195 |     async removeProductFromCart() {
  196 | 
  197 |         await this.removeCartBtn.click({
  198 |             force: true
  199 |         });
  200 |     }
  201 | 
  202 | }
  203 | 
  204 | module.exports = ProductPage;
```