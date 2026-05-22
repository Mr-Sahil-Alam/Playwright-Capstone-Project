const { test, expect } = require('@playwright/test');

test('Verify Signup Button Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByRole('button', { name: 'Signup' })
    ).toBeVisible();

});