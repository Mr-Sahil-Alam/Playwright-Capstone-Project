const { test, expect } = require('@playwright/test');

test('Verify User Is Logged In', async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/login'
    );

    await page.locator(
        '[data-qa="login-email"]'
    ).fill('sahil.alamcse1@gmail.com');

    await page.locator(
        '[data-qa="login-password"]'
    ).fill('Alam@2002');

    await page.locator(
        '[data-qa="login-button"]'
    ).click();

    await expect(
        page.getByRole('link', {
            name: 'Logout'
        })
    ).toBeVisible();

});