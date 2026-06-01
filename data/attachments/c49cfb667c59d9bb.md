# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shipping\shippingPageTitle.spec.js >> Verify Cart Page Title
- Location: tests\shipping\shippingPageTitle.spec.js:3:1

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
  3  | test('Verify Cart Page Title', async ({ page }) => {
  4  | 
> 5  |     await page.goto(
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/view_cart
  6  |         'https://automationexercise.com/view_cart'
  7  |     );
  8  | 
  9  |     await expect(page).toHaveTitle(
  10 |         /Automation Exercise/
  11 |     );
  12 | 
  13 | });
```