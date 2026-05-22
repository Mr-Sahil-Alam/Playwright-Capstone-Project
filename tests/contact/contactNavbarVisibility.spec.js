const { test, expect } = require('@playwright/test');

test('Verify Header Visible On Contact Page', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.locator('header')
    ).toBeVisible();

});