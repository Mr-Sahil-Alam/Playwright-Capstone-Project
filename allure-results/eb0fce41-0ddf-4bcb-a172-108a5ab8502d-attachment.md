# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact\contactPageTitle.spec.js >> Verify Contact Page Title
- Location: tests\contact\contactPageTitle.spec.js:3:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Automation Exercise/
Received string:  ""
Timeout: 10000ms

Call log:
  - Expect "toHaveTitle" with timeout 10000ms
    23 × unexpected value ""

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Contact Page Title', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://automationexercise.com/contact_us');
  6  | 
> 7  |     await expect(page).toHaveTitle(
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  8  |         /Automation Exercise/
  9  |     );
  10 | 
  11 | });
```