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
    }

    async goto() {

        await this.page.goto(
            'https://automationexercise.com/'
        );
    }

    async openLoginPage() {

        await this.signupLoginBtn.click();
    }

    async login(email, password) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginBtn.click();
    }

}

module.exports = LoginPage;