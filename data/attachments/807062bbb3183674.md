# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\login.spec.js >> Login Test with test@gmail.com
- Location: tests\authentication\login.spec.js:9:5

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Signup / Login' })
    - locator resolved to <a href="/login">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: 4LmU0xgoQGo56NrghTty3nYwULvoxxQ01sbyBcO7oGGYJJbTM2hCBzFxcC7N117Z
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: 4LmU0xgoQGo56NrghTty3nYwULvoxxQ01sbyBcO7oGGYJJbTM2hCBzFxcC7N117Z
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - generic: signup
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f44e1]:
        - generic [ref=f48e1]:
          - generic [ref=f48e2]:
            - generic:
              - img [ref=f48e6] [cursor=pointer]
              - button [ref=f48e8] [cursor=pointer]:
                - img [ref=f48e9]
          - insertion [ref=f48e17]
  - insertion [ref=e77]:
    - iframe [ref=e79]:
      
```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  | 
  7  |         // Signup Locators
  8  |         this.signupNameInput = page.locator(
  9  |             'input[data-qa="signup-name"]'
  10 |         );
  11 | 
  12 |         this.signupEmailInput = page.locator(
  13 |             'input[data-qa="signup-email"]'
  14 |         );
  15 | 
  16 |         this.signupBtn = page.getByRole(
  17 |             'button',
  18 |             { name: 'Signup' }
  19 |         );
  20 | 
  21 |         // Login Locators
  22 |         this.signupLoginBtn = page.getByRole(
  23 |             'link',
  24 |             { name: 'Signup / Login' }
  25 |         );
  26 | 
  27 |         this.emailInput = page.locator(
  28 |             'input[data-qa="login-email"]'
  29 |         );
  30 | 
  31 |         this.passwordInput = page.locator(
  32 |             'input[data-qa="login-password"]'
  33 |         );
  34 | 
  35 |         this.loginBtn = page.getByRole(
  36 |             'button',
  37 |             { name: 'Login' }
  38 |         );
  39 | 
  40 |         this.logoutBtn = page.getByRole(
  41 |             'link',
  42 |             { name: 'Logout' }
  43 |         );
  44 | 
  45 |         this.errorMessage = page.locator(
  46 |             'text=Your email or password is incorrect!'
  47 |         );
  48 |     }
  49 | 
  50 |     async goto() {
  51 | 
  52 |         await this.page.goto(
  53 |             'https://automationexercise.com/',
  54 |             {
  55 |                 waitUntil: 'domcontentloaded',
  56 |                 timeout: 90000
  57 |             }
  58 |         );
  59 | 
  60 |         await this.page.waitForTimeout(3000);
  61 |     }
  62 | 
  63 |     async openLoginPage() {
  64 | 
  65 |         await Promise.all([
  66 |             this.page.waitForURL('**/login'),
> 67 |             this.signupLoginBtn.click()
     |                                 ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  68 |         ]);
  69 |     }
  70 |     async login(email, password) {
  71 | 
  72 |         await this.emailInput.fill(email);
  73 | 
  74 |         await this.passwordInput.fill(password);
  75 | 
  76 |         await this.loginBtn.click({
  77 |             force: true
  78 |         });
  79 |     }
  80 | 
  81 |     async signup(name, email) {
  82 | 
  83 |         await this.signupNameInput.fill(name);
  84 | 
  85 |         await this.signupEmailInput.fill(email);
  86 | 
  87 |         await this.signupBtn.waitFor();
  88 | 
  89 |         await this.signupBtn.scrollIntoViewIfNeeded();
  90 | 
  91 |         await this.signupBtn.click({
  92 |             force: true
  93 |         });
  94 |     }
  95 | 
  96 | }
  97 | 
  98 | module.exports = LoginPage;
```