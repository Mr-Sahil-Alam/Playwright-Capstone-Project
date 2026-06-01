# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\login.spec.js >> Login Test with wronguser@gmail.com
- Location: tests\authentication\login.spec.js:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Your email or password is incorrect!')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('text=Your email or password is incorrect!')
    - waiting for navigation to finish...

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address": wronguser@gmail.com
- textbox "Password": wrong123
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const LoginPage = require('../../pages/login.page');
  4  | 
  5  | const loginData = require('../../data/loginData');
  6  | 
  7  | loginData.forEach((data) => {
  8  | 
  9  |     test(`Login Test with ${data.email}`, async ({ page }) => {
  10 | 
  11 |         const loginPage = new LoginPage(page);
  12 | 
  13 |         await loginPage.goto();
  14 | 
  15 |         await loginPage.openLoginPage();
  16 | 
  17 |         await loginPage.login(
  18 |             data.email,
  19 |             data.password
  20 |         );
  21 | 
  22 |         if (data.expected === "success") {
  23 | 
  24 |             await expect(page).toHaveURL(
  25 |                 /automationexercise/
  26 |             );
  27 | 
  28 |         } else {
  29 | 
  30 |     if (data.email === "" || data.password === "") {
  31 | 
  32 |         await expect(
  33 |             loginPage.loginBtn
  34 |         ).toBeVisible();
  35 | 
  36 |     } else {
  37 | 
  38 |         await expect(
  39 |             loginPage.errorMessage
> 40 |         ).toBeVisible();
     |           ^ Error: expect(locator).toBeVisible() failed
  41 | 
  42 |     }
  43 | 
  44 | }
  45 | 
  46 |     });
  47 | 
  48 | });
```