export class RegistrationPage{
    //credentials
    get usernameInput(){
        return cy.get('[data-type="username-input"]')
    }
    get passwordInput(){
        return cy.get('[data-type="password-input"]')
    }
    get confirmPasswordInput(){
        return cy.get('[data-type="password-confirmation-input"]')
    }


    //button
    get registerButon(){
        return cy.get('[data-type="save-values-btn"]')
    }
    //message 
    get successMessage(){
        return cy.get('[data-type="success-box"]')
    }
}