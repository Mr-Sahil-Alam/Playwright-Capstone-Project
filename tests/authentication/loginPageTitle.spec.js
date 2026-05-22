const { test, expect } = require('@playwright/test');

test('Verify Login Page Title', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(page).toHaveTitle(
        /Automation Exercise/
    );

});