# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\signup.spec.js >> Signup Test with sahiltest1@gmail.com
- Location: tests\authentication\signup.spec.js:9:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Signup / Login' })
    - locator resolved to <a href="/login">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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