const { test } = require('@playwright/test');

const LoginPage = require('../../pages/login.page');

test('Login And Save Auth State', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.openLoginPage();

    await loginPage.login(
        'validuser@gmail.com',
        'validpassword'
    );

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

});