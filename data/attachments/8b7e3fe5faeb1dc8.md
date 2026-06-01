# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product\productBrand.spec.js >> Verify Product Brand Visibility
- Location: tests\product\productBrand.spec.js:5:1

# Error details

```
Test timeout of 90000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 90000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "networkidle"

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
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e51]:
            - /url: /test_cases
            - button "Test Cases" [ref=e52] [cursor=pointer]
          - link "APIs list for practice" [ref=e53]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e54] [cursor=pointer]
        - img "demo website for practice" [ref=e56]
    - link "" [ref=e57]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link "" [ref=e59]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading "Category" [level=2] [ref=e66]
      - generic [ref=e67]:
        - heading " Women" [level=4] [ref=e70]:
          - link " Women" [ref=e71]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading " Men" [level=4] [ref=e76]:
          - link " Men" [ref=e77]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e82]:
          - link " Kids" [ref=e83]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - insertion [ref=e87]:
        - iframe [ref=e89]:
          - iframe [ref=f7e1]:
            - generic [ref=f15e2]:
              - iframe [ref=f15e3] [cursor=pointer]:
                - img [ref=f18e2]
              - link [ref=f15e4]:
                - /url: https://insight.adsrvr.org/track/clk?imp=014a3cda-a36e-4e6d-93f7-a26afd2cb35c&ag=n50ahro&sfe=1c53cc3d&sig=Le05bgp5j-BWCDn5GZmFp3SyyevLhxQv96s4tgWsgk0.&crid=juiys8k2&cf=10705085&fq=0&t=1&td_s=automationexercise.com&rcats=&mste=&mfld=3&mssi=&mfsi=&sv=google&uhow=20&agsa=&wp=ahxMPQACiqAEf4tWAAJKIoRwVhjSyk9hXrDF4g&rgz=731101&dt=PC&osf=OSX&os=Other&br=Safari&svpid=pub-1677597403311019&rlangs=en&mlang=&did=&rcxt=Other&tmpc=33.860000000000014&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&crrelr=&npt=&cc=3~KLUv_WPYfRZo_AHFCwBUDto8SgFuo21OEZP3omr9LLNcQgduNTBhaHJvSK_01g1QvbGNBVoIanVpeXM4azJg0tn-b240M2QxOTY3ZWJkNgPAARTSASQEU3UzMTEwMTGzn_rz8rauARggOW52bTc0YdAC_tuKA-jhVUAdYjFhfGRhbXyFvfPcy58_CjEwrJ6uvMXPFndOcWRDN2g3WVJaaElrc1BCRjAwSB-WQM3VfFDSoUbE-u2k2SPp441PEZqsS_QdFRO814GfwB4Am5mu-AwOOAqIUQioEzzIEzzQEwD9EzMzkz-AFAGgFACwFAC4FADIFAAs_ODMS8S9uXTAvLqQyoXAfLX6NtUWKn346KK8h9IWYgRO5eLWISwJT_MVaF59u6Sb96KQ9Z2B_vU9TYwnTPGlBBx_hViI3-HR0jmNFuG0qa2EatHnSXKXcpMkrr3JI9bFp240dbHBaJJUsRzltEaiERD5zFKCLjKHv73lK1dpHVPn22oyWyQvq1hZBYsUoQ4L&dur=1~KLUv_SMFoCgkXbUAAEggAigFTV89xT0DfACfji89wd3jDnw.&durs=UYR8Rv&bdc=14&mk=Apple&testid=b1a%7Cdam%7CGoogle-ORtb-Migration&fpa=371&pcm=3&ict=Unknown&said=wNqdC7h7YRZhIksPBF00Hw&auct=1&tail=1&r=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCpqBfPUwcaqCVCtaW_tMPopSJoAO-p-f2dPb-j45XwI23ARABIP20npUBYOWCgIDkDsgBCagDAcgDAqoE7QFP0FTyFpgOGdgb8ov91y89YkuNhHHGXib7HEMoT4dPHbeW3f3VgK2izUwNUwNpwwaDy17ZW2QRa8IHx6nruevmgBZVV_S18w0egqr-fFjyBw7E2vG_9Xil6UPdVsKz3Fjwjs7FYck54DNmfADheqYVj6Kut1atCpyjFtzxh5_jp_eEvSZ5dPXae4y1-uRHP44dlB0AFY4h_W3mH_D-ziP1PZk6fVbHDipuWpn3cLoJKA6dHFQbk8YgUdmaYi6w6nXal3DN9j6VQDRZEIQQgESg0uyAQiKG0U68YMKb5uKE3LAZ1Y16sKm6HSJFKxmABsyk0anlyc2TBKAGIagHk9ixAqgHlNixAqgHldixAqgHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB62-sQKoB7_TsQLYBwDSCC4IgGEQATIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WPvgu9Lk45QD-gsCCAGADAGqDQJJTuoNEwjBrMHS5OOUAxVWi38EHSJKAjSIDgnQFQGAFwGyFwQYDFAB%26num%3D1%26sig%3DAOD64_30HDNph9spf18zmnYyvCxxEXXoZg%26client%3Dca-pub-1677597403311019%26adurl%3Dhttps://netshort.onelink.me/XC68?pid=thetradedesk_int&af_siteid=automationexercise.com&c=9nvm74a&af_c_id=9nvm74a&af_adset_id=n50ahro&af_ad_id=juiys8k2&af_click_lookback=7d&clickid=014a3cda-a36e-4e6d-93f7-a26afd2cb35c&idfa=&advertising_id=&android_id=
                - img [ref=f15e5]
      - generic [ref=e90]:
        - heading "Brands" [level=2] [ref=e91]
        - list [ref=e93]:
          - listitem [ref=e94]:
            - link "(6) Polo" [ref=e95]:
              - /url: /brand_products/Polo
              - generic [ref=e96]: (6)
              - text: Polo
          - listitem [ref=e97]:
            - link "(5) H&M" [ref=e98]:
              - /url: /brand_products/H&M
              - generic [ref=e99]: (5)
              - text: H&M
          - listitem [ref=e100]:
            - link "(5) Madame" [ref=e101]:
              - /url: /brand_products/Madame
              - generic [ref=e102]: (5)
              - text: Madame
          - listitem [ref=e103]:
            - link "(3) Mast & Harbour" [ref=e104]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e105]: (3)
              - text: Mast & Harbour
          - listitem [ref=e106]:
            - link "(4) Babyhug" [ref=e107]:
              - /url: /brand_products/Babyhug
              - generic [ref=e108]: (4)
              - text: Babyhug
          - listitem [ref=e109]:
            - link "(3) Allen Solly Junior" [ref=e110]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e111]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e112]:
            - link "(3) Kookie Kids" [ref=e113]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e114]: (3)
              - text: Kookie Kids
          - listitem [ref=e115]:
            - link "(5) Biba" [ref=e116]:
              - /url: /brand_products/Biba
              - generic [ref=e117]: (5)
              - text: Biba
    - generic [ref=e118]:
      - generic [ref=e119]:
        - heading "Features Items" [level=2] [ref=e120]
        - generic [ref=e122]:
          - generic [ref=e123]:
            - generic [ref=e124]:
              - img "ecommerce website products" [ref=e125]
              - heading "Rs. 500" [level=2] [ref=e126]
              - paragraph [ref=e127]: Blue Top
              - generic [ref=e128] [cursor=pointer]:
                - generic [ref=e129]: 
                - text: Add to cart
            - generic [ref=e130]:
              - heading "Rs. 500" [level=2] [ref=e131]
              - paragraph [ref=e132]: Blue Top
              - generic [ref=e133] [cursor=pointer]:
                - generic [ref=e134]: 
                - text: Add to cart
          - list [ref=e136]:
            - listitem [ref=e137]:
              - link " View Product" [ref=e138]:
                - /url: /product_details/1
                - generic [ref=e139]: 
                - text: View Product
        - generic [ref=e141]:
          - generic [ref=e142]:
            - generic [ref=e143]:
              - img "ecommerce website products" [ref=e144]
              - heading "Rs. 400" [level=2] [ref=e145]
              - paragraph [ref=e146]: Men Tshirt
              - generic [ref=e147] [cursor=pointer]:
                - generic [ref=e148]: 
                - text: Add to cart
            - generic [ref=e149]:
              - heading "Rs. 400" [level=2] [ref=e150]
              - paragraph [ref=e151]: Men Tshirt
              - generic [ref=e152] [cursor=pointer]:
                - generic [ref=e153]: 
                - text: Add to cart
          - list [ref=e155]:
            - listitem [ref=e156]:
              - link " View Product" [ref=e157]:
                - /url: /product_details/2
                - generic [ref=e158]: 
                - text: View Product
        - generic [ref=e160]:
          - generic [ref=e161]:
            - generic [ref=e162]:
              - img "ecommerce website products" [ref=e163]
              - heading "Rs. 1000" [level=2] [ref=e164]
              - paragraph [ref=e165]: Sleeveless Dress
              - generic [ref=e166] [cursor=pointer]:
                - generic [ref=e167]: 
                - text: Add to cart
            - generic [ref=e168]:
              - heading "Rs. 1000" [level=2] [ref=e169]
              - paragraph [ref=e170]: Sleeveless Dress
              - generic [ref=e171] [cursor=pointer]:
                - generic [ref=e172]: 
                - text: Add to cart
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link " View Product" [ref=e176]:
                - /url: /product_details/3
                - generic [ref=e177]: 
                - text: View Product
        - generic [ref=e179]:
          - generic [ref=e180]:
            - generic [ref=e181]:
              - img "ecommerce website products" [ref=e182]
              - heading "Rs. 1500" [level=2] [ref=e183]
              - paragraph [ref=e184]: Stylish Dress
              - generic [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: 
                - text: Add to cart
            - generic [ref=e187]:
              - heading "Rs. 1500" [level=2] [ref=e188]
              - paragraph [ref=e189]: Stylish Dress
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: 
                - text: Add to cart
          - list [ref=e193]:
            - listitem [ref=e194]:
              - link " View Product" [ref=e195]:
                - /url: /product_details/4
                - generic [ref=e196]: 
                - text: View Product
        - generic [ref=e198]:
          - generic [ref=e199]:
            - generic [ref=e200]:
              - img "ecommerce website products" [ref=e201]
              - heading "Rs. 600" [level=2] [ref=e202]
              - paragraph [ref=e203]: Winter Top
              - generic [ref=e204] [cursor=pointer]:
                - generic [ref=e205]: 
                - text: Add to cart
            - generic [ref=e206]:
              - heading "Rs. 600" [level=2] [ref=e207]
              - paragraph [ref=e208]: Winter Top
              - generic [ref=e209] [cursor=pointer]:
                - generic [ref=e210]: 
                - text: Add to cart
          - list [ref=e212]:
            - listitem [ref=e213]:
              - link " View Product" [ref=e214]:
                - /url: /product_details/5
                - generic [ref=e215]: 
                - text: View Product
        - generic [ref=e217]:
          - generic [ref=e218]:
            - generic [ref=e219]:
              - img "ecommerce website products" [ref=e220]
              - heading "Rs. 400" [level=2] [ref=e221]
              - paragraph [ref=e222]: Summer White Top
              - generic [ref=e223] [cursor=pointer]:
                - generic [ref=e224]: 
                - text: Add to cart
            - generic [ref=e225]:
              - heading "Rs. 400" [level=2] [ref=e226]
              - paragraph [ref=e227]: Summer White Top
              - generic [ref=e228] [cursor=pointer]:
                - generic [ref=e229]: 
                - text: Add to cart
          - list [ref=e231]:
            - listitem [ref=e232]:
              - link " View Product" [ref=e233]:
                - /url: /product_details/6
                - generic [ref=e234]: 
                - text: View Product
        - generic [ref=e236]:
          - generic [ref=e237]:
            - generic [ref=e238]:
              - img "ecommerce website products" [ref=e239]
              - heading "Rs. 1000" [level=2] [ref=e240]
              - paragraph [ref=e241]: Madame Top For Women
              - generic [ref=e242] [cursor=pointer]:
                - generic [ref=e243]: 
                - text: Add to cart
            - generic [ref=e244]:
              - heading "Rs. 1000" [level=2] [ref=e245]
              - paragraph [ref=e246]: Madame Top For Women
              - generic [ref=e247] [cursor=pointer]:
                - generic [ref=e248]: 
                - text: Add to cart
          - list [ref=e250]:
            - listitem [ref=e251]:
              - link " View Product" [ref=e252]:
                - /url: /product_details/7
                - generic [ref=e253]: 
                - text: View Product
        - generic [ref=e255]:
          - generic [ref=e256]:
            - generic [ref=e257]:
              - img "ecommerce website products" [ref=e258]
              - heading "Rs. 700" [level=2] [ref=e259]
              - paragraph [ref=e260]: Fancy Green Top
              - generic [ref=e261] [cursor=pointer]:
                - generic [ref=e262]: 
                - text: Add to cart
            - generic [ref=e263]:
              - heading "Rs. 700" [level=2] [ref=e264]
              - paragraph [ref=e265]: Fancy Green Top
              - generic [ref=e266] [cursor=pointer]:
                - generic [ref=e267]: 
                - text: Add to cart
          - list [ref=e269]:
            - listitem [ref=e270]:
              - link " View Product" [ref=e271]:
                - /url: /product_details/8
                - generic [ref=e272]: 
                - text: View Product
        - generic [ref=e274]:
          - generic [ref=e275]:
            - generic [ref=e276]:
              - img "ecommerce website products" [ref=e277]
              - heading "Rs. 499" [level=2] [ref=e278]
              - paragraph [ref=e279]: Sleeves Printed Top - White
              - generic [ref=e280] [cursor=pointer]:
                - generic [ref=e281]: 
                - text: Add to cart
            - generic [ref=e282]:
              - heading "Rs. 499" [level=2] [ref=e283]
              - paragraph [ref=e284]: Sleeves Printed Top - White
              - generic [ref=e285] [cursor=pointer]:
                - generic [ref=e286]: 
                - text: Add to cart
          - list [ref=e288]:
            - listitem [ref=e289]:
              - link " View Product" [ref=e290]:
                - /url: /product_details/11
                - generic [ref=e291]: 
                - text: View Product
        - generic [ref=e293]:
          - generic [ref=e294]:
            - generic [ref=e295]:
              - img "ecommerce website products" [ref=e296]
              - heading "Rs. 359" [level=2] [ref=e297]
              - paragraph [ref=e298]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e299] [cursor=pointer]:
                - generic [ref=e300]: 
                - text: Add to cart
            - generic [ref=e301]:
              - heading "Rs. 359" [level=2] [ref=e302]
              - paragraph [ref=e303]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e304] [cursor=pointer]:
                - generic [ref=e305]: 
                - text: Add to cart
          - list [ref=e307]:
            - listitem [ref=e308]:
              - link " View Product" [ref=e309]:
                - /url: /product_details/12
                - generic [ref=e310]: 
                - text: View Product
        - generic [ref=e312]:
          - generic [ref=e313]:
            - generic [ref=e314]:
              - img "ecommerce website products" [ref=e315]
              - heading "Rs. 278" [level=2] [ref=e316]
              - paragraph [ref=e317]: Frozen Tops For Kids
              - generic [ref=e318] [cursor=pointer]:
                - generic [ref=e319]: 
                - text: Add to cart
            - generic [ref=e320]:
              - heading "Rs. 278" [level=2] [ref=e321]
              - paragraph [ref=e322]: Frozen Tops For Kids
              - generic [ref=e323] [cursor=pointer]:
                - generic [ref=e324]: 
                - text: Add to cart
          - list [ref=e326]:
            - listitem [ref=e327]:
              - link " View Product" [ref=e328]:
                - /url: /product_details/13
                - generic [ref=e329]: 
                - text: View Product
        - generic [ref=e331]:
          - generic [ref=e332]:
            - generic [ref=e333]:
              - img "ecommerce website products" [ref=e334]
              - heading "Rs. 679" [level=2] [ref=e335]
              - paragraph [ref=e336]: Full Sleeves Top Cherry - Pink
              - generic [ref=e337] [cursor=pointer]:
                - generic [ref=e338]: 
                - text: Add to cart
            - generic [ref=e339]:
              - heading "Rs. 679" [level=2] [ref=e340]
              - paragraph [ref=e341]: Full Sleeves Top Cherry - Pink
              - generic [ref=e342] [cursor=pointer]:
                - generic [ref=e343]: 
                - text: Add to cart
          - list [ref=e345]:
            - listitem [ref=e346]:
              - link " View Product" [ref=e347]:
                - /url: /product_details/14
                - generic [ref=e348]: 
                - text: View Product
        - generic [ref=e350]:
          - generic [ref=e351]:
            - generic [ref=e352]:
              - img "ecommerce website products" [ref=e353]
              - heading "Rs. 315" [level=2] [ref=e354]
              - paragraph [ref=e355]: Printed Off Shoulder Top - White
              - generic [ref=e356] [cursor=pointer]:
                - generic [ref=e357]: 
                - text: Add to cart
            - generic [ref=e358]:
              - heading "Rs. 315" [level=2] [ref=e359]
              - paragraph [ref=e360]: Printed Off Shoulder Top - White
              - generic [ref=e361] [cursor=pointer]:
                - generic [ref=e362]: 
                - text: Add to cart
          - list [ref=e364]:
            - listitem [ref=e365]:
              - link " View Product" [ref=e366]:
                - /url: /product_details/15
                - generic [ref=e367]: 
                - text: View Product
        - generic [ref=e369]:
          - generic [ref=e370]:
            - generic [ref=e371]:
              - img "ecommerce website products" [ref=e372]
              - heading "Rs. 478" [level=2] [ref=e373]
              - paragraph [ref=e374]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e375] [cursor=pointer]:
                - generic [ref=e376]: 
                - text: Add to cart
            - generic [ref=e377]:
              - heading "Rs. 478" [level=2] [ref=e378]
              - paragraph [ref=e379]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e380] [cursor=pointer]:
                - generic [ref=e381]: 
                - text: Add to cart
          - list [ref=e383]:
            - listitem [ref=e384]:
              - link " View Product" [ref=e385]:
                - /url: /product_details/16
                - generic [ref=e386]: 
                - text: View Product
        - generic [ref=e388]:
          - generic [ref=e389]:
            - generic [ref=e390]:
              - img "ecommerce website products" [ref=e391]
              - heading "Rs. 1200" [level=2] [ref=e392]
              - paragraph [ref=e393]: Little Girls Mr. Panda Shirt
              - generic [ref=e394] [cursor=pointer]:
                - generic [ref=e395]: 
                - text: Add to cart
            - generic [ref=e396]:
              - heading "Rs. 1200" [level=2] [ref=e397]
              - paragraph [ref=e398]: Little Girls Mr. Panda Shirt
              - generic [ref=e399] [cursor=pointer]:
                - generic [ref=e400]: 
                - text: Add to cart
          - list [ref=e402]:
            - listitem [ref=e403]:
              - link " View Product" [ref=e404]:
                - /url: /product_details/18
                - generic [ref=e405]: 
                - text: View Product
        - generic [ref=e407]:
          - generic [ref=e408]:
            - generic [ref=e409]:
              - img "ecommerce website products" [ref=e410]
              - heading "Rs. 1050" [level=2] [ref=e411]
              - paragraph [ref=e412]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e413] [cursor=pointer]:
                - generic [ref=e414]: 
                - text: Add to cart
            - generic [ref=e415]:
              - heading "Rs. 1050" [level=2] [ref=e416]
              - paragraph [ref=e417]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e418] [cursor=pointer]:
                - generic [ref=e419]: 
                - text: Add to cart
          - list [ref=e421]:
            - listitem [ref=e422]:
              - link " View Product" [ref=e423]:
                - /url: /product_details/19
                - generic [ref=e424]: 
                - text: View Product
        - generic [ref=e426]:
          - generic [ref=e427]:
            - generic [ref=e428]:
              - img "ecommerce website products" [ref=e429]
              - heading "Rs. 1190" [level=2] [ref=e430]
              - paragraph [ref=e431]: Cotton Mull Embroidered Dress
              - generic [ref=e432] [cursor=pointer]:
                - generic [ref=e433]: 
                - text: Add to cart
            - generic [ref=e434]:
              - heading "Rs. 1190" [level=2] [ref=e435]
              - paragraph [ref=e436]: Cotton Mull Embroidered Dress
              - generic [ref=e437] [cursor=pointer]:
                - generic [ref=e438]: 
                - text: Add to cart
          - list [ref=e440]:
            - listitem [ref=e441]:
              - link " View Product" [ref=e442]:
                - /url: /product_details/20
                - generic [ref=e443]: 
                - text: View Product
        - generic [ref=e445]:
          - generic [ref=e446]:
            - generic [ref=e447]:
              - img "ecommerce website products" [ref=e448]
              - heading "Rs. 1530" [level=2] [ref=e449]
              - paragraph [ref=e450]: Blue Cotton Indie Mickey Dress
              - generic [ref=e451] [cursor=pointer]:
                - generic [ref=e452]: 
                - text: Add to cart
            - generic [ref=e453]:
              - heading "Rs. 1530" [level=2] [ref=e454]
              - paragraph [ref=e455]: Blue Cotton Indie Mickey Dress
              - generic [ref=e456] [cursor=pointer]:
                - generic [ref=e457]: 
                - text: Add to cart
          - list [ref=e459]:
            - listitem [ref=e460]:
              - link " View Product" [ref=e461]:
                - /url: /product_details/21
                - generic [ref=e462]: 
                - text: View Product
        - generic [ref=e464]:
          - generic [ref=e465]:
            - generic [ref=e466]:
              - img "ecommerce website products" [ref=e467]
              - heading "Rs. 1600" [level=2] [ref=e468]
              - paragraph [ref=e469]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e470] [cursor=pointer]:
                - generic [ref=e471]: 
                - text: Add to cart
            - generic [ref=e472]:
              - heading "Rs. 1600" [level=2] [ref=e473]
              - paragraph [ref=e474]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e475] [cursor=pointer]:
                - generic [ref=e476]: 
                - text: Add to cart
          - list [ref=e478]:
            - listitem [ref=e479]:
              - link " View Product" [ref=e480]:
                - /url: /product_details/22
                - generic [ref=e481]: 
                - text: View Product
        - generic [ref=e483]:
          - generic [ref=e484]:
            - generic [ref=e485]:
              - img "ecommerce website products" [ref=e486]
              - heading "Rs. 1100" [level=2] [ref=e487]
              - paragraph [ref=e488]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e489] [cursor=pointer]:
                - generic [ref=e490]: 
                - text: Add to cart
            - generic [ref=e491]:
              - heading "Rs. 1100" [level=2] [ref=e492]
              - paragraph [ref=e493]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e494] [cursor=pointer]:
                - generic [ref=e495]: 
                - text: Add to cart
          - list [ref=e497]:
            - listitem [ref=e498]:
              - link " View Product" [ref=e499]:
                - /url: /product_details/23
                - generic [ref=e500]: 
                - text: View Product
        - generic [ref=e502]:
          - generic [ref=e503]:
            - generic [ref=e504]:
              - img "ecommerce website products" [ref=e505]
              - heading "Rs. 849" [level=2] [ref=e506]
              - paragraph [ref=e507]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e508] [cursor=pointer]:
                - generic [ref=e509]: 
                - text: Add to cart
            - generic [ref=e510]:
              - heading "Rs. 849" [level=2] [ref=e511]
              - paragraph [ref=e512]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e513] [cursor=pointer]:
                - generic [ref=e514]: 
                - text: Add to cart
          - list [ref=e516]:
            - listitem [ref=e517]:
              - link " View Product" [ref=e518]:
                - /url: /product_details/24
                - generic [ref=e519]: 
                - text: View Product
        - generic [ref=e521]:
          - generic [ref=e522]:
            - generic [ref=e523]:
              - img "ecommerce website products" [ref=e524]
              - heading "Rs. 1299" [level=2] [ref=e525]
              - paragraph [ref=e526]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e527] [cursor=pointer]:
                - generic [ref=e528]: 
                - text: Add to cart
            - generic [ref=e529]:
              - heading "Rs. 1299" [level=2] [ref=e530]
              - paragraph [ref=e531]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e532] [cursor=pointer]:
                - generic [ref=e533]: 
                - text: Add to cart
          - list [ref=e535]:
            - listitem [ref=e536]:
              - link " View Product" [ref=e537]:
                - /url: /product_details/28
                - generic [ref=e538]: 
                - text: View Product
        - generic [ref=e540]:
          - generic [ref=e541]:
            - generic [ref=e542]:
              - img "ecommerce website products" [ref=e543]
              - heading "Rs. 1000" [level=2] [ref=e544]
              - paragraph [ref=e545]: Green Side Placket Detail T-Shirt
              - generic [ref=e546] [cursor=pointer]:
                - generic [ref=e547]: 
                - text: Add to cart
            - generic [ref=e548]:
              - heading "Rs. 1000" [level=2] [ref=e549]
              - paragraph [ref=e550]: Green Side Placket Detail T-Shirt
              - generic [ref=e551] [cursor=pointer]:
                - generic [ref=e552]: 
                - text: Add to cart
          - list [ref=e554]:
            - listitem [ref=e555]:
              - link " View Product" [ref=e556]:
                - /url: /product_details/29
                - generic [ref=e557]: 
                - text: View Product
        - generic [ref=e559]:
          - generic [ref=e560]:
            - generic [ref=e561]:
              - img "ecommerce website products" [ref=e562]
              - heading "Rs. 1500" [level=2] [ref=e563]
              - paragraph [ref=e564]: Premium Polo T-Shirts
              - generic [ref=e565] [cursor=pointer]:
                - generic [ref=e566]: 
                - text: Add to cart
            - generic [ref=e567]:
              - heading "Rs. 1500" [level=2] [ref=e568]
              - paragraph [ref=e569]: Premium Polo T-Shirts
              - generic [ref=e570] [cursor=pointer]:
                - generic [ref=e571]: 
                - text: Add to cart
          - list [ref=e573]:
            - listitem [ref=e574]:
              - link " View Product" [ref=e575]:
                - /url: /product_details/30
                - generic [ref=e576]: 
                - text: View Product
        - generic [ref=e578]:
          - generic [ref=e579]:
            - generic [ref=e580]:
              - img "ecommerce website products" [ref=e581]
              - heading "Rs. 850" [level=2] [ref=e582]
              - paragraph [ref=e583]: Pure Cotton Neon Green Tshirt
              - generic [ref=e584] [cursor=pointer]:
                - generic [ref=e585]: 
                - text: Add to cart
            - generic [ref=e586]:
              - heading "Rs. 850" [level=2] [ref=e587]
              - paragraph [ref=e588]: Pure Cotton Neon Green Tshirt
              - generic [ref=e589] [cursor=pointer]:
                - generic [ref=e590]: 
                - text: Add to cart
          - list [ref=e592]:
            - listitem [ref=e593]:
              - link " View Product" [ref=e594]:
                - /url: /product_details/31
                - generic [ref=e595]: 
                - text: View Product
        - generic [ref=e597]:
          - generic [ref=e598]:
            - generic [ref=e599]:
              - img "ecommerce website products" [ref=e600]
              - heading "Rs. 799" [level=2] [ref=e601]
              - paragraph [ref=e602]: Soft Stretch Jeans
              - generic [ref=e603] [cursor=pointer]:
                - generic [ref=e604]: 
                - text: Add to cart
            - generic [ref=e605]:
              - heading "Rs. 799" [level=2] [ref=e606]
              - paragraph [ref=e607]: Soft Stretch Jeans
              - generic [ref=e608] [cursor=pointer]:
                - generic [ref=e609]: 
                - text: Add to cart
          - list [ref=e611]:
            - listitem [ref=e612]:
              - link " View Product" [ref=e613]:
                - /url: /product_details/33
                - generic [ref=e614]: 
                - text: View Product
        - generic [ref=e616]:
          - generic [ref=e617]:
            - generic [ref=e618]:
              - img "ecommerce website products" [ref=e619]
              - heading "Rs. 1200" [level=2] [ref=e620]
              - paragraph [ref=e621]: Regular Fit Straight Jeans
              - generic [ref=e622] [cursor=pointer]:
                - generic [ref=e623]: 
                - text: Add to cart
            - generic [ref=e624]:
              - heading "Rs. 1200" [level=2] [ref=e625]
              - paragraph [ref=e626]: Regular Fit Straight Jeans
              - generic [ref=e627] [cursor=pointer]:
                - generic [ref=e628]: 
                - text: Add to cart
          - list [ref=e630]:
            - listitem [ref=e631]:
              - link " View Product" [ref=e632]:
                - /url: /product_details/35
                - generic [ref=e633]: 
                - text: View Product
        - generic [ref=e635]:
          - generic [ref=e636]:
            - generic [ref=e637]:
              - img "ecommerce website products" [ref=e638]
              - heading "Rs. 1400" [level=2] [ref=e639]
              - paragraph [ref=e640]: Grunt Blue Slim Fit Jeans
              - generic [ref=e641] [cursor=pointer]:
                - generic [ref=e642]: 
                - text: Add to cart
            - generic [ref=e643]:
              - heading "Rs. 1400" [level=2] [ref=e644]
              - paragraph [ref=e645]: Grunt Blue Slim Fit Jeans
              - generic [ref=e646] [cursor=pointer]:
                - generic [ref=e647]: 
                - text: Add to cart
          - list [ref=e649]:
            - listitem [ref=e650]:
              - link " View Product" [ref=e651]:
                - /url: /product_details/37
                - generic [ref=e652]: 
                - text: View Product
        - generic [ref=e654]:
          - generic [ref=e655]:
            - generic [ref=e656]:
              - img "ecommerce website products" [ref=e657]
              - heading "Rs. 2300" [level=2] [ref=e658]
              - paragraph [ref=e659]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e660] [cursor=pointer]:
                - generic [ref=e661]: 
                - text: Add to cart
            - generic [ref=e662]:
              - heading "Rs. 2300" [level=2] [ref=e663]
              - paragraph [ref=e664]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e665] [cursor=pointer]:
                - generic [ref=e666]: 
                - text: Add to cart
          - list [ref=e668]:
            - listitem [ref=e669]:
              - link " View Product" [ref=e670]:
                - /url: /product_details/38
                - generic [ref=e671]: 
                - text: View Product
        - generic [ref=e673]:
          - generic [ref=e674]:
            - generic [ref=e675]:
              - img "ecommerce website products" [ref=e676]
              - heading "Rs. 3000" [level=2] [ref=e677]
              - paragraph [ref=e678]: Cotton Silk Hand Block Print Saree
              - generic [ref=e679] [cursor=pointer]:
                - generic [ref=e680]: 
                - text: Add to cart
            - generic [ref=e681]:
              - heading "Rs. 3000" [level=2] [ref=e682]
              - paragraph [ref=e683]: Cotton Silk Hand Block Print Saree
              - generic [ref=e684] [cursor=pointer]:
                - generic [ref=e685]: 
                - text: Add to cart
          - list [ref=e687]:
            - listitem [ref=e688]:
              - link " View Product" [ref=e689]:
                - /url: /product_details/39
                - generic [ref=e690]: 
                - text: View Product
        - generic [ref=e692]:
          - generic [ref=e693]:
            - generic [ref=e694]:
              - img "ecommerce website products" [ref=e695]
              - heading "Rs. 3500" [level=2] [ref=e696]
              - paragraph [ref=e697]: Rust Red Linen Saree
              - generic [ref=e698] [cursor=pointer]:
                - generic [ref=e699]: 
                - text: Add to cart
            - generic [ref=e700]:
              - heading "Rs. 3500" [level=2] [ref=e701]
              - paragraph [ref=e702]: Rust Red Linen Saree
              - generic [ref=e703] [cursor=pointer]:
                - generic [ref=e704]: 
                - text: Add to cart
          - list [ref=e706]:
            - listitem [ref=e707]:
              - link " View Product" [ref=e708]:
                - /url: /product_details/40
                - generic [ref=e709]: 
                - text: View Product
        - generic [ref=e711]:
          - generic [ref=e712]:
            - generic [ref=e713]:
              - img "ecommerce website products" [ref=e714]
              - heading "Rs. 5000" [level=2] [ref=e715]
              - paragraph [ref=e716]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e717] [cursor=pointer]:
                - generic [ref=e718]: 
                - text: Add to cart
            - generic [ref=e719]:
              - heading "Rs. 5000" [level=2] [ref=e720]
              - paragraph [ref=e721]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e722] [cursor=pointer]:
                - generic [ref=e723]: 
                - text: Add to cart
          - list [ref=e725]:
            - listitem [ref=e726]:
              - link " View Product" [ref=e727]:
                - /url: /product_details/41
                - generic [ref=e728]: 
                - text: View Product
        - generic [ref=e730]:
          - generic [ref=e731]:
            - generic [ref=e732]:
              - img "ecommerce website products" [ref=e733]
              - heading "Rs. 1400" [level=2] [ref=e734]
              - paragraph [ref=e735]: Lace Top For Women
              - generic [ref=e736] [cursor=pointer]:
                - generic [ref=e737]: 
                - text: Add to cart
            - generic [ref=e738]:
              - heading "Rs. 1400" [level=2] [ref=e739]
              - paragraph [ref=e740]: Lace Top For Women
              - generic [ref=e741] [cursor=pointer]:
                - generic [ref=e742]: 
                - text: Add to cart
          - list [ref=e744]:
            - listitem [ref=e745]:
              - link " View Product" [ref=e746]:
                - /url: /product_details/42
                - generic [ref=e747]: 
                - text: View Product
        - generic [ref=e749]:
          - generic [ref=e750]:
            - generic [ref=e751]:
              - img "ecommerce website products" [ref=e752]
              - heading "Rs. 1389" [level=2] [ref=e753]
              - paragraph [ref=e754]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e755] [cursor=pointer]:
                - generic [ref=e756]: 
                - text: Add to cart
            - generic [ref=e757]:
              - heading "Rs. 1389" [level=2] [ref=e758]
              - paragraph [ref=e759]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e760] [cursor=pointer]:
                - generic [ref=e761]: 
                - text: Add to cart
          - list [ref=e763]:
            - listitem [ref=e764]:
              - link " View Product" [ref=e765]:
                - /url: /product_details/43
                - generic [ref=e766]: 
                - text: View Product
      - generic [ref=e767]:
        - heading "recommended items" [level=2] [ref=e768]
        - generic [ref=e769]:
          - generic [ref=e770]:
            - text:   
            - generic:
              - generic [ref=e774]:
                - img "ecommerce website products" [ref=e775]
                - heading "Rs. 1500" [level=2] [ref=e776]
                - paragraph [ref=e777]: Stylish Dress
                - generic [ref=e778] [cursor=pointer]:
                  - generic [ref=e779]: 
                  - text: Add to cart
              - generic [ref=e783]:
                - img "ecommerce website products" [ref=e784]
                - heading "Rs. 600" [level=2] [ref=e785]
                - paragraph [ref=e786]: Winter Top
                - generic [ref=e787] [cursor=pointer]:
                  - generic [ref=e788]: 
                  - text: Add to cart
              - generic [ref=e792]:
                - img "ecommerce website products" [ref=e793]
                - heading "Rs. 400" [level=2] [ref=e794]
                - paragraph [ref=e795]: Summer White Top
                - generic [ref=e796] [cursor=pointer]:
                  - generic [ref=e797]: 
                  - text: Add to cart
          - link "" [ref=e798]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e799]: 
          - link "" [ref=e800]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e801]: 
  - insertion [ref=e803]
  - contentinfo [ref=e805]:
    - generic [ref=e810]:
      - heading "Subscription" [level=2] [ref=e811]
      - generic [ref=e812]:
        - textbox "Your email address" [ref=e813]
        - button "" [ref=e814] [cursor=pointer]:
          - generic [ref=e815]: 
        - paragraph [ref=e816]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e820]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e821]:
    - iframe [ref=e824]:
      - generic [active] [ref=f9e1]:
        - generic [ref=f9e6]:
          - generic [ref=f9e8]:
            - link "Google Chrome" [ref=f9e11] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CH7rGO0wcaqypMfba_tMPx8Pw2QKek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEhwJP0Nc6S77QGAIC6HhuwfWsvd5qpzCURdEmU0oAeoQ6_UIcyO9ddKEoCdORXiuEtAkSgXklT8cT--0_Bz9TUHqg0KLvNOulu1G8WrdmaGc2lDDMvlP0GyEIieBcLhzJJAI_kkXeBYI48PxV_UXI42X6amBa-OYN8cJ8XIOWrIPAq0Lt7EVxmO1T-fbfLZfkUG0dMUo7HN2cxFhcT7jgBp6QHCDhiaTTCOBeOw10zxJHnB8vPiVBcdgh1LJNJQRcfTfisLrEaOyc0g5l0HzacCT851zdtFDpGHKrv-318-NjDhiA4bPDayk-KT8xwnCoVneSFKDCdAH-Zb7lqnOD3I3d2dM4lU-M28AE3uqUzNYFiAXDr4qmV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY76Xp0eTjlANgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDAOQAQGqDQJJTsgNAeoNEwjIuu7R5OOUAxV2rX8EHcchPCuIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI7LLu0eTjlAMVdq1_BB3HITwrEAEYASAAEgI_FPD_BwE&num=1&cid=CAQSngIABaugfeEUKV_rByJkDl9vm0nvqObKsKQsaGEtWJYA7-71uWUk7BKx5ClZy2iVxRThnN-uX9T2IevbEwQ-twCGyljaT7mjLTD-uyOsWsT5i-HVM94WfMuaKnFtOpDYqMGL0YwKhhMq2CccPf_zBHVsm38MVXaGgGYDhhk-MPWKBeSLzDf7tObf-DjII5U5Gxd_yiXAKvu7XTtQonbFaZ3E_vFKzZABPfNIkEA2fANXBxrGuurce-09CaysJKPk7YIj9mDYdYBhFVBLmo1a8X5xhA-75tHu8cg8oz_mdO4fr1Cx6Mfkk7sh-Zxpa0SkuU9o1ocNXBmajAGJZADlkx3vPPzvXWR6m3LCGSzgS-sSiPTfJqwsjtKUnJwr6_GVGAE&sig=AOD64_2ifhi2OJGJkLsTME-2l0i1nhihSg&client=ca-pub-1677597403311019&rf=1&nb=19&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - img "Google Chrome" [ref=f9e12]
            - generic [ref=f9e13]:
              - generic "Google Chrome" [ref=f9e14]:
                - link "Download Chrome" [ref=f9e16] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CH7rGO0wcaqypMfba_tMPx8Pw2QKek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEhwJP0Nc6S77QGAIC6HhuwfWsvd5qpzCURdEmU0oAeoQ6_UIcyO9ddKEoCdORXiuEtAkSgXklT8cT--0_Bz9TUHqg0KLvNOulu1G8WrdmaGc2lDDMvlP0GyEIieBcLhzJJAI_kkXeBYI48PxV_UXI42X6amBa-OYN8cJ8XIOWrIPAq0Lt7EVxmO1T-fbfLZfkUG0dMUo7HN2cxFhcT7jgBp6QHCDhiaTTCOBeOw10zxJHnB8vPiVBcdgh1LJNJQRcfTfisLrEaOyc0g5l0HzacCT851zdtFDpGHKrv-318-NjDhiA4bPDayk-KT8xwnCoVneSFKDCdAH-Zb7lqnOD3I3d2dM4lU-M28AE3uqUzNYFiAXDr4qmV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY76Xp0eTjlANgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDAOQAQGqDQJJTsgNAeoNEwjIuu7R5OOUAxV2rX8EHcchPCuIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI7LLu0eTjlAMVdq1_BB3HITwrEAEYASAAEgI_FPD_BwE&num=1&cid=CAQSngIABaugfeEUKV_rByJkDl9vm0nvqObKsKQsaGEtWJYA7-71uWUk7BKx5ClZy2iVxRThnN-uX9T2IevbEwQ-twCGyljaT7mjLTD-uyOsWsT5i-HVM94WfMuaKnFtOpDYqMGL0YwKhhMq2CccPf_zBHVsm38MVXaGgGYDhhk-MPWKBeSLzDf7tObf-DjII5U5Gxd_yiXAKvu7XTtQonbFaZ3E_vFKzZABPfNIkEA2fANXBxrGuurce-09CaysJKPk7YIj9mDYdYBhFVBLmo1a8X5xhA-75tHu8cg8oz_mdO4fr1Cx6Mfkk7sh-Zxpa0SkuU9o1ocNXBmajAGJZADlkx3vPPzvXWR6m3LCGSzgS-sSiPTfJqwsjtKUnJwr6_GVGAE&sig=AOD64_2ifhi2OJGJkLsTME-2l0i1nhihSg&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - link "Browse securely with Chrome's built-in protection from malware, phishing, and other scams. Google Chrome" [ref=f9e18] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CH7rGO0wcaqypMfba_tMPx8Pw2QKek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEhwJP0Nc6S77QGAIC6HhuwfWsvd5qpzCURdEmU0oAeoQ6_UIcyO9ddKEoCdORXiuEtAkSgXklT8cT--0_Bz9TUHqg0KLvNOulu1G8WrdmaGc2lDDMvlP0GyEIieBcLhzJJAI_kkXeBYI48PxV_UXI42X6amBa-OYN8cJ8XIOWrIPAq0Lt7EVxmO1T-fbfLZfkUG0dMUo7HN2cxFhcT7jgBp6QHCDhiaTTCOBeOw10zxJHnB8vPiVBcdgh1LJNJQRcfTfisLrEaOyc0g5l0HzacCT851zdtFDpGHKrv-318-NjDhiA4bPDayk-KT8xwnCoVneSFKDCdAH-Zb7lqnOD3I3d2dM4lU-M28AE3uqUzNYFiAXDr4qmV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY76Xp0eTjlANgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDAOQAQGqDQJJTsgNAeoNEwjIuu7R5OOUAxV2rX8EHcchPCuIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI7LLu0eTjlAMVdq1_BB3HITwrEAEYASAAEgI_FPD_BwE&num=1&cid=CAQSngIABaugfeEUKV_rByJkDl9vm0nvqObKsKQsaGEtWJYA7-71uWUk7BKx5ClZy2iVxRThnN-uX9T2IevbEwQ-twCGyljaT7mjLTD-uyOsWsT5i-HVM94WfMuaKnFtOpDYqMGL0YwKhhMq2CccPf_zBHVsm38MVXaGgGYDhhk-MPWKBeSLzDf7tObf-DjII5U5Gxd_yiXAKvu7XTtQonbFaZ3E_vFKzZABPfNIkEA2fANXBxrGuurce-09CaysJKPk7YIj9mDYdYBhFVBLmo1a8X5xhA-75tHu8cg8oz_mdO4fr1Cx6Mfkk7sh-Zxpa0SkuU9o1ocNXBmajAGJZADlkx3vPPzvXWR6m3LCGSzgS-sSiPTfJqwsjtKUnJwr6_GVGAE&sig=AOD64_2ifhi2OJGJkLsTME-2l0i1nhihSg&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
                - text: Browse securely with Chrome's built-in protection from malware, phishing, and
                - text: other scams. Google Chrome
          - link "Download" [ref=f9e21] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CH7rGO0wcaqypMfba_tMPx8Pw2QKek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEhwJP0Nc6S77QGAIC6HhuwfWsvd5qpzCURdEmU0oAeoQ6_UIcyO9ddKEoCdORXiuEtAkSgXklT8cT--0_Bz9TUHqg0KLvNOulu1G8WrdmaGc2lDDMvlP0GyEIieBcLhzJJAI_kkXeBYI48PxV_UXI42X6amBa-OYN8cJ8XIOWrIPAq0Lt7EVxmO1T-fbfLZfkUG0dMUo7HN2cxFhcT7jgBp6QHCDhiaTTCOBeOw10zxJHnB8vPiVBcdgh1LJNJQRcfTfisLrEaOyc0g5l0HzacCT851zdtFDpGHKrv-318-NjDhiA4bPDayk-KT8xwnCoVneSFKDCdAH-Zb7lqnOD3I3d2dM4lU-M28AE3uqUzNYFiAXDr4qmV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY76Xp0eTjlANgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDAOQAQGqDQJJTsgNAeoNEwjIuu7R5OOUAxV2rX8EHcchPCuIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI7LLu0eTjlAMVdq1_BB3HITwrEAEYASAAEgI_FPD_BwE&num=1&cid=CAQSngIABaugfeEUKV_rByJkDl9vm0nvqObKsKQsaGEtWJYA7-71uWUk7BKx5ClZy2iVxRThnN-uX9T2IevbEwQ-twCGyljaT7mjLTD-uyOsWsT5i-HVM94WfMuaKnFtOpDYqMGL0YwKhhMq2CccPf_zBHVsm38MVXaGgGYDhhk-MPWKBeSLzDf7tObf-DjII5U5Gxd_yiXAKvu7XTtQonbFaZ3E_vFKzZABPfNIkEA2fANXBxrGuurce-09CaysJKPk7YIj9mDYdYBhFVBLmo1a8X5xhA-75tHu8cg8oz_mdO4fr1Cx6Mfkk7sh-Zxpa0SkuU9o1ocNXBmajAGJZADlkx3vPPzvXWR6m3LCGSzgS-sSiPTfJqwsjtKUnJwr6_GVGAE&sig=AOD64_2ifhi2OJGJkLsTME-2l0i1nhihSg&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - generic [ref=f9e24]:
              - generic [ref=f9e25]: Download
              - img [ref=f9e26]
        - img [ref=f9e31] [cursor=pointer]
        - button [ref=f9e33] [cursor=pointer]:
          - img [ref=f9e34]
        - iframe
```

# Test source

```ts
  16  |         await this.checkoutText.waitFor({
  17  |             state: 'visible'
  18  |         });
  19  |     }
  20  | 
  21  |     constructor(page) {
  22  | 
  23  |         this.page = page;
  24  | 
  25  |         this.productPrice = page.locator(
  26  |             '.product-information span span'
  27  |         );
  28  | 
  29  |         this.productAvailability = page.locator(
  30  |             '.product-information p'
  31  |         ).nth(0);
  32  | 
  33  |         this.productCondition = page.locator(
  34  |             '.product-information p'
  35  |         ).nth(1);
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
> 116 |         await this.page.goto(
      |                         ^ TimeoutError: page.goto: Timeout 90000ms exceeded.
  117 |             'https://automationexercise.com/',
  118 |             {
  119 |                 waitUntil: 'networkidle',
  120 |                 timeout: 90000
  121 |             }
  122 |         );
  123 |     }
  124 | 
  125 |     async openProductsPage() {
  126 | 
  127 |         await Promise.all([
  128 |             this.page.waitForURL('**/products'),
  129 |             this.productsBtn.click()
  130 |         ]);
  131 |     }
  132 | 
  133 |     async searchProduct(productName) {
  134 | 
  135 |         await this.searchInput.waitFor({
  136 |             state: 'visible',
  137 |             timeout: 10000
  138 |         });
  139 | 
  140 |         await this.searchInput.fill(productName);
  141 | 
  142 |        await this.searchBtn.click();
  143 |     }
  144 | 
  145 |     async openFirstProduct() {
  146 | 
  147 |         await this.viewProductBtn.click({
  148 |             force: true
  149 |         });
  150 |     }
  151 | async addFirstProductToCart() {
  152 | 
  153 |     await this.addToCartBtn.click({
  154 |         force: true
  155 |     });
  156 | 
  157 |     await this.page.waitForTimeout(2000);
  158 | 
  159 |     await this.continueShoppingBtn.waitFor({
  160 |         state: 'visible',
  161 |         timeout: 15000
  162 |     });
  163 | }
  164 | 
  165 |     async addSecondProductToCart() {
  166 | 
  167 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  168 | 
  169 |         await this.secondAddToCartBtn.click();
  170 |     }
  171 | 
  172 |     async continueShopping() {
  173 | 
  174 |         await this.continueShoppingBtn.waitFor({
  175 |             state: 'visible',
  176 |             timeout: 10000
  177 |         });
  178 | 
  179 |         await this.continueShoppingBtn.click();
  180 |     }
  181 | 
  182 |     async openCart() {
  183 |         await Promise.all([
  184 |             this.page.waitForURL('**/view_cart'),
  185 |             this.cartBtn.click()
  186 |         ]);
  187 |     }
  188 | 
  189 |     async removeProductFromCart() {
  190 | 
  191 |         await this.removeCartBtn.click({
  192 |             force: true
  193 |         });
  194 |     }
  195 | 
  196 | }
  197 | 
  198 | module.exports = ProductPage;
```