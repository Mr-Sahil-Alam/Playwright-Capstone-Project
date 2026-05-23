const { test, expect } = require('@playwright/test');

test('Verify Login Page Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();

});