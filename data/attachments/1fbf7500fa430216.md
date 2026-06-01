# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\quantityUpdate.spec.js >> Verify Product Quantity Update In Cart
- Location: tests\cart\quantityUpdate.spec.js:5:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Continue Shopping' }) to be visible

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
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - insertion [ref=e69]:
        - iframe [ref=e71]:
          - iframe [ref=f18e1]:
            - generic [ref=f29e2]:
              - iframe [ref=f29e3] [cursor=pointer]
              - link [ref=f29e4] [cursor=pointer]:
                - /url: https://insight.adsrvr.org/track/clk?imp=3f46a631-668d-4be1-ab1c-f3a4af5b4ed1&ag=n50ahro&sfe=1c548bc4&sig=lOyOxVXncakoC0akhHJkNDRrexRuuoyDxVh008cS2v8.&crid=juiys8k2&cf=10705085&fq=0&t=1&td_s=automationexercise.com&rcats=&mste=&mfld=2&mssi=&mfsi=&sv=google&uhow=34&agsa=&wp=ah0LxAAIuEkFOqwpACljW487luq-oT9-pGxW8Q&rgz=731101&dt=PC&osf=Windows&os=Windows10&br=Firefox&svpid=pub-1677597403311019&rlangs=en&mlang=&did=&rcxt=Other&tmpc=35.110000000000014&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&crrelr=&npt=&cc=3~KLUv_WPYfRZoCQIVDABEDzGmRj-NZuFLEasc86SvW07RQgduNTBhaHJvSK_01g1QvbGNBVoIanVpeXM4azJg0tn-b25Pek1tM0FYWXRzaFVES2QxdG9sTW9ZAiQEU3UzMTEwNDAzrtuJ6JXiLRggOW52bTc0YdAC_tuKA-jhVbCKBB1iMWF8ZGFtfLOGg6Lonz8KMTDLkvGktqixFmJSX3A0MHh2dlJwOUp3eDJKRlBKZCeWQM3VfFDSoUbE-huIOPZVUMlEEaCaA8oPqLiQ5uXt7onGAcGK0YrRpAEGiFEIBgKYEwCoEzzIEzzQEwD9EzMzkz-AFAGgFACwFAC4FADIFAAr_EJo4vrlGyQA1mXMeS_toMS2Z52rRONfXVRWIxRUOiJh6bdm2cLhOP4eYdeB21MM03SFLKCaGOVV8aXXtiW2wNQDxD4adZVEgkyG00UfltJiykIh51ohxiwavmKSo4p4OJEqKyMgL1n2Z5ZXljOHdFFexDqEveanCyumzunVZHZETVaxbCEWQVwaFg..&dur=1~KLUv_SMFoCgkXbUAAEggAigFTUTbwT0DfACfji89wd3jDnw.&durs=0bmUmp&bdc=13&testid=b1a%7Cdam%7CGoogle-ORtb-Migration&fpa=573&pcm=3&ict=Unknown&said=bR_p40xvvRp9Jwx2JFPJdQ&auct=1&tail=1&r=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCD0ZXxAsdasnwIqnY6tkP28al2Qa-p-f2dPb-j45XwI23ARABIP20npUBYOWCgIDkDsgBCagDAcgDAqoE1wFP0EdMSk3LGpkfvmrhDAXdM46uZaBmw1VKxOQHYFZcah9aI-5lL27KNH8MQRRxo-u-rBhdvskSXNXim59y3X_je85x2pVrEg11IC7P_U38yHuKLUYd_BlhG52_029c35nyXgxSejJR5t50LdYknbgIgHwBnAmioLkyUaoYaO2QxLYCPoUsZmBaUregJ1NWiktpXUnw7oODvHJQ5WiPjHmFwTtUcPjptEjFWDEAZMoNhTYNwn9XbxTbIr_NLF-0RjV7Dt73zvCIs4APB889NiLgqTNg1ItRSYAGzKTRqeXJzZMEoAYhqAeT2LECqAeU2LECqAeV2LECqAemvhuoB5bYG6gHqpuxAqgH_56xAqgH35-xAqgHrb6xAqgHv9OxAtgHANIILgiAYRABMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYoJC7ppvllAP6CwIIAYAMAaoNAklO6g0TCOfowKab5ZQDFSmsOgUdW2Mpa4gOCdAVAYAXAbIXBBgMUAE%26num%3D1%26sig%3DAOD64_1Ht0DsiOnIZGjgeHiCnfLHWt16cA%26client%3Dca-pub-1677597403311019%26adurl%3Dhttps://netshort.onelink.me/XC68?pid=thetradedesk_int&af_siteid=automationexercise.com&c=9nvm74a&af_c_id=9nvm74a&af_adset_id=n50ahro&af_ad_id=juiys8k2&af_click_lookback=7d&clickid=3f46a631-668d-4be1-ab1c-f3a4af5b4ed1&idfa=&advertising_id=&android_id=
                - img [ref=f29e5]
      - generic [ref=e72]:
        - heading "Brands" [level=2] [ref=e73]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "(6) Polo" [ref=e77] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e78]: (6)
              - text: Polo
          - listitem [ref=e79]:
            - link "(5) H&M" [ref=e80] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e81]: (5)
              - text: H&M
          - listitem [ref=e82]:
            - link "(5) Madame" [ref=e83] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e84]: (5)
              - text: Madame
          - listitem [ref=e85]:
            - link "(3) Mast & Harbour" [ref=e86] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e87]: (3)
              - text: Mast & Harbour
          - listitem [ref=e88]:
            - link "(4) Babyhug" [ref=e89] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e90]: (4)
              - text: Babyhug
          - listitem [ref=e91]:
            - link "(3) Allen Solly Junior" [ref=e92] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e93]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e94]:
            - link "(3) Kookie Kids" [ref=e95] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e96]: (3)
              - text: Kookie Kids
          - listitem [ref=e97]:
            - link "(5) Biba" [ref=e98] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e99]: (5)
              - text: Biba
    - generic [ref=e101]:
      - heading "All Products" [level=2] [ref=e102]
      - generic [ref=e104]:
        - generic [ref=e105]:
          - generic [ref=e106]:
            - img "ecommerce website products" [ref=e107]
            - heading "Rs. 500" [level=2] [ref=e108]
            - paragraph [ref=e109]: Blue Top
            - generic [ref=e110] [cursor=pointer]:
              - generic [ref=e111]: 
              - text: Add to cart
          - generic [ref=e113]:
            - heading "Rs. 500" [level=2] [ref=e114]
            - paragraph [ref=e115]: Blue Top
            - generic [ref=e116] [cursor=pointer]:
              - generic [ref=e117]: 
              - text: Add to cart
        - list [ref=e119]:
          - listitem [ref=e120]:
            - link " View Product" [ref=e121] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e122]: 
              - text: View Product
      - generic [ref=e124]:
        - generic [ref=e125]:
          - generic [ref=e126]:
            - img "ecommerce website products" [ref=e127]
            - heading "Rs. 400" [level=2] [ref=e128]
            - paragraph [ref=e129]: Men Tshirt
            - generic [ref=e130] [cursor=pointer]:
              - generic [ref=e131]: 
              - text: Add to cart
          - generic [ref=e132]:
            - heading "Rs. 400" [level=2] [ref=e133]
            - paragraph [ref=e134]: Men Tshirt
            - generic [ref=e135] [cursor=pointer]:
              - generic [ref=e136]: 
              - text: Add to cart
        - list [ref=e138]:
          - listitem [ref=e139]:
            - link " View Product" [ref=e140] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e141]: 
              - text: View Product
      - generic [ref=e143]:
        - generic [ref=e144]:
          - generic [ref=e145]:
            - img "ecommerce website products" [ref=e146]
            - heading "Rs. 1000" [level=2] [ref=e147]
            - paragraph [ref=e148]: Sleeveless Dress
            - generic [ref=e149] [cursor=pointer]:
              - generic [ref=e150]: 
              - text: Add to cart
          - generic [ref=e151]:
            - heading "Rs. 1000" [level=2] [ref=e152]
            - paragraph [ref=e153]: Sleeveless Dress
            - generic [ref=e154] [cursor=pointer]:
              - generic [ref=e155]: 
              - text: Add to cart
        - list [ref=e157]:
          - listitem [ref=e158]:
            - link " View Product" [ref=e159] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e160]: 
              - text: View Product
      - generic [ref=e162]:
        - generic [ref=e163]:
          - generic [ref=e164]:
            - img "ecommerce website products" [ref=e165]
            - heading "Rs. 1500" [level=2] [ref=e166]
            - paragraph [ref=e167]: Stylish Dress
            - generic [ref=e168] [cursor=pointer]:
              - generic [ref=e169]: 
              - text: Add to cart
          - generic [ref=e170]:
            - heading "Rs. 1500" [level=2] [ref=e171]
            - paragraph [ref=e172]: Stylish Dress
            - generic [ref=e173] [cursor=pointer]:
              - generic [ref=e174]: 
              - text: Add to cart
        - list [ref=e176]:
          - listitem [ref=e177]:
            - link " View Product" [ref=e178] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e179]: 
              - text: View Product
      - generic [ref=e181]:
        - generic [ref=e182]:
          - generic [ref=e183]:
            - img "ecommerce website products" [ref=e184]
            - heading "Rs. 600" [level=2] [ref=e185]
            - paragraph [ref=e186]: Winter Top
            - generic [ref=e187] [cursor=pointer]:
              - generic [ref=e188]: 
              - text: Add to cart
          - generic [ref=e189]:
            - heading "Rs. 600" [level=2] [ref=e190]
            - paragraph [ref=e191]: Winter Top
            - generic [ref=e192] [cursor=pointer]:
              - generic [ref=e193]: 
              - text: Add to cart
        - list [ref=e195]:
          - listitem [ref=e196]:
            - link " View Product" [ref=e197] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e198]: 
              - text: View Product
      - generic [ref=e200]:
        - generic [ref=e201]:
          - generic [ref=e202]:
            - img "ecommerce website products" [ref=e203]
            - heading "Rs. 400" [level=2] [ref=e204]
            - paragraph [ref=e205]: Summer White Top
            - generic [ref=e206] [cursor=pointer]:
              - generic [ref=e207]: 
              - text: Add to cart
          - generic [ref=e208]:
            - heading "Rs. 400" [level=2] [ref=e209]
            - paragraph [ref=e210]: Summer White Top
            - generic [ref=e211] [cursor=pointer]:
              - generic [ref=e212]: 
              - text: Add to cart
        - list [ref=e214]:
          - listitem [ref=e215]:
            - link " View Product" [ref=e216] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e217]: 
              - text: View Product
      - generic [ref=e219]:
        - generic [ref=e220]:
          - generic [ref=e221]:
            - img "ecommerce website products" [ref=e222]
            - heading "Rs. 1000" [level=2] [ref=e223]
            - paragraph [ref=e224]: Madame Top For Women
            - generic [ref=e225] [cursor=pointer]:
              - generic [ref=e226]: 
              - text: Add to cart
          - generic [ref=e227]:
            - heading "Rs. 1000" [level=2] [ref=e228]
            - paragraph [ref=e229]: Madame Top For Women
            - generic [ref=e230] [cursor=pointer]:
              - generic [ref=e231]: 
              - text: Add to cart
        - list [ref=e233]:
          - listitem [ref=e234]:
            - link " View Product" [ref=e235] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e236]: 
              - text: View Product
      - generic [ref=e238]:
        - generic [ref=e239]:
          - generic [ref=e240]:
            - img "ecommerce website products" [ref=e241]
            - heading "Rs. 700" [level=2] [ref=e242]
            - paragraph [ref=e243]: Fancy Green Top
            - generic [ref=e244] [cursor=pointer]:
              - generic [ref=e245]: 
              - text: Add to cart
          - generic [ref=e246]:
            - heading "Rs. 700" [level=2] [ref=e247]
            - paragraph [ref=e248]: Fancy Green Top
            - generic [ref=e249] [cursor=pointer]:
              - generic [ref=e250]: 
              - text: Add to cart
        - list [ref=e252]:
          - listitem [ref=e253]:
            - link " View Product" [ref=e254] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e255]: 
              - text: View Product
      - generic [ref=e257]:
        - generic [ref=e258]:
          - generic [ref=e259]:
            - img "ecommerce website products" [ref=e260]
            - heading "Rs. 499" [level=2] [ref=e261]
            - paragraph [ref=e262]: Sleeves Printed Top - White
            - generic [ref=e263] [cursor=pointer]:
              - generic [ref=e264]: 
              - text: Add to cart
          - generic [ref=e265]:
            - heading "Rs. 499" [level=2] [ref=e266]
            - paragraph [ref=e267]: Sleeves Printed Top - White
            - generic [ref=e268] [cursor=pointer]:
              - generic [ref=e269]: 
              - text: Add to cart
        - list [ref=e271]:
          - listitem [ref=e272]:
            - link " View Product" [ref=e273] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e274]: 
              - text: View Product
      - generic [ref=e276]:
        - generic [ref=e277]:
          - generic [ref=e278]:
            - img "ecommerce website products" [ref=e279]
            - heading "Rs. 359" [level=2] [ref=e280]
            - paragraph [ref=e281]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e282] [cursor=pointer]:
              - generic [ref=e283]: 
              - text: Add to cart
          - generic [ref=e284]:
            - heading "Rs. 359" [level=2] [ref=e285]
            - paragraph [ref=e286]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e287] [cursor=pointer]:
              - generic [ref=e288]: 
              - text: Add to cart
        - list [ref=e290]:
          - listitem [ref=e291]:
            - link " View Product" [ref=e292] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e293]: 
              - text: View Product
      - generic [ref=e295]:
        - generic [ref=e296]:
          - generic [ref=e297]:
            - img "ecommerce website products" [ref=e298]
            - heading "Rs. 278" [level=2] [ref=e299]
            - paragraph [ref=e300]: Frozen Tops For Kids
            - generic [ref=e301] [cursor=pointer]:
              - generic [ref=e302]: 
              - text: Add to cart
          - generic [ref=e303]:
            - heading "Rs. 278" [level=2] [ref=e304]
            - paragraph [ref=e305]: Frozen Tops For Kids
            - generic [ref=e306] [cursor=pointer]:
              - generic [ref=e307]: 
              - text: Add to cart
        - list [ref=e309]:
          - listitem [ref=e310]:
            - link " View Product" [ref=e311] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e312]: 
              - text: View Product
      - generic [ref=e314]:
        - generic [ref=e315]:
          - generic [ref=e316]:
            - img "ecommerce website products" [ref=e317]
            - heading "Rs. 679" [level=2] [ref=e318]
            - paragraph [ref=e319]: Full Sleeves Top Cherry - Pink
            - generic [ref=e320] [cursor=pointer]:
              - generic [ref=e321]: 
              - text: Add to cart
          - generic [ref=e322]:
            - heading "Rs. 679" [level=2] [ref=e323]
            - paragraph [ref=e324]: Full Sleeves Top Cherry - Pink
            - generic [ref=e325] [cursor=pointer]:
              - generic [ref=e326]: 
              - text: Add to cart
        - list [ref=e328]:
          - listitem [ref=e329]:
            - link " View Product" [ref=e330] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e331]: 
              - text: View Product
      - generic [ref=e333]:
        - generic [ref=e334]:
          - generic [ref=e335]:
            - img "ecommerce website products" [ref=e336]
            - heading "Rs. 315" [level=2] [ref=e337]
            - paragraph [ref=e338]: Printed Off Shoulder Top - White
            - generic [ref=e339] [cursor=pointer]:
              - generic [ref=e340]: 
              - text: Add to cart
          - generic [ref=e341]:
            - heading "Rs. 315" [level=2] [ref=e342]
            - paragraph [ref=e343]: Printed Off Shoulder Top - White
            - generic [ref=e344] [cursor=pointer]:
              - generic [ref=e345]: 
              - text: Add to cart
        - list [ref=e347]:
          - listitem [ref=e348]:
            - link " View Product" [ref=e349] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e350]: 
              - text: View Product
      - generic [ref=e352]:
        - generic [ref=e353]:
          - generic [ref=e354]:
            - img "ecommerce website products" [ref=e355]
            - heading "Rs. 478" [level=2] [ref=e356]
            - paragraph [ref=e357]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e358] [cursor=pointer]:
              - generic [ref=e359]: 
              - text: Add to cart
          - generic [ref=e360]:
            - heading "Rs. 478" [level=2] [ref=e361]
            - paragraph [ref=e362]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e363] [cursor=pointer]:
              - generic [ref=e364]: 
              - text: Add to cart
        - list [ref=e366]:
          - listitem [ref=e367]:
            - link " View Product" [ref=e368] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e369]: 
              - text: View Product
      - generic [ref=e371]:
        - generic [ref=e372]:
          - generic [ref=e373]:
            - img "ecommerce website products" [ref=e374]
            - heading "Rs. 1200" [level=2] [ref=e375]
            - paragraph [ref=e376]: Little Girls Mr. Panda Shirt
            - generic [ref=e377] [cursor=pointer]:
              - generic [ref=e378]: 
              - text: Add to cart
          - generic [ref=e379]:
            - heading "Rs. 1200" [level=2] [ref=e380]
            - paragraph [ref=e381]: Little Girls Mr. Panda Shirt
            - generic [ref=e382] [cursor=pointer]:
              - generic [ref=e383]: 
              - text: Add to cart
        - list [ref=e385]:
          - listitem [ref=e386]:
            - link " View Product" [ref=e387] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e388]: 
              - text: View Product
      - generic [ref=e390]:
        - generic [ref=e391]:
          - generic [ref=e392]:
            - img "ecommerce website products" [ref=e393]
            - heading "Rs. 1050" [level=2] [ref=e394]
            - paragraph [ref=e395]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e396] [cursor=pointer]:
              - generic [ref=e397]: 
              - text: Add to cart
          - generic [ref=e398]:
            - heading "Rs. 1050" [level=2] [ref=e399]
            - paragraph [ref=e400]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e401] [cursor=pointer]:
              - generic [ref=e402]: 
              - text: Add to cart
        - list [ref=e404]:
          - listitem [ref=e405]:
            - link " View Product" [ref=e406] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e407]: 
              - text: View Product
      - generic [ref=e409]:
        - generic [ref=e410]:
          - generic [ref=e411]:
            - img "ecommerce website products" [ref=e412]
            - heading "Rs. 1190" [level=2] [ref=e413]
            - paragraph [ref=e414]: Cotton Mull Embroidered Dress
            - generic [ref=e415] [cursor=pointer]:
              - generic [ref=e416]: 
              - text: Add to cart
          - generic [ref=e417]:
            - heading "Rs. 1190" [level=2] [ref=e418]
            - paragraph [ref=e419]: Cotton Mull Embroidered Dress
            - generic [ref=e420] [cursor=pointer]:
              - generic [ref=e421]: 
              - text: Add to cart
        - list [ref=e423]:
          - listitem [ref=e424]:
            - link " View Product" [ref=e425] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e426]: 
              - text: View Product
      - generic [ref=e428]:
        - generic [ref=e429]:
          - generic [ref=e430]:
            - img "ecommerce website products" [ref=e431]
            - heading "Rs. 1530" [level=2] [ref=e432]
            - paragraph [ref=e433]: Blue Cotton Indie Mickey Dress
            - generic [ref=e434] [cursor=pointer]:
              - generic [ref=e435]: 
              - text: Add to cart
          - generic [ref=e436]:
            - heading "Rs. 1530" [level=2] [ref=e437]
            - paragraph [ref=e438]: Blue Cotton Indie Mickey Dress
            - generic [ref=e439] [cursor=pointer]:
              - generic [ref=e440]: 
              - text: Add to cart
        - list [ref=e442]:
          - listitem [ref=e443]:
            - link " View Product" [ref=e444] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e445]: 
              - text: View Product
      - generic [ref=e447]:
        - generic [ref=e448]:
          - generic [ref=e449]:
            - img "ecommerce website products" [ref=e450]
            - heading "Rs. 1600" [level=2] [ref=e451]
            - paragraph [ref=e452]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e453] [cursor=pointer]:
              - generic [ref=e454]: 
              - text: Add to cart
          - generic [ref=e455]:
            - heading "Rs. 1600" [level=2] [ref=e456]
            - paragraph [ref=e457]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e458] [cursor=pointer]:
              - generic [ref=e459]: 
              - text: Add to cart
        - list [ref=e461]:
          - listitem [ref=e462]:
            - link " View Product" [ref=e463] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e464]: 
              - text: View Product
      - generic [ref=e466]:
        - generic [ref=e467]:
          - generic [ref=e468]:
            - img "ecommerce website products" [ref=e469]
            - heading "Rs. 1100" [level=2] [ref=e470]
            - paragraph [ref=e471]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e472] [cursor=pointer]:
              - generic [ref=e473]: 
              - text: Add to cart
          - generic [ref=e474]:
            - heading "Rs. 1100" [level=2] [ref=e475]
            - paragraph [ref=e476]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e477] [cursor=pointer]:
              - generic [ref=e478]: 
              - text: Add to cart
        - list [ref=e480]:
          - listitem [ref=e481]:
            - link " View Product" [ref=e482] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e483]: 
              - text: View Product
      - generic [ref=e485]:
        - generic [ref=e486]:
          - generic [ref=e487]:
            - img "ecommerce website products" [ref=e488]
            - heading "Rs. 849" [level=2] [ref=e489]
            - paragraph [ref=e490]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e491] [cursor=pointer]:
              - generic [ref=e492]: 
              - text: Add to cart
          - generic [ref=e493]:
            - heading "Rs. 849" [level=2] [ref=e494]
            - paragraph [ref=e495]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e496] [cursor=pointer]:
              - generic [ref=e497]: 
              - text: Add to cart
        - list [ref=e499]:
          - listitem [ref=e500]:
            - link " View Product" [ref=e501] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e502]: 
              - text: View Product
      - generic [ref=e504]:
        - generic [ref=e505]:
          - generic [ref=e506]:
            - img "ecommerce website products" [ref=e507]
            - heading "Rs. 1299" [level=2] [ref=e508]
            - paragraph [ref=e509]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e510] [cursor=pointer]:
              - generic [ref=e511]: 
              - text: Add to cart
          - generic [ref=e512]:
            - heading "Rs. 1299" [level=2] [ref=e513]
            - paragraph [ref=e514]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e515] [cursor=pointer]:
              - generic [ref=e516]: 
              - text: Add to cart
        - list [ref=e518]:
          - listitem [ref=e519]:
            - link " View Product" [ref=e520] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e521]: 
              - text: View Product
      - generic [ref=e523]:
        - generic [ref=e524]:
          - generic [ref=e525]:
            - img "ecommerce website products" [ref=e526]
            - heading "Rs. 1000" [level=2] [ref=e527]
            - paragraph [ref=e528]: Green Side Placket Detail T-Shirt
            - generic [ref=e529] [cursor=pointer]:
              - generic [ref=e530]: 
              - text: Add to cart
          - generic [ref=e531]:
            - heading "Rs. 1000" [level=2] [ref=e532]
            - paragraph [ref=e533]: Green Side Placket Detail T-Shirt
            - generic [ref=e534] [cursor=pointer]:
              - generic [ref=e535]: 
              - text: Add to cart
        - list [ref=e537]:
          - listitem [ref=e538]:
            - link " View Product" [ref=e539] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e540]: 
              - text: View Product
      - generic [ref=e542]:
        - generic [ref=e543]:
          - generic [ref=e544]:
            - img "ecommerce website products" [ref=e545]
            - heading "Rs. 1500" [level=2] [ref=e546]
            - paragraph [ref=e547]: Premium Polo T-Shirts
            - generic [ref=e548] [cursor=pointer]:
              - generic [ref=e549]: 
              - text: Add to cart
          - generic [ref=e550]:
            - heading "Rs. 1500" [level=2] [ref=e551]
            - paragraph [ref=e552]: Premium Polo T-Shirts
            - generic [ref=e553] [cursor=pointer]:
              - generic [ref=e554]: 
              - text: Add to cart
        - list [ref=e556]:
          - listitem [ref=e557]:
            - link " View Product" [ref=e558] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e559]: 
              - text: View Product
      - generic [ref=e561]:
        - generic [ref=e562]:
          - generic [ref=e563]:
            - img "ecommerce website products" [ref=e564]
            - heading "Rs. 850" [level=2] [ref=e565]
            - paragraph [ref=e566]: Pure Cotton Neon Green Tshirt
            - generic [ref=e567] [cursor=pointer]:
              - generic [ref=e568]: 
              - text: Add to cart
          - generic [ref=e569]:
            - heading "Rs. 850" [level=2] [ref=e570]
            - paragraph [ref=e571]: Pure Cotton Neon Green Tshirt
            - generic [ref=e572] [cursor=pointer]:
              - generic [ref=e573]: 
              - text: Add to cart
        - list [ref=e575]:
          - listitem [ref=e576]:
            - link " View Product" [ref=e577] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e578]: 
              - text: View Product
      - generic [ref=e580]:
        - generic [ref=e581]:
          - generic [ref=e582]:
            - img "ecommerce website products" [ref=e583]
            - heading "Rs. 799" [level=2] [ref=e584]
            - paragraph [ref=e585]: Soft Stretch Jeans
            - generic [ref=e586] [cursor=pointer]:
              - generic [ref=e587]: 
              - text: Add to cart
          - generic [ref=e588]:
            - heading "Rs. 799" [level=2] [ref=e589]
            - paragraph [ref=e590]: Soft Stretch Jeans
            - generic [ref=e591] [cursor=pointer]:
              - generic [ref=e592]: 
              - text: Add to cart
        - list [ref=e594]:
          - listitem [ref=e595]:
            - link " View Product" [ref=e596] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e597]: 
              - text: View Product
      - generic [ref=e599]:
        - generic [ref=e600]:
          - generic [ref=e601]:
            - img "ecommerce website products" [ref=e602]
            - heading "Rs. 1200" [level=2] [ref=e603]
            - paragraph [ref=e604]: Regular Fit Straight Jeans
            - generic [ref=e605] [cursor=pointer]:
              - generic [ref=e606]: 
              - text: Add to cart
          - generic [ref=e607]:
            - heading "Rs. 1200" [level=2] [ref=e608]
            - paragraph [ref=e609]: Regular Fit Straight Jeans
            - generic [ref=e610] [cursor=pointer]:
              - generic [ref=e611]: 
              - text: Add to cart
        - list [ref=e613]:
          - listitem [ref=e614]:
            - link " View Product" [ref=e615] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e616]: 
              - text: View Product
      - generic [ref=e618]:
        - generic [ref=e619]:
          - generic [ref=e620]:
            - img "ecommerce website products" [ref=e621]
            - heading "Rs. 1400" [level=2] [ref=e622]
            - paragraph [ref=e623]: Grunt Blue Slim Fit Jeans
            - generic [ref=e624] [cursor=pointer]:
              - generic [ref=e625]: 
              - text: Add to cart
          - generic [ref=e626]:
            - heading "Rs. 1400" [level=2] [ref=e627]
            - paragraph [ref=e628]: Grunt Blue Slim Fit Jeans
            - generic [ref=e629] [cursor=pointer]:
              - generic [ref=e630]: 
              - text: Add to cart
        - list [ref=e632]:
          - listitem [ref=e633]:
            - link " View Product" [ref=e634] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e635]: 
              - text: View Product
      - generic [ref=e637]:
        - generic [ref=e638]:
          - generic [ref=e639]:
            - img "ecommerce website products" [ref=e640]
            - heading "Rs. 2300" [level=2] [ref=e641]
            - paragraph [ref=e642]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e643] [cursor=pointer]:
              - generic [ref=e644]: 
              - text: Add to cart
          - generic [ref=e645]:
            - heading "Rs. 2300" [level=2] [ref=e646]
            - paragraph [ref=e647]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e648] [cursor=pointer]:
              - generic [ref=e649]: 
              - text: Add to cart
        - list [ref=e651]:
          - listitem [ref=e652]:
            - link " View Product" [ref=e653] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e654]: 
              - text: View Product
      - generic [ref=e656]:
        - generic [ref=e657]:
          - generic [ref=e658]:
            - img "ecommerce website products" [ref=e659]
            - heading "Rs. 3000" [level=2] [ref=e660]
            - paragraph [ref=e661]: Cotton Silk Hand Block Print Saree
            - generic [ref=e662] [cursor=pointer]:
              - generic [ref=e663]: 
              - text: Add to cart
          - generic [ref=e664]:
            - heading "Rs. 3000" [level=2] [ref=e665]
            - paragraph [ref=e666]: Cotton Silk Hand Block Print Saree
            - generic [ref=e667] [cursor=pointer]:
              - generic [ref=e668]: 
              - text: Add to cart
        - list [ref=e670]:
          - listitem [ref=e671]:
            - link " View Product" [ref=e672] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e673]: 
              - text: View Product
      - generic [ref=e675]:
        - generic [ref=e676]:
          - generic [ref=e677]:
            - img "ecommerce website products" [ref=e678]
            - heading "Rs. 3500" [level=2] [ref=e679]
            - paragraph [ref=e680]: Rust Red Linen Saree
            - generic [ref=e681] [cursor=pointer]:
              - generic [ref=e682]: 
              - text: Add to cart
          - generic [ref=e683]:
            - heading "Rs. 3500" [level=2] [ref=e684]
            - paragraph [ref=e685]: Rust Red Linen Saree
            - generic [ref=e686] [cursor=pointer]:
              - generic [ref=e687]: 
              - text: Add to cart
        - list [ref=e689]:
          - listitem [ref=e690]:
            - link " View Product" [ref=e691] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e692]: 
              - text: View Product
      - generic [ref=e694]:
        - generic [ref=e695]:
          - generic [ref=e696]:
            - img "ecommerce website products" [ref=e697]
            - heading "Rs. 5000" [level=2] [ref=e698]
            - paragraph [ref=e699]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e700] [cursor=pointer]:
              - generic [ref=e701]: 
              - text: Add to cart
          - generic [ref=e702]:
            - heading "Rs. 5000" [level=2] [ref=e703]
            - paragraph [ref=e704]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e705] [cursor=pointer]:
              - generic [ref=e706]: 
              - text: Add to cart
        - list [ref=e708]:
          - listitem [ref=e709]:
            - link " View Product" [ref=e710] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e711]: 
              - text: View Product
      - generic [ref=e713]:
        - generic [ref=e714]:
          - generic [ref=e715]:
            - img "ecommerce website products" [ref=e716]
            - heading "Rs. 1400" [level=2] [ref=e717]
            - paragraph [ref=e718]: Lace Top For Women
            - generic [ref=e719] [cursor=pointer]:
              - generic [ref=e720]: 
              - text: Add to cart
          - generic [ref=e721]:
            - heading "Rs. 1400" [level=2] [ref=e722]
            - paragraph [ref=e723]: Lace Top For Women
            - generic [ref=e724] [cursor=pointer]:
              - generic [ref=e725]: 
              - text: Add to cart
        - list [ref=e727]:
          - listitem [ref=e728]:
            - link " View Product" [ref=e729] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e730]: 
              - text: View Product
      - generic [ref=e732]:
        - generic [ref=e733]:
          - generic [ref=e734]:
            - img "ecommerce website products" [ref=e735]
            - heading "Rs. 1389" [level=2] [ref=e736]
            - paragraph [ref=e737]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e738] [cursor=pointer]:
              - generic [ref=e739]: 
              - text: Add to cart
          - generic [ref=e740]:
            - heading "Rs. 1389" [level=2] [ref=e741]
            - paragraph [ref=e742]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e743] [cursor=pointer]:
              - generic [ref=e744]: 
              - text: Add to cart
        - list [ref=e746]:
          - listitem [ref=e747]:
            - link " View Product" [ref=e748] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e749]: 
              - text: View Product
  - insertion [ref=e751]
  - contentinfo [ref=e753]:
    - generic [ref=e758]:
      - heading "Subscription" [level=2] [ref=e759]
      - generic [ref=e760]:
        - textbox "Your email address" [ref=e761]
        - button "" [ref=e762] [cursor=pointer]:
          - generic [ref=e763]: 
        - paragraph [ref=e764]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e768]: Copyright © 2021 All rights reserved
  - link "" [ref=e769] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e770]: 
  - insertion [ref=e771]:
    - iframe [ref=e773]:
      - iframe [ref=f20e1]:
        - generic [ref=f26e2]:
          - link "Advertisement" [ref=f26e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvlLcFagJ4DFHB4Rxzshq4ZXmQJnPQro9XF_fmgADQRU6CxFk0Ab8D5td_vNAuZ8rLsLsjNRJ9_R7O3JxbkJy7UTCB6nKIQNO90D5hZh0o-vLdLmLwFZ9FTR2Q10og-1VbtMWEYxucx9gy4LLezJv_XlO3lqlItlJUYO9iFkKLHs7DZNmhzGjJLAipx22vPk-CgrJ5onrkppLGJT1LaNKO-kvowqWgjYH_81kKNZg6YI9poTJcIppWNo8aLiQMPZkTZxIw5bn5SxwXamahEZnx-aXT6M2rpPL5GdfjUOyMGqqVmAk6cQ3hYG8ntTsFfsjR9WUnAoETF52Jc_StqkMOuOa3joodw7NdgWG_-SvXMomghyqixOrCwkrQLR6JONJD4vxiHZSz7upLg9W3HR-HAhAfL9lKA6kYhgcgUrsysAgIGr05dawKbb5TZN0ECDCToiXR1Z7hDNcQOtFG3_QYZpEqxBGaaXWct536RpLRbtjBYE47fOrQ4GNNNLwFUpEreArE4BMSYCDoRARoomxvGfv1SbagrZI4REsvLVygZktt1S-qBokTq6W4h8se-Y5IAeLRAimquIDE5acgbpnUSO742eUHPwNW9erpfZvuuhmsr-MSKSW5mWas3RJmZ62Ds8n18V4AC2R8mSEnOg93KiypASDlcTU40WnG2Y2Ll-IiZvYHArJ3TbzQSZsCRxG3iYm3z_lQAKsLdeS3uk-_CJiBNzpFh-gV-nbqbX_1yiKnOCMZFE5nFNaPbZ3Lwn4pp8r6M_GHOHLVMKi1VtFC9_WwsdiBA2M7pPcDbYsUEoSd3krLI8_H5q0YMhY8kqcX2S0oB6qLH9vJWWI1TyNYEx6z-9bAqb80HYgUcIt8ZbIGoMv5Q4ZK5iKNH3XnesfsfTjMDJn_VUeii9-wbwwa6iWfxxzZ1O0eqkbMVDUEHX3qTopujT2EmkJ689gx2bxVrpbuUexaUp5ohTeVXUOqbkZnRkzEvM21CyQuEp4euNBqSvXsw7zD8bSlc_W6oU3cQ69KAAOhc_yZr0WvH844AkoH-WuwpGH01Iq8ihmh2AvDOCqzdoonXJakawgKdl6sLN-26WTcBa-srIOWSz66yCGXy1v-Ff_EOX9DNFRFgzd9RHABMpb8aGgbiHPwqX5RH0T6fpgD-OQCeDbhzSKkStpvDDi72QlNDvmrXG7hYorP2Fej_kShgv6w0Ue_yIf1cSJJ1ekCQhfNTFSd0gJ4Vao5E6pKQnGsg6WQp2c_qVyoamfKgPONOKBlzb6b8LL1jPjGskNDAA4Eniy2WTmuFmKlqW8CfHpLK6gnDZpGYud_e9mNi71JiNhFlTmk3B9EXwB9Icz6pCPDYMgAdzVa2ucdtZberpsHv-L4CNS7YjalpI14onFnV4VWSPOgCAOlWe_FMEhYFos8VUhwbtz5k3orG5_ErM7KEs0f4lv_GDEOHBBO2z3kjxy5decRXX2sWKcfyFstSxUJk7EjX9gD3BQKBVbZtrTktQFoYDTTXmrrDp0p5nzwVKaSx_BPdFqB3lu5HtYuQa5dvsiyKXvB2Q9c236sqjV5crCMngoFEEOxDr2QJ58g_A04huyhSLqniYCcay9gYu224M8RSu0kKy4eC-at6JT1EsHqec_qy7tJYDIqIHdnYVisISSRKg0OhU_2pvmO5a7dFMiVaRLkXKJDilRlI69GdnC5c4edYKFztelhJEaOTrpqsJRn9pu3hDOzfiSR--hvqubxTFgTdlmNpYsYI7Q6oMTZ8_RH385lju3PzS-TZfsbJ-l268ssnC-Y&sai=AMfl-YT87EZRSUR37tNRqym4-6VKMqdMIGHTkze0GvJwt6oqPd4-sJHBktVaMPTbogDcgrfaFS4fuaBIm0OK2ld2vWmuK9tPxNF0IryFtVSRkm8UkmEq4yOwhK77fwZSO7DI5hK_RQgfT4tPtvRBZQURC3gd5vIC93_SYd2RuQAzgJyHMHX2aGMRRUC5p6VYU5PQ3wYHTTQzHERFJHnAyFwS0fOsgo9kNAIaPvFIv-cg3onCNiPzfsxyu4GlLtV7le_fnqz4SdzC8_EQlQxGgR2ptZPLbqRoFSXtHPKF2AgunvLq2D5tzWOT2kPDq6FLHBnEZlO7iWOFJPyjd_TAC5Z8aSv7Qgzxx-Tjb1UmkHMuBB-d_r2S7cpPJeUAHA4ZqH4qjnrJ4Shgaip6KjwjmCaCp9tFhpdkLn4JCVt9GZb4Kk4RI9OYpf83HPjXWj2LMNVU2_ClSuhqgdoEjzG30_0THRFiXvwc8sekqNLMX9DcpXnMb7WiqXdeCKlTPvyqkvNliDie-MKuL_eVvuS0NlvxQ-vfDnkHXvYUwa8_QDCuU3DWaEm8_ccE7P-YN9P4UPJSetlwlPgYWc7_BVYgyn5usJiVI_QipRvBT9fg5tUEYfPRLzx9ZuBT2wWGNH7-oz7yAwsLYwfqevsqnb-7tHfrYMOnfYAOLyxcI8rzgXBTh6jMUYnKG7ZmCDghHdjJTZ_PFU4iB9Igb-oUb27wrxTmdilhghJ9_2f3DsV6fcz6mym6hPkq4kmhFwMUElGP5wOiut6nqJTnV7f4hYGRwVQ0cc627U36gosI0dX8VbdpWXNd7N2G-vu4eyjG1cGYVF9WBI75ithwexr1cOnjWwhcInKdR-OpNGw0iGTAcm1GulvFY2VekJVY-TrJ5l3u9NVRBWCFlpohmGAZdD2dqvOj37EkrhU_x-SU&sig=Cg0ArKJSzG4PVH06JH2m&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_728x90-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364381
            - img "Advertisement" [ref=f26e5]
          - generic [ref=f26e6]:
            - generic:
              - img [ref=f26e10] [cursor=pointer]
              - button [ref=f26e12] [cursor=pointer]:
                - img [ref=f26e13]
```

# Test source

```ts
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
  127 |   async openProductsPage() {
  128 | 
  129 |     await this.page.goto(
  130 |         'https://automationexercise.com/products',
  131 |         {
  132 |             waitUntil: 'domcontentloaded',
  133 |             timeout: 60000
  134 |         }
  135 |     );
  136 | }
  137 | 
  138 | 
  139 |     async searchProduct(productName) {
  140 | 
  141 |         await this.searchInput.waitFor({
  142 |             state: 'visible',
  143 |             timeout: 10000
  144 |         });
  145 | 
  146 |         await this.searchInput.fill(productName);
  147 | 
  148 |        await this.searchBtn.click();
  149 |     }
  150 | 
  151 |     async openFirstProduct() {
  152 | 
  153 |         await this.viewProductBtn.click({
  154 |             force: true
  155 |         });
  156 |     }
  157 | async addFirstProductToCart() {
  158 | 
  159 |     await this.addToCartBtn.click({
  160 |         force: true
  161 |     });
  162 | 
  163 |     await this.page.waitForTimeout(2000);
  164 | 
> 165 |     await this.continueShoppingBtn.waitFor({
      |                                    ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  166 |         state: 'visible',
  167 |         timeout: 15000
  168 |     });
  169 | }
  170 | 
  171 |     async addSecondProductToCart() {
  172 | 
  173 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  174 | 
  175 |         await this.secondAddToCartBtn.click();
  176 |     }
  177 | 
  178 |     async continueShopping() {
  179 | 
  180 |         await this.continueShoppingBtn.waitFor({
  181 |             state: 'visible',
  182 |             timeout: 10000
  183 |         });
  184 | 
  185 |         await this.continueShoppingBtn.click();
  186 |     }
  187 | 
  188 |     async openCart() {
  189 |         await Promise.all([
  190 |             this.page.waitForURL('**/view_cart'),
  191 |             this.cartBtn.click()
  192 |         ]);
  193 |     }
  194 | 
  195 |     async removeProductFromCart() {
  196 | 
  197 |         await this.removeCartBtn.click({
  198 |             force: true
  199 |         });
  200 |     }
  201 | 
  202 | }
  203 | 
  204 | module.exports = ProductPage;
```