const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/login.page');

test('Login Page Navigation Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.openLoginPage();

    await expect(page).toHaveURL(/login/);

});