import { shippingPage,cartPage,addressPage } from "../support/main";

describe('Shipping page',()=>{
    beforeEach(()=>{
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        cy.visit('/Shipping')
    })
    it('Navigation test',()=>{
        //back button navigation
        shippingPage.backButton.click()
        cartPage.itemsWrapper.should('be.visible')
        //navigation back to shipping page
        cartPage.shippingButton.click()
        shippingPage.topNavigationShippingLabel.should('be.visible')
    })
    it('Attributes and happy flow check',()=>{
        //basic attribute check
        shippingPage.deliveryTitleLabel.should('be.visible')
        shippingPage.deliveryTable.should('be.visible')
        shippingPage.paymentTitleLabel.should('be.visible')
        shippingPage.paymentTable.should('be.visible')
        shippingPage.addressButton.should('be.visible')
        //select delivery method
        shippingPage.personalPickupOption.check()
        shippingPage.postOption.check()
        //select payment type
        shippingPage.creditCardOption.check()
        shippingPage.paypalOption.check()
        //navigate to adress and check localstorage items
        shippingPage.addressButton.click()
        cy.getAllLocalStorage().then(result => {
            expect(result[Cypress.config().baseUrl!]).to.haveOwnProperty("Shipping").to.eq(JSON.stringify({ "shipping": "Post", "payment": "Paypal" }))
        })
        addressPage.topNavigationAddressLabel.should('be.visible')
    })
    it('Pre selected items',()=>{
        window.localStorage.setItem('Shipping', JSON.stringify({ "shipping": "Post", "payment": "Paypal" }))
        cy.reload()
        //check if element are checked
        shippingPage.postOption.should('be.checked')
        shippingPage.paypalOption.should('be.checked')
    })
})
describe('Error case',()=>{
    beforeEach(() => {
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        cy.visit('/Shipping')
    })
    it('Navigation with no items',()=>{
        shippingPage.topNavigationShippingLabel.should('not.exist')
        shippingPage.deliveryTable.should('not.exist')
        shippingPage.paymentTable.should('not.exist')
        //verify URL
        cy.location().should((location) => {
            expect(location.href).to.contain('shop')
        })
    })
    it('No choosed items',()=>{
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        cy.visit('/Shipping')
        //try navigate to adress
        shippingPage.addressButton.click()
        shippingPage.topNavigationShippingLabel.should('be.visible')
        //check of error messages
        shippingPage.deliveryErrorMessage.should('be.visible').should('have.text','Choose option!')
        shippingPage.paymentErrorMessage.should('be.visible').should('have.text','Choose option!')
        //choose option and verify visibility of errors
        shippingPage.personalPickupOption.check()
        shippingPage.deliveryErrorMessage.should('not.exist')
        shippingPage.paypalOption.check()
        shippingPage.paymentErrorMessage.should('not.exist')
    })
})

