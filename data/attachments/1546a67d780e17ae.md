# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\cartPersistence.spec.js >> Verify Cart Persistence After Navigation
- Location: tests\cart\cartPersistence.spec.js:5:1

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.productinfo .add-to-cart').first()
    - locator resolved to <a data-product-id="1" class="btn btn-default add-to-cart">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <iframe width="" height="" vspace="0" hspace="0" tabindex="0" id="aswift_3" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CIfd_e7M3pQDFcaJZgIdvS40YQ" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.g.double…></iframe> from <ins tabindex="0" aria-hidden="false" data-ad-status="filled" data-vignette-loaded="true" data-adsbygoogle-status="done" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <iframe width="" height="" vspace="0" hspace="0" tabindex="0" id="aswift_3" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CIfd_e7M3pQDFcaJZgIdvS40YQ" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.g.double…></iframe> from <ins tabindex="0" aria-hidden="false" data-ad-status="filled" data-vignette-loaded="true" data-adsbygoogle-status="done" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    26 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <iframe width="" height="" vspace="0" hspace="0" tabindex="0" id="aswift_3" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CIfd_e7M3pQDFcaJZgIdvS40YQ" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.g.double…></iframe> from <ins tabindex="0" aria-hidden="false" data-ad-status="filled" data-vignette-loaded="true" data-adsbygoogle-status="done" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading [level=1] [ref=e48]: AutomationExercise
        - heading [level=2] [ref=e49]: Full-Fledged practice website for Automation Engineers
        - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
        - link [ref=e51]:
          - /url: /test_cases
          - button [ref=e52] [cursor=pointer]: Test Cases
        - link [ref=e53]:
          - /url: /api_list
          - button [ref=e54] [cursor=pointer]: APIs list for practice
      - img [ref=e56]
    - link [ref=e57]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link [ref=e59]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading [level=2] [ref=e66]: Category
      - generic [ref=e67]:
        - heading [level=4] [ref=e70]:
          - link [ref=e71]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading [level=4] [ref=e76]:
          - link [ref=e77]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading [level=4] [ref=e82]:
          - link [ref=e83]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - generic [ref=e86]:
        - heading [level=2] [ref=e87]: Brands
        - list [ref=e89]:
          - listitem [ref=e90]:
            - link [ref=e91]:
              - /url: /brand_products/Polo
              - generic [ref=e92]: (6)
              - text: Polo
          - listitem [ref=e93]:
            - link [ref=e94]:
              - /url: /brand_products/H&M
              - generic [ref=e95]: (5)
              - text: H&M
          - listitem [ref=e96]:
            - link [ref=e97]:
              - /url: /brand_products/Madame
              - generic [ref=e98]: (5)
              - text: Madame
          - listitem [ref=e99]:
            - link [ref=e100]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e101]: (3)
              - text: Mast & Harbour
          - listitem [ref=e102]:
            - link [ref=e103]:
              - /url: /brand_products/Babyhug
              - generic [ref=e104]: (4)
              - text: Babyhug
          - listitem [ref=e105]:
            - link [ref=e106]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e107]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e108]:
            - link [ref=e109]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e110]: (3)
              - text: Kookie Kids
          - listitem [ref=e111]:
            - link [ref=e112]:
              - /url: /brand_products/Biba
              - generic [ref=e113]: (5)
              - text: Biba
    - generic [ref=e114]:
      - generic [ref=e115]:
        - heading [level=2] [ref=e116]: Features Items
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img [ref=e121]
              - heading [level=2] [ref=e122]: Rs. 500
              - paragraph [ref=e123]: Blue Top
              - generic [ref=e124] [cursor=pointer]:
                - generic [ref=e125]: 
                - text: Add to cart
            - generic [ref=e126]:
              - heading [level=2] [ref=e127]: Rs. 500
              - paragraph [ref=e128]: Blue Top
              - generic [ref=e129] [cursor=pointer]:
                - generic [ref=e130]: 
                - text: Add to cart
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link [ref=e134]:
                - /url: /product_details/1
                - generic [ref=e135]: 
                - text: View Product
        - generic [ref=e137]:
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img [ref=e140]
              - heading [level=2] [ref=e141]: Rs. 400
              - paragraph [ref=e142]: Men Tshirt
              - generic [ref=e143] [cursor=pointer]:
                - generic [ref=e144]: 
                - text: Add to cart
            - generic [ref=e145]:
              - heading [level=2] [ref=e146]: Rs. 400
              - paragraph [ref=e147]: Men Tshirt
              - generic [ref=e148] [cursor=pointer]:
                - generic [ref=e149]: 
                - text: Add to cart
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link [ref=e153]:
                - /url: /product_details/2
                - generic [ref=e154]: 
                - text: View Product
        - generic [ref=e156]:
          - generic [ref=e157]:
            - generic [ref=e158]:
              - img [ref=e159]
              - heading [level=2] [ref=e160]: Rs. 1000
              - paragraph [ref=e161]: Sleeveless Dress
              - generic [ref=e162] [cursor=pointer]:
                - generic [ref=e163]: 
                - text: Add to cart
            - generic [ref=e164]:
              - heading [level=2] [ref=e165]: Rs. 1000
              - paragraph [ref=e166]: Sleeveless Dress
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: 
                - text: Add to cart
          - list [ref=e170]:
            - listitem [ref=e171]:
              - link [ref=e172]:
                - /url: /product_details/3
                - generic [ref=e173]: 
                - text: View Product
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - img [ref=e178]
              - heading [level=2] [ref=e179]: Rs. 1500
              - paragraph [ref=e180]: Stylish Dress
              - generic [ref=e181] [cursor=pointer]:
                - generic [ref=e182]: 
                - text: Add to cart
            - generic [ref=e183]:
              - heading [level=2] [ref=e184]: Rs. 1500
              - paragraph [ref=e185]: Stylish Dress
              - generic [ref=e186] [cursor=pointer]:
                - generic [ref=e187]: 
                - text: Add to cart
          - list [ref=e189]:
            - listitem [ref=e190]:
              - link [ref=e191]:
                - /url: /product_details/4
                - generic [ref=e192]: 
                - text: View Product
        - generic [ref=e194]:
          - generic [ref=e195]:
            - generic [ref=e196]:
              - img [ref=e197]
              - heading [level=2] [ref=e198]: Rs. 600
              - paragraph [ref=e199]: Winter Top
              - generic [ref=e200] [cursor=pointer]:
                - generic [ref=e201]: 
                - text: Add to cart
            - generic [ref=e202]:
              - heading [level=2] [ref=e203]: Rs. 600
              - paragraph [ref=e204]: Winter Top
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: 
                - text: Add to cart
          - list [ref=e208]:
            - listitem [ref=e209]:
              - link [ref=e210]:
                - /url: /product_details/5
                - generic [ref=e211]: 
                - text: View Product
        - generic [ref=e213]:
          - generic [ref=e214]:
            - generic [ref=e215]:
              - img [ref=e216]
              - heading [level=2] [ref=e217]: Rs. 400
              - paragraph [ref=e218]: Summer White Top
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
            - generic [ref=e221]:
              - heading [level=2] [ref=e222]: Rs. 400
              - paragraph [ref=e223]: Summer White Top
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link [ref=e229]:
                - /url: /product_details/6
                - generic [ref=e230]: 
                - text: View Product
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img [ref=e235]
              - heading [level=2] [ref=e236]: Rs. 1000
              - paragraph [ref=e237]: Madame Top For Women
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
            - generic [ref=e240]:
              - heading [level=2] [ref=e241]: Rs. 1000
              - paragraph [ref=e242]: Madame Top For Women
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link [ref=e248]:
                - /url: /product_details/7
                - generic [ref=e249]: 
                - text: View Product
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - img [ref=e254]
              - heading [level=2] [ref=e255]: Rs. 700
              - paragraph [ref=e256]: Fancy Green Top
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
            - generic [ref=e259]:
              - heading [level=2] [ref=e260]: Rs. 700
              - paragraph [ref=e261]: Fancy Green Top
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link [ref=e267]:
                - /url: /product_details/8
                - generic [ref=e268]: 
                - text: View Product
        - generic [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img [ref=e273]
              - heading [level=2] [ref=e274]: Rs. 499
              - paragraph [ref=e275]: Sleeves Printed Top - White
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
            - generic [ref=e278]:
              - heading [level=2] [ref=e279]: Rs. 499
              - paragraph [ref=e280]: Sleeves Printed Top - White
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link [ref=e286]:
                - /url: /product_details/11
                - generic [ref=e287]: 
                - text: View Product
        - generic [ref=e289]:
          - generic [ref=e290]:
            - generic [ref=e291]:
              - img [ref=e292]
              - heading [level=2] [ref=e293]: Rs. 359
              - paragraph [ref=e294]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
            - generic [ref=e297]:
              - heading [level=2] [ref=e298]: Rs. 359
              - paragraph [ref=e299]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link [ref=e305]:
                - /url: /product_details/12
                - generic [ref=e306]: 
                - text: View Product
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img [ref=e311]
              - heading [level=2] [ref=e312]: Rs. 278
              - paragraph [ref=e313]: Frozen Tops For Kids
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
            - generic [ref=e316]:
              - heading [level=2] [ref=e317]: Rs. 278
              - paragraph [ref=e318]: Frozen Tops For Kids
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link [ref=e324]:
                - /url: /product_details/13
                - generic [ref=e325]: 
                - text: View Product
        - generic [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]:
              - img [ref=e330]
              - heading [level=2] [ref=e331]: Rs. 679
              - paragraph [ref=e332]: Full Sleeves Top Cherry - Pink
              - generic [ref=e333] [cursor=pointer]:
                - generic [ref=e334]: 
                - text: Add to cart
            - generic [ref=e335]:
              - heading [level=2] [ref=e336]: Rs. 679
              - paragraph [ref=e337]: Full Sleeves Top Cherry - Pink
              - generic [ref=e338] [cursor=pointer]:
                - generic [ref=e339]: 
                - text: Add to cart
          - list [ref=e341]:
            - listitem [ref=e342]:
              - link [ref=e343]:
                - /url: /product_details/14
                - generic [ref=e344]: 
                - text: View Product
        - generic [ref=e346]:
          - generic [ref=e347]:
            - generic [ref=e348]:
              - img [ref=e349]
              - heading [level=2] [ref=e350]: Rs. 315
              - paragraph [ref=e351]: Printed Off Shoulder Top - White
              - generic [ref=e352] [cursor=pointer]:
                - generic [ref=e353]: 
                - text: Add to cart
            - generic [ref=e354]:
              - heading [level=2] [ref=e355]: Rs. 315
              - paragraph [ref=e356]: Printed Off Shoulder Top - White
              - generic [ref=e357] [cursor=pointer]:
                - generic [ref=e358]: 
                - text: Add to cart
          - list [ref=e360]:
            - listitem [ref=e361]:
              - link [ref=e362]:
                - /url: /product_details/15
                - generic [ref=e363]: 
                - text: View Product
        - generic [ref=e365]:
          - generic [ref=e366]:
            - generic [ref=e367]:
              - img [ref=e368]
              - heading [level=2] [ref=e369]: Rs. 478
              - paragraph [ref=e370]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e371] [cursor=pointer]:
                - generic [ref=e372]: 
                - text: Add to cart
            - generic [ref=e373]:
              - heading [level=2] [ref=e374]: Rs. 478
              - paragraph [ref=e375]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: 
                - text: Add to cart
          - list [ref=e379]:
            - listitem [ref=e380]:
              - link [ref=e381]:
                - /url: /product_details/16
                - generic [ref=e382]: 
                - text: View Product
        - generic [ref=e384]:
          - generic [ref=e385]:
            - generic [ref=e386]:
              - img [ref=e387]
              - heading [level=2] [ref=e388]: Rs. 1200
              - paragraph [ref=e389]: Little Girls Mr. Panda Shirt
              - generic [ref=e390] [cursor=pointer]:
                - generic [ref=e391]: 
                - text: Add to cart
            - generic [ref=e392]:
              - heading [level=2] [ref=e393]: Rs. 1200
              - paragraph [ref=e394]: Little Girls Mr. Panda Shirt
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e396]: 
                - text: Add to cart
          - list [ref=e398]:
            - listitem [ref=e399]:
              - link [ref=e400]:
                - /url: /product_details/18
                - generic [ref=e401]: 
                - text: View Product
        - generic [ref=e403]:
          - generic [ref=e404]:
            - generic [ref=e405]:
              - img [ref=e406]
              - heading [level=2] [ref=e407]: Rs. 1050
              - paragraph [ref=e408]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e409] [cursor=pointer]:
                - generic [ref=e410]: 
                - text: Add to cart
            - generic [ref=e411]:
              - heading [level=2] [ref=e412]: Rs. 1050
              - paragraph [ref=e413]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e414] [cursor=pointer]:
                - generic [ref=e415]: 
                - text: Add to cart
          - list [ref=e417]:
            - listitem [ref=e418]:
              - link [ref=e419]:
                - /url: /product_details/19
                - generic [ref=e420]: 
                - text: View Product
        - generic [ref=e422]:
          - generic [ref=e423]:
            - generic [ref=e424]:
              - img [ref=e425]
              - heading [level=2] [ref=e426]: Rs. 1190
              - paragraph [ref=e427]: Cotton Mull Embroidered Dress
              - generic [ref=e428] [cursor=pointer]:
                - generic [ref=e429]: 
                - text: Add to cart
            - generic [ref=e430]:
              - heading [level=2] [ref=e431]: Rs. 1190
              - paragraph [ref=e432]: Cotton Mull Embroidered Dress
              - generic [ref=e433] [cursor=pointer]:
                - generic [ref=e434]: 
                - text: Add to cart
          - list [ref=e436]:
            - listitem [ref=e437]:
              - link [ref=e438]:
                - /url: /product_details/20
                - generic [ref=e439]: 
                - text: View Product
        - generic [ref=e441]:
          - generic [ref=e442]:
            - generic [ref=e443]:
              - img [ref=e444]
              - heading [level=2] [ref=e445]: Rs. 1530
              - paragraph [ref=e446]: Blue Cotton Indie Mickey Dress
              - generic [ref=e447] [cursor=pointer]:
                - generic [ref=e448]: 
                - text: Add to cart
            - generic [ref=e449]:
              - heading [level=2] [ref=e450]: Rs. 1530
              - paragraph [ref=e451]: Blue Cotton Indie Mickey Dress
              - generic [ref=e452] [cursor=pointer]:
                - generic [ref=e453]: 
                - text: Add to cart
          - list [ref=e455]:
            - listitem [ref=e456]:
              - link [ref=e457]:
                - /url: /product_details/21
                - generic [ref=e458]: 
                - text: View Product
        - generic [ref=e460]:
          - generic [ref=e461]:
            - generic [ref=e462]:
              - img [ref=e463]
              - heading [level=2] [ref=e464]: Rs. 1600
              - paragraph [ref=e465]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e466] [cursor=pointer]:
                - generic [ref=e467]: 
                - text: Add to cart
            - generic [ref=e468]:
              - heading [level=2] [ref=e469]: Rs. 1600
              - paragraph [ref=e470]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e471] [cursor=pointer]:
                - generic [ref=e472]: 
                - text: Add to cart
          - list [ref=e474]:
            - listitem [ref=e475]:
              - link [ref=e476]:
                - /url: /product_details/22
                - generic [ref=e477]: 
                - text: View Product
        - generic [ref=e479]:
          - generic [ref=e480]:
            - generic [ref=e481]:
              - img [ref=e482]
              - heading [level=2] [ref=e483]: Rs. 1100
              - paragraph [ref=e484]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e485] [cursor=pointer]:
                - generic [ref=e486]: 
                - text: Add to cart
            - generic [ref=e487]:
              - heading [level=2] [ref=e488]: Rs. 1100
              - paragraph [ref=e489]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e490] [cursor=pointer]:
                - generic [ref=e491]: 
                - text: Add to cart
          - list [ref=e493]:
            - listitem [ref=e494]:
              - link [ref=e495]:
                - /url: /product_details/23
                - generic [ref=e496]: 
                - text: View Product
        - generic [ref=e498]:
          - generic [ref=e499]:
            - generic [ref=e500]:
              - img [ref=e501]
              - heading [level=2] [ref=e502]: Rs. 849
              - paragraph [ref=e503]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e504] [cursor=pointer]:
                - generic [ref=e505]: 
                - text: Add to cart
            - generic [ref=e506]:
              - heading [level=2] [ref=e507]: Rs. 849
              - paragraph [ref=e508]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e509] [cursor=pointer]:
                - generic [ref=e510]: 
                - text: Add to cart
          - list [ref=e512]:
            - listitem [ref=e513]:
              - link [ref=e514]:
                - /url: /product_details/24
                - generic [ref=e515]: 
                - text: View Product
        - generic [ref=e517]:
          - generic [ref=e518]:
            - generic [ref=e519]:
              - img [ref=e520]
              - heading [level=2] [ref=e521]: Rs. 1299
              - paragraph [ref=e522]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e523] [cursor=pointer]:
                - generic [ref=e524]: 
                - text: Add to cart
            - generic [ref=e525]:
              - heading [level=2] [ref=e526]: Rs. 1299
              - paragraph [ref=e527]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e528] [cursor=pointer]:
                - generic [ref=e529]: 
                - text: Add to cart
          - list [ref=e531]:
            - listitem [ref=e532]:
              - link [ref=e533]:
                - /url: /product_details/28
                - generic [ref=e534]: 
                - text: View Product
        - generic [ref=e536]:
          - generic [ref=e537]:
            - generic [ref=e538]:
              - img [ref=e539]
              - heading [level=2] [ref=e540]: Rs. 1000
              - paragraph [ref=e541]: Green Side Placket Detail T-Shirt
              - generic [ref=e542] [cursor=pointer]:
                - generic [ref=e543]: 
                - text: Add to cart
            - generic [ref=e544]:
              - heading [level=2] [ref=e545]: Rs. 1000
              - paragraph [ref=e546]: Green Side Placket Detail T-Shirt
              - generic [ref=e547] [cursor=pointer]:
                - generic [ref=e548]: 
                - text: Add to cart
          - list [ref=e550]:
            - listitem [ref=e551]:
              - link [ref=e552]:
                - /url: /product_details/29
                - generic [ref=e553]: 
                - text: View Product
        - generic [ref=e555]:
          - generic [ref=e556]:
            - generic [ref=e557]:
              - img [ref=e558]
              - heading [level=2] [ref=e559]: Rs. 1500
              - paragraph [ref=e560]: Premium Polo T-Shirts
              - generic [ref=e561] [cursor=pointer]:
                - generic [ref=e562]: 
                - text: Add to cart
            - generic [ref=e563]:
              - heading [level=2] [ref=e564]: Rs. 1500
              - paragraph [ref=e565]: Premium Polo T-Shirts
              - generic [ref=e566] [cursor=pointer]:
                - generic [ref=e567]: 
                - text: Add to cart
          - list [ref=e569]:
            - listitem [ref=e570]:
              - link [ref=e571]:
                - /url: /product_details/30
                - generic [ref=e572]: 
                - text: View Product
        - generic [ref=e574]:
          - generic [ref=e575]:
            - generic [ref=e576]:
              - img [ref=e577]
              - heading [level=2] [ref=e578]: Rs. 850
              - paragraph [ref=e579]: Pure Cotton Neon Green Tshirt
              - generic [ref=e580] [cursor=pointer]:
                - generic [ref=e581]: 
                - text: Add to cart
            - generic [ref=e582]:
              - heading [level=2] [ref=e583]: Rs. 850
              - paragraph [ref=e584]: Pure Cotton Neon Green Tshirt
              - generic [ref=e585] [cursor=pointer]:
                - generic [ref=e586]: 
                - text: Add to cart
          - list [ref=e588]:
            - listitem [ref=e589]:
              - link [ref=e590]:
                - /url: /product_details/31
                - generic [ref=e591]: 
                - text: View Product
        - generic [ref=e593]:
          - generic [ref=e594]:
            - generic [ref=e595]:
              - img [ref=e596]
              - heading [level=2] [ref=e597]: Rs. 799
              - paragraph [ref=e598]: Soft Stretch Jeans
              - generic [ref=e599] [cursor=pointer]:
                - generic [ref=e600]: 
                - text: Add to cart
            - generic [ref=e601]:
              - heading [level=2] [ref=e602]: Rs. 799
              - paragraph [ref=e603]: Soft Stretch Jeans
              - generic [ref=e604] [cursor=pointer]:
                - generic [ref=e605]: 
                - text: Add to cart
          - list [ref=e607]:
            - listitem [ref=e608]:
              - link [ref=e609]:
                - /url: /product_details/33
                - generic [ref=e610]: 
                - text: View Product
        - generic [ref=e612]:
          - generic [ref=e613]:
            - generic [ref=e614]:
              - img [ref=e615]
              - heading [level=2] [ref=e616]: Rs. 1200
              - paragraph [ref=e617]: Regular Fit Straight Jeans
              - generic [ref=e618] [cursor=pointer]:
                - generic [ref=e619]: 
                - text: Add to cart
            - generic [ref=e620]:
              - heading [level=2] [ref=e621]: Rs. 1200
              - paragraph [ref=e622]: Regular Fit Straight Jeans
              - generic [ref=e623] [cursor=pointer]:
                - generic [ref=e624]: 
                - text: Add to cart
          - list [ref=e626]:
            - listitem [ref=e627]:
              - link [ref=e628]:
                - /url: /product_details/35
                - generic [ref=e629]: 
                - text: View Product
        - generic [ref=e631]:
          - generic [ref=e632]:
            - generic [ref=e633]:
              - img [ref=e634]
              - heading [level=2] [ref=e635]: Rs. 1400
              - paragraph [ref=e636]: Grunt Blue Slim Fit Jeans
              - generic [ref=e637] [cursor=pointer]:
                - generic [ref=e638]: 
                - text: Add to cart
            - generic [ref=e639]:
              - heading [level=2] [ref=e640]: Rs. 1400
              - paragraph [ref=e641]: Grunt Blue Slim Fit Jeans
              - generic [ref=e642] [cursor=pointer]:
                - generic [ref=e643]: 
                - text: Add to cart
          - list [ref=e645]:
            - listitem [ref=e646]:
              - link [ref=e647]:
                - /url: /product_details/37
                - generic [ref=e648]: 
                - text: View Product
        - generic [ref=e650]:
          - generic [ref=e651]:
            - generic [ref=e652]:
              - img [ref=e653]
              - heading [level=2] [ref=e654]: Rs. 2300
              - paragraph [ref=e655]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e656] [cursor=pointer]:
                - generic [ref=e657]: 
                - text: Add to cart
            - generic [ref=e658]:
              - heading [level=2] [ref=e659]: Rs. 2300
              - paragraph [ref=e660]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e661] [cursor=pointer]:
                - generic [ref=e662]: 
                - text: Add to cart
          - list [ref=e664]:
            - listitem [ref=e665]:
              - link [ref=e666]:
                - /url: /product_details/38
                - generic [ref=e667]: 
                - text: View Product
        - generic [ref=e669]:
          - generic [ref=e670]:
            - generic [ref=e671]:
              - img [ref=e672]
              - heading [level=2] [ref=e673]: Rs. 3000
              - paragraph [ref=e674]: Cotton Silk Hand Block Print Saree
              - generic [ref=e675] [cursor=pointer]:
                - generic [ref=e676]: 
                - text: Add to cart
            - generic [ref=e677]:
              - heading [level=2] [ref=e678]: Rs. 3000
              - paragraph [ref=e679]: Cotton Silk Hand Block Print Saree
              - generic [ref=e680] [cursor=pointer]:
                - generic [ref=e681]: 
                - text: Add to cart
          - list [ref=e683]:
            - listitem [ref=e684]:
              - link [ref=e685]:
                - /url: /product_details/39
                - generic [ref=e686]: 
                - text: View Product
        - generic [ref=e688]:
          - generic [ref=e689]:
            - generic [ref=e690]:
              - img [ref=e691]
              - heading [level=2] [ref=e692]: Rs. 3500
              - paragraph [ref=e693]: Rust Red Linen Saree
              - generic [ref=e694] [cursor=pointer]:
                - generic [ref=e695]: 
                - text: Add to cart
            - generic [ref=e696]:
              - heading [level=2] [ref=e697]: Rs. 3500
              - paragraph [ref=e698]: Rust Red Linen Saree
              - generic [ref=e699] [cursor=pointer]:
                - generic [ref=e700]: 
                - text: Add to cart
          - list [ref=e702]:
            - listitem [ref=e703]:
              - link [ref=e704]:
                - /url: /product_details/40
                - generic [ref=e705]: 
                - text: View Product
        - generic [ref=e707]:
          - generic [ref=e708]:
            - generic [ref=e709]:
              - img [ref=e710]
              - heading [level=2] [ref=e711]: Rs. 5000
              - paragraph [ref=e712]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e713] [cursor=pointer]:
                - generic [ref=e714]: 
                - text: Add to cart
            - generic [ref=e715]:
              - heading [level=2] [ref=e716]: Rs. 5000
              - paragraph [ref=e717]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e718] [cursor=pointer]:
                - generic [ref=e719]: 
                - text: Add to cart
          - list [ref=e721]:
            - listitem [ref=e722]:
              - link [ref=e723]:
                - /url: /product_details/41
                - generic [ref=e724]: 
                - text: View Product
        - generic [ref=e726]:
          - generic [ref=e727]:
            - generic [ref=e728]:
              - img [ref=e729]
              - heading [level=2] [ref=e730]: Rs. 1400
              - paragraph [ref=e731]: Lace Top For Women
              - generic [ref=e732] [cursor=pointer]:
                - generic [ref=e733]: 
                - text: Add to cart
            - generic [ref=e734]:
              - heading [level=2] [ref=e735]: Rs. 1400
              - paragraph [ref=e736]: Lace Top For Women
              - generic [ref=e737] [cursor=pointer]:
                - generic [ref=e738]: 
                - text: Add to cart
          - list [ref=e740]:
            - listitem [ref=e741]:
              - link [ref=e742]:
                - /url: /product_details/42
                - generic [ref=e743]: 
                - text: View Product
        - generic [ref=e745]:
          - generic [ref=e746]:
            - generic [ref=e747]:
              - img [ref=e748]
              - heading [level=2] [ref=e749]: Rs. 1389
              - paragraph [ref=e750]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e751] [cursor=pointer]:
                - generic [ref=e752]: 
                - text: Add to cart
            - generic [ref=e753]:
              - heading [level=2] [ref=e754]: Rs. 1389
              - paragraph [ref=e755]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e756] [cursor=pointer]:
                - generic [ref=e757]: 
                - text: Add to cart
          - list [ref=e759]:
            - listitem [ref=e760]:
              - link [ref=e761]:
                - /url: /product_details/43
                - generic [ref=e762]: 
                - text: View Product
      - generic [ref=e763]:
        - heading [level=2] [ref=e764]: recommended items
        - generic [ref=e765]:
          - generic [ref=e766]:
            - text:   
            - generic [ref=e770]:
              - img [ref=e771]
              - heading [level=2] [ref=e772]: Rs. 1500
              - paragraph [ref=e773]: Stylish Dress
              - generic [ref=e774] [cursor=pointer]:
                - generic [ref=e775]: 
                - text: Add to cart
            - generic [ref=e779]:
              - img [ref=e780]
              - heading [level=2] [ref=e781]: Rs. 600
              - paragraph [ref=e782]: Winter Top
              - generic [ref=e783] [cursor=pointer]:
                - generic [ref=e784]: 
                - text: Add to cart
            - generic [ref=e788]:
              - img [ref=e789]
              - heading [level=2] [ref=e790]: Rs. 400
              - paragraph [ref=e791]: Summer White Top
              - generic [ref=e792] [cursor=pointer]:
                - generic [ref=e793]: 
                - text: Add to cart
          - link [ref=e794]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e795]: 
          - link [ref=e796]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e797]: 
  - insertion [ref=e799]
  - contentinfo [ref=e801]:
    - generic [ref=e806]:
      - heading [level=2] [ref=e807]: Subscription
      - generic [ref=e808]:
        - textbox [ref=e809]:
          - /placeholder: Your email address
        - button [ref=e810] [cursor=pointer]:
          - generic [ref=e811]: 
        - paragraph [ref=e812]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e816]: Copyright © 2021 All rights reserved
  - insertion [ref=e817]:
    - iframe [ref=e820]:
      - generic [active] [ref=f9e1]:
        - generic [ref=f9e6]:
          - generic [ref=f9e7]:
            - generic "Google Chrome" [ref=f9e9]:
              - link "Download Chrome" [ref=f9e10] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C9tyKN5QZasnlLMaTmsMPvd3QiQaek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEhwJP0IHnUeX5KfR5FXeji6xjVrFKm4jmIDcWqzec4zKd7W9STzllc7r7JF7g98I50SCcy9XWqG-MeMrc1tfbX6yQC8hWHRbCsYHKekGqu5zeyxBJEggzL_QGHwBcbRFB1qnIBNTlSW11JvXVEZUWqIiSNDq8PP23HjrOBYOh4kOcHU3xrYKINRGSSOHv7XITk_qmTunD-W_f_l620cglo7fubY9zDa3Yyx5WJOuVpjRuDEXGz6ZLqlkgu8vTyCoTw50bonF1wnV6onw02xrLgCu5S3xx9UcoIKAECI61RFzBJc8w1eHoNGnv5uHokSWLJjE0CIuVVzszldLdSWlUrjOhMH9mPVTv7sAE3uqUzNYFiAXDr4qmV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt6z97szelANgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDAOQAQGqDQJJTsgNAeoNEwiY6v3uzN6UAxXGiWYCHb0uNGGIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMIid397szelAMVxolmAh29LjRhEAEYASAAEgKj1_D_BwE&num=1&cid=CAQSoAIABaugfaZ-qg6ArHgnqxqKHz_2XYgX6oSwv1uiqBi9lPJzc9p7llpxFCd-78o-q6wZElVxiIk8BLW6OGBdXGGPT0PfiQRCZUPgFMor38JTfskj9rG8XbvioRj3Hv3YwOz3ygmHXYrFW0JcTM3jmb62zffVe_OWsVNSa4w7v8azMnryJQuVhj5_1p05lspILJ7k-kxi3VygbKLF2L7jJkFyClV8-_K4o_SHRe8e_WpJfreeTVVCqM7WJ6kAq4W-Hc96zHLYzDUnpAp3O7Bea4rwZKOroyfSwZa6JiD5wTVv1A10Kjb2meAYfSLVAoMeOBwQ9s8qpYhVCzdfqsewQMI3vM3y1AAv2Ar5CpFweXE58ATNhOZg95x0capHjv_v1IcYAQ&sig=AOD64_07fmJRUv50D68rbU4K4by5hxYb4w&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - link "Block phishing attempts and websites with malware. Switch to Chrome to browse securely. Google Chrome" [ref=f9e12] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C9tyKN5QZasnlLMaTmsMPvd3QiQaek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEhwJP0IHnUeX5KfR5FXeji6xjVrFKm4jmIDcWqzec4zKd7W9STzllc7r7JF7g98I50SCcy9XWqG-MeMrc1tfbX6yQC8hWHRbCsYHKekGqu5zeyxBJEggzL_QGHwBcbRFB1qnIBNTlSW11JvXVEZUWqIiSNDq8PP23HjrOBYOh4kOcHU3xrYKINRGSSOHv7XITk_qmTunD-W_f_l620cglo7fubY9zDa3Yyx5WJOuVpjRuDEXGz6ZLqlkgu8vTyCoTw50bonF1wnV6onw02xrLgCu5S3xx9UcoIKAECI61RFzBJc8w1eHoNGnv5uHokSWLJjE0CIuVVzszldLdSWlUrjOhMH9mPVTv7sAE3uqUzNYFiAXDr4qmV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt6z97szelANgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDAOQAQGqDQJJTsgNAeoNEwiY6v3uzN6UAxXGiWYCHb0uNGGIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMIid397szelAMVxolmAh29LjRhEAEYASAAEgKj1_D_BwE&num=1&cid=CAQSoAIABaugfaZ-qg6ArHgnqxqKHz_2XYgX6oSwv1uiqBi9lPJzc9p7llpxFCd-78o-q6wZElVxiIk8BLW6OGBdXGGPT0PfiQRCZUPgFMor38JTfskj9rG8XbvioRj3Hv3YwOz3ygmHXYrFW0JcTM3jmb62zffVe_OWsVNSa4w7v8azMnryJQuVhj5_1p05lspILJ7k-kxi3VygbKLF2L7jJkFyClV8-_K4o_SHRe8e_WpJfreeTVVCqM7WJ6kAq4W-Hc96zHLYzDUnpAp3O7Bea4rwZKOroyfSwZa6JiD5wTVv1A10Kjb2meAYfSLVAoMeOBwQ9s8qpYhVCzdfqsewQMI3vM3y1AAv2Ar5CpFweXE58ATNhOZg95x0capHjv_v1IcYAQ&sig=AOD64_07fmJRUv50D68rbU4K4by5hxYb4w&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - text: Block phishing attempts and websites with malware. Switch to Chrome to browse
              - text: securely. Google Chrome
          - link "Download" [ref=f9e15] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C9tyKN5QZasnlLMaTmsMPvd3QiQaek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEhwJP0IHnUeX5KfR5FXeji6xjVrFKm4jmIDcWqzec4zKd7W9STzllc7r7JF7g98I50SCcy9XWqG-MeMrc1tfbX6yQC8hWHRbCsYHKekGqu5zeyxBJEggzL_QGHwBcbRFB1qnIBNTlSW11JvXVEZUWqIiSNDq8PP23HjrOBYOh4kOcHU3xrYKINRGSSOHv7XITk_qmTunD-W_f_l620cglo7fubY9zDa3Yyx5WJOuVpjRuDEXGz6ZLqlkgu8vTyCoTw50bonF1wnV6onw02xrLgCu5S3xx9UcoIKAECI61RFzBJc8w1eHoNGnv5uHokSWLJjE0CIuVVzszldLdSWlUrjOhMH9mPVTv7sAE3uqUzNYFiAXDr4qmV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYt6z97szelANgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDAOQAQGqDQJJTsgNAeoNEwiY6v3uzN6UAxXGiWYCHb0uNGGIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMIid397szelAMVxolmAh29LjRhEAEYASAAEgKj1_D_BwE&num=1&cid=CAQSoAIABaugfaZ-qg6ArHgnqxqKHz_2XYgX6oSwv1uiqBi9lPJzc9p7llpxFCd-78o-q6wZElVxiIk8BLW6OGBdXGGPT0PfiQRCZUPgFMor38JTfskj9rG8XbvioRj3Hv3YwOz3ygmHXYrFW0JcTM3jmb62zffVe_OWsVNSa4w7v8azMnryJQuVhj5_1p05lspILJ7k-kxi3VygbKLF2L7jJkFyClV8-_K4o_SHRe8e_WpJfreeTVVCqM7WJ6kAq4W-Hc96zHLYzDUnpAp3O7Bea4rwZKOroyfSwZa6JiD5wTVv1A10Kjb2meAYfSLVAoMeOBwQ9s8qpYhVCzdfqsewQMI3vM3y1AAv2Ar5CpFweXE58ATNhOZg95x0capHjv_v1IcYAQ&sig=AOD64_07fmJRUv50D68rbU4K4by5hxYb4w&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - generic [ref=f9e19]:
              - generic [ref=f9e20]: Download
              - img [ref=f9e21]
        - img [ref=f9e26] [cursor=pointer]
        - button [ref=f9e28] [cursor=pointer]:
          - img [ref=f9e29]
        - iframe
  - link [ref=e821]:
    - /url: "#top"
    - generic [ref=e822]: 
```

# Test source

```ts
  67  |         // Search
  68  |         this.searchInput = page.locator(
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
  87  |             '.productinfo .add-to-cart'
  88  |         ).first();
  89  |         this.secondAddToCartBtn = page.locator(
  90  |             '.features_items .product-image-wrapper'
  91  |         ).nth(1).locator('.add-to-cart').first();
  92  | 
  93  |         this.continueShoppingBtn = page.getByRole(
  94  |             'button',
  95  |             { name: 'Continue Shopping' }
  96  |         );
  97  | 
  98  |         this.cartBtn = page.locator(
  99  |             'a[href="/view_cart"]'
  100 |         ).first();
  101 | 
  102 |         this.cartProduct = page.locator(
  103 |             '.cart_description h4 a'
  104 |         );
  105 | 
  106 |         this.removeCartBtn = page.locator(
  107 |             '.cart_quantity_delete'
  108 |         );
  109 | 
  110 |         this.cartQuantity = page.locator(
  111 |             '.cart_quantity'
  112 |         );
  113 |     }
  114 | 
  115 |     async goto() {
  116 | 
  117 |         await this.page.goto(
  118 |             'https://automationexercise.com/',
  119 |             {
  120 |                 waitUntil: 'domcontentloaded',
  121 |                 timeout: 60000
  122 |             }
  123 |         );
  124 |     }
  125 | 
  126 |     async openProductsPage() {
  127 | 
  128 |         await this.productsBtn.waitFor({
  129 |             state: 'visible'
  130 |         });
  131 | 
  132 |         await this.productsBtn.click({
  133 |             force: true
  134 |         });
  135 |     }
  136 | 
  137 |     async searchProduct(productName) {
  138 | 
  139 |         await this.searchInput.waitFor({
  140 |             state: 'visible',
  141 |             timeout: 10000
  142 |         });
  143 | 
  144 |         await this.searchInput.fill(productName);
  145 | 
  146 |         await this.searchBtn.click({
  147 |             force: true
  148 |         });
  149 |     }
  150 | 
  151 |     async openFirstProduct() {
  152 | 
  153 |         await this.page.goto(
  154 |             'https://automationexercise.com/product_details/1',
  155 |             {
  156 |                 waitUntil: 'domcontentloaded',
  157 |                 timeout: 60000
  158 |             }
  159 |         );
  160 |     }
  161 |     async addFirstProductToCart() {
  162 | 
  163 |         await this.addToCartBtn.waitFor({
  164 |             state: 'visible'
  165 |         });
  166 | 
> 167 |         await this.addToCartBtn.click();
      |                                 ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  168 |     }
  169 |     async addSecondProductToCart() {
  170 | 
  171 |         await this.secondAddToCartBtn.scrollIntoViewIfNeeded();
  172 | 
  173 |         await this.secondAddToCartBtn.click();
  174 |     }
  175 | 
  176 |     async continueShopping() {
  177 | 
  178 |         await this.continueShoppingBtn.waitFor({
  179 |             state: 'visible',
  180 |             timeout: 10000
  181 |         });
  182 | 
  183 |         await this.continueShoppingBtn.click();
  184 |     }
  185 | 
  186 |     async openCart() {
  187 | 
  188 |         await this.cartBtn.waitFor({
  189 |             state: 'visible'
  190 |         });
  191 | 
  192 |         await this.cartBtn.click({
  193 |             force: true
  194 |         });
  195 | 
  196 |         await this.page.waitForURL(
  197 |             /view_cart/,
  198 |             {
  199 |                 timeout: 15000
  200 |             }
  201 |         );
  202 |     }
  203 | 
  204 |     async removeProductFromCart() {
  205 | 
  206 |         await this.removeCartBtn.click({
  207 |             force: true
  208 |         });
  209 |     }
  210 | 
  211 | }
  212 | 
  213 | module.exports = ProductPage;
```