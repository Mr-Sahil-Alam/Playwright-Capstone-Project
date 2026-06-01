# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: profile\profileHomeNavigation.spec.js >> Verify Home Navigation From Login Page
- Location: tests\profile\profileHomeNavigation.spec.js:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://automationexercise.com/"
Received: "https://automationexercise.com/login#google_vignette"
Timeout:  10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    21 × unexpected value "https://automationexercise.com/login#google_vignette"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading [level=2] [ref=e42]: Login to your account
      - generic [ref=e43]:
        - textbox [ref=e44]:
          - /placeholder: Email Address
        - textbox [ref=e45]:
          - /placeholder: Password
        - button [ref=e46] [cursor=pointer]: Login
    - heading [level=2] [ref=e48]: OR
    - generic [ref=e50]:
      - heading [level=2] [ref=e51]: New User Signup!
      - generic [ref=e52]:
        - textbox [ref=e53]:
          - /placeholder: Name
        - textbox [ref=e54]:
          - /placeholder: Email Address
        - button [ref=e55] [cursor=pointer]: Signup
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading [level=2] [ref=e62]: Subscription
      - generic [ref=e63]:
        - textbox [ref=e64]:
          - /placeholder: Your email address
        - button [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Home Navigation From Login Page', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://automationexercise.com/login');
  6  | 
  7  |     await page.getByRole(
  8  |         'link',
  9  |         { name: 'Home' }
  10 |     ).first().click();
  11 | 
> 12 |     await expect(page).toHaveURL(
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  13 |         'https://automationexercise.com/'
  14 |     );
  15 | 
  16 | });
```