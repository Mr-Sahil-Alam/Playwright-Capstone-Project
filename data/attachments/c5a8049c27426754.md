# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact\contactForm.spec.js >> Submit Contact Us Form
- Location: tests\contact\contactForm.spec.js:5:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('input[data-qa="submit-button"]')
    - locator resolved to <input type="submit" name="submit" value="Submit" data-qa="submit-button" class="btn btn-primary pull-left submit_form"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | class ContactPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  | 
  7  |         this.contactBtn = page.getByRole(
  8  |             'link',
  9  |             { name: 'Contact us' }
  10 |         );
  11 | 
  12 |         this.nameInput = page.locator(
  13 |             'input[data-qa="name"]'
  14 |         );
  15 | 
  16 |         this.emailInput = page.locator(
  17 |             'input[data-qa="email"]'
  18 |         );
  19 | 
  20 |         this.subjectInput = page.locator(
  21 |             'input[data-qa="subject"]'
  22 |         );
  23 | 
  24 |         this.messageInput = page.locator(
  25 |             '#message'
  26 |         );
  27 | 
  28 |         this.uploadFileInput = page.locator(
  29 |             'input[name="upload_file"]'
  30 |         );
  31 | 
  32 |         this.submitBtn = page.locator(
  33 |             'input[data-qa="submit-button"]'
  34 |         );
  35 | 
  36 |         this.successMessage = page.locator(
  37 |             '.status.alert.alert-success'
  38 |         ).first();
  39 |     }
  40 | 
  41 |     async goto() {
  42 | 
  43 |         await this.page.goto(
  44 |             'https://automationexercise.com/',
  45 |             {
  46 |                 waitUntil: 'domcontentloaded',
  47 |                 timeout: 60000
  48 |             }
  49 |         );
  50 |     }
  51 | 
  52 |     async openContactPage() {
  53 | 
  54 |         await Promise.all([
  55 |             this.page.waitForURL(
  56 |                 '**/contact_us'
  57 |             ),
  58 |             this.contactBtn.click({
  59 |                 force: true
  60 |             })
  61 |         ]);
  62 | 
  63 |     }
  64 | 
  65 |     async fillContactForm(name, email, subject, message) {
  66 | 
  67 |         await this.nameInput.waitFor({
  68 |             state: 'visible'
  69 |         });
  70 | 
  71 |         await this.nameInput.fill(name);
  72 | 
  73 |         await this.emailInput.fill(email);
  74 | 
  75 |         await this.subjectInput.fill(subject);
  76 | 
  77 |         await this.messageInput.fill(message);
  78 | 
  79 |         await this.uploadFileInput.setInputFiles(
  80 |             'package.json'
  81 |         );
  82 |     }
  83 | 
  84 |     async submitForm() {
  85 | 
  86 |         const dialogPromise =
  87 |             this.page.waitForEvent('dialog');
  88 | 
> 89 |         await this.submitBtn.click();
     |                              ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  90 | 
  91 |         const dialog =
  92 |             await dialogPromise;
  93 | 
  94 |         await dialog.accept();
  95 |     }
  96 | 
  97 | }
  98 | 
  99 | module.exports = ContactPage;
```