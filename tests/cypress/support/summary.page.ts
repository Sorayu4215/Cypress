export class SummaryPage{
    //title
    get titleHeading() {
        return cy.get('[data-type="summary-title-heading"]')
    }

    //personal data
    get emailDataLabel() {
        return cy.get('[data-type="summary-email-DataLabel"]')
    }
    get nameDataLabel() {
        return cy.get('[data-type="summary-name-DataLabel"]')
    }
    get addressDataLabel() {
        return cy.get('[data-type="summary-address-DataLabel"]')
    }
    get countryDataLabel() {
        return cy.get('[data-type="summary-country-DataLabel"]')
    }
    get cityDataLabel() {
        return cy.get('[data-type="summary-city-DataLabel"]')
    }
    get postCodelDataLabel() {
        return cy.get('[data-type="summary-post-code-DataLabel"]')
    }
    get phoneNumberDataLabel() {
        return cy.get('[data-type="summary-phone-number-DataLabel"]')
    }
    get companyRegistrationNumber(){
        return cy.get('[data-type="summary-company-registration-number-DataLabel"]')
    }
    get VATNumber(){
        return cy.get('[data-type="summary-VAT-DataLabel"]')
    }
    get BICNumber(){
        return cy.get('[data-type="summary-BIC-DataLabel"]')
    }
    get IBAN(){
        return cy.get('[data-type="summary-IBAN-DataLabel"]')
    }
    get accountHolder(){
        return cy.get('[data-type="summary-name-of-bank-account-DataLabel"]')
    }

    //delivery
    get deliveryDataLabel() {
        return cy.get('[data-type="summary-delivery-method-DataLabel"]')
    }
    get paymentTypeDataLabel() {
        return cy.get('[data-type="summary-payment-type-DataLabel"]')
    }

    //item
    get firstItem(){
        return cy.get('[data-type="summary-single-item-0"]')
    }

    //total price
    get totalPrice(){
        return cy.get('[data-type="summary-total-price-price"]')
    }

    //navigation
    get backButton(){
        return cy.get('[data-type="summary-back-to-address"]', { timeout: 15000 })
    }
    get orderButton(){
        return cy.get('[data-type="summary-order"]', { timeout: 15000 })
    }

    //basic functions
    verifyUserlData(email: string, name: string, address: string, country: string, city: string, postCode: string, phoneNumber: string) {
        this.emailDataLabel.should('have.text',email)
        this.nameDataLabel.should('have.text',name)
        this.addressDataLabel.should('have.text',address)
        this.countryDataLabel.should('have.text', country)
        this.cityDataLabel.should('have.text',city)
        this.postCodelDataLabel.should('have.text',postCode)
        this.phoneNumberDataLabel.should('have.text',phoneNumber)
    }
    verifyBusinessData(companyRegNumber: string, VAT: string, BIC: string, IBAN: string, accountHolderName: string) {
        this.companyRegistrationNumber.should('have.text', companyRegNumber)
        this.VATNumber.should('have.text', VAT)
        this.BICNumber.should('have.text', BIC)
        this.IBAN.should('have.text', IBAN)
        this.accountHolder.should('have.text', accountHolderName)
    }
    verifyDeliveryAndPayment(deliveryDataLabel: string, paymentTypeDataLabel: string) {
        this.deliveryDataLabel.should('have.text', deliveryDataLabel)
        this.paymentTypeDataLabel.should('have.text', paymentTypeDataLabel)
    }
}