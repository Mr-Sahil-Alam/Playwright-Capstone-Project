const { test, expect } = require('@playwright/test');

test('Verify Contact Page URL', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(page).toHaveURL(
        /contact_us/
    );

});