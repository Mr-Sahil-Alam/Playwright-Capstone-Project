const { test, expect } = require('@playwright/test');

test('Verify Home Page Loads', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/'
    );

    await expect(page).toHaveTitle(
        /Automation Exercise/
    );

});