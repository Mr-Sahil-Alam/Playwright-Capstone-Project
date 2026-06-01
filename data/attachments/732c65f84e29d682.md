# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\continueShopping.spec.js >> Verify Continue Shopping Button Works
- Location: tests\cart\continueShopping.spec.js:5:1

# Error details

```
TimeoutError: page.goto: Timeout 60000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/products", waiting until "load"

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
  - generic [ref=e38]:
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading "Category" [level=2] [ref=e48]
        - generic [ref=e49]:
          - heading " Women" [level=4] [ref=e52]:
            - link " Women" [ref=e53]:
              - /url: "#Women"
              - generic [ref=e55]: 
              - text: Women
          - heading " Men" [level=4] [ref=e58]:
            - link " Men" [ref=e59]:
              - /url: "#Men"
              - generic [ref=e61]: 
              - text: Men
          - heading " Kids" [level=4] [ref=e64]:
            - link " Kids" [ref=e65]:
              - /url: "#Kids"
              - generic [ref=e67]: 
              - text: Kids
        - insertion [ref=e69]:
          - iframe [ref=e71]:
            - iframe [ref=f28e1]:
              - generic [ref=f35e2]:
                - iframe [ref=f35e3] [cursor=pointer]:
                  - img [ref=f37e2]
                - link [ref=f35e4]:
                  - /url: https://insight.adsrvr.org/track/clk?imp=1d01bb09-21d1-4a2d-8a8c-40b6acf898dc&ag=n50ahro&sfe=1c53ce1e&sig=Imklz8NgmuG1DRL7Ktlr-DXuPmmwTkpYW4L2XA63e-g.&crid=juiys8k2&cf=10705085&fq=0&t=1&td_s=automationexercise.com&rcats=&mste=&mfld=3&mssi=&mfsi=&sv=google&uhow=20&agsa=&wp=ahxOHgAEshYAeF9SAAdi3vHJYT5is_eDSNTsbQ&rgz=731101&dt=PC&osf=OSX&os=Other&br=Safari&svpid=pub-1677597403311019&rlangs=en&mlang=&did=&rcxt=Other&tmpc=33.860000000000014&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&crrelr=&npt=&cc=3~KLUv_WPYfRZo8gFVCwCUDQm7AR3RIS1KEYqMQLas-JjcQgduNTBhaHJvSK_01g1QvbGNBVoIanVpeXM4azJg0tn-b24U0gEkBFN1MzExMDExw_vCwuSHLhggOW52bTc0YdAC_tuKA-jhVUAdYjFhfGRhbXzQ8qjfgMyfPwoxMNS44fbHmakWWi0tTEhBcUhYWUpqMldnLWtDQThjQSeWQM3VfFDSoUbE-qdv9cZ_GfZAEa-hSbGGFiEOg7y2--6xHhgkm5muBohRCAGoEzzIEzzQEwD9EzMzkz-AFAGgFACwFAC4FADIFAAs_ACwgoZvM994pQ7yHZkhXV2vv4oNwdexSFeXvcps-ZkfcTZYHdCuw4iFo8dT20P0TJ3XcG2QQsIAJkbzgPhSlg3_0qK9tUvR0lmIFru0qafkq-jzdIxKuRmKrb2RUN2_Uzf5WGyw70iquEI53KFEBDp4ZikB_uVwPDIjj46p845qMruJkFWschGLpiwNCw..&dur=1~KLUv_SMFoCgkXbUAAEggAigFTV89xT0DfACfji89wd3jDnw.&durs=UYR8Rv&bdc=13&mk=Apple&testid=b1a%7Cdam%7CGoogle-ORtb-Migration&fpa=573&pcm=3&ict=Unknown&said=Z--LHAqHXYJj2Wg-kCA8cA&auct=1&tail=1&r=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCBMjMHk4capbkEtK-4bMP3sWd6A6-p-f2dPb-j45XwI23ARABIP20npUBYOWCgIDkDsgBCagDAcgDAqoE3QFP0BG5sjnPmlTioKZIL-h7CclVcdmWnxZdfSU58DOeTUar3zQ4DYxFe8VguMoVYDajTK764vd4u6iPat_6OYthMhq4GXMdBG2qMUH5cJTS6VNKSxyLBb6wKMbvRY8nBGucxaNGfgYo0S81UWpFA7buHg-ycni1xFcU1hooIa-JlYJcMf1E5JMSDRaIDZqly2EtFO2Uj6x8PnDWfhhNUVup-l29lspbmeXs78sIGGL9T2eAzr-X8ZkLTQ7FLv7-ghmtweHUr-VQctmNP4MDbi-Zj8OSRUdCHqJ8s5pdB4AGzKTRqeXJzZMEoAYhqAeT2LECqAeU2LECqAeV2LECqAemvhuoB5bYG6gHqpuxAqgH_56xAqgH35-xAqgHrb6xAqgHv9OxAtgHANIILgiAYRABMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYuqH2t-bjlAP6CwIIAYAMAaoNAklO6g0TCOzv97fm45QDFVJfeAAd3mIH7YgOCdAVAYAXAbIXBBgMUAE%26num%3D1%26sig%3DAOD64_14on0v0DFPtOpnF8D4mlmnshRMwQ%26client%3Dca-pub-1677597403311019%26adurl%3Dhttps://netshort.onelink.me/XC68?pid=thetradedesk_int&af_siteid=automationexercise.com&c=9nvm74a&af_c_id=9nvm74a&af_adset_id=n50ahro&af_ad_id=juiys8k2&af_click_lookback=7d&clickid=1d01bb09-21d1-4a2d-8a8c-40b6acf898dc&idfa=&advertising_id=&android_id=
                  - img [ref=f35e5]
        - generic [ref=e72]:
          - heading "Brands" [level=2] [ref=e73]
          - list [ref=e75]:
            - listitem [ref=e76]:
              - link "(6) Polo" [ref=e77]:
                - /url: /brand_products/Polo
                - generic [ref=e78]: (6)
                - text: Polo
            - listitem [ref=e79]:
              - link "(5) H&M" [ref=e80]:
                - /url: /brand_products/H&M
                - generic [ref=e81]: (5)
                - text: H&M
            - listitem [ref=e82]:
              - link "(5) Madame" [ref=e83]:
                - /url: /brand_products/Madame
                - generic [ref=e84]: (5)
                - text: Madame
            - listitem [ref=e85]:
              - link "(3) Mast & Harbour" [ref=e86]:
                - /url: /brand_products/Mast & Harbour
                - generic [ref=e87]: (3)
                - text: Mast & Harbour
            - listitem [ref=e88]:
              - link "(4) Babyhug" [ref=e89]:
                - /url: /brand_products/Babyhug
                - generic [ref=e90]: (4)
                - text: Babyhug
            - listitem [ref=e91]:
              - link "(3) Allen Solly Junior" [ref=e92]:
                - /url: /brand_products/Allen Solly Junior
                - generic [ref=e93]: (3)
                - text: Allen Solly Junior
            - listitem [ref=e94]:
              - link "(3) Kookie Kids" [ref=e95]:
                - /url: /brand_products/Kookie Kids
                - generic [ref=e96]: (3)
                - text: Kookie Kids
            - listitem [ref=e97]:
              - link "(5) Biba" [ref=e98]:
                - /url: /brand_products/Biba
                - generic [ref=e99]: (5)
                - text: Biba
      - insertion [ref=e101]:
        - iframe [ref=e103]:
          - iframe [ref=f29e1]:
            - generic [ref=f34e2]:
              - iframe [ref=f34e3] [cursor=pointer]:
                - img [ref=f36e2]
              - link [ref=f34e4]:
                - /url: https://insight.adsrvr.org/track/clk?imp=3c7ecefc-0c0d-4d07-96b0-3ecd63846ee4&ag=n50ahro&sfe=1c53ce1e&sig=cTstiQJF06i8jpL5cAjD1AFSBIkbyzmg4GS_I9tdVHY.&crid=sl6fvezp&cf=10705085&fq=0&t=1&td_s=automationexercise.com&rcats=&mste=&mfld=3&mssi=&mfsi=&sv=google&uhow=20&agsa=&wp=ahxOHgAEsxEFOEvzADtA2ays580poEHcw4AMZw&rgz=731101&dt=PC&osf=OSX&os=Other&br=Safari&svpid=pub-1677597403311019&rlangs=en&mlang=&did=&rcxt=Other&tmpc=33.860000000000014&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&crrelr=&npt=&cc=3~KLUv_WPYfRZo7wGFCwD0DfzOfjwNDAdNEZawPs1jhG7kQgduNTBhaHJvSK_01g1QvbGNBVoIc2w2ZnZlenBgzdn-b24U0gEkBFN1MzExMDExw5Dz5YUoGCA5bnZtNzRh0AL-24oD6OFVQB1iMWF8ZGFtfJT0mt-AzJ8_CjMz8e-B4agWSDRld1VZRHRsb0tvMF9STjNmZG8wJ5ZAzdV8UNKhRsT6PtA5JMQdGkARv1bI34z8lceDvLb77rEeGCQGCL7NFs0WDXQKiFEIBQK4EguoEzzIEzzQEwD9EzMzkz-AFAGgFACwFAC4FADIFAAs_AAALLhGxaX3LoC5unZ1PEheU9--MZZz3eypIV1dU7Bmo-B8sAxDIbFwQOBqV_J9J-spBrTYPXCeg43PqAulRckrLcJaSopQDkKE0KWNGiC8in5OgagUmuTY2kXQF4LfqZs_FhvVO5J6XqGcP8kiGg-eWcqMfzlEAGakxsfUeaCazIqpZRXLScCiKUvDAg..&dur=1~KLUv_SMFoCgkXbUAAEggAigFTV89xT0DfACfji89wd3jDnw.&durs=UYR8Rv&bdc=13&mk=Apple&testid=b1a%7Cdam%7CGoogle-ORtb-Migration&fpa=573&pcm=3&ict=Unknown&said=H4ewUYDtloKo0_RN3fdo0Q&auct=1&tail=1&r=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCY9GmHk4capHmEvOX4dkP2YHtmQe-p-f2dPb-j45XwI23ARABIP20npUBYOWCgIDkDsgBCagDAcgDAqoE3QFP0LW60Y3r7NjfHSJA3YWMR0dYNg3SuB3tGK9kwlvj2TKOQvR74HjsiynMGEKqPpiDQP7-vkoahAb07hoyLUxUP_kolLwc1Vn40NngPP9OkgtGJmMckOAe6JIOtCrPkXwUGGXCxGRhykx7E_qzpN9SRmCMVkwWnLYbh0lV2a0z8yw5PNLAEJkqS7RVUzUggMxhT-KqQzf2Oa_sFJn2630PmAjXSU0PA9BfgvpO7P52tbjcPwBKx2Mf7aAmNfgm5BxvooXYpC2xX6ERqLeCosIg-DFsDJnVS3r4hwfZnYAG4MX6ntLow7_wAaAGIagHk9ixAqgHlNixAqgHldixAqgHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB62-sQKoB7_TsQLYBwDSCC4IgGEQATIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJ6v9rfm45QD-gsCCAGADAGqDQJJTuoNEwiF9fe35uOUAxXzSzgFHdlAO3OIDgnQFQGAFwGyFwQYDFAB%26num%3D1%26sig%3DAOD64_3y40INnTE_8I8LwwcpnES0nfcOCQ%26client%3Dca-pub-1677597403311019%26adurl%3Dhttps://netshort.onelink.me/XC68?pid=thetradedesk_int&af_siteid=automationexercise.com&c=9nvm74a&af_c_id=9nvm74a&af_adset_id=n50ahro&af_ad_id=sl6fvezp&af_click_lookback=7d&clickid=3c7ecefc-0c0d-4d07-96b0-3ecd63846ee4&idfa=&advertising_id=&android_id=
                - img [ref=f34e5]
    - generic [ref=e105]:
      - heading "All Products" [level=2] [ref=e106]
      - generic [ref=e108]:
        - generic [ref=e109]:
          - generic [ref=e110]:
            - img "ecommerce website products" [ref=e111]
            - heading "Rs. 500" [level=2] [ref=e112]
            - paragraph [ref=e113]: Blue Top
            - generic [ref=e114] [cursor=pointer]:
              - generic [ref=e115]: 
              - text: Add to cart
          - generic [ref=e116]:
            - heading "Rs. 500" [level=2] [ref=e117]
            - paragraph [ref=e118]: Blue Top
            - generic [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: 
              - text: Add to cart
        - list [ref=e122]:
          - listitem [ref=e123]:
            - link " View Product" [ref=e124]:
              - /url: /product_details/1
              - generic [ref=e125]: 
              - text: View Product
      - generic [ref=e127]:
        - generic [ref=e128]:
          - generic [ref=e129]:
            - img "ecommerce website products" [ref=e130]
            - heading "Rs. 400" [level=2] [ref=e131]
            - paragraph [ref=e132]: Men Tshirt
            - generic [ref=e133] [cursor=pointer]:
              - generic [ref=e134]: 
              - text: Add to cart
          - generic [ref=e135]:
            - heading "Rs. 400" [level=2] [ref=e136]
            - paragraph [ref=e137]: Men Tshirt
            - generic [ref=e138] [cursor=pointer]:
              - generic [ref=e139]: 
              - text: Add to cart
        - list [ref=e141]:
          - listitem [ref=e142]:
            - link " View Product" [ref=e143]:
              - /url: /product_details/2
              - generic [ref=e144]: 
              - text: View Product
      - generic [ref=e146]:
        - generic [ref=e147]:
          - generic [ref=e148]:
            - img "ecommerce website products" [ref=e149]
            - heading "Rs. 1000" [level=2] [ref=e150]
            - paragraph [ref=e151]: Sleeveless Dress
            - generic [ref=e152] [cursor=pointer]:
              - generic [ref=e153]: 
              - text: Add to cart
          - generic [ref=e154]:
            - heading "Rs. 1000" [level=2] [ref=e155]
            - paragraph [ref=e156]: Sleeveless Dress
            - generic [ref=e157] [cursor=pointer]:
              - generic [ref=e158]: 
              - text: Add to cart
        - list [ref=e160]:
          - listitem [ref=e161]:
            - link " View Product" [ref=e162]:
              - /url: /product_details/3
              - generic [ref=e163]: 
              - text: View Product
      - generic [ref=e165]:
        - generic [ref=e166]:
          - generic [ref=e167]:
            - img "ecommerce website products" [ref=e168]
            - heading "Rs. 1500" [level=2] [ref=e169]
            - paragraph [ref=e170]: Stylish Dress
            - generic [ref=e171] [cursor=pointer]:
              - generic [ref=e172]: 
              - text: Add to cart
          - generic [ref=e173]:
            - heading "Rs. 1500" [level=2] [ref=e174]
            - paragraph [ref=e175]: Stylish Dress
            - generic [ref=e176] [cursor=pointer]:
              - generic [ref=e177]: 
              - text: Add to cart
        - list [ref=e179]:
          - listitem [ref=e180]:
            - link " View Product" [ref=e181]:
              - /url: /product_details/4
              - generic [ref=e182]: 
              - text: View Product
      - generic [ref=e184]:
        - generic [ref=e185]:
          - generic [ref=e186]:
            - img "ecommerce website products" [ref=e187]
            - heading "Rs. 600" [level=2] [ref=e188]
            - paragraph [ref=e189]: Winter Top
            - generic [ref=e190] [cursor=pointer]:
              - generic [ref=e191]: 
              - text: Add to cart
          - generic [ref=e192]:
            - heading "Rs. 600" [level=2] [ref=e193]
            - paragraph [ref=e194]: Winter Top
            - generic [ref=e195] [cursor=pointer]:
              - generic [ref=e196]: 
              - text: Add to cart
        - list [ref=e198]:
          - listitem [ref=e199]:
            - link " View Product" [ref=e200]:
              - /url: /product_details/5
              - generic [ref=e201]: 
              - text: View Product
      - generic [ref=e203]:
        - generic [ref=e204]:
          - generic [ref=e205]:
            - img "ecommerce website products" [ref=e206]
            - heading "Rs. 400" [level=2] [ref=e207]
            - paragraph [ref=e208]: Summer White Top
            - generic [ref=e209] [cursor=pointer]:
              - generic [ref=e210]: 
              - text: Add to cart
          - generic [ref=e211]:
            - heading "Rs. 400" [level=2] [ref=e212]
            - paragraph [ref=e213]: Summer White Top
            - generic [ref=e214] [cursor=pointer]:
              - generic [ref=e215]: 
              - text: Add to cart
        - list [ref=e217]:
          - listitem [ref=e218]:
            - link " View Product" [ref=e219]:
              - /url: /product_details/6
              - generic [ref=e220]: 
              - text: View Product
      - generic [ref=e222]:
        - generic [ref=e223]:
          - generic [ref=e224]:
            - img "ecommerce website products" [ref=e225]
            - heading "Rs. 1000" [level=2] [ref=e226]
            - paragraph [ref=e227]: Madame Top For Women
            - generic [ref=e228] [cursor=pointer]:
              - generic [ref=e229]: 
              - text: Add to cart
          - generic [ref=e230]:
            - heading "Rs. 1000" [level=2] [ref=e231]
            - paragraph [ref=e232]: Madame Top For Women
            - generic [ref=e233] [cursor=pointer]:
              - generic [ref=e234]: 
              - text: Add to cart
        - list [ref=e236]:
          - listitem [ref=e237]:
            - link " View Product" [ref=e238]:
              - /url: /product_details/7
              - generic [ref=e239]: 
              - text: View Product
      - generic [ref=e241]:
        - generic [ref=e242]:
          - generic [ref=e243]:
            - img "ecommerce website products" [ref=e244]
            - heading "Rs. 700" [level=2] [ref=e245]
            - paragraph [ref=e246]: Fancy Green Top
            - generic [ref=e247] [cursor=pointer]:
              - generic [ref=e248]: 
              - text: Add to cart
          - generic [ref=e249]:
            - heading "Rs. 700" [level=2] [ref=e250]
            - paragraph [ref=e251]: Fancy Green Top
            - generic [ref=e252] [cursor=pointer]:
              - generic [ref=e253]: 
              - text: Add to cart
        - list [ref=e255]:
          - listitem [ref=e256]:
            - link " View Product" [ref=e257]:
              - /url: /product_details/8
              - generic [ref=e258]: 
              - text: View Product
      - generic [ref=e260]:
        - generic [ref=e261]:
          - generic [ref=e262]:
            - img "ecommerce website products" [ref=e263]
            - heading "Rs. 499" [level=2] [ref=e264]
            - paragraph [ref=e265]: Sleeves Printed Top - White
            - generic [ref=e266] [cursor=pointer]:
              - generic [ref=e267]: 
              - text: Add to cart
          - generic [ref=e268]:
            - heading "Rs. 499" [level=2] [ref=e269]
            - paragraph [ref=e270]: Sleeves Printed Top - White
            - generic [ref=e271] [cursor=pointer]:
              - generic [ref=e272]: 
              - text: Add to cart
        - list [ref=e274]:
          - listitem [ref=e275]:
            - link " View Product" [ref=e276]:
              - /url: /product_details/11
              - generic [ref=e277]: 
              - text: View Product
      - generic [ref=e279]:
        - generic [ref=e280]:
          - generic [ref=e281]:
            - img "ecommerce website products" [ref=e282]
            - heading "Rs. 359" [level=2] [ref=e283]
            - paragraph [ref=e284]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e285] [cursor=pointer]:
              - generic [ref=e286]: 
              - text: Add to cart
          - generic [ref=e287]:
            - heading "Rs. 359" [level=2] [ref=e288]
            - paragraph [ref=e289]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e290] [cursor=pointer]:
              - generic [ref=e291]: 
              - text: Add to cart
        - list [ref=e293]:
          - listitem [ref=e294]:
            - link " View Product" [ref=e295]:
              - /url: /product_details/12
              - generic [ref=e296]: 
              - text: View Product
      - generic [ref=e298]:
        - generic [ref=e299]:
          - generic [ref=e300]:
            - img "ecommerce website products" [ref=e301]
            - heading "Rs. 278" [level=2] [ref=e302]
            - paragraph [ref=e303]: Frozen Tops For Kids
            - generic [ref=e304] [cursor=pointer]:
              - generic [ref=e305]: 
              - text: Add to cart
          - generic [ref=e306]:
            - heading "Rs. 278" [level=2] [ref=e307]
            - paragraph [ref=e308]: Frozen Tops For Kids
            - generic [ref=e309] [cursor=pointer]:
              - generic [ref=e310]: 
              - text: Add to cart
        - list [ref=e312]:
          - listitem [ref=e313]:
            - link " View Product" [ref=e314]:
              - /url: /product_details/13
              - generic [ref=e315]: 
              - text: View Product
      - generic [ref=e317]:
        - generic [ref=e318]:
          - generic [ref=e319]:
            - img "ecommerce website products" [ref=e320]
            - heading "Rs. 679" [level=2] [ref=e321]
            - paragraph [ref=e322]: Full Sleeves Top Cherry - Pink
            - generic [ref=e323] [cursor=pointer]:
              - generic [ref=e324]: 
              - text: Add to cart
          - generic [ref=e325]:
            - heading "Rs. 679" [level=2] [ref=e326]
            - paragraph [ref=e327]: Full Sleeves Top Cherry - Pink
            - generic [ref=e328] [cursor=pointer]:
              - generic [ref=e329]: 
              - text: Add to cart
        - list [ref=e331]:
          - listitem [ref=e332]:
            - link " View Product" [ref=e333]:
              - /url: /product_details/14
              - generic [ref=e334]: 
              - text: View Product
      - generic [ref=e336]:
        - generic [ref=e337]:
          - generic [ref=e338]:
            - img "ecommerce website products" [ref=e339]
            - heading "Rs. 315" [level=2] [ref=e340]
            - paragraph [ref=e341]: Printed Off Shoulder Top - White
            - generic [ref=e342] [cursor=pointer]:
              - generic [ref=e343]: 
              - text: Add to cart
          - generic [ref=e344]:
            - heading "Rs. 315" [level=2] [ref=e345]
            - paragraph [ref=e346]: Printed Off Shoulder Top - White
            - generic [ref=e347] [cursor=pointer]:
              - generic [ref=e348]: 
              - text: Add to cart
        - list [ref=e350]:
          - listitem [ref=e351]:
            - link " View Product" [ref=e352]:
              - /url: /product_details/15
              - generic [ref=e353]: 
              - text: View Product
      - generic [ref=e355]:
        - generic [ref=e356]:
          - generic [ref=e357]:
            - img "ecommerce website products" [ref=e358]
            - heading "Rs. 478" [level=2] [ref=e359]
            - paragraph [ref=e360]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e361] [cursor=pointer]:
              - generic [ref=e362]: 
              - text: Add to cart
          - generic [ref=e363]:
            - heading "Rs. 478" [level=2] [ref=e364]
            - paragraph [ref=e365]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e366] [cursor=pointer]:
              - generic [ref=e367]: 
              - text: Add to cart
        - list [ref=e369]:
          - listitem [ref=e370]:
            - link " View Product" [ref=e371]:
              - /url: /product_details/16
              - generic [ref=e372]: 
              - text: View Product
      - generic [ref=e374]:
        - generic [ref=e375]:
          - generic [ref=e376]:
            - img "ecommerce website products" [ref=e377]
            - heading "Rs. 1200" [level=2] [ref=e378]
            - paragraph [ref=e379]: Little Girls Mr. Panda Shirt
            - generic [ref=e380] [cursor=pointer]:
              - generic [ref=e381]: 
              - text: Add to cart
          - generic [ref=e382]:
            - heading "Rs. 1200" [level=2] [ref=e383]
            - paragraph [ref=e384]: Little Girls Mr. Panda Shirt
            - generic [ref=e385] [cursor=pointer]:
              - generic [ref=e386]: 
              - text: Add to cart
        - list [ref=e388]:
          - listitem [ref=e389]:
            - link " View Product" [ref=e390]:
              - /url: /product_details/18
              - generic [ref=e391]: 
              - text: View Product
      - generic [ref=e393]:
        - generic [ref=e394]:
          - generic [ref=e395]:
            - img "ecommerce website products" [ref=e396]
            - heading "Rs. 1050" [level=2] [ref=e397]
            - paragraph [ref=e398]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e399] [cursor=pointer]:
              - generic [ref=e400]: 
              - text: Add to cart
          - generic [ref=e401]:
            - heading "Rs. 1050" [level=2] [ref=e402]
            - paragraph [ref=e403]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e404] [cursor=pointer]:
              - generic [ref=e405]: 
              - text: Add to cart
        - list [ref=e407]:
          - listitem [ref=e408]:
            - link " View Product" [ref=e409]:
              - /url: /product_details/19
              - generic [ref=e410]: 
              - text: View Product
      - generic [ref=e412]:
        - generic [ref=e413]:
          - generic [ref=e414]:
            - img "ecommerce website products" [ref=e415]
            - heading "Rs. 1190" [level=2] [ref=e416]
            - paragraph [ref=e417]: Cotton Mull Embroidered Dress
            - generic [ref=e418] [cursor=pointer]:
              - generic [ref=e419]: 
              - text: Add to cart
          - generic [ref=e420]:
            - heading "Rs. 1190" [level=2] [ref=e421]
            - paragraph [ref=e422]: Cotton Mull Embroidered Dress
            - generic [ref=e423] [cursor=pointer]:
              - generic [ref=e424]: 
              - text: Add to cart
        - list [ref=e426]:
          - listitem [ref=e427]:
            - link " View Product" [ref=e428]:
              - /url: /product_details/20
              - generic [ref=e429]: 
              - text: View Product
      - generic [ref=e431]:
        - generic [ref=e432]:
          - generic [ref=e433]:
            - img "ecommerce website products" [ref=e434]
            - heading "Rs. 1530" [level=2] [ref=e435]
            - paragraph [ref=e436]: Blue Cotton Indie Mickey Dress
            - generic [ref=e437] [cursor=pointer]:
              - generic [ref=e438]: 
              - text: Add to cart
          - generic [ref=e439]:
            - heading "Rs. 1530" [level=2] [ref=e440]
            - paragraph [ref=e441]: Blue Cotton Indie Mickey Dress
            - generic [ref=e442] [cursor=pointer]:
              - generic [ref=e443]: 
              - text: Add to cart
        - list [ref=e445]:
          - listitem [ref=e446]:
            - link " View Product" [ref=e447]:
              - /url: /product_details/21
              - generic [ref=e448]: 
              - text: View Product
      - generic [ref=e450]:
        - generic [ref=e451]:
          - generic [ref=e452]:
            - img "ecommerce website products" [ref=e453]
            - heading "Rs. 1600" [level=2] [ref=e454]
            - paragraph [ref=e455]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e456] [cursor=pointer]:
              - generic [ref=e457]: 
              - text: Add to cart
          - generic [ref=e458]:
            - heading "Rs. 1600" [level=2] [ref=e459]
            - paragraph [ref=e460]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e461] [cursor=pointer]:
              - generic [ref=e462]: 
              - text: Add to cart
        - list [ref=e464]:
          - listitem [ref=e465]:
            - link " View Product" [ref=e466]:
              - /url: /product_details/22
              - generic [ref=e467]: 
              - text: View Product
      - generic [ref=e469]:
        - generic [ref=e470]:
          - generic [ref=e471]:
            - img "ecommerce website products" [ref=e472]
            - heading "Rs. 1100" [level=2] [ref=e473]
            - paragraph [ref=e474]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e475] [cursor=pointer]:
              - generic [ref=e476]: 
              - text: Add to cart
          - generic [ref=e477]:
            - heading "Rs. 1100" [level=2] [ref=e478]
            - paragraph [ref=e479]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e480] [cursor=pointer]:
              - generic [ref=e481]: 
              - text: Add to cart
        - list [ref=e483]:
          - listitem [ref=e484]:
            - link " View Product" [ref=e485]:
              - /url: /product_details/23
              - generic [ref=e486]: 
              - text: View Product
      - generic [ref=e488]:
        - generic [ref=e489]:
          - generic [ref=e490]:
            - img "ecommerce website products" [ref=e491]
            - heading "Rs. 849" [level=2] [ref=e492]
            - paragraph [ref=e493]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e494] [cursor=pointer]:
              - generic [ref=e495]: 
              - text: Add to cart
          - generic [ref=e496]:
            - heading "Rs. 849" [level=2] [ref=e497]
            - paragraph [ref=e498]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e499] [cursor=pointer]:
              - generic [ref=e500]: 
              - text: Add to cart
        - list [ref=e502]:
          - listitem [ref=e503]:
            - link " View Product" [ref=e504]:
              - /url: /product_details/24
              - generic [ref=e505]: 
              - text: View Product
      - generic [ref=e507]:
        - generic [ref=e508]:
          - generic [ref=e509]:
            - img "ecommerce website products" [ref=e510]
            - heading "Rs. 1299" [level=2] [ref=e511]
            - paragraph [ref=e512]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e513] [cursor=pointer]:
              - generic [ref=e514]: 
              - text: Add to cart
          - generic [ref=e515]:
            - heading "Rs. 1299" [level=2] [ref=e516]
            - paragraph [ref=e517]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e518] [cursor=pointer]:
              - generic [ref=e519]: 
              - text: Add to cart
        - list [ref=e521]:
          - listitem [ref=e522]:
            - link " View Product" [ref=e523]:
              - /url: /product_details/28
              - generic [ref=e524]: 
              - text: View Product
      - generic [ref=e526]:
        - generic [ref=e527]:
          - generic [ref=e528]:
            - img "ecommerce website products" [ref=e529]
            - heading "Rs. 1000" [level=2] [ref=e530]
            - paragraph [ref=e531]: Green Side Placket Detail T-Shirt
            - generic [ref=e532] [cursor=pointer]:
              - generic [ref=e533]: 
              - text: Add to cart
          - generic [ref=e534]:
            - heading "Rs. 1000" [level=2] [ref=e535]
            - paragraph [ref=e536]: Green Side Placket Detail T-Shirt
            - generic [ref=e537] [cursor=pointer]:
              - generic [ref=e538]: 
              - text: Add to cart
        - list [ref=e540]:
          - listitem [ref=e541]:
            - link " View Product" [ref=e542]:
              - /url: /product_details/29
              - generic [ref=e543]: 
              - text: View Product
      - generic [ref=e545]:
        - generic [ref=e546]:
          - generic [ref=e547]:
            - img "ecommerce website products" [ref=e548]
            - heading "Rs. 1500" [level=2] [ref=e549]
            - paragraph [ref=e550]: Premium Polo T-Shirts
            - generic [ref=e551] [cursor=pointer]:
              - generic [ref=e552]: 
              - text: Add to cart
          - generic [ref=e553]:
            - heading "Rs. 1500" [level=2] [ref=e554]
            - paragraph [ref=e555]: Premium Polo T-Shirts
            - generic [ref=e556] [cursor=pointer]:
              - generic [ref=e557]: 
              - text: Add to cart
        - list [ref=e559]:
          - listitem [ref=e560]:
            - link " View Product" [ref=e561]:
              - /url: /product_details/30
              - generic [ref=e562]: 
              - text: View Product
      - generic [ref=e564]:
        - generic [ref=e565]:
          - generic [ref=e566]:
            - img "ecommerce website products" [ref=e567]
            - heading "Rs. 850" [level=2] [ref=e568]
            - paragraph [ref=e569]: Pure Cotton Neon Green Tshirt
            - generic [ref=e570] [cursor=pointer]:
              - generic [ref=e571]: 
              - text: Add to cart
          - generic [ref=e572]:
            - heading "Rs. 850" [level=2] [ref=e573]
            - paragraph [ref=e574]: Pure Cotton Neon Green Tshirt
            - generic [ref=e575] [cursor=pointer]:
              - generic [ref=e576]: 
              - text: Add to cart
        - list [ref=e578]:
          - listitem [ref=e579]:
            - link " View Product" [ref=e580]:
              - /url: /product_details/31
              - generic [ref=e581]: 
              - text: View Product
      - generic [ref=e583]:
        - generic [ref=e584]:
          - generic [ref=e585]:
            - img "ecommerce website products" [ref=e586]
            - heading "Rs. 799" [level=2] [ref=e587]
            - paragraph [ref=e588]: Soft Stretch Jeans
            - generic [ref=e589] [cursor=pointer]:
              - generic [ref=e590]: 
              - text: Add to cart
          - generic [ref=e591]:
            - heading "Rs. 799" [level=2] [ref=e592]
            - paragraph [ref=e593]: Soft Stretch Jeans
            - generic [ref=e594] [cursor=pointer]:
              - generic [ref=e595]: 
              - text: Add to cart
        - list [ref=e597]:
          - listitem [ref=e598]:
            - link " View Product" [ref=e599]:
              - /url: /product_details/33
              - generic [ref=e600]: 
              - text: View Product
      - generic [ref=e602]:
        - generic [ref=e603]:
          - generic [ref=e604]:
            - img "ecommerce website products" [ref=e605]
            - heading "Rs. 1200" [level=2] [ref=e606]
            - paragraph [ref=e607]: Regular Fit Straight Jeans
            - generic [ref=e608] [cursor=pointer]:
              - generic [ref=e609]: 
              - text: Add to cart
          - generic [ref=e610]:
            - heading "Rs. 1200" [level=2] [ref=e611]
            - paragraph [ref=e612]: Regular Fit Straight Jeans
            - generic [ref=e613] [cursor=pointer]:
              - generic [ref=e614]: 
              - text: Add to cart
        - list [ref=e616]:
          - listitem [ref=e617]:
            - link " View Product" [ref=e618]:
              - /url: /product_details/35
              - generic [ref=e619]: 
              - text: View Product
      - generic [ref=e621]:
        - generic [ref=e622]:
          - generic [ref=e623]:
            - img "ecommerce website products" [ref=e624]
            - heading "Rs. 1400" [level=2] [ref=e625]
            - paragraph [ref=e626]: Grunt Blue Slim Fit Jeans
            - generic [ref=e627] [cursor=pointer]:
              - generic [ref=e628]: 
              - text: Add to cart
          - generic [ref=e629]:
            - heading "Rs. 1400" [level=2] [ref=e630]
            - paragraph [ref=e631]: Grunt Blue Slim Fit Jeans
            - generic [ref=e632] [cursor=pointer]:
              - generic [ref=e633]: 
              - text: Add to cart
        - list [ref=e635]:
          - listitem [ref=e636]:
            - link " View Product" [ref=e637]:
              - /url: /product_details/37
              - generic [ref=e638]: 
              - text: View Product
      - generic [ref=e640]:
        - generic [ref=e641]:
          - generic [ref=e642]:
            - img "ecommerce website products" [ref=e643]
            - heading "Rs. 2300" [level=2] [ref=e644]
            - paragraph [ref=e645]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e646] [cursor=pointer]:
              - generic [ref=e647]: 
              - text: Add to cart
          - generic [ref=e648]:
            - heading "Rs. 2300" [level=2] [ref=e649]
            - paragraph [ref=e650]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e651] [cursor=pointer]:
              - generic [ref=e652]: 
              - text: Add to cart
        - list [ref=e654]:
          - listitem [ref=e655]:
            - link " View Product" [ref=e656]:
              - /url: /product_details/38
              - generic [ref=e657]: 
              - text: View Product
      - generic [ref=e659]:
        - generic [ref=e660]:
          - generic [ref=e661]:
            - img "ecommerce website products" [ref=e662]
            - heading "Rs. 3000" [level=2] [ref=e663]
            - paragraph [ref=e664]: Cotton Silk Hand Block Print Saree
            - generic [ref=e665] [cursor=pointer]:
              - generic [ref=e666]: 
              - text: Add to cart
          - generic [ref=e667]:
            - heading "Rs. 3000" [level=2] [ref=e668]
            - paragraph [ref=e669]: Cotton Silk Hand Block Print Saree
            - generic [ref=e670] [cursor=pointer]:
              - generic [ref=e671]: 
              - text: Add to cart
        - list [ref=e673]:
          - listitem [ref=e674]:
            - link " View Product" [ref=e675]:
              - /url: /product_details/39
              - generic [ref=e676]: 
              - text: View Product
      - generic [ref=e678]:
        - generic [ref=e679]:
          - generic [ref=e680]:
            - img "ecommerce website products" [ref=e681]
            - heading "Rs. 3500" [level=2] [ref=e682]
            - paragraph [ref=e683]: Rust Red Linen Saree
            - generic [ref=e684] [cursor=pointer]:
              - generic [ref=e685]: 
              - text: Add to cart
          - generic [ref=e686]:
            - heading "Rs. 3500" [level=2] [ref=e687]
            - paragraph [ref=e688]: Rust Red Linen Saree
            - generic [ref=e689] [cursor=pointer]:
              - generic [ref=e690]: 
              - text: Add to cart
        - list [ref=e692]:
          - listitem [ref=e693]:
            - link " View Product" [ref=e694]:
              - /url: /product_details/40
              - generic [ref=e695]: 
              - text: View Product
      - generic [ref=e697]:
        - generic [ref=e698]:
          - generic [ref=e699]:
            - img "ecommerce website products" [ref=e700]
            - heading "Rs. 5000" [level=2] [ref=e701]
            - paragraph [ref=e702]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e703] [cursor=pointer]:
              - generic [ref=e704]: 
              - text: Add to cart
          - generic [ref=e705]:
            - heading "Rs. 5000" [level=2] [ref=e706]
            - paragraph [ref=e707]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e708] [cursor=pointer]:
              - generic [ref=e709]: 
              - text: Add to cart
        - list [ref=e711]:
          - listitem [ref=e712]:
            - link " View Product" [ref=e713]:
              - /url: /product_details/41
              - generic [ref=e714]: 
              - text: View Product
      - generic [ref=e716]:
        - generic [ref=e717]:
          - generic [ref=e718]:
            - img "ecommerce website products" [ref=e719]
            - heading "Rs. 1400" [level=2] [ref=e720]
            - paragraph [ref=e721]: Lace Top For Women
            - generic [ref=e722] [cursor=pointer]:
              - generic [ref=e723]: 
              - text: Add to cart
          - generic [ref=e724]:
            - heading "Rs. 1400" [level=2] [ref=e725]
            - paragraph [ref=e726]: Lace Top For Women
            - generic [ref=e727] [cursor=pointer]:
              - generic [ref=e728]: 
              - text: Add to cart
        - list [ref=e730]:
          - listitem [ref=e731]:
            - link " View Product" [ref=e732]:
              - /url: /product_details/42
              - generic [ref=e733]: 
              - text: View Product
      - generic [ref=e735]:
        - generic [ref=e736]:
          - generic [ref=e737]:
            - img "ecommerce website products" [ref=e738]
            - heading "Rs. 1389" [level=2] [ref=e739]
            - paragraph [ref=e740]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e741] [cursor=pointer]:
              - generic [ref=e742]: 
              - text: Add to cart
          - generic [ref=e743]:
            - heading "Rs. 1389" [level=2] [ref=e744]
            - paragraph [ref=e745]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e746] [cursor=pointer]:
              - generic [ref=e747]: 
              - text: Add to cart
        - list [ref=e749]:
          - listitem [ref=e750]:
            - link " View Product" [ref=e751]:
              - /url: /product_details/43
              - generic [ref=e752]: 
              - text: View Product
  - insertion [ref=e754]
  - contentinfo [ref=e756]:
    - generic [ref=e761]:
      - heading "Subscription" [level=2] [ref=e762]
      - generic [ref=e763]:
        - textbox "Your email address" [ref=e764]
        - button "" [ref=e765] [cursor=pointer]:
          - generic [ref=e766]: 
        - paragraph [ref=e767]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e771]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e772]:
    - iframe [ref=e775]:
      - generic [active] [ref=f30e1]:
        - generic [ref=f30e6]:
          - generic [ref=f30e8]:
            - link "Google Chrome" [ref=f30e11] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYNvrHE4carTgOKSk4bMPqfiV2QGek8_VhgHKiImvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoE9wFP0Db7TrJuzRmVLwqGF7U4kpDdYApFdTPOCgHWSm9iEzg-SMy6CKbF0KwObG_Vi-eQej1T2RhjXll0LvtqCzJOcmSO_NtRxqLXQMsmyV2rWnLNV2rNgK3mXUimgxaXiYH6XrhZZdtfe2Qw3YS7xYJHgbBv7j7GvA_bbrB_ggZT1CD1uCsPsn9UzQdaNHmNsTibYyrGkFuqAMBWPPDAUiShRaIbMKErUP-L832t0iy_amKGHGP_lrJfUf2InO1cu7Zu3OL53BhSR7r4D8O8J0HRBfoNMsQGxFup8VO6ma1r5wAEvSfEfHLWw3nJ7lR7YgsDVcd03RSBwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliKpqK35uOUA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCNLio7fm45QDFSRSeAAdKXwlG4gOCdgTDIgUBNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLeaBgBIgEA0BgB6BgBshkBL8IZAggB&gclid=EAIaIQobChMItN6jt-bjlAMVJFJ4AB0pfCUbEAEYASAAEgL5wPD_BwE&num=1&cid=CAQSnwIABaugfRxWo5Pd0dfkD4ddEfBxog1n0GOSc4ePKfnModUOMT2Ilo7NsBr7KV-58AM3aPb5hjJiVi_pq0dBe7oXbGMsNp8UmPLVVnQt3NfO2nMvBRp8gU-MvoiCnugAlqKd-nqAxms20KZNGE1UzNQwgMawGsy7pQHehRYJ7ND2PCmHD6mLV8zsL3SjgCSlhO18F63bcY6quRd_aOdeHzrJHRVGgiQmYRqqdAIZwDUflT93ISaHm6lFXGHrehapUc5peIJnbUesmRmPxnEwFv0s0dhFDZShqEW4eA_uKjTRDyK-rBYDD_fqyGYlWb1KMgG2mKYuFqEXaFyjMnafZVozsdOv4lu9wBQBpj8L9n8hj9qBOGCBv429cWOr-hUcLBgB&sig=AOD64_3tPDiaDQRoX3Q143IJ8TMaXi2QJw&client=ca-pub-1677597403311019&rf=1&nb=19&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - img "Google Chrome" [ref=f30e12]
            - generic [ref=f30e13]:
              - generic "Google Chrome" [ref=f30e14]:
                - link "Download Google Chrome" [ref=f30e16] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYNvrHE4carTgOKSk4bMPqfiV2QGek8_VhgHKiImvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoE9wFP0Db7TrJuzRmVLwqGF7U4kpDdYApFdTPOCgHWSm9iEzg-SMy6CKbF0KwObG_Vi-eQej1T2RhjXll0LvtqCzJOcmSO_NtRxqLXQMsmyV2rWnLNV2rNgK3mXUimgxaXiYH6XrhZZdtfe2Qw3YS7xYJHgbBv7j7GvA_bbrB_ggZT1CD1uCsPsn9UzQdaNHmNsTibYyrGkFuqAMBWPPDAUiShRaIbMKErUP-L832t0iy_amKGHGP_lrJfUf2InO1cu7Zu3OL53BhSR7r4D8O8J0HRBfoNMsQGxFup8VO6ma1r5wAEvSfEfHLWw3nJ7lR7YgsDVcd03RSBwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliKpqK35uOUA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCNLio7fm45QDFSRSeAAdKXwlG4gOCdgTDIgUBNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLeaBgBIgEA0BgB6BgBshkBL8IZAggB&gclid=EAIaIQobChMItN6jt-bjlAMVJFJ4AB0pfCUbEAEYASAAEgL5wPD_BwE&num=1&cid=CAQSnwIABaugfRxWo5Pd0dfkD4ddEfBxog1n0GOSc4ePKfnModUOMT2Ilo7NsBr7KV-58AM3aPb5hjJiVi_pq0dBe7oXbGMsNp8UmPLVVnQt3NfO2nMvBRp8gU-MvoiCnugAlqKd-nqAxms20KZNGE1UzNQwgMawGsy7pQHehRYJ7ND2PCmHD6mLV8zsL3SjgCSlhO18F63bcY6quRd_aOdeHzrJHRVGgiQmYRqqdAIZwDUflT93ISaHm6lFXGHrehapUc5peIJnbUesmRmPxnEwFv0s0dhFDZShqEW4eA_uKjTRDyK-rBYDD_fqyGYlWb1KMgG2mKYuFqEXaFyjMnafZVozsdOv4lu9wBQBpj8L9n8hj9qBOGCBv429cWOr-hUcLBgB&sig=AOD64_3tPDiaDQRoX3Q143IJ8TMaXi2QJw&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - link "Download Chrome today for a fast and secure browsing experience. Google Chrome" [ref=f30e18] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYNvrHE4carTgOKSk4bMPqfiV2QGek8_VhgHKiImvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoE9wFP0Db7TrJuzRmVLwqGF7U4kpDdYApFdTPOCgHWSm9iEzg-SMy6CKbF0KwObG_Vi-eQej1T2RhjXll0LvtqCzJOcmSO_NtRxqLXQMsmyV2rWnLNV2rNgK3mXUimgxaXiYH6XrhZZdtfe2Qw3YS7xYJHgbBv7j7GvA_bbrB_ggZT1CD1uCsPsn9UzQdaNHmNsTibYyrGkFuqAMBWPPDAUiShRaIbMKErUP-L832t0iy_amKGHGP_lrJfUf2InO1cu7Zu3OL53BhSR7r4D8O8J0HRBfoNMsQGxFup8VO6ma1r5wAEvSfEfHLWw3nJ7lR7YgsDVcd03RSBwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliKpqK35uOUA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCNLio7fm45QDFSRSeAAdKXwlG4gOCdgTDIgUBNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLeaBgBIgEA0BgB6BgBshkBL8IZAggB&gclid=EAIaIQobChMItN6jt-bjlAMVJFJ4AB0pfCUbEAEYASAAEgL5wPD_BwE&num=1&cid=CAQSnwIABaugfRxWo5Pd0dfkD4ddEfBxog1n0GOSc4ePKfnModUOMT2Ilo7NsBr7KV-58AM3aPb5hjJiVi_pq0dBe7oXbGMsNp8UmPLVVnQt3NfO2nMvBRp8gU-MvoiCnugAlqKd-nqAxms20KZNGE1UzNQwgMawGsy7pQHehRYJ7ND2PCmHD6mLV8zsL3SjgCSlhO18F63bcY6quRd_aOdeHzrJHRVGgiQmYRqqdAIZwDUflT93ISaHm6lFXGHrehapUc5peIJnbUesmRmPxnEwFv0s0dhFDZShqEW4eA_uKjTRDyK-rBYDD_fqyGYlWb1KMgG2mKYuFqEXaFyjMnafZVozsdOv4lu9wBQBpj8L9n8hj9qBOGCBv429cWOr-hUcLBgB&sig=AOD64_3tPDiaDQRoX3Q143IJ8TMaXi2QJw&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
                - text: Download Chrome today for a fast and secure browsing experience. Google
                - text: Chrome
          - link "Download" [ref=f30e21] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CYNvrHE4carTgOKSk4bMPqfiV2QGek8_VhgHKiImvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoE9wFP0Db7TrJuzRmVLwqGF7U4kpDdYApFdTPOCgHWSm9iEzg-SMy6CKbF0KwObG_Vi-eQej1T2RhjXll0LvtqCzJOcmSO_NtRxqLXQMsmyV2rWnLNV2rNgK3mXUimgxaXiYH6XrhZZdtfe2Qw3YS7xYJHgbBv7j7GvA_bbrB_ggZT1CD1uCsPsn9UzQdaNHmNsTibYyrGkFuqAMBWPPDAUiShRaIbMKErUP-L832t0iy_amKGHGP_lrJfUf2InO1cu7Zu3OL53BhSR7r4D8O8J0HRBfoNMsQGxFup8VO6ma1r5wAEvSfEfHLWw3nJ7lR7YgsDVcd03RSBwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliKpqK35uOUA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMA5ABAaoNAklOyA0B6g0TCNLio7fm45QDFSRSeAAdKXwlG4gOCdgTDIgUBNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLeaBgBIgEA0BgB6BgBshkBL8IZAggB&gclid=EAIaIQobChMItN6jt-bjlAMVJFJ4AB0pfCUbEAEYASAAEgL5wPD_BwE&num=1&cid=CAQSnwIABaugfRxWo5Pd0dfkD4ddEfBxog1n0GOSc4ePKfnModUOMT2Ilo7NsBr7KV-58AM3aPb5hjJiVi_pq0dBe7oXbGMsNp8UmPLVVnQt3NfO2nMvBRp8gU-MvoiCnugAlqKd-nqAxms20KZNGE1UzNQwgMawGsy7pQHehRYJ7ND2PCmHD6mLV8zsL3SjgCSlhO18F63bcY6quRd_aOdeHzrJHRVGgiQmYRqqdAIZwDUflT93ISaHm6lFXGHrehapUc5peIJnbUesmRmPxnEwFv0s0dhFDZShqEW4eA_uKjTRDyK-rBYDD_fqyGYlWb1KMgG2mKYuFqEXaFyjMnafZVozsdOv4lu9wBQBpj8L9n8hj9qBOGCBv429cWOr-hUcLBgB&sig=AOD64_3tPDiaDQRoX3Q143IJ8TMaXi2QJw&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - generic [ref=f30e24]:
              - generic [ref=f30e25]: Download
              - img [ref=f30e26]
        - img [ref=f30e31] [cursor=pointer]
        - button [ref=f30e33] [cursor=pointer]:
          - img [ref=f30e34]
        - iframe
```

# Test source

```ts
  36  | 
  37  |         this.productBrand =
  38  |             page.locator('.brands_products');
  39  |         this.allProductsHeading = page.getByText(
  40  |             'All Products'
  41  |         );
  42  | 
  43  |         this.proceedToCheckoutBtn = page.getByText(
  44  |             'Proceed To Checkout'
  45  |         );
  46  | 
  47  |         this.checkoutText = page.locator(
  48  |             '#cart_items'
  49  |         );
  50  | 
  51  |         this.registerLoginBtn = page.getByRole(
  52  |             'link',
  53  |             { name: 'Register / Login' }
  54  |         );
  55  | 
  56  |         // Product Buttons
  57  |         this.productsBtn = page.getByRole(
  58  |             'link',
  59  |             { name: 'Products' }
  60  |         );
  61  | 
  62  |         this.viewProductBtn = page.locator(
  63  |             'a[href*="/product_details/"]'
  64  |         ).first();
  65  | 
  66  |         // Search
  67  |         this.searchInput = page.locator(
  68  |             '#search_product'
  69  |         );
  70  | 
  71  |         this.searchBtn = page.locator(
  72  |             '#submit_search'
  73  |         );
  74  | 
  75  |         this.productTitles = page.locator(
  76  |             '.productinfo p'
  77  |         );
  78  | 
  79  |         // Product Details
  80  |         this.productDetailName = page.locator(
  81  |             '.product-information h2'
  82  |         );
  83  | 
  84  |         // Cart
  85  |         this.addToCartBtn = page.locator(
  86  |             '.add-to-cart'
  87  |         ).first();
  88  |         this.secondAddToCartBtn = page.locator(
  89  |             '.features_items .product-image-wrapper'
  90  |         ).nth(1).locator('.add-to-cart').first();
  91  | 
  92  |         this.continueShoppingBtn = page.getByRole(
  93  |             'button',
  94  |             { name: 'Continue Shopping' }
  95  |         );
  96  | 
  97  |         this.cartBtn = page.getByRole('link', {
  98  |             name: /cart/i
  99  |         });
  100 | 
  101 |         this.cartProduct = page.locator(
  102 |             '.cart_description h4 a'
  103 |         );
  104 | 
  105 |         this.removeCartBtn = page.locator(
  106 |             '.cart_quantity_delete'
  107 |         );
  108 | 
  109 |         this.cartQuantity = page.locator(
  110 |             '.cart_quantity'
  111 |         );
  112 |     }
  113 | 
  114 |     async goto() {
  115 | 
  116 |         await this.page.goto(
  117 |     'https://automationexercise.com/',
  118 |     {
  119 |         waitUntil: 'domcontentloaded',
  120 |         timeout: 90000
  121 |     }
  122 | );
  123 | 
  124 | await this.page.waitForTimeout(3000);
  125 |     }
  126 | 
  127 |    async openProductsPage() {
  128 | 
  129 |     await this.productsBtn.click({
  130 |         force: true
  131 |     });
  132 | 
  133 |     await this.page.waitForTimeout(3000);
  134 | 
  135 |     if (this.page.url().includes('#google_vignette')) {
> 136 |         await this.page.goto(
      |                         ^ TimeoutError: page.goto: Timeout 60000ms exceeded.
  137 |             'https://automationexercise.com/products'
  138 |         );
  139 |     }
  140 | }
  141 | 
  142 |     async searchProduct(productName) {
  143 | 
  144 |         await this.searchInput.waitFor({
  145 |             state: 'visible',
  146 |             timeout: 10000
  147 |         });
  148 | 
  149 |         await this.searchInput.fill(productName);
  150 | 
  151 |        await this.searchBtn.click();
  152 |     }
  153 | 
  154 |     async openFirstProduct() {
  155 | 
  156 |         await this.viewProductBtn.click({
  157 |             force: true
  158 |         });
  159 |     }
  160 | async addFirstProductToCart() {
  161 | 
  162 |     await this.addToCartBtn.click({
  163 |         force: true
  164 |     });
  165 | 
  166 |     await this.page.waitForTimeout(2000);
  167 | 
  168 |     await this.continueShoppingBtn.waitFor({
  169 |         state: 'visible',
  170 |         timeout: 15000
  171 |     });
  172 | }
  173 | 
  174 |     async addSecondProductToCart() {
  175 | 
  176 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  177 | 
  178 |         await this.secondAddToCartBtn.click();
  179 |     }
  180 | 
  181 |     async continueShopping() {
  182 | 
  183 |         await this.continueShoppingBtn.waitFor({
  184 |             state: 'visible',
  185 |             timeout: 10000
  186 |         });
  187 | 
  188 |         await this.continueShoppingBtn.click();
  189 |     }
  190 | 
  191 |     async openCart() {
  192 |         await Promise.all([
  193 |             this.page.waitForURL('**/view_cart'),
  194 |             this.cartBtn.click()
  195 |         ]);
  196 |     }
  197 | 
  198 |     async removeProductFromCart() {
  199 | 
  200 |         await this.removeCartBtn.click({
  201 |             force: true
  202 |         });
  203 |     }
  204 | 
  205 | }
  206 | 
  207 | module.exports = ProductPage;
```