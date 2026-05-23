# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout\checkoutPageTitle.spec.js >> Verify Checkout Page Title
- Location: tests\checkout\checkoutPageTitle.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Shopping Cart')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Shopping Cart')

```

```yaml
- banner:
  - heading "Web server is returning an unknown error Error code 520" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
  - text: for more information. 2026-05-23 05:25:41 UTC
- text: You
- heading "Browser" [level=3]
- text: Working
- link:
  - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
- text: Singapore
- heading "Cloudflare" [level=3]:
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
- text: Working automationexercise.com
- heading "Host" [level=3]
- text: Error
- heading "What happened?" [level=2]
- paragraph: There is an unknown connection issue between Cloudflare and the origin web server. As a result, the web page can not be displayed.
- heading "What can I do?" [level=2]
- heading "If you are a visitor of this website:" [level=3]
- paragraph: Please try again in a few minutes.
- heading "If you are the owner of this website:" [level=3]
- paragraph:
  - text: There is an issue between Cloudflare's cache and your origin web server. Cloudflare monitors for these errors and automatically investigates the cause. To help support the investigation, you can pull the corresponding error log from your web server and submit it our support team. Please include the Ray ID (which is at the bottom of this error page).
  - link "Additional troubleshooting resources":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-520/
  - text: .
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: a001a43308e4b486
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const ProductPage = require('../../pages/product.page');
  4  | 
  5  | test('Verify Checkout Page Title', async ({ page }) => {
  6  | 
  7  |     const productPage = new ProductPage(page);
  8  | 
  9  |     await productPage.goto();
  10 | 
  11 |     await productPage.openCart();
  12 | 
  13 |     await expect(
  14 |         page.getByText('Shopping Cart')
> 15 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  16 | 
  17 | });
```