import { productPage, authorisationPage } from "../support/main";

before(()=>{
    cy.testuserDatabaseRegistration('test_authorisation', '12345678', 'test@test.com', 'Test Name', 'Test 32', 'Trnava', 'Slovakia', '+421 987 654 321', '14 759', 'true')
})

beforeEach(()=>{
    cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
    cy.visit('/logIn')
})

describe('Authorisation test',()=>{
    it('Basic check and happy flow', ()=>{
        //check visibility
        authorisationPage.usernameLabel.should('be.visible')
        authorisationPage.usernameInput.should('be.visible')
        authorisationPage.passwordLabel.should('be.visible')
        authorisationPage.passwordInput.should('be.visible')
        authorisationPage.registrationButton.should('be.visible')
        authorisationPage.forgotPasswordButton.should('be.visible')
        authorisationPage.logInButton.should('be.visible')
        //log in flow check
        authorisationPage.usernameInput.type('test_authorisation')
        authorisationPage.passwordInput.type('12345678')
        authorisationPage.logInButton.click()
        //check sucess message
        authorisationPage.sucessMessage.should('be.visible')
        //check headers
        productPage.headerLogOutButton.should('be.visible')
        productPage.headerMyOrdersButton.should('be.visible')
        productPage.headerUserProfileButton.should('be.visible')
        productPage.headerLogInButton.should('not.exist')
        //logout 
        productPage.headerLogOutButton.click()
        //check redirection to shop
        cy.location().should((location) => {
            expect(location.href).to.contain('shop')
        })
    })
})

describe("Error cases",()=>{
    it('No username and password check', ()=>{
        authorisationPage.logInButton.click()
        //check error messages
        authorisationPage.usernameErrorMessage.should('be.visible')
        authorisationPage.passwordErrorMessage.should('be.visible')
        //fill right values
        authorisationPage.usernameInput.type('test_authorisation')
        authorisationPage.passwordInput.type('12345678')
        //check that error messgae disapear
        authorisationPage.usernameErrorMessage.should('not.exist')
        authorisationPage.passwordErrorMessage.should('not.exist')

    })
    it('Wrong name', ()=>{
        authorisationPage.usernameInput.type('test_authorisation52')
        authorisationPage.passwordInput.type('12345678')
        authorisationPage.logInButton.click()
        //error box
        productPage.errorBox.should('be.visible')
    })
    it('Wrong password', ()=>{
        authorisationPage.usernameInput.type('test_authorisation')
        authorisationPage.passwordInput.type('123456789')
        authorisationPage.logInButton.click()
        //error box
        productPage.errorBox.should('be.visible')
    })
    it('Error status API repsonse.',()=>{
        //mock error log in case
        cy.intercept('POST', '**/api/v1/login**', {
            statusCode: 404,
            body: []
        }).as('unsuccessfulLogIn')
        cy.visit('/logIn')
        //log in 
        authorisationPage.usernameInput.type('test_authorisation')
        authorisationPage.passwordInput.type('12345678')
        authorisationPage.logInButton.click()
        //error box
        productPage.errorBox.should('be.visible')
    })
})


after(()=>{
    cy.testuserDatabaseDeregistration('test_authorisation')
})