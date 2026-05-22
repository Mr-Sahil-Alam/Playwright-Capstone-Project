const { test, expect } = require('@playwright/test');

test('Verify Footer Visible On Contact Page', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.locator('footer')
    ).toBeVisible();

});