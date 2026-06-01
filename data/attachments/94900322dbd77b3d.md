# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\signup.spec.js >> Signup Test with emptyname@gmail.com
- Location: tests\authentication\signup.spec.js:9:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Signup' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('button', { name: 'Signup' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
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
          - text: emptyname@gmail.com
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
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - generic [ref=f23e3]:
        - button [ref=f23e4]:
          - img [ref=f23e5]
        - generic [ref=f23e7]:
          - button "Replay" [ref=f23e15]:
            - img [ref=f23e17] [cursor=pointer]
          - button "Learn more" [ref=f23e24] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const LoginPage = require('../../pages/login.page');
  4  | 
  5  | const signupData = require('../../data/signupData');
  6  | 
  7  | signupData.forEach((data) => {
  8  | 
  9  |     test(`Signup Test with ${data.email}`, async ({ page }) => {
  10 | 
  11 |         const loginPage = new LoginPage(page);
  12 | 
  13 |         await loginPage.goto();
  14 | 
  15 |         await loginPage.openLoginPage();
  16 | 
  17 |         await loginPage.signup(
  18 |             data.name,
  19 |             data.email
  20 |         );
  21 | 
  22 |         if (data.expected === "success") {
  23 | 
  24 |             await expect(page).toHaveURL(
  25 |                 /signup/
  26 |             );
  27 | 
  28 |         } else {
  29 | 
  30 |             await expect(
  31 |                 loginPage.signupBtn
> 32 |             ).toBeVisible();
     |               ^ Error: expect(locator).toBeVisible() failed
  33 | 
  34 |         }
  35 | 
  36 |     });
  37 | 
  38 | });
```