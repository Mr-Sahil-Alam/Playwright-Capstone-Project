const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/login.page');

const loginData = [
    {
        email: 'validuser@gmail.com',
        password: 'validpassword',
        expected: 'Logout'
    },
    {
        email: 'wrong@gmail.com',
        password: 'wrongpass',
        expected: 'Your email or password is incorrect!'
    }
];

test.describe('Data Driven Login Tests', () => {

    loginData.forEach(data => {

        test(`Login with ${data.email}`, async ({ page }) => {

            const loginPage = new LoginPage(page);

            await loginPage.goto();

            await loginPage.openLoginPage();

            await loginPage.login(
                data.email,
                data.password
            );

            if(data.expected === 'Logout') {

                await expect(
                    loginPage.logoutBtn
                ).toBeVisible();

            } else {

                await expect(
                    loginPage.errorMessage
                ).toContainText(
                    data.expected
                );
            }

        });

    });

});