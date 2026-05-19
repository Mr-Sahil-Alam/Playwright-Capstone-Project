const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/login.page');

const loginData = require('../../data/loginData');

loginData.forEach((data) => {

    test(`Login Test with ${data.email}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.openLoginPage();

        await loginPage.login(
            data.email,
            data.password
        );

        if (data.expected === "success") {

            await expect(page).toHaveURL(
                /automationexercise/
            );

        } else {

            await expect(
                loginPage.errorMessage
            ).toBeVisible();

        }

    });

});