# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product/productHeading.spec.js >> Verify All Products Heading
- Location: tests/product/productHeading.spec.js:5:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByText('All Products')
Expected substring: "All Products"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for getByText('All Products')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const ProductPage = require('../../pages/product.page');
  4  | 
  5  | test('Verify All Products Heading', async ({ page }) => {
  6  | 
  7  |     const productPage = new ProductPage(page);
  8  | 
  9  |     await productPage.goto();
  10 | 
  11 |     await productPage.openProductsPage();
  12 | 
  13 |     await expect(
  14 |         productPage.allProductsHeading
> 15 |     ).toContainText('All Products');
     |       ^ Error: expect(locator).toContainText(expected) failed
  16 | 
  17 | });
```