const { test, expect } = require('@playwright/test');

test('Verify Contact Us Heading Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/contact_us');

    await expect(
        page.getByRole('heading', { name: 'Contact Us' })
    ).toBeVisible();

});