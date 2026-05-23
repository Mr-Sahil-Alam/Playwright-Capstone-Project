const { test, expect } = require('@playwright/test');

test('Verify Login Navigation From Navbar', async ({ page }) => {

    await page.goto('https://automationexercise.com');

    await page.getByRole(
        'link',
        { name: 'Signup / Login' }
    ).click();

    await expect(page).toHaveURL(
        /login/
    );

});