const { test, expect } = require('@playwright/test');

test('Verify Contact Us Link Visible', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/view_cart'
    );

    await expect(
        page.getByRole(
            'link',
            { name: 'Contact us' }
        )
    ).toBeVisible();

});