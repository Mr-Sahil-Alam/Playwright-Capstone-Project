# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\cart.spec.js >> Add Product To Cart
- Location: tests\cart\cart.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.cart_description h4 a')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.cart_description h4 a')

```

```yaml
- banner:
  - img "DigiKey - Electronic Components Distributor"
  - 'searchbox "Enter keyword or part #"'
  - button " Upload a List"
  - button " "
  - link "Login or REGISTER ":
    - /url: https://www.digikey.in/MyDigiKey/Login?site=IN&lang=en&returnurl=https%3A%2F%2Fwww.digikey.in%2Fen%2Fsupplier-centers%2Feao%3Fgad_source%3D5%26gad_campaignid%3D22633832323%26gclid%3DEAIaIQobChMIsdrhsJTglAMVUA2DAx2iLhorEAEYASAAEgJPc_D_BwE%26gclsrc%3Daw.ds
  - link "Edit Settings":
    - /url: "#"
    - img "Edit Settings"
  - link " 0 item(s) ":
    - /url: /ordering/shoppingcart?lang=en
- text: "ATTENTION: Due to high order volume, orders may require up to 2 additional business days to process."
- list:
  - listitem:
    - link "Products ":
      - /url: /en/products
  - listitem:
    - link "Manufacturers ":
      - /url: /en/supplier-centers
  - listitem: Resources 
  - listitem:
    - link "Request a Quote":
      - /url: /en/mylists/
- link "FREE DELIVERY on Orders over ₹7,000!*":
  - /url: /en/help-support/delivery-information/delivery-time-and-cost
- img "Image of EAO Logo"
- navigation:
  - list:
    - listitem:
      - link "Our Products":
        - /url: "#supplier_products"
    - listitem:
      - link "Tools and Support":
        - /url: "#tools-and-support"
    - listitem:
      - link "Featured Videos":
        - /url: "#smc-video"
    - listitem:
      - link "About EAO":
        - /url: "#about-supplier"
    - listitem:
      - link "Additional Content":
        - /url: "#additional-content"
- searchbox "Search"
- heading "EAO" [level=1]
- heading "Product Categories" [level=2]
- list:
  - listitem:
    - button "Audio Products "
  - listitem:
    - button "Connectors, Interconnects "
  - listitem:
    - button "Potentiometers, Variable Resistors "
  - listitem:
    - button "Tools "
- list:
  - listitem:
    - button "Cable Assemblies "
  - listitem:
    - button "Industrial Automation and Controls "
  - listitem:
    - button "Safety Products "
- list:
  - listitem:
    - button "Cables, Wires - Management "
  - listitem:
    - button "Optoelectronics "
  - listitem:
    - button "Switches "
- link "View All Products From EAO":
  - /url: /en/products?s=N4IgjCBcoLQBxVAYygMwIYBsDOBTANCAPZQDa4AnACwIC6Avo0A
- link "New Products":
  - /url: /en/products?s=N4IgjCBcoLQBxVAYygMwIYBsDOBTANCAPZQDa4AnACwIC6AvoTAEyIgqQAuATgK4HEyIAOwgG9ekA
- heading [level=2]
- img "Image of EAO Interactive 3D Tool HMI Switches"
- heading "Interactive 3D Tool Provides Full Control Over Configuration Experience" [level=3]
- paragraph: The Online Product Configurator allows for easy configuration of readily available components and accessories into more than 2,000 different custom combinations
- link "Learn More":
  - /url: https://digikey.eao.com/
- img "Image of EAO Enhancing Safety"
- heading "Enhancing Safety for Operators and Equipment" [level=3]
- paragraph: Navigating compliance standards and industry directives help simplify the selection process of the right emergency control device for your application.
- link "Learn More":
  - /url: /en/pdf/e/eao/emergency-stop-switches
- img "Image of EAO Series 46 EcoTouch"
- heading "Unlock the Potential of Your Design with This Cost-Effective Solution" [level=3]
- paragraph: A wide range of 22 mm and 30.5 mm mount switches with modular construction provides unlimited combinations for general purpose industrial controls.
- link "Learn More":
  - /url: /en/product-highlight/e/eao/series-46-ecotouch-switches
- heading "Our Products" [level=2]
- text: Newest Products
- img
- heading "Series 46 Signal Tower" [level=2]
- paragraph: EAO introduces the next generation of light towers engineered for simplicity, flexibility, and high-performance LED signaling.
- link "Learn More":
  - /url: /en/product-highlight/e/eao/series-46-signal-tower
- img
- heading "Series 46 Push-Pull E-Stop" [level=2]
- paragraph: EAO Series 46 push-pull E-stops design supports fast, controlled shutdowns during hazardous or unexpected situations.
- link "Learn More":
  - /url: /en/product-highlight/e/eao/series-46-push-pull-e-stop
- img
- heading "Series 46 Joysticks" [level=2]
- paragraph: EAO Series 46 joysticks are built for reliable operation in harsh environments.
- link "Learn More":
  - /url: /en/product-highlight/e/eao/series-46-joysticks
- img
- heading "Ruggedized Pendant Control Stations" [level=2]
- paragraph: Designed for durability and high performance, EAO pendant control stations deliver reliable operation in the toughest industrial settings.
- link "Learn More":
  - /url: /en/product-highlight/e/eao/ruggedized-pendant-control-stations
- img
- heading "Enhanced E-Stop and Stop Switches" [level=2]
- paragraph: EAO improved Series 84 emergency stop (E-stop) and stop switches feature a minimal size combined with an appealing and ergonomic design.
- link "Learn More":
  - /url: /en/product-highlight/e/eao/enhanced-e-stop-and-stop-switches
- text:  
- link "View All":
  - /url: https://www.digikey.in/en/product-highlight?f=591589639
- heading "Tools and Support" [level=2]
- img "Image of EAO TOBROCO"
- heading "In motion – with TOBROCO and EAO" [level=3]
- text: The Series 09 Keypads are designed for harsh operating conditions and E1 applications with CAN bus integration and functional safety applications according to ISO 26262 and EN ISO 13849 – The robust control units with intelligent illumination are ideally suited for use in heavy duty and specialty vehicle applications.
- link "Learn More":
  - /url: /en/pdf/e/eao/in-motion-tobroco
- heading "Series IP67 09 Rugged CAN Keypads" [level=3]
- text: Designed for E1 applications with functional safety and CAN bus integration, the robust Series 09 Rugged CAN Keypads feature vibrant illumination ideal for use in heavy duty and specialty vehicles. The multi-color RGB 4-segment halo-ring illumination, which includes optional animation features, allows for easy end-user recognition of equipment status and interchangeable lens caps provides the needed flexibility to meet the rigors and demands of any application requirement.
- link "Learn More":
  - /url: /en/videos/e/eao/eao-series-09-rugged-can-keypads
- img "Image of EAO Series 09 Keyboards"
- text:  
- img "Image of EAO INEOS Grenadier Partners with EAO"
- heading "INEOS Grenadier Partners with EAO for Unmatched Off-Road Performance" [level=2]
- text: EAO, the expert partner for innovative, intuitive, and reliable Human Machine Interfaces (HMIs), announces that its Series 09 Universal Switch has been installed in the INEOS Grenadier. EAO is delivering up to nine switches located within the roof console of the utilitarian-inspired Grenadier to aid in off-road mode selection and the operation of exterior accessories.
- link "Learn More":
  - /url: https://eao.com/en/news/clxvfejx1z6yc07uj1xcskm3b/ineos-grenadier-partners-with-eao-for-unmatched-off-road-performance
- text:  
- heading "Featured Videos" [level=2]
- link " EAO - Series 09 Rugged Keypads Application Video – Snowplow":
  - /url: /en/videos/e/eao/eao-series-09-rugged-keypads-application-video-snowplow
  - text: 
  - img "EAO - Series 09 Rugged Keypads Application Video – Snowplow"
- text: EAO - Series 09 Rugged Keypads Application Video – Snowplow
- link " EAO - Series 84 compact halo illuminated switch":
  - /url: /en/videos/e/eao/eao-series-84-compact-halo-illuminated-switch
  - text: 
  - img "EAO - Series 84 compact halo illuminated switch"
- text: EAO - Series 84 compact halo illuminated switch
- link " EAO - Series 09 Rugged Keypads Application Video – Tractor":
  - /url: /en/videos/e/eao/eao-series-09-rugged-keypads-application-video-tractor
  - text: 
  - img "EAO - Series 09 Rugged Keypads Application Video – Tractor"
- text: EAO - Series 09 Rugged Keypads Application Video – Tractor
- link " EAO - Series 82 pushbuttons with illuminated symbols":
  - /url: /en/videos/e/eao/eao-series-82-pushbuttons-with-illuminated-symbols
  - text: 
  - img "EAO - Series 82 pushbuttons with illuminated symbols"
- text: EAO - Series 82 pushbuttons with illuminated symbols
- link "View All":
  - /url: /en/videos/video-search-results?f=591589639&f=918738543
- heading "About EAO" [level=2]
- paragraph: EAO Corporation is a global technology leader and manufacturer of Human Machine Interface (HMI) Components and Systems serving the transportation, machinery, heavy-duty, lifting and moving, specialty vehicle, and automotive markets. Intuitive development skills along with global manufacturing capabilities, worldwide supply chains, and superior project and consultation management result in complete and innovative HMI solutions. HMI Components include innovative and award-winning pushbuttons, indicators, emergency stop switches, rotary selectors, keylocks, CAN or LIN-based products, and more.
- paragraph: "\"With DigiKey and EAO, every HMI solution is a stepping-stone towards a smarter, more connected world. Our partnership allows engineers to become architects of a new era in automation, designing experiences that resonate with innovative, reliable, intuitive, and user-friendly HMI solutions.\" Said John J. Pannone, Managing Director, North America, EAO Corporation."
- link "Our Website":
  - /url: http://www.eao.com/
- heading "Additional Content" [level=2]
- heading "CASE STUDIES" [level=3]
- list:
  - listitem:
    - link "Custom-Built Armrest Control Panel - For Ship-board Lifting and Drilling Equipment":
      - /url: /en/pdf/e/eao/custom-built-armrest-control-panel
  - listitem:
    - link "Feature EAO Emergency-Stops - For Heavy Duty Remote Wireless Controls":
      - /url: /en/pdf/e/eao/feature-eao-emergency-stops
  - listitem:
    - link "In Motion with TOBROCO and EAO - New Intuitive Operation with Series 09 Rugged Keypad":
      - /url: /en/pdf/e/eao/in-motion-tobroco
  - listitem:
    - link "Innovative Design for Night-Time Operation":
      - /url: /en/pdf/e/eao/innovative-design-for-night-time-operation
  - listitem:
    - link "Intuitive and Safer Operation - IP Gansow Opts for EAO Series 04 and 61":
      - /url: /en/pdf/e/eao/intuitive-and-safer-option
  - listitem:
    - link "Italian Machine Builder Uses EAO System Design - For Glass Production Machine":
      - /url: /en/pdf/e/eao/italian-machine-builder-glass-production
  - listitem:
    - link "Moulded Stainless Steel Control Panel - For Deep Drawing Process":
      - /url: /en/pdf/e/eao/moulded-stainless-steel-control-panel
  - listitem:
    - link "No Job Too Tough for the INEOS Grenadier - With reliable HMIs of the Series 09":
      - /url: ""
  - listitem:
    - link "Optical Lens Surface Generator":
      - /url: /en/pdf/e/eao/optical-lens-surface-generator
  - listitem:
    - link "Rugged Membrane HMI Controls - For International Forklift Manufacturer":
      - /url: /en/pdf/e/eao/rugged-membrane-hmi-controls
  - listitem:
    - link "A Solutions Focused Approach - Resolving Harsh Environment Challenges":
      - /url: /en/pdf/e/eao/solutions-focused-approach
  - listitem:
    - link "EAO Supplies HMI Components - For Leading Italian Machine Tools Builder":
      - /url: /en/pdf/e/eao/supplies-hmi-components
- heading "ADDITIONAL LINKS" [level=3]
- list:
  - listitem:
    - link "Markets and Applications":
      - /url: https://eao.com/north-america/en_us/markets1/
- heading "WHITE PAPERS" [level=3]
- list:
  - listitem:
    - link "View All White Papers":
      - /url: /en/content-search?f=286498601&f=591589639
- heading "PRESS RELEASES" [level=3]
- list:
  - listitem:
    - link "EAO Appears on OEM Off-Highway Podcast to Discuss the Importance of Functional Safety":
      - /url: /en/pdf/e/eao/appears-oem-off-highway-podcast
  - listitem:
    - link "EAO Wins 2025 iF Design Award for Online Product Configurator":
      - /url: /en/pdf/e/eao/wins-if-design-award-online-product-configurator
- heading "EAO ON SOCIAL MEDIA" [level=3]
- list:
  - listitem:
    - link "LinkedIn":
      - /url: https://www.linkedin.com/company/eao
  - listitem:
    - link "YouTube":
      - /url: https://www.youtube.com/user/eaoswitches
- heading "PRODUCT INFORMATION" [level=3]
- list:
  - listitem:
    - link "Download Center":
      - /url: https://eao.com/north-america/en_us/news-and-downloads/downloads/
  - listitem:
    - link "Online Product Configurator":
      - /url: http://products.eao.com/index.php?lang=en
- heading "MARKET BROCHURES" [level=3]
- list:
  - listitem:
    - link "Automotive":
      - /url: /en/pdf/e/eao/automotive
  - listitem:
    - link "Heavy Duty & Special Vehicles":
      - /url: /en/pdf/e/eao/heavy-duty-special-vehicles
  - listitem:
    - link "HMI Systems":
      - /url: /en/pdf/e/eao/hmi-systems
  - listitem:
    - link "HMIs for Buses and Coaches":
      - /url: /en/pdf/e/eao/hmis-for-buses-and-coaches
  - listitem:
    - link "HMIs for Electric Vehicles":
      - /url: /en/pdf/e/eao/hmis-for-electric-vehicles
  - listitem:
    - link "Machinery":
      - /url: /en/pdf/e/eao/machinery
  - listitem:
    - link "The Human Touch":
      - /url: /en/pdf/e/eao/the-human-touch
  - listitem:
    - link "Transportation":
      - /url: /en/pdf/e/eao/transportation
- heading "CATALOGS" [level=3]
- list:
  - listitem:
    - link "Series 09":
      - /url: /en/pdf/e/eao/series-09-catalog
  - listitem:
    - link "Series 14":
      - /url: /en/pdf/e/eao/series-14-catalog
  - listitem:
    - link "Series 45":
      - /url: /en/pdf/e/eao/series-45-catalog
  - listitem:
    - link "Series 61":
      - /url: /en/pdf/e/eao/series-61-catalog
  - listitem:
    - link "Series 70":
      - /url: /en/pdf/e/eao/series-70-catalog
  - listitem:
    - link "Series 82":
      - /url: /en/pdf/e/eao/series-82-catalog
  - listitem:
    - link "Series 84":
      - /url: /en/pdf/e/eao/series-84-catalog
- heading "inTouch WITH EAO" [level=3]
- list:
  - listitem:
    - link "Functional Safety - What is it? What Do you Need to Know?":
      - /url: /en/pdf/e/eao/functional-safety-what-is-it
  - listitem:
    - link "Industry 4.0 - The 4th Industrial Revolution":
      - /url: /en/pdf/e/eao/industry-4-the-4th-industrial-revolution
- heading "CONFIGURATORS" [level=3]
- list:
  - listitem:
    - link "Emergency Stop":
      - /url: https://digikey.eao.com/catalog/function/emergency_stop_switch/en/emergency-stop-switch
  - listitem:
    - link "Indicator":
      - /url: https://digikey.eao.com/catalog/function/indicator/en/indicator
  - listitem:
    - link "Keylock Switch":
      - /url: https://digikey.eao.com/catalog/function/keylock_switch/en/keylock-switch
  - listitem:
    - link "Lever Switch":
      - /url: https://digikey.eao.com/catalog/function/lever_switch/en/lever-switch
  - listitem:
    - link "Potentiometer":
      - /url: https://digikey.eao.com/catalog/function/potentiometer/en/potentiometer
  - listitem:
    - link "Pushbutton":
      - /url: https://digikey.eao.com/catalog/function/pushbutton/en/pushbutton
  - listitem:
    - link "Selector Switch":
      - /url: https://digikey.eao.com/catalog/function/selector_switch/en/selector-switch
  - listitem:
    - link "Sound Indicator":
      - /url: https://digikey.eao.com/catalog/function/sound_indicator/en/sound-indicator
- text:  Need Help?  Feedback Get the latest tech insights
- textbox "Enter your email"
- button "Subscribe"
- checkbox "I agree to receive marketing emails from DigiKey (optional). I understand that I can withdraw consent at any time. Please review our Privacy Notice."
- text: I agree to receive marketing emails from DigiKey (optional). I understand that I can withdraw consent at any time. Please review our
- link "Privacy Notice":
  - /url: /en/help/Privacy
- text: .
- heading "Subscribe" [level=4]
- link "Facebook":
  - /url: https://www.facebook.com/digikey.electronics
  - img "Facebook"
- link "X":
  - /url: https://www.x.com/digikey
  - img "X"
- link "YouTube":
  - /url: https://www.youtube.com/@digikey
  - img "YouTube"
- link "Instagram":
  - /url: https://www.instagram.com/digikey/
  - img "Instagram"
- link "LinkedIn":
  - /url: https://www.linkedin.com/company/digikey
  - img "LinkedIn"
- link "Download on the App Store":
  - /url: https://itunes.apple.com/us/app/digikey/id352075219?mt=8
  - img "Download on the App Store"
- link "Get it on Google Play":
  - /url: https://play.google.com/store/apps/details?id=com.digikey.mobile
  - img "Get it on Google Play"
- heading "Information" [level=4]
- link "About DigiKey":
  - /url: /en/resources/about-digikey
- link "Newsroom":
  - /url: /en/newsroom
- link "Sell on DigiKey.com":
  - /url: /en/resources/sell-on-dk
- link "Site map":
  - /url: /en/help/site-map
- heading "Contact and support" [level=4]
- link "Contact us":
  - /url: javascript:dk.modal("#helpModal").show()
- link "Co-browse":
  - /url: javascript:void(0)
- link "Help and support":
  - /url: /en/help-support
- link "Order status":
  - /url: /orderhistory/guest/orderstatus
- link "Returns and order issues":
  - /url: /mydigikey/returns
- link "Shipping rates/options":
  - /url: /en/help-support/delivery-information/delivery-time-and-cost
- link "Terms & Conditions":
  - /url: /en/terms-and-conditions
- link "Privacy Notice":
  - /url: /en/help/Privacy
- text: Cookie Settings Copyright © 1995-2026, DigiKey. All Rights Reserved.
- link:
  - /url: /en/help/authorized-distributor
- img "This site is protected by VikingCloud's Trusted Commerce program"
- link:
  - /url: /en/help/authorized-distributor
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const ProductPage = require('../../pages/product.page');
  4  | 
  5  | test('Add Product To Cart', async ({ page }) => {
  6  | 
  7  |     const productPage = new ProductPage(page);
  8  | 
  9  |     await productPage.goto();
  10 | 
  11 |     await productPage.openProductsPage();
  12 | 
  13 |     await productPage.addFirstProductToCart();
  14 | 
  15 |     await productPage.continueShopping();
  16 | 
  17 |     await productPage.openCart();
  18 | 
  19 |     await expect(
  20 |         productPage.cartProduct
> 21 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  22 | 
  23 | });
```