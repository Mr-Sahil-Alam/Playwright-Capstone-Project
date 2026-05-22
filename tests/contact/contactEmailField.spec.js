const { test, expect } = require('@playwright/test');

test('Verify Email Field Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.getByPlaceholder('Email').first()
    ).toBeVisible();

});