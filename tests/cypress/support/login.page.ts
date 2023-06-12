export class LoginPage{
    get usernameInput() {
        return cy.get('[data-type="username-Input"]')
    }
    get passwordInput() {
        return cy.get('[data-type="password-Input"]')
    }
    get logInButton() {
        return cy.get('[data-type="log-in-button"]')
    }

}