const { test, expect } = require('@playwright/test');

test('Verify Contact Form Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.locator('form').first()
    ).toBeVisible();

});