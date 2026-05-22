const { test, expect } = require('@playwright/test');

test('Verify Logout Link Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByRole('link', { name: 'Signup / Login' })
    ).toBeVisible();

});