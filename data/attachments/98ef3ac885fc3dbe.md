# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart\searchAndCart.spec.js >> Search Product And Add To Cart
- Location: tests\cart\searchAndCart.spec.js:5:1

# Error details

```
TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
    - textbox "Search Product" [ref=e40]: Blue Top
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
      - heading "Searched Products" [level=2] [ref=e98]
      - generic [ref=e100]:
        - generic [ref=e101]:
          - generic [ref=e102]:
            - img "ecommerce website products" [ref=e103]
            - heading "Rs. 500" [level=2] [ref=e104]
            - paragraph [ref=e105]: Blue Top
            - generic [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: Add to cart
          - generic [ref=e108]:
            - heading "Rs. 500" [level=2] [ref=e109]
            - paragraph [ref=e110]: Blue Top
            - generic [ref=e111] [cursor=pointer]:
              - generic [ref=e112]: 
              - text: Add to cart
        - list [ref=e114]:
          - listitem [ref=e115]:
            - link " View Product" [ref=e116]:
              - /url: /product_details/1
              - generic [ref=e117]: 
              - text: View Product
  - contentinfo [ref=e118]:
    - generic [ref=e123]:
      - heading "Subscription" [level=2] [ref=e124]
      - generic [ref=e125]:
        - textbox "Your email address" [ref=e126]
        - button "" [ref=e127] [cursor=pointer]:
          - generic [ref=e128]: 
        - paragraph [ref=e129]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e133]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e134]:
    - iframe [active] [ref=e136]:
      - generic [active] [ref=f13e1]:
        - generic [ref=f13e6]:
          - generic [ref=f13e8]:
            - link "Google Chrome" [ref=f13e11] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C2_lKTqcZavKrL--rodAPk5nt6Q-ek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEiQJP0BcH6pgvCer0_PMUFPlITmVicNMeUzbGBEk8MzmqLyUd6J5Tce4wpjS8dZL1duimyHUdkGD5JjfEoiWURH-vyca1MS_Eo2TerZCTyhPndaha61iocF61e1GfZJ5uQjW3Yf2Tv87Rb3XhsthagRcblJtqiT-iCMHqXWsOAVMajDkIDnZ0XqeD7BEWQR9Ycf-Rj3C6KLuNRhzEBam-JJ1SBdKVgK7XKKplMJ43t9WcNJwE1Ko6_WCrOugsCqSCzqGlapPhCZx3eVhnOKnVspjaOoZW06y78hrdDZI3Rm_MxKoreDoK-arkR5gcl2zPnilDRGPmWVYTHICnjDYjdBuZ_id3C8Vltj2TwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlisw6GJ396UA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjxj6eJ396UAxXvVQgEHZNMO_2IDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI8oqnid_elAMV71UIBB2TTDv9EAEYASAAEgI4ZfD_BwE&num=1&cid=CAQSoAIABaugfWrXr5GJkn1L3z4oVTa3hzKGqw7IeoB_ZXo3mFEaq70VGcsIDGdRpT5k22aDHHeUJ0ffJOz3nsMDGU5188gOKSLW9C3g1m7-GFCX4TA5I7DNWaufrZ6JEUii27isgjvOhxkP0Yr9NrnprnTxZkpZ1kMAtPPbCHlRXOWZ2wm2L7IeKiCWoO-FPkBIy1SwcoX6P22gxQLvCeLL7IzyuaKd_5PezjqE2TxbK8ugaSmuJMljYi0-ImoUeQNtc7PQRG0AhdyVhapdw-ucn_TQqdUIyFbyP-O7lz0oFQ9TCm0l6VHi5XXS-yD8zOUvS32tU2z7KPTd3rminIySlKMBmJFQl2S3TVCMYFKmlA6R2u3-6Vx0k1glqlL-jnDpUvUYAQ&sig=AOD64_1lUssdeHU0EpErDyFkV5DjbHCv-Q&client=ca-pub-1677597403311019&rf=1&nb=19&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - img "Google Chrome" [ref=f13e12]
            - generic [ref=f13e13]:
              - generic "Google Chrome" [ref=f13e14]:
                - link "Download Chrome" [ref=f13e16] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C2_lKTqcZavKrL--rodAPk5nt6Q-ek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEiQJP0BcH6pgvCer0_PMUFPlITmVicNMeUzbGBEk8MzmqLyUd6J5Tce4wpjS8dZL1duimyHUdkGD5JjfEoiWURH-vyca1MS_Eo2TerZCTyhPndaha61iocF61e1GfZJ5uQjW3Yf2Tv87Rb3XhsthagRcblJtqiT-iCMHqXWsOAVMajDkIDnZ0XqeD7BEWQR9Ycf-Rj3C6KLuNRhzEBam-JJ1SBdKVgK7XKKplMJ43t9WcNJwE1Ko6_WCrOugsCqSCzqGlapPhCZx3eVhnOKnVspjaOoZW06y78hrdDZI3Rm_MxKoreDoK-arkR5gcl2zPnilDRGPmWVYTHICnjDYjdBuZ_id3C8Vltj2TwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlisw6GJ396UA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjxj6eJ396UAxXvVQgEHZNMO_2IDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI8oqnid_elAMV71UIBB2TTDv9EAEYASAAEgI4ZfD_BwE&num=1&cid=CAQSoAIABaugfWrXr5GJkn1L3z4oVTa3hzKGqw7IeoB_ZXo3mFEaq70VGcsIDGdRpT5k22aDHHeUJ0ffJOz3nsMDGU5188gOKSLW9C3g1m7-GFCX4TA5I7DNWaufrZ6JEUii27isgjvOhxkP0Yr9NrnprnTxZkpZ1kMAtPPbCHlRXOWZ2wm2L7IeKiCWoO-FPkBIy1SwcoX6P22gxQLvCeLL7IzyuaKd_5PezjqE2TxbK8ugaSmuJMljYi0-ImoUeQNtc7PQRG0AhdyVhapdw-ucn_TQqdUIyFbyP-O7lz0oFQ9TCm0l6VHi5XXS-yD8zOUvS32tU2z7KPTd3rminIySlKMBmJFQl2S3TVCMYFKmlA6R2u3-6Vx0k1glqlL-jnDpUvUYAQ&sig=AOD64_1lUssdeHU0EpErDyFkV5DjbHCv-Q&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - link "Browse confidently with Chrome's built-in security. Download for your computer. Google Chrome" [ref=f13e18] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C2_lKTqcZavKrL--rodAPk5nt6Q-ek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEiQJP0BcH6pgvCer0_PMUFPlITmVicNMeUzbGBEk8MzmqLyUd6J5Tce4wpjS8dZL1duimyHUdkGD5JjfEoiWURH-vyca1MS_Eo2TerZCTyhPndaha61iocF61e1GfZJ5uQjW3Yf2Tv87Rb3XhsthagRcblJtqiT-iCMHqXWsOAVMajDkIDnZ0XqeD7BEWQR9Ycf-Rj3C6KLuNRhzEBam-JJ1SBdKVgK7XKKplMJ43t9WcNJwE1Ko6_WCrOugsCqSCzqGlapPhCZx3eVhnOKnVspjaOoZW06y78hrdDZI3Rm_MxKoreDoK-arkR5gcl2zPnilDRGPmWVYTHICnjDYjdBuZ_id3C8Vltj2TwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlisw6GJ396UA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjxj6eJ396UAxXvVQgEHZNMO_2IDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI8oqnid_elAMV71UIBB2TTDv9EAEYASAAEgI4ZfD_BwE&num=1&cid=CAQSoAIABaugfWrXr5GJkn1L3z4oVTa3hzKGqw7IeoB_ZXo3mFEaq70VGcsIDGdRpT5k22aDHHeUJ0ffJOz3nsMDGU5188gOKSLW9C3g1m7-GFCX4TA5I7DNWaufrZ6JEUii27isgjvOhxkP0Yr9NrnprnTxZkpZ1kMAtPPbCHlRXOWZ2wm2L7IeKiCWoO-FPkBIy1SwcoX6P22gxQLvCeLL7IzyuaKd_5PezjqE2TxbK8ugaSmuJMljYi0-ImoUeQNtc7PQRG0AhdyVhapdw-ucn_TQqdUIyFbyP-O7lz0oFQ9TCm0l6VHi5XXS-yD8zOUvS32tU2z7KPTd3rminIySlKMBmJFQl2S3TVCMYFKmlA6R2u3-6Vx0k1glqlL-jnDpUvUYAQ&sig=AOD64_1lUssdeHU0EpErDyFkV5DjbHCv-Q&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
                - text: Browse confidently with Chrome's built-in security. Download for your
                - text: computer. Google Chrome
          - link "Download" [ref=f13e21] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C2_lKTqcZavKrL--rodAPk5nt6Q-ek8_VhgHqiYmvwxWwkB8QASD9tJ6VAWDlgoCA5A6gAY6Q3LEoyAEBqAMByAPLBKoEiQJP0BcH6pgvCer0_PMUFPlITmVicNMeUzbGBEk8MzmqLyUd6J5Tce4wpjS8dZL1duimyHUdkGD5JjfEoiWURH-vyca1MS_Eo2TerZCTyhPndaha61iocF61e1GfZJ5uQjW3Yf2Tv87Rb3XhsthagRcblJtqiT-iCMHqXWsOAVMajDkIDnZ0XqeD7BEWQR9Ycf-Rj3C6KLuNRhzEBam-JJ1SBdKVgK7XKKplMJ43t9WcNJwE1Ko6_WCrOugsCqSCzqGlapPhCZx3eVhnOKnVspjaOoZW06y78hrdDZI3Rm_MxKoreDoK-arkR5gcl2zPnilDRGPmWVYTHICnjDYjdBuZ_id3C8Vltj2TwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlisw6GJ396UA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjxj6eJ396UAxXvVQgEHZNMO_2IDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI8oqnid_elAMV71UIBB2TTDv9EAEYASAAEgI4ZfD_BwE&num=1&cid=CAQSoAIABaugfWrXr5GJkn1L3z4oVTa3hzKGqw7IeoB_ZXo3mFEaq70VGcsIDGdRpT5k22aDHHeUJ0ffJOz3nsMDGU5188gOKSLW9C3g1m7-GFCX4TA5I7DNWaufrZ6JEUii27isgjvOhxkP0Yr9NrnprnTxZkpZ1kMAtPPbCHlRXOWZ2wm2L7IeKiCWoO-FPkBIy1SwcoX6P22gxQLvCeLL7IzyuaKd_5PezjqE2TxbK8ugaSmuJMljYi0-ImoUeQNtc7PQRG0AhdyVhapdw-ucn_TQqdUIyFbyP-O7lz0oFQ9TCm0l6VHi5XXS-yD8zOUvS32tU2z7KPTd3rminIySlKMBmJFQl2S3TVCMYFKmlA6R2u3-6Vx0k1glqlL-jnDpUvUYAQ&sig=AOD64_1lUssdeHU0EpErDyFkV5DjbHCv-Q&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - generic [ref=f13e24]:
              - generic [ref=f13e25]: Download
              - img [ref=f13e26]
        - img [ref=f13e31] [cursor=pointer]
        - button [ref=f13e33] [cursor=pointer]:
          - img [ref=f13e34]
        - iframe
```

# Test source

```ts
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
  178 |         await this.continueShoppingBtn.waitFor({
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
> 196 |    await this.page.waitForURL(
      |                    ^ TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
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