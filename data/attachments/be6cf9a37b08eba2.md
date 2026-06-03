# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: profile\profileContactLink.spec.js >> Verify Contact Us Link Visible
- Location: tests\profile\profileContactLink.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/login
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Contact Us Link Visible', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com/login');
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/login
  6  | 
  7  |     await expect(
  8  |         page.getByRole(
  9  |             'link',
  10 |             { name: 'Contact us' }
  11 |         )
  12 |     ).toBeVisible();
  13 | 
  14 | });
```