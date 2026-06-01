# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shipping\shippingFooterVisible.spec.js >> Verify Footer Visible On Cart Page
- Location: tests\shipping\shippingFooterVisible.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/view_cart
Call log:
  - navigating to "https://automationexercise.com/view_cart", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Footer Visible On Cart Page', async ({ page }) => {
  4  | 
> 5  |     await page.goto(
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/view_cart
  6  |         'https://automationexercise.com/view_cart'
  7  |     );
  8  | 
  9  |     await expect(
  10 |         page.locator('footer')
  11 |     ).toBeVisible();
  12 | 
  13 | });
```