import { summaryPage,addressPage,productPage } from "../support/main"

beforeEach(()=>{
    cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
    window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
    window.localStorage.setItem('Shipping', JSON.stringify({ "shipping": "Post", "payment": "Paypal" }))
    window.localStorage.setItem('Address', JSON.stringify({ "email": "test2@test.sk", "name": "Test Testov2", "address": "Hlavna 56", "country": "Slovakia", "city": "Tatralandia", "post_code": "84 475", "phone_number": "9999 999 999", "newsletter": false, "terms_and_condition": true, "bussiness_account": true, "compaty_reg_number": "NI123456", "VAT": "GB999 9999 73", "BIC": "KBSPSKBXXXX", "IBAN": "SK0809000000000123123123", "bank_account_holder": "John Smilga", "idUsers": "" }))
    cy.visit('/Summary')
})
describe('Summary page',()=>{
    it('Navigation flow',()=>{
        //navigate back into address
        summaryPage.backButton.click()
        addressPage.topNavigationAddressLabel.should('be.visible')
        //summary page
        addressPage.summaryButton.click()
        summaryPage.titleHeading.should('be.visible')
    })
    it('Basic check ', () => {
        //basic check 
        summaryPage.titleHeading.should('be.visible')
        summaryPage.verifyUserlData("test2@test.sk", "Test Testov2", "Hlavna 56", "Slovakia","Tatralandia", "84 475", "9999 999 999")
        summaryPage.verifyBusinessData("NI123456","GB999 9999 73","KBSPSKBXXXX",  "SK0809000000000123123123", "John Smilga")
        summaryPage.verifyDeliveryAndPayment('Post','Paypal')
        summaryPage.firstItem.should('contain','T-Shirt')
        summaryPage.totalPrice.should('be.visible')
    })
})
describe('Error cases',()=>{
    it.only('Navigation with no items', () => {
        //precondition
        window.localStorage.removeItem('Address')
        cy.visit('/Summary')
        //check
        summaryPage.titleHeading.should('not.exist')
        //verify URL
        cy.location().should((location) => {
            expect(location.href).to.contain('shop')
        })
    })

    it('Error status API repsonse.', () => {
        //block user response
        cy.intercept('GET', '**/api/v1/items**', {
            statusCode: 404,
            body: []
        }).as('emptyItems')
        //navigate to summary
        cy.visit('/Summary')
        //error page
        summaryPage.firstItem.should('not.exist')
        summaryPage.totalPrice.should('not.exist')
        summaryPage.orderButton.should('not.exist')
        productPage.errorBox.should('be.visible')
    })
})