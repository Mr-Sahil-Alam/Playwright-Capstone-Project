const { test, expect } = require('@playwright/test');

test('Verify Home Link Visible', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/view_cart'
    );

    await expect(
        page.getByRole(
            'link',
            { name: 'Home' }
        ).first()
    ).toBeVisible();

});