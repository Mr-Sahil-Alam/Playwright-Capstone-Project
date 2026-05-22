const { test, expect } = require('@playwright/test');

test('Verify Submit Button Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.getByRole('button', { name: 'Submit' })
    ).toBeVisible();

});