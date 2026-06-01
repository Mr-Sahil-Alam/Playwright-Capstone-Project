# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: payment\paymentFooterVisible.spec.js >> Verify Footer Visible
- Location: tests\payment\paymentFooterVisible.spec.js:3:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/view_cart", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - link "Website for automation practice":
            - /url: /
            - img "Website for automation practice"
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link " Home" [ref=e11] [cursor=pointer]:
            - /url: /
            - generic [ref=e12]: 
            - text: Home
        - listitem [ref=e13]:
          - link " Products" [ref=e14] [cursor=pointer]:
            - /url: /products
            - generic [ref=e15]: 
            - text: Products
        - listitem [ref=e16]:
          - link " Cart" [ref=e17] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e18]: 
            - text: Cart
        - listitem [ref=e19]:
          - link " Signup / Login" [ref=e20] [cursor=pointer]:
            - /url: /login
            - generic [ref=e21]: 
            - text: Signup / Login
        - listitem [ref=e22]:
          - link " Test Cases" [ref=e23] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e24]: 
            - text: Test Cases
        - listitem [ref=e25]:
          - link " API Testing" [ref=e26] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e27]: 
            - text: API Testing
        - listitem [ref=e28]:
          - link " Video Tutorials" [ref=e29] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e30]: 
            - text: Video Tutorials
        - listitem [ref=e31]:
          - link " Contact us" [ref=e32] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e33]: 
            - text: Contact us
  - generic [ref=e35]:
    - list [ref=e37]:
      - listitem [ref=e38]:
        - link "Home" [ref=e39] [cursor=pointer]:
          - /url: /
      - listitem [ref=e40]: Shopping Cart
    - paragraph [ref=e43]:
      - text: Cart is empty! Click
      - link "here" [ref=e44] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
  - contentinfo [ref=e45]:
    - generic [ref=e50]:
      - heading "Subscription" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Your email address" [ref=e53]
        - button "" [ref=e54] [cursor=pointer]:
          - generic [ref=e55]: 
        - paragraph [ref=e56]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e60]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Footer Visible', async ({ page }) => {
  4  | 
> 5  |     await page.goto(
     |                ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  6  |         'https://automationexercise.com/view_cart'
  7  |     );
  8  | 
  9  |     await expect(
  10 |         page.locator('footer')
  11 |     ).toBeVisible();
  12 | 
  13 | });
```