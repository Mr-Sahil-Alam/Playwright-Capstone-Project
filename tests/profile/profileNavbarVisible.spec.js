const { test, expect } = require('@playwright/test');

test('Verify Navbar Visible On Login Page', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.locator('header')
    ).toBeVisible();

});