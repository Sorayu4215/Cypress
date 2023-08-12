export class PersonalDataPage{
    constructor(page: any) {
        this.page = page
    }
    page 

    
    //sucess
    get successBox(){
        return this.page.locator('[data-type="success-box"]', { timeout: 15000 })
    }

    //address data 
    get saveButton(){
        return this.page.locator('[data-type="save-values-btn"]')
    }

    //username change
    get usernameInput(){
        return this.page.locator('[data-type="user-profile-new-username-input"]')
    }
    get changeUsernameButton() {
        return this.page.locator('[data-type="user-profile-change-credentials-username-btn"]')
    }
    get saveUsernameButton() {
        return this.page.locator('[data-type="user-profile-save-credentials-username-btn"]')
    }

    //password change 
    get passwordInput() {
        return this.page.locator('[data-type="user-profile-new-password-input"]')
    }
    get confirmPasswordInput() {
        return this.page.locator('[data-type="user-profile-new-confirm-password-input"]')
    }
    get changePasswordButton() {
        return this.page.locator('[data-type="user-profile-change-credentials-password-btn"]')
    }
    get savePasswordButton() {
        return this.page.locator('[data-type="user-profile-save-credentials-password-btn"]')
    }
}