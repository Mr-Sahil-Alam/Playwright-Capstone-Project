const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/login.page');

const signupData = require('../../data/signupData');

signupData.forEach((data) => {

    test(`Signup Test with ${data.email}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.openLoginPage();

        await loginPage.signup(
            data.name,
            data.email
        );

        if (data.expected === "success") {

            await expect(page).toHaveURL(
                /signup/
            );

        } else {

            await expect(
                loginPage.signupBtn
            ).toBeVisible();

        }

    });

});