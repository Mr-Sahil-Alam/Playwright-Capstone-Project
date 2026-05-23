const { test, expect } = require('@playwright/test');

test('Verify Contact Us Link Visible', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await expect(
        page.getByRole(
            'link',
            { name: 'Contact us' }
        )
    ).toBeVisible();

});