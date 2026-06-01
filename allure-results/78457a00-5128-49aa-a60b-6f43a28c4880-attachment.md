# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\quantityUpdate.spec.js >> Verify Product Quantity Update In Cart
- Location: tests\cart\quantityUpdate.spec.js:5:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Continue Shopping' }) to be visible

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
      - generic:
        - insertion:
          - generic:
            - iframe
      - generic [ref=e68]:
        - heading "Brands" [level=2] [ref=e69]
        - list [ref=e71]:
          - listitem [ref=e72]:
            - link "(6) Polo" [ref=e73]:
              - /url: /brand_products/Polo
              - generic [ref=e74]: (6)
              - text: Polo
          - listitem [ref=e75]:
            - link "(5) H&M" [ref=e76]:
              - /url: /brand_products/H&M
              - generic [ref=e77]: (5)
              - text: H&M
          - listitem [ref=e78]:
            - link "(5) Madame" [ref=e79]:
              - /url: /brand_products/Madame
              - generic [ref=e80]: (5)
              - text: Madame
          - listitem [ref=e81]:
            - link "(3) Mast & Harbour" [ref=e82]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e83]: (3)
              - text: Mast & Harbour
          - listitem [ref=e84]:
            - link "(4) Babyhug" [ref=e85]:
              - /url: /brand_products/Babyhug
              - generic [ref=e86]: (4)
              - text: Babyhug
          - listitem [ref=e87]:
            - link "(3) Allen Solly Junior" [ref=e88]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e89]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e90]:
            - link "(3) Kookie Kids" [ref=e91]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e92]: (3)
              - text: Kookie Kids
          - listitem [ref=e93]:
            - link "(5) Biba" [ref=e94]:
              - /url: /brand_products/Biba
              - generic [ref=e95]: (5)
              - text: Biba
    - generic [ref=e97]:
      - heading "All Products" [level=2] [ref=e98]
      - generic [ref=e101]:
        - generic [ref=e102]:
          - generic [ref=e104]: 
          - heading "Added!" [level=4] [ref=e105]
        - generic [ref=e106]:
          - paragraph [ref=e107]: Your product has been added to cart.
          - paragraph [ref=e108]:
            - link "View Cart" [ref=e109]:
              - /url: /view_cart
        - button "Continue Shopping" [ref=e111] [cursor=pointer]
      - generic [ref=e113]:
        - generic [ref=e114]:
          - generic [ref=e115]:
            - img "ecommerce website products" [ref=e116]
            - heading "Rs. 500" [level=2] [ref=e117]
            - paragraph [ref=e118]: Blue Top
            - generic [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: 
              - text: Add to cart
          - generic [ref=e121]:
            - heading "Rs. 500" [level=2] [ref=e122]
            - paragraph [ref=e123]: Blue Top
            - generic [ref=e124] [cursor=pointer]:
              - generic [ref=e125]: 
              - text: Add to cart
        - list [ref=e127]:
          - listitem [ref=e128]:
            - link " View Product" [ref=e129]:
              - /url: /product_details/1
              - generic [ref=e130]: 
              - text: View Product
      - generic [ref=e132]:
        - generic [ref=e133]:
          - generic [ref=e134]:
            - img "ecommerce website products" [ref=e135]
            - heading "Rs. 400" [level=2] [ref=e136]
            - paragraph [ref=e137]: Men Tshirt
            - generic [ref=e138] [cursor=pointer]:
              - generic [ref=e139]: 
              - text: Add to cart
          - generic [ref=e140]:
            - heading "Rs. 400" [level=2] [ref=e141]
            - paragraph [ref=e142]: Men Tshirt
            - generic [ref=e143] [cursor=pointer]:
              - generic [ref=e144]: 
              - text: Add to cart
        - list [ref=e146]:
          - listitem [ref=e147]:
            - link " View Product" [ref=e148]:
              - /url: /product_details/2
              - generic [ref=e149]: 
              - text: View Product
      - generic [ref=e151]:
        - generic [ref=e152]:
          - generic [ref=e153]:
            - img "ecommerce website products" [ref=e154]
            - heading "Rs. 1000" [level=2] [ref=e155]
            - paragraph [ref=e156]: Sleeveless Dress
            - generic [ref=e157] [cursor=pointer]:
              - generic [ref=e158]: 
              - text: Add to cart
          - generic [ref=e159]:
            - heading "Rs. 1000" [level=2] [ref=e160]
            - paragraph [ref=e161]: Sleeveless Dress
            - generic [ref=e162] [cursor=pointer]:
              - generic [ref=e163]: 
              - text: Add to cart
        - list [ref=e165]:
          - listitem [ref=e166]:
            - link " View Product" [ref=e167]:
              - /url: /product_details/3
              - generic [ref=e168]: 
              - text: View Product
      - generic [ref=e170]:
        - generic [ref=e171]:
          - generic [ref=e172]:
            - img "ecommerce website products" [ref=e173]
            - heading "Rs. 1500" [level=2] [ref=e174]
            - paragraph [ref=e175]: Stylish Dress
            - generic [ref=e176] [cursor=pointer]:
              - generic [ref=e177]: 
              - text: Add to cart
          - generic [ref=e178]:
            - heading "Rs. 1500" [level=2] [ref=e179]
            - paragraph [ref=e180]: Stylish Dress
            - generic [ref=e181] [cursor=pointer]:
              - generic [ref=e182]: 
              - text: Add to cart
        - list [ref=e184]:
          - listitem [ref=e185]:
            - link " View Product" [ref=e186]:
              - /url: /product_details/4
              - generic [ref=e187]: 
              - text: View Product
      - generic [ref=e189]:
        - generic [ref=e190]:
          - generic [ref=e191]:
            - img "ecommerce website products" [ref=e192]
            - heading "Rs. 600" [level=2] [ref=e193]
            - paragraph [ref=e194]: Winter Top
            - generic [ref=e195] [cursor=pointer]:
              - generic [ref=e196]: 
              - text: Add to cart
          - generic [ref=e197]:
            - heading "Rs. 600" [level=2] [ref=e198]
            - paragraph [ref=e199]: Winter Top
            - generic [ref=e200] [cursor=pointer]:
              - generic [ref=e201]: 
              - text: Add to cart
        - list [ref=e203]:
          - listitem [ref=e204]:
            - link " View Product" [ref=e205]:
              - /url: /product_details/5
              - generic [ref=e206]: 
              - text: View Product
      - generic [ref=e208]:
        - generic [ref=e209]:
          - generic [ref=e210]:
            - img "ecommerce website products" [ref=e211]
            - heading "Rs. 400" [level=2] [ref=e212]
            - paragraph [ref=e213]: Summer White Top
            - generic [ref=e214] [cursor=pointer]:
              - generic [ref=e215]: 
              - text: Add to cart
          - generic [ref=e216]:
            - heading "Rs. 400" [level=2] [ref=e217]
            - paragraph [ref=e218]: Summer White Top
            - generic [ref=e219] [cursor=pointer]:
              - generic [ref=e220]: 
              - text: Add to cart
        - list [ref=e222]:
          - listitem [ref=e223]:
            - link " View Product" [ref=e224]:
              - /url: /product_details/6
              - generic [ref=e225]: 
              - text: View Product
      - generic [ref=e227]:
        - generic [ref=e228]:
          - generic [ref=e229]:
            - img "ecommerce website products" [ref=e230]
            - heading "Rs. 1000" [level=2] [ref=e231]
            - paragraph [ref=e232]: Madame Top For Women
            - generic [ref=e233] [cursor=pointer]:
              - generic [ref=e234]: 
              - text: Add to cart
          - generic [ref=e235]:
            - heading "Rs. 1000" [level=2] [ref=e236]
            - paragraph [ref=e237]: Madame Top For Women
            - generic [ref=e238] [cursor=pointer]:
              - generic [ref=e239]: 
              - text: Add to cart
        - list [ref=e241]:
          - listitem [ref=e242]:
            - link " View Product" [ref=e243]:
              - /url: /product_details/7
              - generic [ref=e244]: 
              - text: View Product
      - generic [ref=e246]:
        - generic [ref=e247]:
          - generic [ref=e248]:
            - img "ecommerce website products" [ref=e249]
            - heading "Rs. 700" [level=2] [ref=e250]
            - paragraph [ref=e251]: Fancy Green Top
            - generic [ref=e252] [cursor=pointer]:
              - generic [ref=e253]: 
              - text: Add to cart
          - generic [ref=e254]:
            - heading "Rs. 700" [level=2] [ref=e255]
            - paragraph [ref=e256]: Fancy Green Top
            - generic [ref=e257] [cursor=pointer]:
              - generic [ref=e258]: 
              - text: Add to cart
        - list [ref=e260]:
          - listitem [ref=e261]:
            - link " View Product" [ref=e262]:
              - /url: /product_details/8
              - generic [ref=e263]: 
              - text: View Product
      - generic [ref=e265]:
        - generic [ref=e266]:
          - generic [ref=e267]:
            - img "ecommerce website products" [ref=e268]
            - heading "Rs. 499" [level=2] [ref=e269]
            - paragraph [ref=e270]: Sleeves Printed Top - White
            - generic [ref=e271] [cursor=pointer]:
              - generic [ref=e272]: 
              - text: Add to cart
          - generic [ref=e273]:
            - heading "Rs. 499" [level=2] [ref=e274]
            - paragraph [ref=e275]: Sleeves Printed Top - White
            - generic [ref=e276] [cursor=pointer]:
              - generic [ref=e277]: 
              - text: Add to cart
        - list [ref=e279]:
          - listitem [ref=e280]:
            - link " View Product" [ref=e281]:
              - /url: /product_details/11
              - generic [ref=e282]: 
              - text: View Product
      - generic [ref=e284]:
        - generic [ref=e285]:
          - generic [ref=e286]:
            - img "ecommerce website products" [ref=e287]
            - heading "Rs. 359" [level=2] [ref=e288]
            - paragraph [ref=e289]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e290] [cursor=pointer]:
              - generic [ref=e291]: 
              - text: Add to cart
          - generic [ref=e292]:
            - heading "Rs. 359" [level=2] [ref=e293]
            - paragraph [ref=e294]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e295] [cursor=pointer]:
              - generic [ref=e296]: 
              - text: Add to cart
        - list [ref=e298]:
          - listitem [ref=e299]:
            - link " View Product" [ref=e300]:
              - /url: /product_details/12
              - generic [ref=e301]: 
              - text: View Product
      - generic [ref=e303]:
        - generic [ref=e304]:
          - generic [ref=e305]:
            - img "ecommerce website products" [ref=e306]
            - heading "Rs. 278" [level=2] [ref=e307]
            - paragraph [ref=e308]: Frozen Tops For Kids
            - generic [ref=e309] [cursor=pointer]:
              - generic [ref=e310]: 
              - text: Add to cart
          - generic [ref=e311]:
            - heading "Rs. 278" [level=2] [ref=e312]
            - paragraph [ref=e313]: Frozen Tops For Kids
            - generic [ref=e314] [cursor=pointer]:
              - generic [ref=e315]: 
              - text: Add to cart
        - list [ref=e317]:
          - listitem [ref=e318]:
            - link " View Product" [ref=e319]:
              - /url: /product_details/13
              - generic [ref=e320]: 
              - text: View Product
      - generic [ref=e322]:
        - generic [ref=e323]:
          - generic [ref=e324]:
            - img "ecommerce website products" [ref=e325]
            - heading "Rs. 679" [level=2] [ref=e326]
            - paragraph [ref=e327]: Full Sleeves Top Cherry - Pink
            - generic [ref=e328] [cursor=pointer]:
              - generic [ref=e329]: 
              - text: Add to cart
          - generic [ref=e330]:
            - heading "Rs. 679" [level=2] [ref=e331]
            - paragraph [ref=e332]: Full Sleeves Top Cherry - Pink
            - generic [ref=e333] [cursor=pointer]:
              - generic [ref=e334]: 
              - text: Add to cart
        - list [ref=e336]:
          - listitem [ref=e337]:
            - link " View Product" [ref=e338]:
              - /url: /product_details/14
              - generic [ref=e339]: 
              - text: View Product
      - generic [ref=e341]:
        - generic [ref=e342]:
          - generic [ref=e343]:
            - img "ecommerce website products" [ref=e344]
            - heading "Rs. 315" [level=2] [ref=e345]
            - paragraph [ref=e346]: Printed Off Shoulder Top - White
            - generic [ref=e347] [cursor=pointer]:
              - generic [ref=e348]: 
              - text: Add to cart
          - generic [ref=e349]:
            - heading "Rs. 315" [level=2] [ref=e350]
            - paragraph [ref=e351]: Printed Off Shoulder Top - White
            - generic [ref=e352] [cursor=pointer]:
              - generic [ref=e353]: 
              - text: Add to cart
        - list [ref=e355]:
          - listitem [ref=e356]:
            - link " View Product" [ref=e357]:
              - /url: /product_details/15
              - generic [ref=e358]: 
              - text: View Product
      - generic [ref=e360]:
        - generic [ref=e361]:
          - generic [ref=e362]:
            - img "ecommerce website products" [ref=e363]
            - heading "Rs. 478" [level=2] [ref=e364]
            - paragraph [ref=e365]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e366] [cursor=pointer]:
              - generic [ref=e367]: 
              - text: Add to cart
          - generic [ref=e368]:
            - heading "Rs. 478" [level=2] [ref=e369]
            - paragraph [ref=e370]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e371] [cursor=pointer]:
              - generic [ref=e372]: 
              - text: Add to cart
        - list [ref=e374]:
          - listitem [ref=e375]:
            - link " View Product" [ref=e376]:
              - /url: /product_details/16
              - generic [ref=e377]: 
              - text: View Product
      - generic [ref=e379]:
        - generic [ref=e380]:
          - generic [ref=e381]:
            - img "ecommerce website products" [ref=e382]
            - heading "Rs. 1200" [level=2] [ref=e383]
            - paragraph [ref=e384]: Little Girls Mr. Panda Shirt
            - generic [ref=e385] [cursor=pointer]:
              - generic [ref=e386]: 
              - text: Add to cart
          - generic [ref=e387]:
            - heading "Rs. 1200" [level=2] [ref=e388]
            - paragraph [ref=e389]: Little Girls Mr. Panda Shirt
            - generic [ref=e390] [cursor=pointer]:
              - generic [ref=e391]: 
              - text: Add to cart
        - list [ref=e393]:
          - listitem [ref=e394]:
            - link " View Product" [ref=e395]:
              - /url: /product_details/18
              - generic [ref=e396]: 
              - text: View Product
      - generic [ref=e398]:
        - generic [ref=e399]:
          - generic [ref=e400]:
            - img "ecommerce website products" [ref=e401]
            - heading "Rs. 1050" [level=2] [ref=e402]
            - paragraph [ref=e403]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e404] [cursor=pointer]:
              - generic [ref=e405]: 
              - text: Add to cart
          - generic [ref=e406]:
            - heading "Rs. 1050" [level=2] [ref=e407]
            - paragraph [ref=e408]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e409] [cursor=pointer]:
              - generic [ref=e410]: 
              - text: Add to cart
        - list [ref=e412]:
          - listitem [ref=e413]:
            - link " View Product" [ref=e414]:
              - /url: /product_details/19
              - generic [ref=e415]: 
              - text: View Product
      - generic [ref=e417]:
        - generic [ref=e418]:
          - generic [ref=e419]:
            - img "ecommerce website products" [ref=e420]
            - heading "Rs. 1190" [level=2] [ref=e421]
            - paragraph [ref=e422]: Cotton Mull Embroidered Dress
            - generic [ref=e423] [cursor=pointer]:
              - generic [ref=e424]: 
              - text: Add to cart
          - generic [ref=e425]:
            - heading "Rs. 1190" [level=2] [ref=e426]
            - paragraph [ref=e427]: Cotton Mull Embroidered Dress
            - generic [ref=e428] [cursor=pointer]:
              - generic [ref=e429]: 
              - text: Add to cart
        - list [ref=e431]:
          - listitem [ref=e432]:
            - link " View Product" [ref=e433]:
              - /url: /product_details/20
              - generic [ref=e434]: 
              - text: View Product
      - generic [ref=e436]:
        - generic [ref=e437]:
          - generic [ref=e438]:
            - img "ecommerce website products" [ref=e439]
            - heading "Rs. 1530" [level=2] [ref=e440]
            - paragraph [ref=e441]: Blue Cotton Indie Mickey Dress
            - generic [ref=e442] [cursor=pointer]:
              - generic [ref=e443]: 
              - text: Add to cart
          - generic [ref=e444]:
            - heading "Rs. 1530" [level=2] [ref=e445]
            - paragraph [ref=e446]: Blue Cotton Indie Mickey Dress
            - generic [ref=e447] [cursor=pointer]:
              - generic [ref=e448]: 
              - text: Add to cart
        - list [ref=e450]:
          - listitem [ref=e451]:
            - link " View Product" [ref=e452]:
              - /url: /product_details/21
              - generic [ref=e453]: 
              - text: View Product
      - generic [ref=e455]:
        - generic [ref=e456]:
          - generic [ref=e457]:
            - img "ecommerce website products" [ref=e458]
            - heading "Rs. 1600" [level=2] [ref=e459]
            - paragraph [ref=e460]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e461] [cursor=pointer]:
              - generic [ref=e462]: 
              - text: Add to cart
          - generic [ref=e463]:
            - heading "Rs. 1600" [level=2] [ref=e464]
            - paragraph [ref=e465]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e466] [cursor=pointer]:
              - generic [ref=e467]: 
              - text: Add to cart
        - list [ref=e469]:
          - listitem [ref=e470]:
            - link " View Product" [ref=e471]:
              - /url: /product_details/22
              - generic [ref=e472]: 
              - text: View Product
      - generic [ref=e474]:
        - generic [ref=e475]:
          - generic [ref=e476]:
            - img "ecommerce website products" [ref=e477]
            - heading "Rs. 1100" [level=2] [ref=e478]
            - paragraph [ref=e479]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e480] [cursor=pointer]:
              - generic [ref=e481]: 
              - text: Add to cart
          - generic [ref=e482]:
            - heading "Rs. 1100" [level=2] [ref=e483]
            - paragraph [ref=e484]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e485] [cursor=pointer]:
              - generic [ref=e486]: 
              - text: Add to cart
        - list [ref=e488]:
          - listitem [ref=e489]:
            - link " View Product" [ref=e490]:
              - /url: /product_details/23
              - generic [ref=e491]: 
              - text: View Product
      - generic [ref=e493]:
        - generic [ref=e494]:
          - generic [ref=e495]:
            - img "ecommerce website products" [ref=e496]
            - heading "Rs. 849" [level=2] [ref=e497]
            - paragraph [ref=e498]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e499] [cursor=pointer]:
              - generic [ref=e500]: 
              - text: Add to cart
          - generic [ref=e501]:
            - heading "Rs. 849" [level=2] [ref=e502]
            - paragraph [ref=e503]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e504] [cursor=pointer]:
              - generic [ref=e505]: 
              - text: Add to cart
        - list [ref=e507]:
          - listitem [ref=e508]:
            - link " View Product" [ref=e509]:
              - /url: /product_details/24
              - generic [ref=e510]: 
              - text: View Product
      - generic [ref=e512]:
        - generic [ref=e513]:
          - generic [ref=e514]:
            - img "ecommerce website products" [ref=e515]
            - heading "Rs. 1299" [level=2] [ref=e516]
            - paragraph [ref=e517]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e518] [cursor=pointer]:
              - generic [ref=e519]: 
              - text: Add to cart
          - generic [ref=e520]:
            - heading "Rs. 1299" [level=2] [ref=e521]
            - paragraph [ref=e522]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e523] [cursor=pointer]:
              - generic [ref=e524]: 
              - text: Add to cart
        - list [ref=e526]:
          - listitem [ref=e527]:
            - link " View Product" [ref=e528]:
              - /url: /product_details/28
              - generic [ref=e529]: 
              - text: View Product
      - generic [ref=e531]:
        - generic [ref=e532]:
          - generic [ref=e533]:
            - img "ecommerce website products" [ref=e534]
            - heading "Rs. 1000" [level=2] [ref=e535]
            - paragraph [ref=e536]: Green Side Placket Detail T-Shirt
            - generic [ref=e537] [cursor=pointer]:
              - generic [ref=e538]: 
              - text: Add to cart
          - generic [ref=e539]:
            - heading "Rs. 1000" [level=2] [ref=e540]
            - paragraph [ref=e541]: Green Side Placket Detail T-Shirt
            - generic [ref=e542] [cursor=pointer]:
              - generic [ref=e543]: 
              - text: Add to cart
        - list [ref=e545]:
          - listitem [ref=e546]:
            - link " View Product" [ref=e547]:
              - /url: /product_details/29
              - generic [ref=e548]: 
              - text: View Product
      - generic [ref=e550]:
        - generic [ref=e551]:
          - generic [ref=e552]:
            - img "ecommerce website products" [ref=e553]
            - heading "Rs. 1500" [level=2] [ref=e554]
            - paragraph [ref=e555]: Premium Polo T-Shirts
            - generic [ref=e556] [cursor=pointer]:
              - generic [ref=e557]: 
              - text: Add to cart
          - generic [ref=e558]:
            - heading "Rs. 1500" [level=2] [ref=e559]
            - paragraph [ref=e560]: Premium Polo T-Shirts
            - generic [ref=e561] [cursor=pointer]:
              - generic [ref=e562]: 
              - text: Add to cart
        - list [ref=e564]:
          - listitem [ref=e565]:
            - link " View Product" [ref=e566]:
              - /url: /product_details/30
              - generic [ref=e567]: 
              - text: View Product
      - generic [ref=e569]:
        - generic [ref=e570]:
          - generic [ref=e571]:
            - img "ecommerce website products" [ref=e572]
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
            - link " View Product" [ref=e585]:
              - /url: /product_details/31
              - generic [ref=e586]: 
              - text: View Product
      - generic [ref=e588]:
        - generic [ref=e589]:
          - generic [ref=e590]:
            - img "ecommerce website products" [ref=e591]
            - heading "Rs. 799" [level=2] [ref=e592]
            - paragraph [ref=e593]: Soft Stretch Jeans
            - generic [ref=e594] [cursor=pointer]:
              - generic [ref=e595]: 
              - text: Add to cart
          - generic [ref=e596]:
            - heading "Rs. 799" [level=2] [ref=e597]
            - paragraph [ref=e598]: Soft Stretch Jeans
            - generic [ref=e599] [cursor=pointer]:
              - generic [ref=e600]: 
              - text: Add to cart
        - list [ref=e602]:
          - listitem [ref=e603]:
            - link " View Product" [ref=e604]:
              - /url: /product_details/33
              - generic [ref=e605]: 
              - text: View Product
      - generic [ref=e607]:
        - generic [ref=e608]:
          - generic [ref=e609]:
            - img "ecommerce website products" [ref=e610]
            - heading "Rs. 1200" [level=2] [ref=e611]
            - paragraph [ref=e612]: Regular Fit Straight Jeans
            - generic [ref=e613] [cursor=pointer]:
              - generic [ref=e614]: 
              - text: Add to cart
          - generic [ref=e615]:
            - heading "Rs. 1200" [level=2] [ref=e616]
            - paragraph [ref=e617]: Regular Fit Straight Jeans
            - generic [ref=e618] [cursor=pointer]:
              - generic [ref=e619]: 
              - text: Add to cart
        - list [ref=e621]:
          - listitem [ref=e622]:
            - link " View Product" [ref=e623]:
              - /url: /product_details/35
              - generic [ref=e624]: 
              - text: View Product
      - generic [ref=e626]:
        - generic [ref=e627]:
          - generic [ref=e628]:
            - img "ecommerce website products" [ref=e629]
            - heading "Rs. 1400" [level=2] [ref=e630]
            - paragraph [ref=e631]: Grunt Blue Slim Fit Jeans
            - generic [ref=e632] [cursor=pointer]:
              - generic [ref=e633]: 
              - text: Add to cart
          - generic [ref=e634]:
            - heading "Rs. 1400" [level=2] [ref=e635]
            - paragraph [ref=e636]: Grunt Blue Slim Fit Jeans
            - generic [ref=e637] [cursor=pointer]:
              - generic [ref=e638]: 
              - text: Add to cart
        - list [ref=e640]:
          - listitem [ref=e641]:
            - link " View Product" [ref=e642]:
              - /url: /product_details/37
              - generic [ref=e643]: 
              - text: View Product
      - generic [ref=e645]:
        - generic [ref=e646]:
          - generic [ref=e647]:
            - img "ecommerce website products" [ref=e648]
            - heading "Rs. 2300" [level=2] [ref=e649]
            - paragraph [ref=e650]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e651] [cursor=pointer]:
              - generic [ref=e652]: 
              - text: Add to cart
          - generic [ref=e653]:
            - heading "Rs. 2300" [level=2] [ref=e654]
            - paragraph [ref=e655]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e656] [cursor=pointer]:
              - generic [ref=e657]: 
              - text: Add to cart
        - list [ref=e659]:
          - listitem [ref=e660]:
            - link " View Product" [ref=e661]:
              - /url: /product_details/38
              - generic [ref=e662]: 
              - text: View Product
      - generic [ref=e664]:
        - generic [ref=e665]:
          - generic [ref=e666]:
            - img "ecommerce website products" [ref=e667]
            - heading "Rs. 3000" [level=2] [ref=e668]
            - paragraph [ref=e669]: Cotton Silk Hand Block Print Saree
            - generic [ref=e670] [cursor=pointer]:
              - generic [ref=e671]: 
              - text: Add to cart
          - generic [ref=e672]:
            - heading "Rs. 3000" [level=2] [ref=e673]
            - paragraph [ref=e674]: Cotton Silk Hand Block Print Saree
            - generic [ref=e675] [cursor=pointer]:
              - generic [ref=e676]: 
              - text: Add to cart
        - list [ref=e678]:
          - listitem [ref=e679]:
            - link " View Product" [ref=e680]:
              - /url: /product_details/39
              - generic [ref=e681]: 
              - text: View Product
      - generic [ref=e683]:
        - generic [ref=e684]:
          - generic [ref=e685]:
            - img "ecommerce website products" [ref=e686]
            - heading "Rs. 3500" [level=2] [ref=e687]
            - paragraph [ref=e688]: Rust Red Linen Saree
            - generic [ref=e689] [cursor=pointer]:
              - generic [ref=e690]: 
              - text: Add to cart
          - generic [ref=e691]:
            - heading "Rs. 3500" [level=2] [ref=e692]
            - paragraph [ref=e693]: Rust Red Linen Saree
            - generic [ref=e694] [cursor=pointer]:
              - generic [ref=e695]: 
              - text: Add to cart
        - list [ref=e697]:
          - listitem [ref=e698]:
            - link " View Product" [ref=e699]:
              - /url: /product_details/40
              - generic [ref=e700]: 
              - text: View Product
      - generic [ref=e702]:
        - generic [ref=e703]:
          - generic [ref=e704]:
            - img "ecommerce website products" [ref=e705]
            - heading "Rs. 5000" [level=2] [ref=e706]
            - paragraph [ref=e707]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e708] [cursor=pointer]:
              - generic [ref=e709]: 
              - text: Add to cart
          - generic [ref=e710]:
            - heading "Rs. 5000" [level=2] [ref=e711]
            - paragraph [ref=e712]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e713] [cursor=pointer]:
              - generic [ref=e714]: 
              - text: Add to cart
        - list [ref=e716]:
          - listitem [ref=e717]:
            - link " View Product" [ref=e718]:
              - /url: /product_details/41
              - generic [ref=e719]: 
              - text: View Product
      - generic [ref=e721]:
        - generic [ref=e722]:
          - generic [ref=e723]:
            - img "ecommerce website products" [ref=e724]
            - heading "Rs. 1400" [level=2] [ref=e725]
            - paragraph [ref=e726]: Lace Top For Women
            - generic [ref=e727] [cursor=pointer]:
              - generic [ref=e728]: 
              - text: Add to cart
          - generic [ref=e729]:
            - heading "Rs. 1400" [level=2] [ref=e730]
            - paragraph [ref=e731]: Lace Top For Women
            - generic [ref=e732] [cursor=pointer]:
              - generic [ref=e733]: 
              - text: Add to cart
        - list [ref=e735]:
          - listitem [ref=e736]:
            - link " View Product" [ref=e737]:
              - /url: /product_details/42
              - generic [ref=e738]: 
              - text: View Product
      - generic [ref=e740]:
        - generic [ref=e741]:
          - generic [ref=e742]:
            - img "ecommerce website products" [ref=e743]
            - heading "Rs. 1389" [level=2] [ref=e744]
            - paragraph [ref=e745]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e746] [cursor=pointer]:
              - generic [ref=e747]: 
              - text: Add to cart
          - generic [ref=e748]:
            - heading "Rs. 1389" [level=2] [ref=e749]
            - paragraph [ref=e750]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e751] [cursor=pointer]:
              - generic [ref=e752]: 
              - text: Add to cart
        - list [ref=e754]:
          - listitem [ref=e755]:
            - link " View Product" [ref=e756]:
              - /url: /product_details/43
              - generic [ref=e757]: 
              - text: View Product
  - insertion [ref=e759]
  - contentinfo [ref=e761]:
    - generic [ref=e766]:
      - heading "Subscription" [level=2] [ref=e767]
      - generic [ref=e768]:
        - textbox "Your email address" [ref=e769]
        - button "" [ref=e770] [cursor=pointer]:
          - generic [ref=e771]: 
        - paragraph [ref=e772]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e776]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e777]:
    - iframe [ref=e780]:
      - generic [active] [ref=f11e1]:
        - generic [ref=f11e6]:
          - generic [ref=f11e8]:
            - link "Google Chrome" [ref=f11e11] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C6RVsFacZatfgB9_mi9YPx6yJeJ6Tz9WGAeqJia_DFbCQHxABIP20npUBYOWCgIDkDqABjpDcsSjIAQGoAwHIA8sEqgT9AU_QyoC4EJikngocJv-hqv7ainNdQTKudziU56wcqz-VRKAV-dyJrD4LtPwJSsmOHF0Znu7FkO8ufowdJ2CLui7ZotZghU3lLDQOaZ6qXuTJmNzJeotGla0uvhnSY-djQ6qM-EXskgX6dV5XHW7UTpndv2FwDV7AJ61wtxIXCG7tPSjGELu3EzHaWx2HBm9Y-UgvDJdDgPJxu71y_u-zUvocnlQzle0-2hSDGfoqmwPhrucXwgg4RDHFzvIZvWh5aId1MZn4CyfOt-TB0ed9HZJvBMji1Ng0RLqwVdNFYyXG-hxSNJ6gYYhPzBxKxYnhMTqDpnItTdq5ejpCsQTABN7qlMzWBYgFw6-KpleAB-OJzSKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJmb4-3e3pQDYAGaCSpodHRwczovL3d3dy5nb29nbGUuY29tL2Nocm9tZS9kci9kb3dubG9hZC-xCUsuLQSyVgiCgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMI-8Xo7d7elAMVX_PCBB1HVgIPiA4J2BMMiBQE0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAt5oGAEiAQDQGAHoGAGyGQEvwhkCCAE&gclid=EAIaIQobChMIl7_o7d7elAMVX_PCBB1HVgIPEAEYASAAEgJ0-_D_BwE&num=1&cid=CAQSoAIABaugfflRmcDVYYtmAa4A8I07L5qhSnHBBjBJyrzlKKpZTZZTy1P67sD1WMpNLXb4lSRlvRQrUp8vOndxFJ6GZnT71sTZkaRXc6jkhNjZEok6G8Dum0fJpBLS7TsUaVhcdZblpXxfAg8da4KLMyrrDn9gaqQYgmj3C1oGddticbkZbQKNJFP6PQ7MCmAxpYurF8TRKjWJezRdvxuNp_iimJuGIn00GhaYilPtfdGZxpzGfysGdYV0_2UyCytdoWZ2A8A8ZwF8ZbqslIixjLRkNCN9zdDW1XeCk4RMw32vXsJFh9CjectSuS-ezpwODGIgmJnbzCVvHTB1bu5g_0Qk_0cWfaxOJgU1bCwKZgTLyGouM1-5PQ8geUzMLBVstV0YAQ&sig=AOD64_0g7ZCn1uEZPDkmpYcPlf0VD8FvYw&client=ca-pub-1677597403311019&rf=1&nb=19&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - img "Google Chrome" [ref=f11e12]
            - generic [ref=f11e13]:
              - generic "Google Chrome" [ref=f11e14]:
                - link "Download Chrome" [ref=f11e16] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C6RVsFacZatfgB9_mi9YPx6yJeJ6Tz9WGAeqJia_DFbCQHxABIP20npUBYOWCgIDkDqABjpDcsSjIAQGoAwHIA8sEqgT9AU_QyoC4EJikngocJv-hqv7ainNdQTKudziU56wcqz-VRKAV-dyJrD4LtPwJSsmOHF0Znu7FkO8ufowdJ2CLui7ZotZghU3lLDQOaZ6qXuTJmNzJeotGla0uvhnSY-djQ6qM-EXskgX6dV5XHW7UTpndv2FwDV7AJ61wtxIXCG7tPSjGELu3EzHaWx2HBm9Y-UgvDJdDgPJxu71y_u-zUvocnlQzle0-2hSDGfoqmwPhrucXwgg4RDHFzvIZvWh5aId1MZn4CyfOt-TB0ed9HZJvBMji1Ng0RLqwVdNFYyXG-hxSNJ6gYYhPzBxKxYnhMTqDpnItTdq5ejpCsQTABN7qlMzWBYgFw6-KpleAB-OJzSKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJmb4-3e3pQDYAGaCSpodHRwczovL3d3dy5nb29nbGUuY29tL2Nocm9tZS9kci9kb3dubG9hZC-xCUsuLQSyVgiCgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMI-8Xo7d7elAMVX_PCBB1HVgIPiA4J2BMMiBQE0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAt5oGAEiAQDQGAHoGAGyGQEvwhkCCAE&gclid=EAIaIQobChMIl7_o7d7elAMVX_PCBB1HVgIPEAEYASAAEgJ0-_D_BwE&num=1&cid=CAQSoAIABaugfflRmcDVYYtmAa4A8I07L5qhSnHBBjBJyrzlKKpZTZZTy1P67sD1WMpNLXb4lSRlvRQrUp8vOndxFJ6GZnT71sTZkaRXc6jkhNjZEok6G8Dum0fJpBLS7TsUaVhcdZblpXxfAg8da4KLMyrrDn9gaqQYgmj3C1oGddticbkZbQKNJFP6PQ7MCmAxpYurF8TRKjWJezRdvxuNp_iimJuGIn00GhaYilPtfdGZxpzGfysGdYV0_2UyCytdoWZ2A8A8ZwF8ZbqslIixjLRkNCN9zdDW1XeCk4RMw32vXsJFh9CjectSuS-ezpwODGIgmJnbzCVvHTB1bu5g_0Qk_0cWfaxOJgU1bCwKZgTLyGouM1-5PQ8geUzMLBVstV0YAQ&sig=AOD64_0g7ZCn1uEZPDkmpYcPlf0VD8FvYw&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - link "Browse confidently with Chrome's built-in security. Download for your computer. Google Chrome" [ref=f11e18] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C6RVsFacZatfgB9_mi9YPx6yJeJ6Tz9WGAeqJia_DFbCQHxABIP20npUBYOWCgIDkDqABjpDcsSjIAQGoAwHIA8sEqgT9AU_QyoC4EJikngocJv-hqv7ainNdQTKudziU56wcqz-VRKAV-dyJrD4LtPwJSsmOHF0Znu7FkO8ufowdJ2CLui7ZotZghU3lLDQOaZ6qXuTJmNzJeotGla0uvhnSY-djQ6qM-EXskgX6dV5XHW7UTpndv2FwDV7AJ61wtxIXCG7tPSjGELu3EzHaWx2HBm9Y-UgvDJdDgPJxu71y_u-zUvocnlQzle0-2hSDGfoqmwPhrucXwgg4RDHFzvIZvWh5aId1MZn4CyfOt-TB0ed9HZJvBMji1Ng0RLqwVdNFYyXG-hxSNJ6gYYhPzBxKxYnhMTqDpnItTdq5ejpCsQTABN7qlMzWBYgFw6-KpleAB-OJzSKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJmb4-3e3pQDYAGaCSpodHRwczovL3d3dy5nb29nbGUuY29tL2Nocm9tZS9kci9kb3dubG9hZC-xCUsuLQSyVgiCgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMI-8Xo7d7elAMVX_PCBB1HVgIPiA4J2BMMiBQE0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAt5oGAEiAQDQGAHoGAGyGQEvwhkCCAE&gclid=EAIaIQobChMIl7_o7d7elAMVX_PCBB1HVgIPEAEYASAAEgJ0-_D_BwE&num=1&cid=CAQSoAIABaugfflRmcDVYYtmAa4A8I07L5qhSnHBBjBJyrzlKKpZTZZTy1P67sD1WMpNLXb4lSRlvRQrUp8vOndxFJ6GZnT71sTZkaRXc6jkhNjZEok6G8Dum0fJpBLS7TsUaVhcdZblpXxfAg8da4KLMyrrDn9gaqQYgmj3C1oGddticbkZbQKNJFP6PQ7MCmAxpYurF8TRKjWJezRdvxuNp_iimJuGIn00GhaYilPtfdGZxpzGfysGdYV0_2UyCytdoWZ2A8A8ZwF8ZbqslIixjLRkNCN9zdDW1XeCk4RMw32vXsJFh9CjectSuS-ezpwODGIgmJnbzCVvHTB1bu5g_0Qk_0cWfaxOJgU1bCwKZgTLyGouM1-5PQ8geUzMLBVstV0YAQ&sig=AOD64_0g7ZCn1uEZPDkmpYcPlf0VD8FvYw&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
                - text: Browse confidently with Chrome's built-in security. Download for your
                - text: computer. Google Chrome
          - link "Download" [ref=f11e21] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C6RVsFacZatfgB9_mi9YPx6yJeJ6Tz9WGAeqJia_DFbCQHxABIP20npUBYOWCgIDkDqABjpDcsSjIAQGoAwHIA8sEqgT9AU_QyoC4EJikngocJv-hqv7ainNdQTKudziU56wcqz-VRKAV-dyJrD4LtPwJSsmOHF0Znu7FkO8ufowdJ2CLui7ZotZghU3lLDQOaZ6qXuTJmNzJeotGla0uvhnSY-djQ6qM-EXskgX6dV5XHW7UTpndv2FwDV7AJ61wtxIXCG7tPSjGELu3EzHaWx2HBm9Y-UgvDJdDgPJxu71y_u-zUvocnlQzle0-2hSDGfoqmwPhrucXwgg4RDHFzvIZvWh5aId1MZn4CyfOt-TB0ed9HZJvBMji1Ng0RLqwVdNFYyXG-hxSNJ6gYYhPzBxKxYnhMTqDpnItTdq5ejpCsQTABN7qlMzWBYgFw6-KpleAB-OJzSKoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJmb4-3e3pQDYAGaCSpodHRwczovL3d3dy5nb29nbGUuY29tL2Nocm9tZS9kci9kb3dubG9hZC-xCUsuLQSyVgiCgAoByAsB4AsBogwDkAEBqg0CSU7IDQHqDRMI-8Xo7d7elAMVX_PCBB1HVgIPiA4J2BMMiBQE0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAt5oGAEiAQDQGAHoGAGyGQEvwhkCCAE&gclid=EAIaIQobChMIl7_o7d7elAMVX_PCBB1HVgIPEAEYASAAEgJ0-_D_BwE&num=1&cid=CAQSoAIABaugfflRmcDVYYtmAa4A8I07L5qhSnHBBjBJyrzlKKpZTZZTy1P67sD1WMpNLXb4lSRlvRQrUp8vOndxFJ6GZnT71sTZkaRXc6jkhNjZEok6G8Dum0fJpBLS7TsUaVhcdZblpXxfAg8da4KLMyrrDn9gaqQYgmj3C1oGddticbkZbQKNJFP6PQ7MCmAxpYurF8TRKjWJezRdvxuNp_iimJuGIn00GhaYilPtfdGZxpzGfysGdYV0_2UyCytdoWZ2A8A8ZwF8ZbqslIixjLRkNCN9zdDW1XeCk4RMw32vXsJFh9CjectSuS-ezpwODGIgmJnbzCVvHTB1bu5g_0Qk_0cWfaxOJgU1bCwKZgTLyGouM1-5PQ8geUzMLBVstV0YAQ&sig=AOD64_0g7ZCn1uEZPDkmpYcPlf0VD8FvYw&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - generic [ref=f11e24]:
              - generic [ref=f11e25]: Download
              - img [ref=f11e26]
        - img [ref=f11e31] [cursor=pointer]
        - button [ref=f11e33] [cursor=pointer]:
          - img [ref=f11e34]
        - iframe
```

# Test source

```ts
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
  167 |         await this.addToCartBtn.click();
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
> 178 |         await this.continueShoppingBtn.waitFor({
      |                                        ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  179 |             state: 'visible',
  180 |             timeout: 10000
  181 |         });
  182 | 
  183 |         await this.continueShoppingBtn.click();
  184 |     }
  185 | 
  186 |    async openCart() {
  187 | 
  188 |     await this.cartBtn.waitFor({
  189 |         state: 'visible'
  190 |     });
  191 | 
  192 |     await this.cartBtn.click({
  193 |         force: true
  194 |     });
  195 | 
  196 |    await this.page.waitForURL(
  197 |     /view_cart/,
  198 |     {
  199 |         timeout: 30000
  200 |     }
  201 | );
  202 | }
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