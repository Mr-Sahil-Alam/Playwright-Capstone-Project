const { test } = require('@playwright/test');

test('Generate Auth State', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await page.locator('[data-qa="login-email"]').fill('sahil.alamcse1@gmail.com');

    await page.locator('[data-qa="login-password"]').fill('Alam@2002');

    await page.locator('[data-qa="login-button"]').click();

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

});