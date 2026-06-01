# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: profile\profilePageTitle.spec.js >> Verify Login Page Title
- Location: tests\profile\profilePageTitle.spec.js:3:1

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
  3  | test('Verify Login Page Title', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com/login');
     |                ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://automationexercise.com/login
  6  | 
  7  |     await expect(page).toHaveTitle(
  8  |         /Automation Exercise/
  9  |     );
  10 | 
  11 | });
```