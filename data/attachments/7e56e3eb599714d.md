# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: payment\paymentFooterVisible.spec.js >> Verify Footer Visible
- Location: tests\payment\paymentFooterVisible.spec.js:3:1

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
  3  | test('Verify Footer Visible', async ({ page }) => {
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