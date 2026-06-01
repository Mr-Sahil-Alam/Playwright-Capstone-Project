# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\signup.spec.js >> Signup Test with wrongemail
- Location: tests\authentication\signup.spec.js:9:5

# Error details

```
TimeoutError: locator.fill: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('input[data-qa="signup-name"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - heading "Web server is returning an unknown error Error code 520" [level=1] [ref=e5]:
      - generic [ref=e6]: Web server is returning an unknown error
      - text: Error code 520
    - generic [ref=e7]:
      - text: Visit
      - link "cloudflare.com" [ref=e8]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
      - text: for more information.
    - generic [ref=e9]: 2026-05-29 15:36:08 UTC
  - generic [ref=e12]:
    - generic [ref=e13]:
      - text: You
      - heading "Browser" [level=3] [ref=e17]
      - text: Working
    - generic [ref=e18]:
      - link [ref=e20]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
      - text: Singapore
      - heading "Cloudflare" [level=3] [ref=e23]:
        - link "Cloudflare" [ref=e24]:
          - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
      - text: Working
    - generic [ref=e25]:
      - text: automationexercise.com
      - heading "Host" [level=3] [ref=e29]
      - text: Error
  - generic [ref=e31]:
    - generic [ref=e32]:
      - heading "What happened?" [level=2] [ref=e33]
      - paragraph [ref=e34]: There is an unknown connection issue between Cloudflare and the origin web server. As a result, the web page can not be displayed.
    - generic [ref=e35]:
      - heading "What can I do?" [level=2] [ref=e36]
      - heading "If you are a visitor of this website:" [level=3] [ref=e37]
      - paragraph [ref=e38]: Please try again in a few minutes.
      - heading "If you are the owner of this website:" [level=3] [ref=e39]
      - paragraph [ref=e40]:
        - text: There is an issue between Cloudflare's cache and your origin web server. Cloudflare monitors for these errors and automatically investigates the cause. To help support the investigation, you can pull the corresponding error log from your web server and submit it our support team. Please include the Ray ID (which is at the bottom of this error page).
        - link "Additional troubleshooting resources" [ref=e41]:
          - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-520/
        - text: .
  - paragraph [ref=e43]:
    - generic [ref=e44]:
      - text: "Cloudflare Ray ID:"
      - strong [ref=e45]: a03692a649a262dc
    - text: •
    - generic [ref=e46]:
      - text: "Your IP:"
      - button "Click to reveal" [ref=e47] [cursor=pointer]
      - text: •
    - generic [ref=e48]:
      - text: Performance & security by
      - link "Cloudflare" [ref=e49]:
        - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
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
  76  |         await this.emailInput.fill(email);
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
> 91  |         await this.signupNameInput.fill(name);
      |                                    ^ TimeoutError: locator.fill: Timeout 30000ms exceeded.
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