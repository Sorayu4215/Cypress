export class AuthorisationPage {

    //inputs
    get usernameInput(){
        return cy.get('[data-type="username-Input"]')
    }
    get passwordInput(){
        return cy.get('[data-type="password-Input"]')
    }

    //labels
    get usernameLabel(){
        return cy.get('[data-type="username-label"]')
    }
    get passwordLabel(){
        return cy.get('[data-type="password-label"]')
    }

    //error 
    get usernameErrorMessage(){
        return cy.get('[data-type="username-error"]')
    }
    get passwordErrorMessage(){
        return cy.get('[data-type="password-error"]')
    }

    //buttons
    get logInButton() {
        return cy.get('[data-type="log-in-button"]')
    }
    get registrationButton(){
        return cy.get('[data-type="registration-button"]')
    }
    get forgotPasswordButton(){
        return cy.get('[data-type="forgor-password-button"]')
    }

    //message
    get sucessMessage(){
        return cy.get('[data-type="success-box"]')
    }
}