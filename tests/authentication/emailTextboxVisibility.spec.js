const { test, expect } = require('@playwright/test');

test('Verify Email Textbox Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByPlaceholder('Email Address').first()
    ).toBeVisible();

});