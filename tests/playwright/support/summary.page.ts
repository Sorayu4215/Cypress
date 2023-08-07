import { test, expect } from '@playwright/test';

export class SummaryPage{
    constructor(page: any) {
        this.page = page
    }
    page
    
    //title
    get titleHeading() {
        return this.page.locator('[data-type="summary-title-heading"]')
    }

    //personal data
    get emailDataLabel() {
        return this.page.locator('[data-type="summary-email-DataLabel"]')
    }
    get nameDataLabel() {
        return this.page.locator('[data-type="summary-name-DataLabel"]')
    }
    get addressDataLabel() {
        return this.page.locator('[data-type="summary-address-DataLabel"]')
    }
    get countryDataLabel() {
        return this.page.locator('[data-type="summary-country-DataLabel"]')
    }
    get cityDataLabel() {
        return this.page.locator('[data-type="summary-city-DataLabel"]')
    }
    get postCodelDataLabel() {
        return this.page.locator('[data-type="summary-post-code-DataLabel"]')
    }
    get phoneNumberDataLabel() {
        return this.page.locator('[data-type="summary-phone-number-DataLabel"]')
    }
    get companyRegistrationNumber(){
        return this.page.locator('[data-type="summary-company-registration-number-DataLabel"]')
    }
    get VATNumber(){
        return this.page.locator('[data-type="summary-VAT-DataLabel"]')
    }
    get BICNumber(){
        return this.page.locator('[data-type="summary-BIC-DataLabel"]')
    }
    get IBAN(){
        return this.page.locator('[data-type="summary-IBAN-DataLabel"]')
    }
    get accountHolder(){
        return this.page.locator('[data-type="summary-name-of-bank-account-DataLabel"]')
    }

    //delivery
    get deliveryDataLabel() {
        return this.page.locator('[data-type="summary-delivery-method-DataLabel"]')
    }
    get paymentTypeDataLabel() {
        return this.page.locator('[data-type="summary-payment-type-DataLabel"]')
    }

    //item
    get firstItem(){
        return this.page.locator('[data-type="summary-single-item-0"]')
    }

    //total price
    get totalPrice(){
        return this.page.locator('[data-type="summary-total-price-price"]')
    }

    //navigation
    get backButton(){
        return this.page.locator('[data-type="summary-back-to-address"]', { timeout: 15000 })
    }
    get orderButton(){
        return this.page.locator('[data-type="summary-order"]', { timeout: 15000 })
    }

    //basic functions
    async verifyUserlData(email: string, name: string, address: string, country: string, city: string, postCode: string, phoneNumber: string) {
        await expect(this.emailDataLabel).toHaveText(email)
        await expect(this.nameDataLabel).toHaveText(name)
        await expect(this.addressDataLabel).toHaveText(address)
        await expect(this.countryDataLabel).toHaveText(country)
        await expect(this.cityDataLabel).toHaveText(city)
        await expect(this.postCodelDataLabel).toHaveText(postCode)
        await expect(this.phoneNumberDataLabel).toHaveText(phoneNumber)
    }
    verifyBusinessData(companyRegNumber: string, VAT: string, BIC: string, IBAN: string, accountHolderName: string) {
        this.companyRegistrationNumber.should('have.text', companyRegNumber)
        this.VATNumber.should('have.text', VAT)
        this.BICNumber.should('have.text', BIC)
        this.IBAN.should('have.text', IBAN)
        this.accountHolder.should('have.text', accountHolderName)
    }
    async verifyDeliveryAndPayment(deliveryDataLabel: string, paymentTypeDataLabel: string) {
        await expect(this.deliveryDataLabel).toHaveText(deliveryDataLabel)
        await expect(this.paymentTypeDataLabel).toHaveText(paymentTypeDataLabel)
    }
}