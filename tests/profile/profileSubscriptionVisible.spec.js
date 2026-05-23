const { test, expect } = require('@playwright/test');

test('Verify Subscription Section Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByText('Subscription')
    ).toBeVisible();

});