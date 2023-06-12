import { LoginPage } from "../support/login.page";

const logInPage = new LoginPage()

describe('Log In tests', () => {
    beforeEach(()=>{
        cy.setCookie('Cookie','')
        cy.visit('/logIn')
    })
    it('Happy Flow', () => {
        logInPage.usernameInput.type('test1')
        logInPage.passwordInput.type('12345678')
        logInPage.logInButton.click()

    })
})