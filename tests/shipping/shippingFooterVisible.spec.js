const { test, expect } = require('@playwright/test');

test('Verify Footer Visible On Cart Page', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/view_cart'
    );

    await expect(
        page.locator('footer')
    ).toBeVisible();

});