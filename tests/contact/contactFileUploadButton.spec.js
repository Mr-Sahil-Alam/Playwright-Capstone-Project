const { test, expect } = require('@playwright/test');

test('Verify File Upload Button Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.locator('input[type="file"]')
    ).toBeVisible();

});