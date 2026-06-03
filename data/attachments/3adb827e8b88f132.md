# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact\contactSubmitButton.spec.js >> Verify Submit Button Visible
- Location: tests\contact\contactSubmitButton.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Submit' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('button', { name: 'Submit' })

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Submit Button Visible', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://automationexercise.com/contact_us');
  6  | 
  7  |     await expect(
  8  |         page.getByRole('button', { name: 'Submit' })
> 9  |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  10 | 
  11 | });
```