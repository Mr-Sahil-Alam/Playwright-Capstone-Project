# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact\contactHomeLink.spec.js >> Verify Home Link Visible On Contact Page
- Location: tests\contact\contactHomeLink.spec.js:3:1

# Error details

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/contact_us", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e8]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link " Home" [ref=e12] [cursor=pointer]:
            - /url: /
            - generic [ref=e13]: 
            - text: Home
        - listitem [ref=e14]:
          - link " Products" [ref=e15] [cursor=pointer]:
            - /url: /products
            - generic [ref=e16]: 
            - text: Products
        - listitem [ref=e17]:
          - link " Cart" [ref=e18] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e19]: 
            - text: Cart
        - listitem [ref=e20]:
          - link " Signup / Login" [ref=e21] [cursor=pointer]:
            - /url: /login
            - generic [ref=e22]: 
            - text: Signup / Login
        - listitem [ref=e23]:
          - link " Test Cases" [ref=e24] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e25]: 
            - text: Test Cases
        - listitem [ref=e26]:
          - link " API Testing" [ref=e27] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e28]: 
            - text: API Testing
        - listitem [ref=e29]:
          - link " Video Tutorials" [ref=e30] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e31]: 
            - text: Video Tutorials
        - listitem [ref=e32]:
          - link " Contact us" [ref=e33] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e34]: 
            - text: Contact us
  - generic [ref=e35]:
    - heading "Contact Us" [level=2] [ref=e39]:
      - text: Contact
      - strong [ref=e40]: Us
    - generic [ref=e41]:
      - generic [ref=e43]:
        - generic [ref=e44]: "Note: Below contact form is for testing purpose."
        - heading "Get In Touch" [level=2] [ref=e45]
        - generic [ref=e47]:
          - textbox "Name" [ref=e49]
          - textbox "Email" [ref=e51]
          - textbox "Subject" [ref=e53]
          - textbox "Your Message Here" [ref=e55]
          - button "Choose File" [ref=e57]
          - button "Submit" [ref=e58]
      - generic [ref=e60]:
        - heading "Feedback For Us" [level=2] [ref=e61]
        - generic [ref=e62]:
          - paragraph [ref=e63]: We really appreciate your response to our website.
          - paragraph [ref=e64]:
            - text: Kindly share your feedback with us at
            - link "[email protected]" [ref=e65] [cursor=pointer]:
              - /url: /cdn-cgi/l/email-protection#75131010111714161e351400011a1814011c1a1b100d1007161c06105b161a18
              - generic [ref=e66]: "[email protected]"
            - text: .
          - paragraph [ref=e67]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e68]: Thank you
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e69]:
    - generic [ref=e72]:
      - generic [ref=e75]: You have been successfully subscribed!
      - generic [ref=e77]:
        - heading "Subscription" [level=2] [ref=e78]
        - generic [ref=e79]:
          - textbox "Your email address" [ref=e80]
          - button "" [ref=e81]:
            - generic [ref=e82]: 
          - paragraph [ref=e83]:
            - text: Get the most recent updates from
            - text: our site and be updated your self...
    - paragraph [ref=e85]: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Home Link Visible On Contact Page', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com/contact_us');
     |                ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  6  | 
  7  |     await expect(
  8  |         page.getByRole('link', { name: 'Home' }).first()
  9  |     ).toBeVisible();
  10 | 
  11 | });
```