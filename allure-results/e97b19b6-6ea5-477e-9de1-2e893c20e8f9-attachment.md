# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\searchAndCart.spec.js >> Search Product And Add To Cart
- Location: tests\cart\searchAndCart.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.cart_description h4 a')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.cart_description h4 a')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- img "Website for practice"
- textbox "Search Product": Blue Top
- button ""
- heading "Category" [level=2]
- heading " Women" [level=4]:
  - link " Women":
    - /url: "#Women"
- heading " Men" [level=4]:
  - link " Men":
    - /url: "#Men"
- heading " Kids" [level=4]:
  - link " Kids":
    - /url: "#Kids"
- heading "Brands" [level=2]
- list:
  - listitem:
    - link "(6) Polo":
      - /url: /brand_products/Polo
  - listitem:
    - link "(5) H&M":
      - /url: /brand_products/H&M
  - listitem:
    - link "(5) Madame":
      - /url: /brand_products/Madame
  - listitem:
    - link "(3) Mast & Harbour":
      - /url: /brand_products/Mast & Harbour
  - listitem:
    - link "(4) Babyhug":
      - /url: /brand_products/Babyhug
  - listitem:
    - link "(3) Allen Solly Junior":
      - /url: /brand_products/Allen Solly Junior
  - listitem:
    - link "(3) Kookie Kids":
      - /url: /brand_products/Kookie Kids
  - listitem:
    - link "(5) Biba":
      - /url: /brand_products/Biba
- heading "Searched Products" [level=2]
- img "ecommerce website products"
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/1
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
- insertion:
  - iframe
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const ProductPage = require('../../pages/product.page');
  4  | 
  5  | test('Search Product And Add To Cart', async ({ page }) => {
  6  | 
  7  |     const productPage = new ProductPage(page);
  8  | 
  9  |     await productPage.goto();
  10 | 
  11 |     await productPage.openProductsPage();
  12 | 
  13 |     await productPage.searchProduct('Blue Top');
  14 | 
  15 |     await productPage.addFirstProductToCart();
  16 | 
  17 |     await productPage.continueShopping();
  18 | 
  19 |     await productPage.openCart();
  20 | 
  21 |     await expect(
  22 |         productPage.cartProduct
> 23 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  24 | 
  25 | });
```