# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: profile\profileHomeNavigation.spec.js >> Verify Home Navigation From Login Page
- Location: tests\profile\profileHomeNavigation.spec.js:3:1

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
  3  | test('Verify Home Navigation From Login Page', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com/login');
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/login
  6  | 
  7  |     await page.getByRole(
  8  |         'link',
  9  |         { name: 'Home' }
  10 |     ).first().click();
  11 | 
  12 |     await expect(page).toHaveURL(
  13 |         'https://automationexercise.com/'
  14 |     );
  15 | 
  16 | });
```