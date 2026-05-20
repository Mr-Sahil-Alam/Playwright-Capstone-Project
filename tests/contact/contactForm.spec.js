const { test, expect } = require('@playwright/test');

const ContactPage = require('../../pages/contact.page');

test('Submit Contact Us Form', async ({ page }) => {

    const contactPage = new ContactPage(page);

    await contactPage.goto();

    await contactPage.openContactPage();

    await contactPage.fillContactForm(
        'Sahil',
        'sahil@gmail.com',
        'Testing',
        'This is automation testing'
    );

    await contactPage.submitForm();

    await expect(
        contactPage.successMessage
    ).toContainText(
        'Success'
    );

});