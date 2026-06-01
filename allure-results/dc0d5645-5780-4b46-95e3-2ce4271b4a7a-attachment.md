# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\cartPageTitle.spec.js >> Verify Cart Page Title
- Location: tests\cart\cartPageTitle.spec.js:5:1

# Error details

```
Test timeout of 90000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /cart/i })
    - locator resolved to <a href="/view_cart">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

```
Tearing down "context" exceeded the test timeout of 90000ms.
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
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=e43]: Shopping Cart
    - paragraph [ref=e46]:
      - text: Cart is empty! Click
      - link "here" [ref=e47] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
  - contentinfo [ref=e48]:
    - generic [ref=e53]:
      - heading "Subscription" [level=2] [ref=e54]
      - generic [ref=e55]:
        - textbox "Your email address" [ref=e56]
        - button "" [ref=e57] [cursor=pointer]:
          - generic [ref=e58]: 
        - paragraph [ref=e59]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e63]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e64]:
    - iframe [ref=e67]:
      - iframe [ref=f28e1]:
        - generic [ref=f32e2]:
          - link "Advertisement" [ref=f32e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuSOi5HL4hUzW0meXbXqMLvsXGjtUwv4A6g7WKK_A5wFEV3csni4mQfovW0mlPYZHmUnNJm77sLcaKKYcIFx2fZo0iJeOtkvUNIUUXd0lnuD7cXko9v5_3K_CSChAOsp3MSXa77mH7I0SICGMiV7y-uBAqbsvs8ydX7xsv9NE49bm8SYUfbfvWtTYudhSxpGWj44hgQEvKSfMACOUQG2xV9B3UaeEDWPvLLuHgzHylhs3wCF-5DOmC1xnAAX5S-wsdv69cuZto4n_GaIiIiPokOPmVJaz8tjXgq2urtt9AS8P0ENIfOffLFawy3vcbuUVXpecdu-WYXjiN29cLpUjYYDnAez9tX7GylweHXkHWSBwHHdEDAYpQBCxW4xDO9izFBzxezAQMgWWzTgpu3oV6cGmFkCNKv8VfIbRCW53k2OObRc1cjRZluuL3kVNW7WiMi5qHL50vsjDC4D9yk7-ThsPiKeEjOcZnle2DPBP8DV_DEZxNnvTrrFH2vyBzWW78vtGjx4_VMAR1bPgakzxdrrzNn80ESHdlm-MgNe11-tcW91PT87M0KM5t4XyJ4k0CYxma9h0hC139-0ltACAvEqVGB8zq5483c1aQUNhA_38YI_uGGaQrBzZlhQOxIq7bTKwJVgS1c0sGz-8jVjH0B4MveOTiHnzNr3yADcls5TgDLeQCDvnGQlyl8qGiS0eOUn4tPeOAoj-UUQryPyUEOBxhQLbKw7MCRGAml7U5QNJHFpCb9pmNkFeYAeRmOhuLA8Vd4dJTnftRsMI4AkJu_KmmWOd4F9K1KOXINJjE1PCC5zfyWm2P4uU3Mw-UG9LkIXlIP90hhXRfcvqwIQrjz-4RPqCERd6WqIci4py_0K42tmob7VIyyVfs5Od_8UQfHP3CJaZtBkgks0QN4MXikxP4NbTINHMNI7VwPIn7piXbDiciqVlMsFTazVrDhxGNvso_9_kwllcrJFe7U4soxN_LYD7E-USAUMOToRIYMTHapIkGdIeTbZ5jWmVOoJvsDqOgpwioJJ7S8Ft8NM6PKWDBVhwp5pWNE8QxxGm2JVC4zGQIDXc8DKfSkQcWMk_1nUdlJbwy2XEqOLO85dACfkN4b7j7GLC0tR4BAK02iQ7UK-Tjdzqmw_Lw2anTAE2IcBXMg4_wDkkxwshPsdS_UzWmdCpoB-wiELkXTwpyZvHyMnKbhodQxoAwlWJgjIABH3Jqs4tntDA0CvtAnHi1ku-rLpd66AL9lzOLTn3UBCPzkaokQCIVajnSTbJcrXnZ3iy_dpkiRwFhesSe1VQO3OIObmY1JxrHjAGtWSzNkrMJ0aw4anJWpslL2wMtVge7UwApE2Uhq7y-MbyEjQaeFqQy8Sj_Mucq5a0KOfjhzVkepPkcm_utLTpaS6iZVRriMyEzci8yBwXgOQ7DjSWklZMfi8UlUWCUpbLQtCRzaCWE9gY6i4CqQ3N0ASaohqCsH_xfV6d1dM155TneOq3nW4TazkBSGomlCzr-05LOtFeXkiyCWfc0UvdpBC3hUxCX8kzwOJVxElqOCOiPWA6HzqBEQwXfZPlO1ggO1bouSQ14kBU7NmoNQ0OnAP2FfQm8w-H8kTRirlzNGcYdCQPeYMwuN1U3kF6kE-KTRPb9Kf8y4foReHCXvNHjmFuMtBQgw62Whc7R9qdAgyYDkNPwzeazl4cdsZGKM63oZnI8qM0kXK2cHQP_y5Xy-WDsh7wbifbJPQpKe9mFMFQjuZH2MyacaUQO3uQSLY8_C-gFbBllV7cRwr0H9mg&sai=AMfl-YTtTHfRnJS9h5YArww3Fh_p_p-qEk9cwg-GPtGsKpA8BujzrRYFrXOXoWWOY7VAROrZOloFD6N_Xp1mdPIVL8QG8qTphJ5X8hpjVPdwoZ23SNaKKhztvT3ZmmBz-THUP0A25_ThCsRsZc8Cu38YrUTvJKjT7ieTHJiGem8Fr-E0BANyG5cbBnzHV5za4E6zWX0UDCFlM2BHY-eo0C6Ou7G320GDg7BNRIns6WeKFfOUJbmhPu27ClpqDia8jn2iyzguKRLoJeNTRTLBPxYKlmbCK3pd7hyzuPNF1KD15n90mgAn0iSlXn1AD-ALUptu9d3h_L3f9GbRQuBSnOidhNXYuI-ZfV566UTZ8LZ_qKoeBUAqyXA8nLC3BDItMGXr5TENIH2FDRSidZmaJlTWsMjOiRHSqXdY_kjajQ0Js9V8JOOXN5lj6UFaEe-KuFH8GzqItiYTLqHzr-mkz-eCDS5Yygh-LxQT8aVCJXGqsMZmdz5LftL-L35C1VyseDKnrDKthctV2IVwLmsti9_It3BuA5lEx1MLDNBodUC1Zw26NHeEFVgiVxpIZCqICV01DaXJWfAlZUEC89N3uDe6CnBv7dJ-SR5J1XKSGtBEqLVvrhkfOC0hLd8pBqs57o-NRNlHsHEz5vMh-ENRqD1PUtgUjx3Pb0VsRyO-ZIGLnahv82fsgThMXZ83I7Xkt_wQryFMLHORBm6yceX3DdpYyO9f3hc0Ok_QIdqcWCOio4zRxwnktwqLfpTDxutJEk9dk34c76SbTMSxRqIN_6aEq-eMecY3Z9nDO1yDhkyqqp8-_9lbKByFXzs3JNwIWrplLwSGHg3mMumpN4W0ebMpMbAH1sAAbV8heBuop7QQp5CB8RegiZKrnmNhwwVBxUcATsCnhyXIiae0cnc9D7cT2ks40RvP1g&sig=Cg0ArKJSzKExumt1T_fj&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_728x90-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364381
            - img "Advertisement" [ref=f32e5]
          - generic [ref=f32e6]:
            - generic:
              - img [ref=f32e10] [cursor=pointer]
              - button [ref=f32e12] [cursor=pointer]:
                - img [ref=f32e13]
```