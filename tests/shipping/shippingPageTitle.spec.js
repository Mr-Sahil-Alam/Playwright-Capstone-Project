const { test, expect } = require('@playwright/test');

test('Verify Cart Page Title', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/view_cart'
    );

    await expect(page).toHaveTitle(
        /Automation Exercise/
    );

});