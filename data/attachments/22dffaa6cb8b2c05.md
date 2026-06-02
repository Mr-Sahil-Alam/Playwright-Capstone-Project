# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product\productAvailability.spec.js >> Verify Product Availability Visibility
- Location: tests\product\productAvailability.spec.js:5:1

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
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
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - generic [ref=e97]:
      - heading "All Products" [level=2] [ref=e98]
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - img "ecommerce website products" [ref=e103]
            - heading "Rs. 500" [level=2] [ref=e104]
            - paragraph [ref=e105]: Blue Top
            - generic [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: Add to cart
          - generic [ref=e109]:
            - heading "Rs. 500" [level=2] [ref=e110]
            - paragraph [ref=e111]: Blue Top
            - generic [ref=e112] [cursor=pointer]:
              - generic [ref=e113]: 
              - text: Add to cart
        - list [ref=e115]:
          - listitem [ref=e116]:
            - link " View Product" [ref=e117] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e118]: 
              - text: View Product
      - generic [ref=e120]:
        - generic [ref=e121]:
          - generic [ref=e122]:
            - img "ecommerce website products" [ref=e123]
            - heading "Rs. 400" [level=2] [ref=e124]
            - paragraph [ref=e125]: Men Tshirt
            - generic [ref=e126] [cursor=pointer]:
              - generic [ref=e127]: 
              - text: Add to cart
          - generic [ref=e128]:
            - heading "Rs. 400" [level=2] [ref=e129]
            - paragraph [ref=e130]: Men Tshirt
            - generic [ref=e131] [cursor=pointer]:
              - generic [ref=e132]: 
              - text: Add to cart
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link " View Product" [ref=e136] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e137]: 
              - text: View Product
      - generic [ref=e139]:
        - generic [ref=e140]:
          - generic [ref=e141]:
            - img "ecommerce website products" [ref=e142]
            - heading "Rs. 1000" [level=2] [ref=e143]
            - paragraph [ref=e144]: Sleeveless Dress
            - generic [ref=e145] [cursor=pointer]:
              - generic [ref=e146]: 
              - text: Add to cart
          - generic [ref=e147]:
            - heading "Rs. 1000" [level=2] [ref=e148]
            - paragraph [ref=e149]: Sleeveless Dress
            - generic [ref=e150] [cursor=pointer]:
              - generic [ref=e151]: 
              - text: Add to cart
        - list [ref=e153]:
          - listitem [ref=e154]:
            - link " View Product" [ref=e155] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e156]: 
              - text: View Product
      - generic [ref=e158]:
        - generic [ref=e159]:
          - generic [ref=e160]:
            - img "ecommerce website products" [ref=e161]
            - heading "Rs. 1500" [level=2] [ref=e162]
            - paragraph [ref=e163]: Stylish Dress
            - generic [ref=e164] [cursor=pointer]:
              - generic [ref=e165]: 
              - text: Add to cart
          - generic [ref=e166]:
            - heading "Rs. 1500" [level=2] [ref=e167]
            - paragraph [ref=e168]: Stylish Dress
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: 
              - text: Add to cart
        - list [ref=e172]:
          - listitem [ref=e173]:
            - link " View Product" [ref=e174] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e175]: 
              - text: View Product
      - generic [ref=e177]:
        - generic [ref=e178]:
          - generic [ref=e179]:
            - img "ecommerce website products" [ref=e180]
            - heading "Rs. 600" [level=2] [ref=e181]
            - paragraph [ref=e182]: Winter Top
            - generic [ref=e183] [cursor=pointer]:
              - generic [ref=e184]: 
              - text: Add to cart
          - generic [ref=e185]:
            - heading "Rs. 600" [level=2] [ref=e186]
            - paragraph [ref=e187]: Winter Top
            - generic [ref=e188] [cursor=pointer]:
              - generic [ref=e189]: 
              - text: Add to cart
        - list [ref=e191]:
          - listitem [ref=e192]:
            - link " View Product" [ref=e193] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e194]: 
              - text: View Product
      - generic [ref=e196]:
        - generic [ref=e197]:
          - generic [ref=e198]:
            - img "ecommerce website products" [ref=e199]
            - heading "Rs. 400" [level=2] [ref=e200]
            - paragraph [ref=e201]: Summer White Top
            - generic [ref=e202] [cursor=pointer]:
              - generic [ref=e203]: 
              - text: Add to cart
          - generic [ref=e204]:
            - heading "Rs. 400" [level=2] [ref=e205]
            - paragraph [ref=e206]: Summer White Top
            - generic [ref=e207] [cursor=pointer]:
              - generic [ref=e208]: 
              - text: Add to cart
        - list [ref=e210]:
          - listitem [ref=e211]:
            - link " View Product" [ref=e212] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e213]: 
              - text: View Product
      - generic [ref=e215]:
        - generic [ref=e216]:
          - generic [ref=e217]:
            - img "ecommerce website products" [ref=e218]
            - heading "Rs. 1000" [level=2] [ref=e219]
            - paragraph [ref=e220]: Madame Top For Women
            - generic [ref=e221] [cursor=pointer]:
              - generic [ref=e222]: 
              - text: Add to cart
          - generic [ref=e223]:
            - heading "Rs. 1000" [level=2] [ref=e224]
            - paragraph [ref=e225]: Madame Top For Women
            - generic [ref=e226] [cursor=pointer]:
              - generic [ref=e227]: 
              - text: Add to cart
        - list [ref=e229]:
          - listitem [ref=e230]:
            - link " View Product" [ref=e231] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e232]: 
              - text: View Product
      - generic [ref=e234]:
        - generic [ref=e235]:
          - generic [ref=e236]:
            - img "ecommerce website products" [ref=e237]
            - heading "Rs. 700" [level=2] [ref=e238]
            - paragraph [ref=e239]: Fancy Green Top
            - generic [ref=e240] [cursor=pointer]:
              - generic [ref=e241]: 
              - text: Add to cart
          - generic [ref=e242]:
            - heading "Rs. 700" [level=2] [ref=e243]
            - paragraph [ref=e244]: Fancy Green Top
            - generic [ref=e245] [cursor=pointer]:
              - generic [ref=e246]: 
              - text: Add to cart
        - list [ref=e248]:
          - listitem [ref=e249]:
            - link " View Product" [ref=e250] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e251]: 
              - text: View Product
      - generic [ref=e253]:
        - generic [ref=e254]:
          - generic [ref=e255]:
            - img "ecommerce website products" [ref=e256]
            - heading "Rs. 499" [level=2] [ref=e257]
            - paragraph [ref=e258]: Sleeves Printed Top - White
            - generic [ref=e259] [cursor=pointer]:
              - generic [ref=e260]: 
              - text: Add to cart
          - generic [ref=e261]:
            - heading "Rs. 499" [level=2] [ref=e262]
            - paragraph [ref=e263]: Sleeves Printed Top - White
            - generic [ref=e264] [cursor=pointer]:
              - generic [ref=e265]: 
              - text: Add to cart
        - list [ref=e267]:
          - listitem [ref=e268]:
            - link " View Product" [ref=e269] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e270]: 
              - text: View Product
      - generic [ref=e272]:
        - generic [ref=e273]:
          - generic [ref=e274]:
            - img "ecommerce website products" [ref=e275]
            - heading "Rs. 359" [level=2] [ref=e276]
            - paragraph [ref=e277]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e278] [cursor=pointer]:
              - generic [ref=e279]: 
              - text: Add to cart
          - generic [ref=e280]:
            - heading "Rs. 359" [level=2] [ref=e281]
            - paragraph [ref=e282]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e283] [cursor=pointer]:
              - generic [ref=e284]: 
              - text: Add to cart
        - list [ref=e286]:
          - listitem [ref=e287]:
            - link " View Product" [ref=e288] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e289]: 
              - text: View Product
      - generic [ref=e291]:
        - generic [ref=e292]:
          - generic [ref=e293]:
            - img "ecommerce website products" [ref=e294]
            - heading "Rs. 278" [level=2] [ref=e295]
            - paragraph [ref=e296]: Frozen Tops For Kids
            - generic [ref=e297] [cursor=pointer]:
              - generic [ref=e298]: 
              - text: Add to cart
          - generic [ref=e299]:
            - heading "Rs. 278" [level=2] [ref=e300]
            - paragraph [ref=e301]: Frozen Tops For Kids
            - generic [ref=e302] [cursor=pointer]:
              - generic [ref=e303]: 
              - text: Add to cart
        - list [ref=e305]:
          - listitem [ref=e306]:
            - link " View Product" [ref=e307] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e308]: 
              - text: View Product
      - generic [ref=e310]:
        - generic [ref=e311]:
          - generic [ref=e312]:
            - img "ecommerce website products" [ref=e313]
            - heading "Rs. 679" [level=2] [ref=e314]
            - paragraph [ref=e315]: Full Sleeves Top Cherry - Pink
            - generic [ref=e316] [cursor=pointer]:
              - generic [ref=e317]: 
              - text: Add to cart
          - generic [ref=e318]:
            - heading "Rs. 679" [level=2] [ref=e319]
            - paragraph [ref=e320]: Full Sleeves Top Cherry - Pink
            - generic [ref=e321] [cursor=pointer]:
              - generic [ref=e322]: 
              - text: Add to cart
        - list [ref=e324]:
          - listitem [ref=e325]:
            - link " View Product" [ref=e326] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e327]: 
              - text: View Product
      - generic [ref=e329]:
        - generic [ref=e330]:
          - generic [ref=e331]:
            - img "ecommerce website products" [ref=e332]
            - heading "Rs. 315" [level=2] [ref=e333]
            - paragraph [ref=e334]: Printed Off Shoulder Top - White
            - generic [ref=e335] [cursor=pointer]:
              - generic [ref=e336]: 
              - text: Add to cart
          - generic [ref=e337]:
            - heading "Rs. 315" [level=2] [ref=e338]
            - paragraph [ref=e339]: Printed Off Shoulder Top - White
            - generic [ref=e340] [cursor=pointer]:
              - generic [ref=e341]: 
              - text: Add to cart
        - list [ref=e343]:
          - listitem [ref=e344]:
            - link " View Product" [ref=e345] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e346]: 
              - text: View Product
      - generic [ref=e348]:
        - generic [ref=e349]:
          - generic [ref=e350]:
            - img "ecommerce website products" [ref=e351]
            - heading "Rs. 478" [level=2] [ref=e352]
            - paragraph [ref=e353]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e354] [cursor=pointer]:
              - generic [ref=e355]: 
              - text: Add to cart
          - generic [ref=e356]:
            - heading "Rs. 478" [level=2] [ref=e357]
            - paragraph [ref=e358]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e359] [cursor=pointer]:
              - generic [ref=e360]: 
              - text: Add to cart
        - list [ref=e362]:
          - listitem [ref=e363]:
            - link " View Product" [ref=e364] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e365]: 
              - text: View Product
      - generic [ref=e367]:
        - generic [ref=e368]:
          - generic [ref=e369]:
            - img "ecommerce website products" [ref=e370]
            - heading "Rs. 1200" [level=2] [ref=e371]
            - paragraph [ref=e372]: Little Girls Mr. Panda Shirt
            - generic [ref=e373] [cursor=pointer]:
              - generic [ref=e374]: 
              - text: Add to cart
          - generic [ref=e375]:
            - heading "Rs. 1200" [level=2] [ref=e376]
            - paragraph [ref=e377]: Little Girls Mr. Panda Shirt
            - generic [ref=e378] [cursor=pointer]:
              - generic [ref=e379]: 
              - text: Add to cart
        - list [ref=e381]:
          - listitem [ref=e382]:
            - link " View Product" [ref=e383] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e384]: 
              - text: View Product
      - generic [ref=e386]:
        - generic [ref=e387]:
          - generic [ref=e388]:
            - img "ecommerce website products" [ref=e389]
            - heading "Rs. 1050" [level=2] [ref=e390]
            - paragraph [ref=e391]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e392] [cursor=pointer]:
              - generic [ref=e393]: 
              - text: Add to cart
          - generic [ref=e394]:
            - heading "Rs. 1050" [level=2] [ref=e395]
            - paragraph [ref=e396]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e397] [cursor=pointer]:
              - generic [ref=e398]: 
              - text: Add to cart
        - list [ref=e400]:
          - listitem [ref=e401]:
            - link " View Product" [ref=e402] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e403]: 
              - text: View Product
      - generic [ref=e405]:
        - generic [ref=e406]:
          - generic [ref=e407]:
            - img "ecommerce website products" [ref=e408]
            - heading "Rs. 1190" [level=2] [ref=e409]
            - paragraph [ref=e410]: Cotton Mull Embroidered Dress
            - generic [ref=e411] [cursor=pointer]:
              - generic [ref=e412]: 
              - text: Add to cart
          - generic [ref=e413]:
            - heading "Rs. 1190" [level=2] [ref=e414]
            - paragraph [ref=e415]: Cotton Mull Embroidered Dress
            - generic [ref=e416] [cursor=pointer]:
              - generic [ref=e417]: 
              - text: Add to cart
        - list [ref=e419]:
          - listitem [ref=e420]:
            - link " View Product" [ref=e421] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e422]: 
              - text: View Product
      - generic [ref=e424]:
        - generic [ref=e425]:
          - generic [ref=e426]:
            - img "ecommerce website products" [ref=e427]
            - heading "Rs. 1530" [level=2] [ref=e428]
            - paragraph [ref=e429]: Blue Cotton Indie Mickey Dress
            - generic [ref=e430] [cursor=pointer]:
              - generic [ref=e431]: 
              - text: Add to cart
          - generic [ref=e432]:
            - heading "Rs. 1530" [level=2] [ref=e433]
            - paragraph [ref=e434]: Blue Cotton Indie Mickey Dress
            - generic [ref=e435] [cursor=pointer]:
              - generic [ref=e436]: 
              - text: Add to cart
        - list [ref=e438]:
          - listitem [ref=e439]:
            - link " View Product" [ref=e440] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e441]: 
              - text: View Product
      - generic [ref=e443]:
        - generic [ref=e444]:
          - generic [ref=e445]:
            - img "ecommerce website products" [ref=e446]
            - heading "Rs. 1600" [level=2] [ref=e447]
            - paragraph [ref=e448]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e449] [cursor=pointer]:
              - generic [ref=e450]: 
              - text: Add to cart
          - generic [ref=e451]:
            - heading "Rs. 1600" [level=2] [ref=e452]
            - paragraph [ref=e453]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e454] [cursor=pointer]:
              - generic [ref=e455]: 
              - text: Add to cart
        - list [ref=e457]:
          - listitem [ref=e458]:
            - link " View Product" [ref=e459] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e460]: 
              - text: View Product
      - generic [ref=e462]:
        - generic [ref=e463]:
          - generic [ref=e464]:
            - img "ecommerce website products" [ref=e465]
            - heading "Rs. 1100" [level=2] [ref=e466]
            - paragraph [ref=e467]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e468] [cursor=pointer]:
              - generic [ref=e469]: 
              - text: Add to cart
          - generic [ref=e470]:
            - heading "Rs. 1100" [level=2] [ref=e471]
            - paragraph [ref=e472]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e473] [cursor=pointer]:
              - generic [ref=e474]: 
              - text: Add to cart
        - list [ref=e476]:
          - listitem [ref=e477]:
            - link " View Product" [ref=e478] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e479]: 
              - text: View Product
      - generic [ref=e481]:
        - generic [ref=e482]:
          - generic [ref=e483]:
            - img "ecommerce website products" [ref=e484]
            - heading "Rs. 849" [level=2] [ref=e485]
            - paragraph [ref=e486]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e487] [cursor=pointer]:
              - generic [ref=e488]: 
              - text: Add to cart
          - generic [ref=e489]:
            - heading "Rs. 849" [level=2] [ref=e490]
            - paragraph [ref=e491]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e492] [cursor=pointer]:
              - generic [ref=e493]: 
              - text: Add to cart
        - list [ref=e495]:
          - listitem [ref=e496]:
            - link " View Product" [ref=e497] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e498]: 
              - text: View Product
      - generic [ref=e500]:
        - generic [ref=e501]:
          - generic [ref=e502]:
            - img "ecommerce website products" [ref=e503]
            - heading "Rs. 1299" [level=2] [ref=e504]
            - paragraph [ref=e505]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e506] [cursor=pointer]:
              - generic [ref=e507]: 
              - text: Add to cart
          - generic [ref=e508]:
            - heading "Rs. 1299" [level=2] [ref=e509]
            - paragraph [ref=e510]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e511] [cursor=pointer]:
              - generic [ref=e512]: 
              - text: Add to cart
        - list [ref=e514]:
          - listitem [ref=e515]:
            - link " View Product" [ref=e516] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e517]: 
              - text: View Product
      - generic [ref=e519]:
        - generic [ref=e520]:
          - generic [ref=e521]:
            - img "ecommerce website products" [ref=e522]
            - heading "Rs. 1000" [level=2] [ref=e523]
            - paragraph [ref=e524]: Green Side Placket Detail T-Shirt
            - generic [ref=e525] [cursor=pointer]:
              - generic [ref=e526]: 
              - text: Add to cart
          - generic [ref=e527]:
            - heading "Rs. 1000" [level=2] [ref=e528]
            - paragraph [ref=e529]: Green Side Placket Detail T-Shirt
            - generic [ref=e530] [cursor=pointer]:
              - generic [ref=e531]: 
              - text: Add to cart
        - list [ref=e533]:
          - listitem [ref=e534]:
            - link " View Product" [ref=e535] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e536]: 
              - text: View Product
      - generic [ref=e538]:
        - generic [ref=e539]:
          - generic [ref=e540]:
            - img "ecommerce website products" [ref=e541]
            - heading "Rs. 1500" [level=2] [ref=e542]
            - paragraph [ref=e543]: Premium Polo T-Shirts
            - generic [ref=e544] [cursor=pointer]:
              - generic [ref=e545]: 
              - text: Add to cart
          - generic [ref=e546]:
            - heading "Rs. 1500" [level=2] [ref=e547]
            - paragraph [ref=e548]: Premium Polo T-Shirts
            - generic [ref=e549] [cursor=pointer]:
              - generic [ref=e550]: 
              - text: Add to cart
        - list [ref=e552]:
          - listitem [ref=e553]:
            - link " View Product" [ref=e554] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e555]: 
              - text: View Product
      - generic [ref=e557]:
        - generic [ref=e558]:
          - generic [ref=e559]:
            - img "ecommerce website products" [ref=e560]
            - heading "Rs. 850" [level=2] [ref=e561]
            - paragraph [ref=e562]: Pure Cotton Neon Green Tshirt
            - generic [ref=e563] [cursor=pointer]:
              - generic [ref=e564]: 
              - text: Add to cart
          - generic [ref=e565]:
            - heading "Rs. 850" [level=2] [ref=e566]
            - paragraph [ref=e567]: Pure Cotton Neon Green Tshirt
            - generic [ref=e568] [cursor=pointer]:
              - generic [ref=e569]: 
              - text: Add to cart
        - list [ref=e571]:
          - listitem [ref=e572]:
            - link " View Product" [ref=e573] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e574]: 
              - text: View Product
      - generic [ref=e576]:
        - generic [ref=e577]:
          - generic [ref=e578]:
            - img "ecommerce website products" [ref=e579]
            - heading "Rs. 799" [level=2] [ref=e580]
            - paragraph [ref=e581]: Soft Stretch Jeans
            - generic [ref=e582] [cursor=pointer]:
              - generic [ref=e583]: 
              - text: Add to cart
          - generic [ref=e584]:
            - heading "Rs. 799" [level=2] [ref=e585]
            - paragraph [ref=e586]: Soft Stretch Jeans
            - generic [ref=e587] [cursor=pointer]:
              - generic [ref=e588]: 
              - text: Add to cart
        - list [ref=e590]:
          - listitem [ref=e591]:
            - link " View Product" [ref=e592] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e593]: 
              - text: View Product
      - generic [ref=e595]:
        - generic [ref=e596]:
          - generic [ref=e597]:
            - img "ecommerce website products" [ref=e598]
            - heading "Rs. 1200" [level=2] [ref=e599]
            - paragraph [ref=e600]: Regular Fit Straight Jeans
            - generic [ref=e601] [cursor=pointer]:
              - generic [ref=e602]: 
              - text: Add to cart
          - generic [ref=e603]:
            - heading "Rs. 1200" [level=2] [ref=e604]
            - paragraph [ref=e605]: Regular Fit Straight Jeans
            - generic [ref=e606] [cursor=pointer]:
              - generic [ref=e607]: 
              - text: Add to cart
        - list [ref=e609]:
          - listitem [ref=e610]:
            - link " View Product" [ref=e611] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e612]: 
              - text: View Product
      - generic [ref=e614]:
        - generic [ref=e615]:
          - generic [ref=e616]:
            - img "ecommerce website products" [ref=e617]
            - heading "Rs. 1400" [level=2] [ref=e618]
            - paragraph [ref=e619]: Grunt Blue Slim Fit Jeans
            - generic [ref=e620] [cursor=pointer]:
              - generic [ref=e621]: 
              - text: Add to cart
          - generic [ref=e622]:
            - heading "Rs. 1400" [level=2] [ref=e623]
            - paragraph [ref=e624]: Grunt Blue Slim Fit Jeans
            - generic [ref=e625] [cursor=pointer]:
              - generic [ref=e626]: 
              - text: Add to cart
        - list [ref=e628]:
          - listitem [ref=e629]:
            - link " View Product" [ref=e630] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e631]: 
              - text: View Product
      - generic [ref=e633]:
        - generic [ref=e634]:
          - generic [ref=e635]:
            - img "ecommerce website products" [ref=e636]
            - heading "Rs. 2300" [level=2] [ref=e637]
            - paragraph [ref=e638]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e639] [cursor=pointer]:
              - generic [ref=e640]: 
              - text: Add to cart
          - generic [ref=e641]:
            - heading "Rs. 2300" [level=2] [ref=e642]
            - paragraph [ref=e643]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e644] [cursor=pointer]:
              - generic [ref=e645]: 
              - text: Add to cart
        - list [ref=e647]:
          - listitem [ref=e648]:
            - link " View Product" [ref=e649] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e650]: 
              - text: View Product
      - generic [ref=e652]:
        - generic [ref=e653]:
          - generic [ref=e654]:
            - img "ecommerce website products" [ref=e655]
            - heading "Rs. 3000" [level=2] [ref=e656]
            - paragraph [ref=e657]: Cotton Silk Hand Block Print Saree
            - generic [ref=e658] [cursor=pointer]:
              - generic [ref=e659]: 
              - text: Add to cart
          - generic [ref=e660]:
            - heading "Rs. 3000" [level=2] [ref=e661]
            - paragraph [ref=e662]: Cotton Silk Hand Block Print Saree
            - generic [ref=e663] [cursor=pointer]:
              - generic [ref=e664]: 
              - text: Add to cart
        - list [ref=e666]:
          - listitem [ref=e667]:
            - link " View Product" [ref=e668] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e669]: 
              - text: View Product
      - generic [ref=e671]:
        - generic [ref=e672]:
          - generic [ref=e673]:
            - img "ecommerce website products" [ref=e674]
            - heading "Rs. 3500" [level=2] [ref=e675]
            - paragraph [ref=e676]: Rust Red Linen Saree
            - generic [ref=e677] [cursor=pointer]:
              - generic [ref=e678]: 
              - text: Add to cart
          - generic [ref=e679]:
            - heading "Rs. 3500" [level=2] [ref=e680]
            - paragraph [ref=e681]: Rust Red Linen Saree
            - generic [ref=e682] [cursor=pointer]:
              - generic [ref=e683]: 
              - text: Add to cart
        - list [ref=e685]:
          - listitem [ref=e686]:
            - link " View Product" [ref=e687] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e688]: 
              - text: View Product
      - generic [ref=e690]:
        - generic [ref=e691]:
          - generic [ref=e692]:
            - img "ecommerce website products" [ref=e693]
            - heading "Rs. 5000" [level=2] [ref=e694]
            - paragraph [ref=e695]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e696] [cursor=pointer]:
              - generic [ref=e697]: 
              - text: Add to cart
          - generic [ref=e698]:
            - heading "Rs. 5000" [level=2] [ref=e699]
            - paragraph [ref=e700]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e701] [cursor=pointer]:
              - generic [ref=e702]: 
              - text: Add to cart
        - list [ref=e704]:
          - listitem [ref=e705]:
            - link " View Product" [ref=e706] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e707]: 
              - text: View Product
      - generic [ref=e709]:
        - generic [ref=e710]:
          - generic [ref=e711]:
            - img "ecommerce website products" [ref=e712]
            - heading "Rs. 1400" [level=2] [ref=e713]
            - paragraph [ref=e714]: Lace Top For Women
            - generic [ref=e715] [cursor=pointer]:
              - generic [ref=e716]: 
              - text: Add to cart
          - generic [ref=e717]:
            - heading "Rs. 1400" [level=2] [ref=e718]
            - paragraph [ref=e719]: Lace Top For Women
            - generic [ref=e720] [cursor=pointer]:
              - generic [ref=e721]: 
              - text: Add to cart
        - list [ref=e723]:
          - listitem [ref=e724]:
            - link " View Product" [ref=e725] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e726]: 
              - text: View Product
      - generic [ref=e728]:
        - generic [ref=e729]:
          - generic [ref=e730]:
            - img "ecommerce website products" [ref=e731]
            - heading "Rs. 1389" [level=2] [ref=e732]
            - paragraph [ref=e733]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e734] [cursor=pointer]:
              - generic [ref=e735]: 
              - text: Add to cart
          - generic [ref=e736]:
            - heading "Rs. 1389" [level=2] [ref=e737]
            - paragraph [ref=e738]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e739] [cursor=pointer]:
              - generic [ref=e740]: 
              - text: Add to cart
        - list [ref=e742]:
          - listitem [ref=e743]:
            - link " View Product" [ref=e744] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e745]: 
              - text: View Product
  - insertion [ref=e747]
  - contentinfo [ref=e749]:
    - generic [ref=e754]:
      - heading "Subscription" [level=2] [ref=e755]
      - generic [ref=e756]:
        - textbox "Your email address" [ref=e757]
        - button "" [ref=e758] [cursor=pointer]:
          - generic [ref=e759]: 
        - paragraph [ref=e760]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e764]: Copyright © 2021 All rights reserved
  - link "" [ref=e765] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e766]: 
  - insertion [ref=e767]:
    - iframe [ref=e769]:
      - iframe [ref=f10e1]:
        - generic [ref=f12e2]:
          - link "Advertisement" [ref=f12e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvPm69oUzpVsJkAU-8jKJBZvR5MtSEI6F5bbHQKz49UETz2McdOYkvRYGE6VKgCD-b5LOdkq0w6tGr5Lc14r2pz0Z_2jRHWPx7qMnkKGCtJjtS95PnXXkXDQxv54zhJGW-0MiQH87aC0BN3wD6Usu0J4oCvEpG6NJOJJko4ZyY67dXcYBpS-OZbt-DUF4WY-NcitGW09O-vTFOoo7jO5a6kdqaIb9voEinw7ZhCC6-8H8dgQtyDbRSetVRLTJavT7tbc6-XOOwF3NKbd5q4OGuHkt-rIvUZsoOVj4t5rOT-P8KgyWAnjFZPWjbHe7_NiOVV4K0Jgp5jwdpP8Zu3G24lOIK1eNvlx1LkhmC_7dsCHERi5lorRyxlaZQa304BRc0qELXCqTPUU0w0N6FWqb94s2_27e7Ht1_GgaiHEqLUmS7ZbzfESulWU_jbSUUD0zOrSJ47ih9QyNV_kxX94jc0piOuhQOVEK8elWDKl1DfAOT7KzkIqTNibDvcodk_mw0dCE4HU0jfbPzmg-HUopWGaELug8uItoOLcseX-OM7Qfgc6IQQa8j41P7Y_hitFdFuzueWE0ouglQmBUxySBqkqgHFJywzsUOQKoVvNmM-rVDCOuteRAbpok2fFQ_KQdNht_RVBZLVl1VkFBmwVOsPBQIMnIK1Os3_phJh5BAwzkHt_3-BNC0-It8MA-40QncOTHzFBfMOt0liiEWB0fSEk4rQAlcgiyef24U2y203mEy3epBaEItjTW3D5-9ctB6Dd0ilonI_0KTqAvUf13FU5eLshJVX3Okhlgms97DSxgZ7-coCBLfcXT23NlJ_BI1Uhgzk2xyI9pxVM_aBK-yRDLduMr4JwcHWPTrOBLU8ZKo7sL9jmDFZeoaSEtFkp8Zo-pzKM7IrQcuJKzZQoHbKSH0IER9laoEfrzHBpfZql3katGg5X7UAsGrt47XCNpFglvyHZb4H41mC4pNkQ6-pD5a8BsaY9PmDkfOewVDSg4v9aN9ceWSigR8zpHR-K-TUbdB0yg5FT9OIeu5mLtIdpeztv3lBuM04Y7bFgKTWE4H4Mi1Z37xbeEwntF8aHeH4d0hBUnhel087THsNA5Tx7pz7nCLRyEJV22YJb_i39-RqcfrKdWYP3YKELe5LKU7iL2YXk1Ti57aKljAz2wYChNj01iKL5qVOWl53LzMycv6FYvR0dPbg4oJin1TdxZ0y1z1K4IYLET0YaHHNF9a8L7tNhhbF701gJvCDxUTEJkWVbsVkrg5kr06MuF1BmLL3xCtNQIUhELh8hqs6XHzORhNcT0M5NE0cPqPBqHsk2RG43UgyaE5B-jMCiIAh8RR2ewvFAy2cJ3h9zDg1mwaKxW-rtkQnulB8eQxWGmrUYjIpeaeAkxTYY5D7Wu93xRaVgk5G-bJWYFgGKKXte3E6rY9zwt8esGwWnFpEB1xH8hv43quidf_8k0qbKr8eXKlYAyBmdgXoieMMWrvJX_7l0JHXlz30odh5IipLzzQBag8VLWr5Twy7EbwxrMatuRT32O58FFP3KBRRfxBPbCeM81QZbhGlzbM-iNBsNTQkzL8C1QzQd5Urv9xyxwMoN3CWmvDM9vkHxQuCu-pqFdYDi7xerTRnaT3q5IP5F6RH0ZWFqdIzFlh52rGPi0rfNCpUmrW8Q9w8PMF6RJMEblf6B4eYdfvE8am-3gAnLAeUfZv-Nv3JnhD_M1uxD7LFKIv5zpHTM8wGdzASb99f1NroZ572JVv_xBdtdZ_Qp9XjzMREyoGpPDjQip0_3pzzO1cyCW8FdQMCF6bfAAx3TUKuSjIJRfh7unXLPvcBUBCjoDkNTuWcg5SNf2gdpPXS7FieLaFB3mVJGtFpnDhea6vNrWQqccQArC0LGR5hbMI&sai=AMfl-YS2jbqaJnq9ec8U8d0dsbe1oYM-WwDwlaymtu-vM0hE68DFBXM5ukNgXX15HExMPh3-T1k59ktbIZtFL3JDoyOVUmUdyG1T4BX5gpsY3nBd47aJ3NYC1tejx9wYwG_4XlnnbSa8KBvaEjl5z0u9VFBFFnoaksozzaeh1Xc-hNMQMkyWylMBnjQC_s234pOy87UqIP9V3aRd1EpNuojlK5P9aPs6K9TBGQzmeuIRFdoSSvuWakMkCLZws5fRuw6c1ZxQ3QWNqZTxRa5vfMtl5xZu-OZtSdNOiKvtmTypy08U895l_Q5kwe0WUOwlkWkGu2ZDQtxLYm6IMf01DkM5EPND-ejZC_Pi518vASgrmqBNmsQighuxSLxaCuR1hMxD8YkIu9mnE08EyOXMOrqK8R0TnTXakyNLpJ9CO5iR3dsS1gbXZAOtCcNyrVISzTHFGm3Je9hxUKRP5xWpACnGWboyP-xdaL0W99BaJbTmsP1Hsdei6rHTHXVRik6S3OTLM5m51KctejuSeBTfB70eWzWqpn1XcNCNJE-rMkATpYQuIoO14sMQF7CoMuTcC71-0VRn0OC8orszPaeNr47yTu6JFkpqgqw_g8iOl5vXagGAEjiAw8SHeLTsMazj4sWPmjqz6VjWkdC8XlHakTD_ssBuv6wbqkssLFrXJ1Ce5RIMygPzGkyrgbIaXHKCQ2CzKR5rwSb_6GeBVoAWnKo-0A5MOqYIfQTvEAMlnHNcxT-W7dbYSEUQ58JMe7yHKZwleP_0md6MR3kpNlSKY0_Um7tpaY1z3CeJP6TpJMWdCGQI4rGgdoZxh3_9rZ1FSikzAkavyosaswp6E8iRdvqBih7qoGXRbC5bP9BEqdDtM-m-TYniKco_n5Pbp-o-m9R7i0cwNbwflXLM0dXGMIVRW_U_HbQuqrt_cLkTyrI03Lf2DZFLMB43ktUSU3_F3Tmnkzadjo0X8frYALuXgeJwobsDIAoTHQZbhGOVdbacbejluGk-EOpCPSmXg29v&sig=Cg0ArKJSzMx1THjHMs8R&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://paruluniversity.ac.in/btech_2026/%3Futm_source%3Dprogrammatic_ls%26utm_medium%3DDisplay%26utm_campaign%3DLS_Parul_University_Branding_ROI_Display_Btech_CI_May26%26utm_term%3DCI%26utm_content%3Dbuild_technology_shape_the_future_468x60%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23827422856
            - img "Advertisement" [ref=f12e5]
          - generic [ref=f12e6]:
            - generic:
              - img [ref=f12e10] [cursor=pointer]
              - button [ref=f12e12] [cursor=pointer]:
                - img [ref=f12e13]
```

# Test source

```ts
  69  |             '#search_product'
  70  |         );
  71  | 
  72  |         this.searchBtn = page.locator(
  73  |             '#submit_search'
  74  |         );
  75  | 
  76  |         this.productTitles = page.locator(
  77  |             '.productinfo p'
  78  |         );
  79  | 
  80  |         // Product Details
  81  |         this.productDetailName = page.locator(
  82  |             '.product-information h2'
  83  |         );
  84  | 
  85  |         // Cart
  86  |         this.addToCartBtn = page.locator(
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
  154 |         await this.viewProductBtn.waitFor({
  155 |             state: 'visible',
  156 |             timeout: 10000
  157 |         });
  158 | 
  159 |         await this.viewProductBtn.scrollIntoViewIfNeeded();
  160 | 
  161 |         await this.viewProductBtn.click({
  162 |             force: true
  163 |         });
  164 | 
  165 |         await this.page.waitForLoadState(
  166 |             'domcontentloaded'
  167 |         );
  168 | 
> 169 |         await this.page.waitForURL(
      |                         ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  170 |             /product_details/,
  171 |             {
  172 |                 timeout: 15000
  173 |             }
  174 |         );
  175 |     }
  176 | 
  177 |     async addFirstProductToCart() {
  178 | 
  179 |         await this.addToCartBtn.waitFor({
  180 |             state: 'visible',
  181 |             timeout: 10000
  182 |         });
  183 | 
  184 |         await this.addToCartBtn.scrollIntoViewIfNeeded();
  185 | 
  186 |         await this.addToCartBtn.click({
  187 |             force: true
  188 |         });
  189 | 
  190 |         await this.continueShoppingBtn.waitFor({
  191 |             state: 'visible',
  192 |             timeout: 10000
  193 |         });
  194 |     }
  195 | 
  196 |     async addSecondProductToCart() {
  197 | 
  198 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  199 | 
  200 |         await this.secondAddToCartBtn.click();
  201 |     }
  202 | 
  203 |     async continueShopping() {
  204 | 
  205 |         await this.continueShoppingBtn.waitFor({
  206 |             state: 'visible',
  207 |             timeout: 10000
  208 |         });
  209 | 
  210 |         await this.continueShoppingBtn.click();
  211 |     }
  212 | 
  213 |     async openCart() {
  214 | 
  215 |         await this.cartBtn.waitFor({
  216 |             state: 'visible'
  217 |         });
  218 | 
  219 |         await this.cartBtn.click({
  220 |             force: true
  221 |         });
  222 | 
  223 |         await this.page.waitForURL(
  224 |             /view_cart/,
  225 |             {
  226 |                 timeout: 15000
  227 |             }
  228 |         );
  229 |     }
  230 | 
  231 |     async removeProductFromCart() {
  232 | 
  233 |         await this.removeCartBtn.click({
  234 |             force: true
  235 |         });
  236 |     }
  237 | 
  238 | }
  239 | 
  240 | module.exports = ProductPage;
```