export class AuthorisationPage {
    constructor(page: any) {
        this.page = page
    }
    page  

    //inputs
    get usernameInput(){
        return this.page.locator('[data-type="username-Input"]')
    }
    get passwordInput(){
        return this.page.locator('[data-type="password-Input"]')
    }

    //labels
    get usernameLabel(){
        return this.page.locator('[data-type="username-label"]')
    }
    get passwordLabel(){
        return this.page.locator('[data-type="password-label"]')
    }

    //error 
    get usernameErrorMessage(){
        return this.page.locator('[data-type="username-error"]')
    }
    get passwordErrorMessage(){
        return this.page.locator('[data-type="password-error"]')
    }

    //buttons
    get logInButton() {
        return this.page.locator('[data-type="log-in-button"]')
    }
    get registrationButton(){
        return this.page.locator('[data-type="registration-button"]')
    }
    get forgotPasswordButton(){
        return this.page.locator('[data-type="forgor-password-button"]')
    }

    //message
    get sucessMessage(){
        return this.page.locator('[data-type="success-box"]')
    }
}