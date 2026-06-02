class LoginPage {

    constructor(page) {

        this.page = page;

        // Block Google Ads and external trackers to prevent WebKit test failures and click interception
        page.route('**/*', (route) => {
            const url = route.request().url();
            if (url.includes('google') || url.includes('ads') || url.includes('doubleclick') || url.includes('analytics') || url.includes('adservice')) {
                route.abort();
            } else {
                route.continue();
            }
        }).catch(() => {});

        // Signup Locators
        this.signupNameInput = page.locator(
            'input[data-qa="signup-name"]'
        );

        this.signupEmailInput = page.locator(
            'input[data-qa="signup-email"]'
        );

        this.signupBtn = page.getByRole(
            'button',
            { name: 'Signup' }
        );

        // Login Locators
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
            'text=Your email or password is incorrect!'
        );
    }

    async goto() {

        await this.page.goto(
            'https://automationexercise.com/',
            {
                waitUntil: 'domcontentloaded',
                timeout: 90000
            }
        );

        await this.page.waitForTimeout(3000);
    }

    async openLoginPage() {

        await Promise.all([
            this.page.waitForURL('**/login'),
            this.signupLoginBtn.click()
        ]);
    }
    async login(email, password) {

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginBtn.click({
            force: true
        });
    }

    async signup(name, email) {

        await this.signupNameInput.fill(name);

        await this.signupEmailInput.fill(email);

        await this.signupBtn.waitFor();

        await this.signupBtn.scrollIntoViewIfNeeded();

        await this.signupBtn.click({
            force: true
        });
    }

}

module.exports = LoginPage;