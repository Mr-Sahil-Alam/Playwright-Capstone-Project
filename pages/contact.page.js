class ContactPage {

    constructor(page) {

        this.page = page;

        this.contactBtn = page.getByRole(
            'link',
            { name: 'Contact us' }
        );

        this.nameInput = page.locator(
            'input[data-qa="name"]'
        );

        this.emailInput = page.locator(
            'input[data-qa="email"]'
        );

        this.subjectInput = page.locator(
            'input[data-qa="subject"]'
        );

        this.messageInput = page.locator(
            '#message'
        );

        this.uploadFileInput = page.locator(
            'input[name="upload_file"]'
        );

        this.submitBtn = page.locator(
            'input[data-qa="submit-button"]'
        );

        this.successMessage = page.locator(
            '.status.alert.alert-success'
        ).first();
    }

    async goto() {

        await this.page.goto(
            'https://automationexercise.com/',
            {
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }
        );
    }

    async openContactPage() {

        await Promise.all([
            this.page.waitForURL(
                '**/contact_us'
            ),
            this.contactBtn.click({
                force: true
            })
        ]);

    }

    async fillContactForm(name, email, subject, message) {

        await this.nameInput.waitFor({
            state: 'visible'
        });

        await this.nameInput.fill(name);

        await this.emailInput.fill(email);

        await this.subjectInput.fill(subject);

        await this.messageInput.fill(message);

        await this.uploadFileInput.setInputFiles(
            'package.json'
        );
    }

    async submitForm() {

       this.page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await this.submitBtn.scrollIntoViewIfNeeded();

        await this.submitBtn.click({
            force: true
        });

    }

}

module.exports = ContactPage;