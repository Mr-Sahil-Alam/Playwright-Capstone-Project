# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\authValidation.spec.js >> Verify User Is Logged In
- Location: tests\authentication\authValidation.spec.js:3:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('[data-qa="login-button"]')
    - locator resolved to <button type="submit" data-qa="login-button" class="btn btn-default">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

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
        - generic: pvK39mrTDwicydrISyhfiEdfKWz2TDlZbEyorc91bHqpzw5Qa951MfywAgT1oSdJ
        - textbox "Email Address" [ref=e44]: sahil.alamcse1@gmail.com
        - textbox "Password" [ref=e45]: Alam@2002
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: pvK39mrTDwicydrISyhfiEdfKWz2TDlZbEyorc91bHqpzw5Qa951MfywAgT1oSdJ
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
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f9e1]:
        - generic [active]:
          - insertion [ref=f12e2]:
            - generic [ref=f12e3]:
              - link "Click Here" [ref=f12e4]:
                - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=Cli1zYW0aaruBDbmcssUPvPGsoAen_qC0hwHltL3cihWhpvjz0B0QASD9tJ6VAWDlgoCA5A6gAYviiqAByAEJqAMByAObBKoEgwJP0Ir_Wso6tHStAbP5BdwkLnDPI-kEtmsjChSp4vWpo0oNfqDnYlBWFRL9h6eUo6gkctoYdstYvZiRaERFoutiQX64XErEHiXoB8qUkDMmH_8cujBUSeHtfPqT--WVx9H9XzqJAFS7dbQnN2AHKDKtE8SFWThGB4MN9-YY65AUMBpM4isuNEDSv9e8ir00uwQNQMe9_knIT3jvI10e28Jifowym2p7Z1APypVPtS83V_aR6NYPYUadi3VU60eixRvb_kb5XH4vIpyN01PGi0WMJ1s601c6WO2PmEq7Rq-FYuVK-ba0YAdVKnCmvWqRXa_4_ivzhLpMLe4FRWBHSVoF_iizwATvv_-fvwXgBAOIBf3jo4NXkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY35SC_JvglANgAYAKAZgLAcgLAYAMAaoNAklO6g0TCNi6gvyb4JQDFTmOrAIdvDgLdPANAYgOCbAT78mzItATANgTDYgUAtgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRIC6FgYTSIBANAZAQ&ae=1&num=1&cid=CAQSnwIABaugfeSsqTspESPyuLmhZVGT-nZ6mn3aop0pEMu-OoQcGLMqUwO5gVu9doQyltWVxVRo7kB99UmcpNrq1w3Iw-y8rtJLjZZTlHd2GyZu-2UhLC83lpw4DSUFaLKs--eL5smlBH6ZMCI60x11csZSK0jcHHuWm4XtS1W3ZxQwVoV1TXaFDyN5m3B56ShFwO9bTlq1podmOUyNI3-o345wiJsFRb0ksE6bUoIzaFAHahyzXm7BhZtKTxujoxCYH0E1SDwrVgVk_mJ8eq3OJcEwo768yZ8pMv6YA6WF8ZuA6ob8mg9gobUgFgvvrmizT57HtwVYZMxkwfv-36z60ccSwR4Zm5SZQ1y_QTt3uxMGUMhfMyOLHbqAHv9M6mX1KBgB&sig=AOD64_0Vj840Pa_4hq7MLCQlPjVkKwmxyg&client=ca-pub-1677597403311019&dbm_c=AKAmf-BUkEzmG1Mi9P9oFfD96qkoB12Z49nBuUnObTMKahfLmK8wppo3A-i4Yo9TC8H3RLD_4gnEV--NUF2t1nd_2ARzILimMj3TWRJsNp2nhe3sOd3FXl25xuJCXl85cHABi5ZX45gypUsyiMg5jeO9jUmA5-AorbVsqrxRX3Bd6_mrIVDIUuqOo4ISUNwsh15hG1c5mwxEiDQ1su-vNHvdsJ7XEr97D1WzSC_CQw46HcvXPWfsbNitNnL0agkcXlqNvvJ9HCbn_IDg_QkSghpWRDua7lkDJMdZ5ZRtvwIBSafadH80OJA&cry=1&dbm_d=AKAmf-DSYJAzfI2rQtdxKnbxdxN0Acl1HkfkPfWV9B4qGcCcdEf9Uk_Q-Qwqbw3xtoUcu44VNZuUdhJHYzzwQStkd73JMSS9OE4yaNE2LnbMvp2KrAreF5NDRSLIBLSfaxUdU_626rgHMANlv9PlG8JcrSrBGZnLyMplBfi9naK-tW-DZA5zxMl_-426XdUCQ3cKk_IheJPRCxS9Q1jz3CJnTzM_xJcLwSElNWBS7oad8der7rhsjrCo816xSCn7E8Y7pQbmzOd0M98Syogz75OhmCGYsFw1C0B05ueqTrk2P4MH7JuKWyJhihspK_L-AAGfzqoo3bcUy_rysQsWq4DYNgCSrTpdOTbqdVf4FS77d6Z-D2KkRnRJnuzw1_7jCDTJBnYuuIV2RNQzh_6Getl84FneosvSijqyQs3lAStXtKqpgEXOE1r8d9J0yQ7CDJFDkN0_xHDpMK3iqiNkwIusbjquRihnXYET-L1FDj2GbqTeJXKSToQfQNgTSULfFp6I5cgsmbI9fBOVpu1-SZZBjBPDKKNN5o_C0k0V9QDSs2eUMdtvm0v08ghQhuzpwHwdFop8wrtHZboHztvolGt7ixo9GRO00cXRmyC11zq0JF158CvFnmeEiSplqTIsrW-zu6q3sJBEBT4NdIcHScA90hyNypz6luvqXy3lJs1-afo1e6HDDrGi6c1KuDiKO_fbLpGROkZyjlnNvUsoOlrBhclQwspbNg&adurl=https://servedby.flashtalking.com/click/7/296969;10358857;6173714;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0ibLM9Uw_hSn-KovwK7QxeW&ft_impID=B10D884E-96C9-42B5-0C13-00B1972A1E05&ft_section=23360762365&g=6724713F3D2A90&random=71836.74221894154&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                - img "Click Here" [ref=f12e5]
              - link "AdChoices arrow" [ref=f12e7]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img "AdChoices arrow" [ref=f12e8]
              - link "Privacy Notification" [ref=f12e10]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img [ref=f12e11]
              - link "Privacy Notification" [ref=f12e13]:
                - /url: https://www.flashtalking.com/consumer-privacy
                - img [ref=f12e14]
          - iframe
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify User Is Logged In', async ({ page }) => {
  4  | 
  5  |     await page.goto(
  6  |         'https://automationexercise.com/login'
  7  |     );
  8  | 
  9  |     await page.locator(
  10 |         '[data-qa="login-email"]'
  11 |     ).fill('sahil.alamcse1@gmail.com');
  12 | 
  13 |     await page.locator(
  14 |         '[data-qa="login-password"]'
  15 |     ).fill('Alam@2002');
  16 | 
  17 |     await page.locator(
  18 |         '[data-qa="login-button"]'
> 19 |     ).click();
     |       ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  20 | 
  21 |     await expect(
  22 |         page.getByRole('link', {
  23 |             name: 'Logout'
  24 |         })
  25 |     ).toBeVisible();
  26 | 
  27 | });
```