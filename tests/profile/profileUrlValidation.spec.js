const { test, expect } = require('@playwright/test');

test('Verify Login Page URL', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(page).toHaveURL(
        /login/
    );

});