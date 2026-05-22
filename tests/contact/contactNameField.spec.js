const { test, expect } = require('@playwright/test');

test('Verify Name Field Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.getByPlaceholder('Name')
    ).toBeVisible();

});