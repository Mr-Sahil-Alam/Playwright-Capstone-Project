# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\cartPageTitle.spec.js >> Verify Cart Page Title
- Location: tests\cart\cartPageTitle.spec.js:5:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('a[href="/view_cart"]').first()
    - locator resolved to <a href="/view_cart">…</a>
  - attempting click action
    - scrolling into view if needed
    - done scrolling
    - forcing action
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - link "Website for automation practice":
            - /url: /
            - img "Website for automation practice"
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link " Home" [ref=e11] [cursor=pointer]:
            - /url: /
            - generic [ref=e12]: 
            - text: Home
        - listitem [ref=e13]:
          - link " Products" [ref=e14] [cursor=pointer]:
            - /url: /products
            - generic [ref=e15]: 
            - text: Products
        - listitem [ref=e16]:
          - link " Cart" [active] [ref=e17] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e18]: 
            - text: Cart
        - listitem [ref=e19]:
          - link " Signup / Login" [ref=e20] [cursor=pointer]:
            - /url: /login
            - generic [ref=e21]: 
            - text: Signup / Login
        - listitem [ref=e22]:
          - link " Test Cases" [ref=e23] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e24]: 
            - text: Test Cases
        - listitem [ref=e25]:
          - link " API Testing" [ref=e26] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e27]: 
            - text: API Testing
        - listitem [ref=e28]:
          - link " Video Tutorials" [ref=e29] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e30]: 
            - text: Video Tutorials
        - listitem [ref=e31]:
          - link " Contact us" [ref=e32] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e33]: 
            - text: Contact us
  - generic [ref=e38]:
    - list [ref=e39]:
      - listitem [ref=e40] [cursor=pointer]
      - listitem [ref=e41] [cursor=pointer]
      - listitem [ref=e42] [cursor=pointer]
    - generic [ref=e43]:
      - generic:
        - generic [ref=e44]:
          - heading "AutomationExercise" [level=1] [ref=e45]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e46]
          - paragraph [ref=e47]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e48] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e49]
          - link "APIs list for practice" [ref=e50] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e51]
        - img "demo website for practice" [ref=e53]
    - link "" [ref=e54] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e55]: 
    - link "" [ref=e56] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e57]: 
  - generic [ref=e60]:
    - generic [ref=e62]:
      - heading "Category" [level=2] [ref=e63]
      - generic [ref=e64]:
        - heading " Women" [level=4] [ref=e67]:
          - link " Women" [ref=e68] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e70]: 
            - text: Women
        - heading " Men" [level=4] [ref=e73]:
          - link " Men" [ref=e74] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e76]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e79]:
          - link " Kids" [ref=e80] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e82]: 
            - text: Kids
      - generic [ref=e83]:
        - heading "Brands" [level=2] [ref=e84]
        - list [ref=e86]:
          - listitem [ref=e87]:
            - link "(6) Polo" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e89]: (6)
              - text: Polo
          - listitem [ref=e90]:
            - link "(5) H&M" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e92]: (5)
              - text: H&M
          - listitem [ref=e93]:
            - link "(5) Madame" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e95]: (5)
              - text: Madame
          - listitem [ref=e96]:
            - link "(3) Mast & Harbour" [ref=e97] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e98]: (3)
              - text: Mast & Harbour
          - listitem [ref=e99]:
            - link "(4) Babyhug" [ref=e100] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e101]: (4)
              - text: Babyhug
          - listitem [ref=e102]:
            - link "(3) Allen Solly Junior" [ref=e103] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e104]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e105]:
            - link "(3) Kookie Kids" [ref=e106] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e107]: (3)
              - text: Kookie Kids
          - listitem [ref=e108]:
            - link "(5) Biba" [ref=e109] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e110]: (5)
              - text: Biba
    - generic [ref=e111]:
      - generic [ref=e112]:
        - heading "Features Items" [level=2] [ref=e113]
        - generic [ref=e115]:
          - generic [ref=e116]:
            - generic [ref=e117]:
              - img "ecommerce website products" [ref=e118]
              - heading "Rs. 500" [level=2] [ref=e119]
              - paragraph [ref=e120]: Blue Top
              - generic [ref=e121] [cursor=pointer]:
                - generic [ref=e122]: 
                - text: Add to cart
            - generic [ref=e123]:
              - heading "Rs. 500" [level=2] [ref=e124]
              - paragraph [ref=e125]: Blue Top
              - generic [ref=e126] [cursor=pointer]:
                - generic [ref=e127]: 
                - text: Add to cart
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link " View Product" [ref=e131] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e132]: 
                - text: View Product
        - generic [ref=e134]:
          - generic [ref=e135]:
            - generic [ref=e136]:
              - img "ecommerce website products" [ref=e137]
              - heading "Rs. 400" [level=2] [ref=e138]
              - paragraph [ref=e139]: Men Tshirt
              - generic [ref=e140] [cursor=pointer]:
                - generic [ref=e141]: 
                - text: Add to cart
            - generic [ref=e142]:
              - heading "Rs. 400" [level=2] [ref=e143]
              - paragraph [ref=e144]: Men Tshirt
              - generic [ref=e145] [cursor=pointer]:
                - generic [ref=e146]: 
                - text: Add to cart
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link " View Product" [ref=e150] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e151]: 
                - text: View Product
        - generic [ref=e153]:
          - generic [ref=e154]:
            - generic [ref=e155]:
              - img "ecommerce website products" [ref=e156]
              - heading "Rs. 1000" [level=2] [ref=e157]
              - paragraph [ref=e158]: Sleeveless Dress
              - generic [ref=e159] [cursor=pointer]:
                - generic [ref=e160]: 
                - text: Add to cart
            - generic [ref=e161]:
              - heading "Rs. 1000" [level=2] [ref=e162]
              - paragraph [ref=e163]: Sleeveless Dress
              - generic [ref=e164] [cursor=pointer]:
                - generic [ref=e165]: 
                - text: Add to cart
          - list [ref=e167]:
            - listitem [ref=e168]:
              - link " View Product" [ref=e169] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e170]: 
                - text: View Product
        - generic [ref=e172]:
          - generic [ref=e173]:
            - generic [ref=e174]:
              - img "ecommerce website products" [ref=e175]
              - heading "Rs. 1500" [level=2] [ref=e176]
              - paragraph [ref=e177]: Stylish Dress
              - generic [ref=e178] [cursor=pointer]:
                - generic [ref=e179]: 
                - text: Add to cart
            - generic [ref=e180]:
              - heading "Rs. 1500" [level=2] [ref=e181]
              - paragraph [ref=e182]: Stylish Dress
              - generic [ref=e183] [cursor=pointer]:
                - generic [ref=e184]: 
                - text: Add to cart
          - list [ref=e186]:
            - listitem [ref=e187]:
              - link " View Product" [ref=e188] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e189]: 
                - text: View Product
        - generic [ref=e191]:
          - generic [ref=e192]:
            - generic [ref=e193]:
              - img "ecommerce website products" [ref=e194]
              - heading "Rs. 600" [level=2] [ref=e195]
              - paragraph [ref=e196]: Winter Top
              - generic [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: 
                - text: Add to cart
            - generic [ref=e199]:
              - heading "Rs. 600" [level=2] [ref=e200]
              - paragraph [ref=e201]: Winter Top
              - generic [ref=e202] [cursor=pointer]:
                - generic [ref=e203]: 
                - text: Add to cart
          - list [ref=e205]:
            - listitem [ref=e206]:
              - link " View Product" [ref=e207] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e208]: 
                - text: View Product
        - generic [ref=e210]:
          - generic [ref=e211]:
            - generic [ref=e212]:
              - img "ecommerce website products" [ref=e213]
              - heading "Rs. 400" [level=2] [ref=e214]
              - paragraph [ref=e215]: Summer White Top
              - generic [ref=e216] [cursor=pointer]:
                - generic [ref=e217]: 
                - text: Add to cart
            - generic [ref=e218]:
              - heading "Rs. 400" [level=2] [ref=e219]
              - paragraph [ref=e220]: Summer White Top
              - generic [ref=e221] [cursor=pointer]:
                - generic [ref=e222]: 
                - text: Add to cart
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link " View Product" [ref=e226] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e227]: 
                - text: View Product
        - generic [ref=e229]:
          - generic [ref=e230]:
            - generic [ref=e231]:
              - img "ecommerce website products" [ref=e232]
              - heading "Rs. 1000" [level=2] [ref=e233]
              - paragraph [ref=e234]: Madame Top For Women
              - generic [ref=e235] [cursor=pointer]:
                - generic [ref=e236]: 
                - text: Add to cart
            - generic [ref=e237]:
              - heading "Rs. 1000" [level=2] [ref=e238]
              - paragraph [ref=e239]: Madame Top For Women
              - generic [ref=e240] [cursor=pointer]:
                - generic [ref=e241]: 
                - text: Add to cart
          - list [ref=e243]:
            - listitem [ref=e244]:
              - link " View Product" [ref=e245] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e246]: 
                - text: View Product
        - generic [ref=e248]:
          - generic [ref=e249]:
            - generic [ref=e250]:
              - img "ecommerce website products"
              - heading "Rs. 700" [level=2] [ref=e251]
              - paragraph [ref=e252]: Fancy Green Top
              - generic [ref=e253] [cursor=pointer]:
                - generic [ref=e254]: 
                - text: Add to cart
            - generic [ref=e255]:
              - heading "Rs. 700" [level=2] [ref=e256]
              - paragraph [ref=e257]: Fancy Green Top
              - generic [ref=e258] [cursor=pointer]:
                - generic [ref=e259]: 
                - text: Add to cart
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link " View Product" [ref=e263] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e264]: 
                - text: View Product
        - generic [ref=e266]:
          - generic [ref=e267]:
            - generic [ref=e268]:
              - img "ecommerce website products" [ref=e269]
              - heading "Rs. 499" [level=2] [ref=e270]
              - paragraph [ref=e271]: Sleeves Printed Top - White
              - generic [ref=e272] [cursor=pointer]:
                - generic [ref=e273]: 
                - text: Add to cart
            - generic [ref=e274]:
              - heading "Rs. 499" [level=2] [ref=e275]
              - paragraph [ref=e276]: Sleeves Printed Top - White
              - generic [ref=e277] [cursor=pointer]:
                - generic [ref=e278]: 
                - text: Add to cart
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link " View Product" [ref=e282] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e283]: 
                - text: View Product
        - generic [ref=e285]:
          - generic [ref=e286]:
            - generic [ref=e287]:
              - img "ecommerce website products" [ref=e288]
              - heading "Rs. 359" [level=2] [ref=e289]
              - paragraph [ref=e290]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e291] [cursor=pointer]:
                - generic [ref=e292]: 
                - text: Add to cart
            - generic [ref=e293]:
              - heading "Rs. 359" [level=2] [ref=e294]
              - paragraph [ref=e295]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e296] [cursor=pointer]:
                - generic [ref=e297]: 
                - text: Add to cart
          - list [ref=e299]:
            - listitem [ref=e300]:
              - link " View Product" [ref=e301] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e302]: 
                - text: View Product
        - generic [ref=e304]:
          - generic [ref=e305]:
            - generic [ref=e306]:
              - img "ecommerce website products" [ref=e307]
              - heading "Rs. 278" [level=2] [ref=e308]
              - paragraph [ref=e309]: Frozen Tops For Kids
              - generic [ref=e310] [cursor=pointer]:
                - generic [ref=e311]: 
                - text: Add to cart
            - generic [ref=e312]:
              - heading "Rs. 278" [level=2] [ref=e313]
              - paragraph [ref=e314]: Frozen Tops For Kids
              - generic [ref=e315] [cursor=pointer]:
                - generic [ref=e316]: 
                - text: Add to cart
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link " View Product" [ref=e320] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e321]: 
                - text: View Product
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]:
              - img "ecommerce website products" [ref=e326]
              - heading "Rs. 679" [level=2] [ref=e327]
              - paragraph [ref=e328]: Full Sleeves Top Cherry - Pink
              - generic [ref=e329] [cursor=pointer]:
                - generic [ref=e330]: 
                - text: Add to cart
            - generic [ref=e331]:
              - heading "Rs. 679" [level=2] [ref=e332]
              - paragraph [ref=e333]: Full Sleeves Top Cherry - Pink
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: 
                - text: Add to cart
          - list [ref=e337]:
            - listitem [ref=e338]:
              - link " View Product" [ref=e339] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e340]: 
                - text: View Product
        - generic [ref=e342]:
          - generic [ref=e343]:
            - generic [ref=e344]:
              - img "ecommerce website products" [ref=e345]
              - heading "Rs. 315" [level=2] [ref=e346]
              - paragraph [ref=e347]: Printed Off Shoulder Top - White
              - generic [ref=e348] [cursor=pointer]:
                - generic [ref=e349]: 
                - text: Add to cart
            - generic [ref=e350]:
              - heading "Rs. 315" [level=2] [ref=e351]
              - paragraph [ref=e352]: Printed Off Shoulder Top - White
              - generic [ref=e353] [cursor=pointer]:
                - generic [ref=e354]: 
                - text: Add to cart
          - list [ref=e356]:
            - listitem [ref=e357]:
              - link " View Product" [ref=e358] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e359]: 
                - text: View Product
        - generic [ref=e361]:
          - generic [ref=e362]:
            - generic [ref=e363]:
              - img "ecommerce website products" [ref=e364]
              - heading "Rs. 478" [level=2] [ref=e365]
              - paragraph [ref=e366]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e367] [cursor=pointer]:
                - generic [ref=e368]: 
                - text: Add to cart
            - generic [ref=e369]:
              - heading "Rs. 478" [level=2] [ref=e370]
              - paragraph [ref=e371]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e372] [cursor=pointer]:
                - generic [ref=e373]: 
                - text: Add to cart
          - list [ref=e375]:
            - listitem [ref=e376]:
              - link " View Product" [ref=e377] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e378]: 
                - text: View Product
        - generic [ref=e380]:
          - generic [ref=e381]:
            - generic [ref=e382]:
              - img "ecommerce website products" [ref=e383]
              - heading "Rs. 1200" [level=2] [ref=e384]
              - paragraph [ref=e385]: Little Girls Mr. Panda Shirt
              - generic [ref=e386] [cursor=pointer]:
                - generic [ref=e387]: 
                - text: Add to cart
            - generic [ref=e388]:
              - heading "Rs. 1200" [level=2] [ref=e389]
              - paragraph [ref=e390]: Little Girls Mr. Panda Shirt
              - generic [ref=e391] [cursor=pointer]:
                - generic [ref=e392]: 
                - text: Add to cart
          - list [ref=e394]:
            - listitem [ref=e395]:
              - link " View Product" [ref=e396] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e397]: 
                - text: View Product
        - generic [ref=e399]:
          - generic [ref=e400]:
            - generic [ref=e401]:
              - img "ecommerce website products" [ref=e402]
              - heading "Rs. 1050" [level=2] [ref=e403]
              - paragraph [ref=e404]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e405] [cursor=pointer]:
                - generic [ref=e406]: 
                - text: Add to cart
            - generic [ref=e407]:
              - heading "Rs. 1050" [level=2] [ref=e408]
              - paragraph [ref=e409]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e410] [cursor=pointer]:
                - generic [ref=e411]: 
                - text: Add to cart
          - list [ref=e413]:
            - listitem [ref=e414]:
              - link " View Product" [ref=e415] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e416]: 
                - text: View Product
        - generic [ref=e418]:
          - generic [ref=e419]:
            - generic [ref=e420]:
              - img "ecommerce website products" [ref=e421]
              - heading "Rs. 1190" [level=2] [ref=e422]
              - paragraph [ref=e423]: Cotton Mull Embroidered Dress
              - generic [ref=e424] [cursor=pointer]:
                - generic [ref=e425]: 
                - text: Add to cart
            - generic [ref=e426]:
              - heading "Rs. 1190" [level=2] [ref=e427]
              - paragraph [ref=e428]: Cotton Mull Embroidered Dress
              - generic [ref=e429] [cursor=pointer]:
                - generic [ref=e430]: 
                - text: Add to cart
          - list [ref=e432]:
            - listitem [ref=e433]:
              - link " View Product" [ref=e434] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e435]: 
                - text: View Product
        - generic [ref=e437]:
          - generic [ref=e438]:
            - generic [ref=e439]:
              - img "ecommerce website products" [ref=e440]
              - heading "Rs. 1530" [level=2] [ref=e441]
              - paragraph [ref=e442]: Blue Cotton Indie Mickey Dress
              - generic [ref=e443] [cursor=pointer]:
                - generic [ref=e444]: 
                - text: Add to cart
            - generic [ref=e445]:
              - heading "Rs. 1530" [level=2] [ref=e446]
              - paragraph [ref=e447]: Blue Cotton Indie Mickey Dress
              - generic [ref=e448] [cursor=pointer]:
                - generic [ref=e449]: 
                - text: Add to cart
          - list [ref=e451]:
            - listitem [ref=e452]:
              - link " View Product" [ref=e453] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e454]: 
                - text: View Product
        - generic [ref=e456]:
          - generic [ref=e457]:
            - generic [ref=e458]:
              - img "ecommerce website products" [ref=e459]
              - heading "Rs. 1600" [level=2] [ref=e460]
              - paragraph [ref=e461]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e462] [cursor=pointer]:
                - generic [ref=e463]: 
                - text: Add to cart
            - generic [ref=e464]:
              - heading "Rs. 1600" [level=2] [ref=e465]
              - paragraph [ref=e466]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e467] [cursor=pointer]:
                - generic [ref=e468]: 
                - text: Add to cart
          - list [ref=e470]:
            - listitem [ref=e471]:
              - link " View Product" [ref=e472] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e473]: 
                - text: View Product
        - generic [ref=e475]:
          - generic [ref=e476]:
            - generic [ref=e477]:
              - img "ecommerce website products" [ref=e478]
              - heading "Rs. 1100" [level=2] [ref=e479]
              - paragraph [ref=e480]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e481] [cursor=pointer]:
                - generic [ref=e482]: 
                - text: Add to cart
            - generic [ref=e483]:
              - heading "Rs. 1100" [level=2] [ref=e484]
              - paragraph [ref=e485]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e486] [cursor=pointer]:
                - generic [ref=e487]: 
                - text: Add to cart
          - list [ref=e489]:
            - listitem [ref=e490]:
              - link " View Product" [ref=e491] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e492]: 
                - text: View Product
        - generic [ref=e494]:
          - generic [ref=e495]:
            - generic [ref=e496]:
              - img "ecommerce website products" [ref=e497]
              - heading "Rs. 849" [level=2] [ref=e498]
              - paragraph [ref=e499]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e500] [cursor=pointer]:
                - generic [ref=e501]: 
                - text: Add to cart
            - generic [ref=e502]:
              - heading "Rs. 849" [level=2] [ref=e503]
              - paragraph [ref=e504]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e505] [cursor=pointer]:
                - generic [ref=e506]: 
                - text: Add to cart
          - list [ref=e508]:
            - listitem [ref=e509]:
              - link " View Product" [ref=e510] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e511]: 
                - text: View Product
        - generic [ref=e513]:
          - generic [ref=e514]:
            - generic [ref=e515]:
              - img "ecommerce website products" [ref=e516]
              - heading "Rs. 1299" [level=2] [ref=e517]
              - paragraph [ref=e518]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e519] [cursor=pointer]:
                - generic [ref=e520]: 
                - text: Add to cart
            - generic [ref=e521]:
              - heading "Rs. 1299" [level=2] [ref=e522]
              - paragraph [ref=e523]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e524] [cursor=pointer]:
                - generic [ref=e525]: 
                - text: Add to cart
          - list [ref=e527]:
            - listitem [ref=e528]:
              - link " View Product" [ref=e529] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e530]: 
                - text: View Product
        - generic [ref=e532]:
          - generic [ref=e533]:
            - generic [ref=e534]:
              - img "ecommerce website products" [ref=e535]
              - heading "Rs. 1000" [level=2] [ref=e536]
              - paragraph [ref=e537]: Green Side Placket Detail T-Shirt
              - generic [ref=e538] [cursor=pointer]:
                - generic [ref=e539]: 
                - text: Add to cart
            - generic [ref=e540]:
              - heading "Rs. 1000" [level=2] [ref=e541]
              - paragraph [ref=e542]: Green Side Placket Detail T-Shirt
              - generic [ref=e543] [cursor=pointer]:
                - generic [ref=e544]: 
                - text: Add to cart
          - list [ref=e546]:
            - listitem [ref=e547]:
              - link " View Product" [ref=e548] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e549]: 
                - text: View Product
        - generic [ref=e551]:
          - generic [ref=e552]:
            - generic [ref=e553]:
              - img "ecommerce website products" [ref=e554]
              - heading "Rs. 1500" [level=2] [ref=e555]
              - paragraph [ref=e556]: Premium Polo T-Shirts
              - generic [ref=e557] [cursor=pointer]:
                - generic [ref=e558]: 
                - text: Add to cart
            - generic [ref=e559]:
              - heading "Rs. 1500" [level=2] [ref=e560]
              - paragraph [ref=e561]: Premium Polo T-Shirts
              - generic [ref=e562] [cursor=pointer]:
                - generic [ref=e563]: 
                - text: Add to cart
          - list [ref=e565]:
            - listitem [ref=e566]:
              - link " View Product" [ref=e567] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e568]: 
                - text: View Product
        - generic [ref=e570]:
          - generic [ref=e571]:
            - generic [ref=e572]:
              - img "ecommerce website products"
              - heading "Rs. 850" [level=2] [ref=e573]
              - paragraph [ref=e574]: Pure Cotton Neon Green Tshirt
              - generic [ref=e575] [cursor=pointer]:
                - generic [ref=e576]: 
                - text: Add to cart
            - generic [ref=e577]:
              - heading "Rs. 850" [level=2] [ref=e578]
              - paragraph [ref=e579]: Pure Cotton Neon Green Tshirt
              - generic [ref=e580] [cursor=pointer]:
                - generic [ref=e581]: 
                - text: Add to cart
          - list [ref=e583]:
            - listitem [ref=e584]:
              - link " View Product" [ref=e585] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e586]: 
                - text: View Product
        - generic [ref=e588]:
          - generic [ref=e589]:
            - generic [ref=e590]:
              - img "ecommerce website products"
              - heading "Rs. 799" [level=2] [ref=e591]
              - paragraph [ref=e592]: Soft Stretch Jeans
              - generic [ref=e593] [cursor=pointer]:
                - generic [ref=e594]: 
                - text: Add to cart
            - generic [ref=e595]:
              - heading "Rs. 799" [level=2] [ref=e596]
              - paragraph [ref=e597]: Soft Stretch Jeans
              - generic [ref=e598] [cursor=pointer]:
                - generic [ref=e599]: 
                - text: Add to cart
          - list [ref=e601]:
            - listitem [ref=e602]:
              - link " View Product" [ref=e603] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e604]: 
                - text: View Product
        - generic [ref=e606]:
          - generic [ref=e607]:
            - generic [ref=e608]:
              - img "ecommerce website products" [ref=e609]
              - heading "Rs. 1200" [level=2] [ref=e610]
              - paragraph [ref=e611]: Regular Fit Straight Jeans
              - generic [ref=e612] [cursor=pointer]:
                - generic [ref=e613]: 
                - text: Add to cart
            - generic [ref=e614]:
              - heading "Rs. 1200" [level=2] [ref=e615]
              - paragraph [ref=e616]: Regular Fit Straight Jeans
              - generic [ref=e617] [cursor=pointer]:
                - generic [ref=e618]: 
                - text: Add to cart
          - list [ref=e620]:
            - listitem [ref=e621]:
              - link " View Product" [ref=e622] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e623]: 
                - text: View Product
        - generic [ref=e625]:
          - generic [ref=e626]:
            - generic [ref=e627]:
              - img "ecommerce website products" [ref=e628]
              - heading "Rs. 1400" [level=2] [ref=e629]
              - paragraph [ref=e630]: Grunt Blue Slim Fit Jeans
              - generic [ref=e631] [cursor=pointer]:
                - generic [ref=e632]: 
                - text: Add to cart
            - generic [ref=e633]:
              - heading "Rs. 1400" [level=2] [ref=e634]
              - paragraph [ref=e635]: Grunt Blue Slim Fit Jeans
              - generic [ref=e636] [cursor=pointer]:
                - generic [ref=e637]: 
                - text: Add to cart
          - list [ref=e639]:
            - listitem [ref=e640]:
              - link " View Product" [ref=e641] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e642]: 
                - text: View Product
        - generic [ref=e644]:
          - generic [ref=e645]:
            - generic [ref=e646]:
              - img "ecommerce website products" [ref=e647]
              - heading "Rs. 2300" [level=2] [ref=e648]
              - paragraph [ref=e649]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e650] [cursor=pointer]:
                - generic [ref=e651]: 
                - text: Add to cart
            - generic [ref=e652]:
              - heading "Rs. 2300" [level=2] [ref=e653]
              - paragraph [ref=e654]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e655] [cursor=pointer]:
                - generic [ref=e656]: 
                - text: Add to cart
          - list [ref=e658]:
            - listitem [ref=e659]:
              - link " View Product" [ref=e660] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e661]: 
                - text: View Product
        - generic [ref=e663]:
          - generic [ref=e664]:
            - generic [ref=e665]:
              - img "ecommerce website products" [ref=e666]
              - heading "Rs. 3000" [level=2] [ref=e667]
              - paragraph [ref=e668]: Cotton Silk Hand Block Print Saree
              - generic [ref=e669] [cursor=pointer]:
                - generic [ref=e670]: 
                - text: Add to cart
            - generic [ref=e671]:
              - heading "Rs. 3000" [level=2] [ref=e672]
              - paragraph [ref=e673]: Cotton Silk Hand Block Print Saree
              - generic [ref=e674] [cursor=pointer]:
                - generic [ref=e675]: 
                - text: Add to cart
          - list [ref=e677]:
            - listitem [ref=e678]:
              - link " View Product" [ref=e679] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e680]: 
                - text: View Product
        - generic [ref=e682]:
          - generic [ref=e683]:
            - generic [ref=e684]:
              - img "ecommerce website products" [ref=e685]
              - heading "Rs. 3500" [level=2] [ref=e686]
              - paragraph [ref=e687]: Rust Red Linen Saree
              - generic [ref=e688] [cursor=pointer]:
                - generic [ref=e689]: 
                - text: Add to cart
            - generic [ref=e690]:
              - heading "Rs. 3500" [level=2] [ref=e691]
              - paragraph [ref=e692]: Rust Red Linen Saree
              - generic [ref=e693] [cursor=pointer]:
                - generic [ref=e694]: 
                - text: Add to cart
          - list [ref=e696]:
            - listitem [ref=e697]:
              - link " View Product" [ref=e698] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e699]: 
                - text: View Product
        - generic [ref=e701]:
          - generic [ref=e702]:
            - generic [ref=e703]:
              - img "ecommerce website products"
              - heading "Rs. 5000" [level=2] [ref=e704]
              - paragraph [ref=e705]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e706] [cursor=pointer]:
                - generic [ref=e707]: 
                - text: Add to cart
            - generic [ref=e708]:
              - heading "Rs. 5000" [level=2] [ref=e709]
              - paragraph [ref=e710]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e711] [cursor=pointer]:
                - generic [ref=e712]: 
                - text: Add to cart
          - list [ref=e714]:
            - listitem [ref=e715]:
              - link " View Product" [ref=e716] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e717]: 
                - text: View Product
        - generic [ref=e719]:
          - generic [ref=e720]:
            - generic [ref=e721]:
              - img "ecommerce website products" [ref=e722]
              - heading "Rs. 1400" [level=2] [ref=e723]
              - paragraph [ref=e724]: Lace Top For Women
              - generic [ref=e725] [cursor=pointer]:
                - generic [ref=e726]: 
                - text: Add to cart
            - generic [ref=e727]:
              - heading "Rs. 1400" [level=2] [ref=e728]
              - paragraph [ref=e729]: Lace Top For Women
              - generic [ref=e730] [cursor=pointer]:
                - generic [ref=e731]: 
                - text: Add to cart
          - list [ref=e733]:
            - listitem [ref=e734]:
              - link " View Product" [ref=e735] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e736]: 
                - text: View Product
        - generic [ref=e738]:
          - generic [ref=e739]:
            - generic [ref=e740]:
              - img "ecommerce website products"
              - heading "Rs. 1389" [level=2] [ref=e741]
              - paragraph [ref=e742]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e743] [cursor=pointer]:
                - generic [ref=e744]: 
                - text: Add to cart
            - generic [ref=e745]:
              - heading "Rs. 1389" [level=2] [ref=e746]
              - paragraph [ref=e747]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e748] [cursor=pointer]:
                - generic [ref=e749]: 
                - text: Add to cart
          - list [ref=e751]:
            - listitem [ref=e752]:
              - link " View Product" [ref=e753] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e754]: 
                - text: View Product
      - generic [ref=e755]:
        - heading "recommended items" [level=2] [ref=e756]
        - generic [ref=e757]:
          - generic [ref=e758]:
            - text:   
            - generic:
              - generic [ref=e762]:
                - img "ecommerce website products" [ref=e763]
                - heading "Rs. 1500" [level=2] [ref=e764]
                - paragraph [ref=e765]: Stylish Dress
                - generic [ref=e766] [cursor=pointer]:
                  - generic [ref=e767]: 
                  - text: Add to cart
              - generic [ref=e771]:
                - img "ecommerce website products" [ref=e772]
                - heading "Rs. 600" [level=2] [ref=e773]
                - paragraph [ref=e774]: Winter Top
                - generic [ref=e775] [cursor=pointer]:
                  - generic [ref=e776]: 
                  - text: Add to cart
              - generic [ref=e780]:
                - img "ecommerce website products" [ref=e781]
                - heading "Rs. 400" [level=2] [ref=e782]
                - paragraph [ref=e783]: Summer White Top
                - generic [ref=e784] [cursor=pointer]:
                  - generic [ref=e785]: 
                  - text: Add to cart
          - link "" [ref=e786] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e787]: 
          - link "" [ref=e788] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e789]: 
  - contentinfo [ref=e790]:
    - generic [ref=e795]:
      - heading "Subscription" [level=2] [ref=e796]
      - generic [ref=e797]:
        - textbox "Your email address" [ref=e798]
        - button "" [ref=e799] [cursor=pointer]:
          - generic [ref=e800]: 
        - paragraph [ref=e801]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e805]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  87  |             '.features_items .product-image-wrapper'
  88  |         ).first().locator('.add-to-cart').first();
  89  | 
  90  |         this.secondAddToCartBtn = page.locator(
  91  |             '.features_items .product-image-wrapper'
  92  |         ).nth(1).locator('.add-to-cart').first();
  93  | 
  94  |         this.continueShoppingBtn = page.getByRole(
  95  |             'button',
  96  |             { name: 'Continue Shopping' }
  97  |         );
  98  | 
  99  |         this.cartBtn = page.locator(
  100 |             'a[href="/view_cart"]'
  101 |         ).first();
  102 | 
  103 |         this.cartProduct = page.locator(
  104 |             '.cart_description h4 a'
  105 |         );
  106 | 
  107 |         this.removeCartBtn = page.locator(
  108 |             '.cart_quantity_delete'
  109 |         );
  110 | 
  111 |         this.cartQuantity = page.locator(
  112 |             '.cart_quantity'
  113 |         );
  114 |     }
  115 | 
  116 |     async goto() {
  117 | 
  118 |         await this.page.goto(
  119 |             'https://automationexercise.com/',
  120 |             {
  121 |                 waitUntil: 'domcontentloaded',
  122 |                 timeout: 60000
  123 |             }
  124 |         );
  125 |     }
  126 | 
  127 |     async openProductsPage() {
  128 | 
  129 |         await this.productsBtn.waitFor({
  130 |             state: 'visible'
  131 |         });
  132 | 
  133 |         await this.productsBtn.click({
  134 |             force: true
  135 |         });
  136 |     }
  137 | 
  138 |     async searchProduct(productName) {
  139 | 
  140 |         await this.searchInput.waitFor({
  141 |             state: 'visible',
  142 |             timeout: 10000
  143 |         });
  144 | 
  145 |         await this.searchInput.fill(productName);
  146 | 
  147 |         await this.searchBtn.click({
  148 |             force: true
  149 |         });
  150 |     }
  151 | 
  152 |     async openFirstProduct() {
  153 | 
  154 |         await this.viewProductBtn.click({
  155 |             force: true
  156 |         });
  157 |     }
  158 | 
  159 |     async addFirstProductToCart() {
  160 | 
  161 |         await this.addToCartBtn.scrollIntoViewIfNeeded();
  162 | 
  163 |         await this.addToCartBtn.click({
  164 |             force: true
  165 |         });
  166 |     }
  167 | 
  168 |     async addSecondProductToCart() {
  169 | 
  170 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  171 | 
  172 |         await this.secondAddToCartBtn.click();
  173 |     }
  174 | 
  175 |     async continueShopping() {
  176 | 
  177 |         await this.continueShoppingBtn.waitFor({
  178 |             state: 'visible',
  179 |             timeout: 10000
  180 |         });
  181 | 
  182 |         await this.continueShoppingBtn.click();
  183 |     }
  184 | 
  185 |     async openCart() {
  186 | 
> 187 |         await this.cartBtn.click({
      |                            ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  188 |             force: true
  189 |         });
  190 |     }
  191 | 
  192 |     async removeProductFromCart() {
  193 | 
  194 |         await this.removeCartBtn.click({
  195 |             force: true
  196 |         });
  197 |     }
  198 | 
  199 | }
  200 | 
  201 | module.exports = ProductPage;
```