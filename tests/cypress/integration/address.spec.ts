import { addressPage,shippingPage } from "../support/main"

before(()=>{
    cy.testuserDatabaseRegistration('test_address', '12345678', 'test@test.com', 'Test Name', 'Test 32', 'Trnava', 'Slovakia', '+421 987 654 321', '14 759', 'true')
})
describe('Address page',()=>{
    beforeEach(()=>{
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        window.localStorage.setItem('Shipping', JSON.stringify({ "shipping": "Post", "payment": "Paypal" }))
        cy.visit('/Address')
    })
    it('Navigation flow', () => {
        //navigation back
        addressPage.backButton.click()
        shippingPage.topNavigationShippingLabel.should('be.visible')
        //navigation into adress
        shippingPage.addressButton.click()
        addressPage.topNavigationAddressLabel.should('be.visible')
    })
    it('Basic check and happy flow',()=>{
        //basic check 
        addressPage.topNavigationAddressLabel.should('be.visible').should('have.class','active')
        addressPage.emailInput.should('be.visible')
        addressPage.nameInput.should('be.visible')
        addressPage.addressInput.should('be.visible')
        addressPage.countrySelect.should('be.visible')
        addressPage.cityInput.should('be.visible')
        addressPage.postCodelInput.should('be.visible')
        addressPage.phoneNumberInput.should('be.visible')
        //fill data
        addressPage.personalData('johnSmilga@test.sk','John Smilga','Test 21','Slovakia','Bratislava','987 45', '+421 987 654 321')
        addressPage.businessData('NI123456', 'GB999 9999 73', 'KBSPSKBXXXX', 'SK0809000000000123123123', 'John Smilga')
        //navigate to summary page and verify address
        addressPage.summaryButton.click()
        cy.getAllLocalStorage().then(result => {
            expect(result[Cypress.config().baseUrl!]).to.haveOwnProperty("Address").to.eq(JSON.stringify({ "email": "johnSmilga@test.sk", "name": "John Smilga", "address": "Test 21", "country": "Slovakia", "city": "Bratislava", "post_code": "987 45", "phone_number": "+421 987 654 321", "newsletter": false, "terms_and_condition": true, "bussiness_account": true, "compaty_reg_number": "NI123456", "VAT": "GB999 9999 73", "BIC": "KBSPSKBXXXX", "IBAN": "SK0809000000000123123123", "bank_account_holder": "John Smilga", "idUsers": "" }))
        })
    })
    it('Pre selected flow',()=>{
        window.localStorage.setItem('Address', JSON.stringify({ "email": "johnSmilga@test.sk", "name": "John Smilga", "address": "Test 21", "country": "Slovakia", "city": "Bratislava", "post_code": "987 45", "phone_number": "+421 987 654 321", "newsletter": false, "terms_and_condition": true, "bussiness_account": true, "compaty_reg_number": "NI123456", "VAT": "GB999 9999 73", "BIC": "KBSPSKBXXXX", "IBAN": "SK0809000000000123123123", "bank_account_holder": "John Smilga", "idUsers": "" }))
        cy.reload()
        //check data
        addressPage.checkPersonalData('johnSmilga@test.sk', 'John Smilga', 'Test 21', 'Slovakia', 'Bratislava', '987 45', '+421 987 654 321')
        addressPage.checkBusinessData('NI123456', 'GB999 9999 73', 'KBSPSKBXXXX', 'SK0809000000000123123123', 'John Smilga')
    })
    it('User is logged in',()=>{
        //log in 
        cy.quickLogIn('test_address','12345678')
        cy.visit('/Address')
        //check user data are filled in 
        addressPage.checkPersonalData('test@test.com', 'Test Name', 'Test 32', 'Slovakia', 'Trnava', '14 759', '+421 987 654 321')
    })
})

describe('Error cases',()=>{
    beforeEach(() => {
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        cy.visit('/Address')
    })
    it('Navigation with no shipping done', () => {
        addressPage.topNavigationAddressLabel.should('not.exist')
        //verify URL
        cy.location().should((location) => {
            expect(location.href).to.contain('shop')
        })
    })
    it('No values filled', () => {
        //precondition 
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        window.localStorage.setItem('Shipping', JSON.stringify({ "shipping": "Post", "payment": "Paypal" }))
        cy.visit('/Address')
        // summary page button click 
        addressPage.summaryButton.click()
        //check error cases
        addressPage.businessAccountInput.check({force:true})
        addressPage.errorStatuses.should('have.length','13').should('be.visible')
        //add check to email
        addressPage.emailInput.type('test')
        addressPage.errorStatusEmail.should('be.visible')
        //add check to phone
        addressPage.phoneNumberInput.type('12341231')
        addressPage.errorStatusEmail.should('be.visible')
        //add check to iban
        addressPage.IBANInput.type('123456')
        addressPage.errorStatusIBAN.should('be.visible')
        //fill proper data 
        addressPage.personalData('johnSmilga@test.sk', 'John Smilga', 'Test 21', 'Slovakia', 'Bratislava', '987 45', '+421 987 654 321')
        addressPage.businessData('NI123456', 'GB999 9999 73', 'KBSPSKBXXXX', 'SK0809000000000123123123', 'John Smilga')
        //error cases are not visible
        addressPage.errorStatuses.should('not.exist')
    })

    it('Error status API repsonse.', () => {
        //precondition 
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        window.localStorage.setItem('Shipping', JSON.stringify({ "shipping": "Post", "payment": "Paypal" }))
        //block user response
        cy.intercept('GET', '**/api/v1/user**', {
            statusCode: 404,
            body: []
        }).as('emptyItems')
        cy.quickLogIn('test_address', '12345678')
        //navigate to address
        cy.visit('/Address')
        //empty fields 
        addressPage.emailInput.invoke('val').then(val => expect(val).to.equal(''))
    })
})

after(()=>{
    cy.testuserDatabaseDeregistration('test_address')
})