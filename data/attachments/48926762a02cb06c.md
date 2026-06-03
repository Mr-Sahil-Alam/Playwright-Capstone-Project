# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact\contactSubmitButton.spec.js >> Verify Submit Button Visible
- Location: tests\contact\contactSubmitButton.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://automationexercise.com/contact_us
Call log:
  - navigating to "https://automationexercise.com/contact_us", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Submit Button Visible', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com/contact_us');
     |                ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://automationexercise.com/contact_us
  6  | 
  7  |     await expect(
  8  |         page.getByRole('button', { name: 'Submit' })
  9  |     ).toBeVisible();
  10 | 
  11 | });
```