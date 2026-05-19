class LoginPage {

    constructor(page) {

        this.page = page;

        this.signupLoginBtn = page.getByRole(
            'link',
            { name: 'Signup / Login' }
        );

        this.emailInput = page.locator(
            'input[data-qa="login-email"]'
        );

        this.passwordInput = page.locator(
            'input[data-qa="login-password"]'
        );

        this.loginBtn = page.getByRole(
            'button',
            { name: 'Login' }
        );

        this.logoutBtn = page.getByRole(
            'link',
            { name: 'Logout' }
        );

        this.errorMessage = page.locator(
    'p[style="color: red;"]'
);
    }

    async goto() {

        await this.page.goto(
            'https://automationexercise.com/'
        );
    }

    async openLoginPage() {

       await this.signupLoginBtn.waitFor();

        await this.signupLoginBtn.click();
    }

    async login(email, password) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

       await this.loginBtn.waitFor();

await this.loginBtn.scrollIntoViewIfNeeded();

await this.loginBtn.click({
    force: true
});
    }

}

module.exports = LoginPage;