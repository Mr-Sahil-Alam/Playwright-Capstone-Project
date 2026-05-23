const { test, expect } = require('@playwright/test');

test('Verify Cart Page Visible', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/view_cart'
    );

    await expect(
        page.getByText('Shopping Cart')
    ).toBeVisible();

});