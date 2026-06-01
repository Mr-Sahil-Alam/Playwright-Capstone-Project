const { test, expect } = require('@playwright/test');

test('Verify Home Navigation From Login Page', async ({ page }) => {

    await page.goto('https://automationexercise.com/login');

    await page.getByRole(
        'link',
        { name: 'Home' }
    ).first().click();

   if (
    page.url().includes('#google_vignette')
) {
    await page.goto(
        'https://automationexercise.com/'
    );
}

await expect(page).toHaveURL(
    /automationexercise\.com\/?$/
);

});