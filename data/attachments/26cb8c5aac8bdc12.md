# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authSetup.spec.js >> Login And Save Auth State
- Location: tests\authentication\authSetup.spec.js:5:1

# Error details

```
TimeoutError: locator.fill: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('input[data-qa="login-email"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=e2]
  - paragraph [ref=e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1   | class LoginPage {
  2   | 
  3   |     constructor(page) {
  4   | 
  5   |         this.page = page;
  6   | 
  7   |         // Signup Locators
  8   |         this.signupNameInput = page.locator(
  9   |             'input[data-qa="signup-name"]'
  10  |         );
  11  | 
  12  |         this.signupEmailInput = page.locator(
  13  |             'input[data-qa="signup-email"]'
  14  |         );
  15  | 
  16  |         this.signupBtn = page.getByRole(
  17  |             'button',
  18  |             { name: 'Signup' }
  19  |         );
  20  | 
  21  |         // Login Locators
  22  |         this.signupLoginBtn = page.getByRole(
  23  |             'link',
  24  |             { name: 'Signup / Login' }
  25  |         );
  26  | 
  27  |         this.emailInput = page.locator(
  28  |             'input[data-qa="login-email"]'
  29  |         );
  30  | 
  31  |         this.passwordInput = page.locator(
  32  |             'input[data-qa="login-password"]'
  33  |         );
  34  | 
  35  |         this.loginBtn = page.getByRole(
  36  |             'button',
  37  |             { name: 'Login' }
  38  |         );
  39  | 
  40  |         this.logoutBtn = page.getByRole(
  41  |             'link',
  42  |             { name: 'Logout' }
  43  |         );
  44  | 
  45  |         this.errorMessage = page.locator(
  46  |             'text=Your email or password is incorrect!'
  47  |         );
  48  |     }
  49  | 
  50  |     async goto() {
  51  | 
  52  |         await this.page.goto(
  53  |             'https://automationexercise.com/',
  54  |             {
  55  |                 waitUntil: 'domcontentloaded',
  56  |                 timeout: 60000
  57  |             }
  58  |         );
  59  |     }
  60  | 
  61  |     async openLoginPage() {
  62  | 
  63  |         await this.signupLoginBtn.waitFor({
  64  |             state: 'visible'
  65  |         });
  66  | 
  67  |         await this.signupLoginBtn.scrollIntoViewIfNeeded();
  68  | 
  69  |         await this.signupLoginBtn.click({
  70  |             force: true
  71  |         });
  72  |     }
  73  | 
  74  |     async login(email, password) {
  75  | 
> 76  |         await this.emailInput.fill(email);
      |                               ^ TimeoutError: locator.fill: Timeout 30000ms exceeded.
  77  | 
  78  |         await this.passwordInput.fill(password);
  79  | 
  80  |         await this.loginBtn.waitFor();
  81  | 
  82  |         await this.loginBtn.scrollIntoViewIfNeeded();
  83  | 
  84  |         await this.loginBtn.click({
  85  |             force: true
  86  |         });
  87  |     }
  88  | 
  89  |     async signup(name, email) {
  90  | 
  91  |         await this.signupNameInput.fill(name);
  92  | 
  93  |         await this.signupEmailInput.fill(email);
  94  | 
  95  |         await this.signupBtn.waitFor();
  96  | 
  97  |         await this.signupBtn.scrollIntoViewIfNeeded();
  98  | 
  99  |         await this.signupBtn.click({
  100 |             force: true
  101 |         });
  102 |     }
  103 | 
  104 | }
  105 | 
  106 | module.exports = LoginPage;
```