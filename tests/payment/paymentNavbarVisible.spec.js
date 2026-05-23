const { test, expect } = require('@playwright/test');

test('Verify Header Visible', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/view_cart'
    );

    await expect(
        page.locator('header')
    ).toBeVisible();

});