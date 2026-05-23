const { test, expect } = require('@playwright/test');

test('Verify Password Textbox Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByPlaceholder('Password')
    ).toBeVisible();

});