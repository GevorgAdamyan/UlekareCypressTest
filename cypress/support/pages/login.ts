export default class Login {
    private selectors = {
        emailField: '#email',
        passwordField: '#password',
        loginBtn: '[data-cy="login-submit"]',
        acceptCookiesBtn: ':nth-child(2) > .v-btn > .v-btn__content'
    }

    doLogin(email: string, password: string): void {
        cy.get(this.selectors.emailField).type(email);
        cy.get(this.selectors.passwordField).type(password);
        cy.get(this.selectors.loginBtn).click();
        cy.wait(1000);
    }

    acceptCookies(): void {
        cy.get(this.selectors.acceptCookiesBtn).click()
    }
}
