export class PersonalDataPage{
    //sucess
    get successBox(){
        return cy.get('[data-type="success-box"]')
    }

    //address data 
    get saveButton(){
        return cy.get('[data-type="save-values-btn"]')
    }

    //username change
    get usernameInput(){
        return cy.get('[data-type="user-profile-new-username-input"]')
    }
    get changeUsernameButton() {
        return cy.get('[data-type="user-profile-change-credentials-username-btn"]')
    }
    get saveUsernameButton() {
        return cy.get('[data-type="user-profile-save-credentials-username-btn"]')
    }

    //password change 
    get passwordInput() {
        return cy.get('[data-type="user-profile-new-password-input"]')
    }
    get confirmPasswordInput() {
        return cy.get('[data-type="user-profile-new-confirm-password-input"]')
    }
    get changePasswordButton() {
        return cy.get('[data-type="user-profile-change-credentials-password-btn"]')
    }
    get savePasswordButton() {
        return cy.get('[data-type="user-profile-save-credentials-password-btn"]')
    }
}