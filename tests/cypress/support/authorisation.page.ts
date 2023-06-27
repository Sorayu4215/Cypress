export class AuthorisationPage {

    //inputs
    get usernameInput(){
        return cy.get('[data-type="username-Input"]')
    }
    get passwordInput(){
        return cy.get('[data-type="password-Input"]')
    }

    //buttons
    get logInButton() {
        return cy.get('[data-type="log-in-button"]')
    }
}