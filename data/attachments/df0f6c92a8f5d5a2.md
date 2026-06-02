# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication\contactUsLinkVisibility.spec.js >> Verify Contact Us Link Visible On Login Page
- Location: tests\authentication\contactUsLinkVisibility.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
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
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f9e1]:
        - generic [ref=f11e2]:
          - link "Advertisement" [ref=f11e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsukjPqpB3tT9ChSc9NPc4bUYDHrY2iydyxEfv8aCokf8o39T3I3eF68zmRhFVftd4SkH-Gh11K5ARi2N4UWmjQNHDJv47g81yFPJVOngWymNADoo9o2vHevHeWZnH3UzkAZpn5IPRUDjZrL0HrOI-vC3wfqpngd1pGEguokiYPHEmrpVE-9dQHsrjcGkzDhHL4n2AxJcmFlJfYnYC8kKLH01-zzUOi0bd_hYqA_Vqii1TWro9NI2_GrQ2oBTT-1lrdEg6rjioCdGUAMVk2WvODrm3JcG9QtWBgM0B3NhpUdc85MNZ45KOIhqYeUzeeIMnojGnAWVJaEw8BXPefGQTdcxNtptQvgFyvWte1HrjTbtiYCgxU1sqtLOqpWg6vnKcDqiQwe4FKe-FOk6dSnUGQbZGvL_SGXusuHS6k1Yl-HCng7asOoUWDJ26AnyETGUY-416WBjWyy6YGabCdZuCI9HLfTD4d4QfY5MBJ4jKRCxAxBAVq7LKfCAREGW-McvCJkOjwh5ZzAd5MDsQg3gc675MoDMqyO8g3Mu_5cisbgpDUs7fmnkNRE9Jy851JBDLo6PU1XHa5vl-bOAcu5TomRZtHoKSaT7ZU-9xXx0Di78-WTyj9g5e2RQ80izw9v7-TOguiQm-8vTa7TP1dqaCn9wjk6Mbsxn5o5JDbQiB-7NiTdDdMyUQiXkiaGcJtD96cdM8Ldo6gchCfSjlYK4wx2Nq2HZiTAGvWRfraBEeJyjYzonoXx3TIOeOuj8WPcULI3n5DGTA_d0rMRmKpEgVAiHzOxWJhmtpXa8sW0G2vb9Pg2KYZBrFtRBorMjiA44cQ6eAhT0NxO5mOGS4JIwjsh7RPysQRBI9LoZZ36sjFFDIifvdGZ0DV_VS-5YBaTvVtHVt8iRCQYql95VYCi9yPXvWoTUfs2A1Ilb64ZFH-zs0Cqqjdn8JBJBrTSLqd3AeYQZtd0j-xk50hnj1ixgbLu-dTySAJcYEiOJLLPxN72SOmg53T9DPBLUlNFZygClLTsMsjAPlubVdsMIjdRaG60xGhlO75jXRK0U6hZ9vzJL2F9f6jSmAVYH-nTVNfVYtVKOOREG602tZ7BrxSQXAkMv2-bivj8iJ3zaRTw352X9Y2PaC-xvnnL75_FKQgRuarEqoTu_iISiHMwYv5IkIlAXnCzd-lKWib_WL6bAqShqJ9OoNGrqPclbotTD7Ybjyh0sBQsCqhFOV3fTErjt1ewM1YxZQKVr5tVFgD9UV7RO5DZzs1udjtawJITtibBZ3sst6Y_YjNETqZHHFtJTo6DBQt0HpPoLoAAnLAL4PXrhXaq0BSNYtvR4yH4Z1YCOy9u4TFOZvtz-sm-_cdlxMTKSIXOUCVvXGygBOUvYiBRxijG2Not6mhv1T4-bglhtzZnsUQyRsWOH-oMcfwIYWZgeGBdh9jATj_3F35X1QBrkNzrsFnhlJwxBnnkcj83QLGPwXCwhvPbK1-kf9ATLT5RtTWa4B2jaQqf-sKz__wBY5e_tTxIl2cqYsq1XpJWaSt4dJmsbmNI0R5dMuVUKHOA3nwoot8cA5PMsia2ubwI5CeNPl8GvIi7GjnqLiKR7eYtjsWLftuJOZ_6DUknDE0BjZCzagLuCbhQP4X0km0I6AC0CyUDCk8iY-qiJZhRcHZC2AE7wLxUubuztBilx0SMMTwHlF6EKFOBvbDH73CD4gAc31naV-y6evXBn7GQi3DwepwqmwXER1O55W-rHFIHQhUR5ou1Qo5377KBPv-do-NHg2ah77_KzKTzi1ocb_6VCNiJSSy-HLDmwaYilA&sai=AMfl-YRFPulWrJ3Uz3-pBtqqaiLUD094fNF5aEWMPaEFDsLGeFQqO80C0LxAgwB1nPml9Mm531lXKk0K_Yvh-Sa_3FX4RhJRs8khmGFiIUwh-FSFuV1jG_y_-Dt2-5Zmq8c3J6371ZUhV_OtpdVXaowGvPdiDz9RN0PsvcAvIKNhZItm_IJWTSw6OQkPmCt1q2ILursVOPN-J_-plymJmbFBAVrNaaRQWm8iqUI9rSnDngnyFXGUk7hv6TA45fbeiHGapjHbaN7FUTanVYYny1FOv6QmaAMoxwGsPZ7fBY4D7Jz1pA8AWC20zNWv1OxAywg0u9vBHEoHSA9sMyKoLeCQZ0ItL7ORSUCwR1hGRjwD3np4Gp7i22pTVPATt9w09o9fmb18iTN9NWH6w5SX3KteXFqIe7lx2z-1iH_mLd1iyDXYGMeiLeIpKrorP-jYnzLNcj3qTyUcGHXbF5Schk4d4RPGnXc8Sc_vD8vNUkPeglr2pSIIPJOMAWpqpoDNHWyDE1UVmSLFyRB9J-EC3AyxF9ItpBj8iulrsSP7ObSaeL3ecaELeJ7on5wVl44vtPYYIXqSidni65-qKnx7Pkes9rok5e8dd9qOd6qEwwX3IttvNzsxiURvISgcw5zcZNSUW2KQEvr65mmiPuhxFpVkTovuXI59zJlduDSti4AU3zmYpewXUeFLQIQPFBJPJWkefiMdLRDDpRlx_ltixiO2S861z0GvtAS-O7-Sd3SWV8TfNkCs-499GNGQFedJfJypjJvw_qon6Nx-hN0ncccMbqd0SFz22PkHHhf45evxMtfPBqnDwcmVMb2jV3vydbDYJWuH99ky6OYp5SWwnMltYbXJuPFMO_FAtiDdg9DzHdVcZT2W-bR6jN8UTx6RfbuGT6LCumHoib5pdVGAeg75z-exJZUlxxGhlgm3dPmAslkkiHv4PCNWk1tKsURQiauBJlFMytNXx8Nx-kYjArOiGOeXwTGt2jv4ltI0FOOc0FLJlJok4y4&sig=Cg0ArKJSzFFQLi7WUAfa&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9wYXlwYWwuY29t&urlfix=1&adurl=https://www.paypal.com/in/campaign/getpaid-globally%3Futm_medium%3Ddv360paid%26utm_source%3Ddisplay%26utm_campaign%3Db0005vxs_d0033x3l%26utm_content%3Din-bau-ao%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23758149812
            - img "Advertisement" [ref=f11e5]
          - generic [ref=f11e6]:
            - generic:
              - img [ref=f11e10] [cursor=pointer]
              - button [ref=f11e12] [cursor=pointer]:
                - img [ref=f11e13]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Verify Contact Us Link Visible On Login Page', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://automationexercise.com/login');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  | 
  7  |     await expect(
  8  |         page.getByRole('link', { name: 'Contact us' })
  9  |     ).toBeVisible();
  10 | 
  11 | });
```