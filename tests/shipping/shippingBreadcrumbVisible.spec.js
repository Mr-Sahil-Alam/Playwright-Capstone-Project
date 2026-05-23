const { test, expect } = require('@playwright/test');

test('Verify Shopping Cart Breadcrumb Visible', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/view_cart'
    );

    await expect(
        page.getByText('Shopping Cart')
    ).toBeVisible();

});