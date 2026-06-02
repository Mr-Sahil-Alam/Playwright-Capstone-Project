# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: profile\profileLoginNavigation.spec.js >> Verify Login Navigation From Navbar
- Location: tests\profile\profileLoginNavigation.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Login Navigation From Navbar', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com');
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/
  6  | 
  7  |     await page.getByRole(
  8  |         'link',
  9  |         { name: 'Signup / Login' }
  10 |     ).click();
  11 | 
  12 |     await expect(page).toHaveURL(
  13 |         /login/
  14 |     );
  15 | 
  16 | });
```