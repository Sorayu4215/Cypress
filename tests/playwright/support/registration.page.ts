export class RegistrationPage{
    constructor(page: any) {
        this.page = page
    }
    page 
    
    //credentials
    get usernameInput(){
        return this.page.locator('[data-type="username-input"]')
    }
    get passwordInput(){
        return this.page.locator('[data-type="password-input"]')
    }
    get confirmPasswordInput(){
        return this.page.locator('[data-type="password-confirmation-input"]')
    }

    //button
    get registerButon(){
        return this.page.locator('[data-type="save-values-btn"]')
    }
    //message 
    get successMessage(){
        return this.page.locator('[data-type="success-box"]')
    }
}