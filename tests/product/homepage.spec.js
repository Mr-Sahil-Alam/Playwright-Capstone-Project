const { test, expect } = require('@playwright/test');

test('Verify Home Page Loads', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/',
        {
            waitUntil: 'domcontentloaded',
            timeout: 30000
        }
    );

    await expect(page).toHaveTitle(
        /Automation Exercise/
    );

});