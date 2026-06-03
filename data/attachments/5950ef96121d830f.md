# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth-generate.spec.js >> Generate Auth State
- Location: tests\auth-generate.spec.js:3:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "load"

```

# Test source

```ts
  1  | const { test } = require('@playwright/test');
  2  | 
  3  | test('Generate Auth State', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com/login');
     |                ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  6  | 
  7  |     await page.locator('[data-qa="login-email"]').fill('sahil.alamcse1@gmail.com');
  8  | 
  9  |     await page.locator('[data-qa="login-password"]').fill('Alam@2002');
  10 | 
  11 |     await page.locator('[data-qa="login-button"]').click();
  12 | 
  13 |     await page.context().storageState({
  14 |         path: 'playwright/.auth/user.json'
  15 |     });
  16 | 
  17 | });
```