const { test, expect } = require('@playwright/test');

test('Verify Signup Page Heading', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByText('New User Signup!')
    ).toBeVisible();

});