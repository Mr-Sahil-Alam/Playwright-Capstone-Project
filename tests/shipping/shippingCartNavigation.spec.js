const { test, expect } = require('@playwright/test');

test('Verify Navigation To Cart Page', async ({ page }) => {

    await page.goto('https://automationexercise.com');

    await page.getByRole(
        'link',
        { name: 'Cart' }
    ).first().click();

    await expect(page).toHaveURL(
        /view_cart/
    );

});