const base = require('@playwright/test');

exports.test = base.test.extend({

    preparedPage: async ({ page }, use) => {

        await page.goto(
            'https://automationexercise.com/'
        );

        await use(page);

    }

});

exports.expect = base.expect;