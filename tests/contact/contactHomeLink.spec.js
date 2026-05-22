const { test, expect } = require('@playwright/test');

test('Verify Home Link Visible On Contact Page', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.getByRole('link', { name: 'Home' }).first()
    ).toBeVisible();

});