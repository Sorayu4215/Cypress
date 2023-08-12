import { expect } from "@playwright/test"

export class AddressPage{
    constructor(page: any) {
        this.page = page
    }
    page

    //top navigation 
    get topNavigationAddressLabel(){
        return this.page.locator('[data-type="navigation-address"]')
    }
    //personal data
    get emailInput(){
        return this.page.locator('[data-type="email-input"]')
    }
    get nameInput(){
        return this.page.locator('[data-type="name-input"]')
    }
    get addressInput(){
        return this.page.locator('[data-type="address-input"]')
    }
    get countrySelect(){
        return this.page.locator('[data-type="country-input"]')
    }
    get cityInput(){
        return this.page.locator('[data-type="city-input"]')
    }
    get postCodelInput(){
        return this.page.locator('[data-type="post-code-input"]')
    }
    get phoneNumberInput(){
        return this.page.locator('[data-type="phone-number-input"]')
    }
    get newsletterInput(){
        return this.page.locator('[data-type="newsletter-input"]')
    }
    get termsAndConditionInput(){
        return this.page.locator('[data-type="terms-and-conditions-input"]')
    }
    get termsAndCondition(){
        return this.page.locator('[data-type*="terms"] label:first-child')
    }

    //business data
    get businessAccountInput(){
        return this.page.locator('[data-type="business-account-div"] label:nth-child(1)')
    }
    get businessAccountDiv(){
        return this.page.locator('[data-type="business-account-div"]', { timeout: 15000 })
    }
    get companyRegistrationNoInput() {
        return this.page.locator('[data-type="company-registration-number-input"]', { timeout: 15000 })
    }
    get VATNoInput() {
        return this.page.locator('[data-type="VAT-input"]')
    }
    get BICInput() {
        return this.page.locator('[data-type="BIC-input"]')
    }
    get IBANInput() {
        return this.page.locator('[data-type="IBAN-input"]')
    }
    get NameOfBankAccountIban() {
        return this.page.locator('[data-type="name-of-bank-account-input"]')
    }

    //error status
    get errorStatuses(){
        return this.page.locator('[data-type*="-error"]')
    }
    get errorStatusEmail(){
        return this.page.locator('[data-type*="email-error"]')
    }
    get errorStatusIBAN(){
        return this.page.locator('[data-type="IBAN-error"]')
    }

    //navigation
    get backButton(){
        return this.page.locator('[data-type="address-back-to-shipping"]')
    }
    get summaryButton(){
        return this.page.locator('[data-type="save-values-btn"]', { timeout: 15000 })
    }

    //basic fnuctions
    async personalData(email:string,name:string,address:string,country:string,city:string,postCode:string,phoneNumber:string){
        await this.emailInput.fill(email)
        await this.nameInput.fill(name)
        await this.addressInput.fill(address)
        await this.countrySelect.selectOption(country)
        await this.cityInput.fill(city)
        await this.postCodelInput.fill(postCode)
        await this.phoneNumberInput.fill(phoneNumber)
        await this.termsAndCondition.check({force:true})
    }

    async businessData(companyRegistrationNumber: string, VATNumber: string, BICNumber: string, IBAN: string, NameOfBankAccountIbanInput:string){
        await expect(this.businessAccountDiv).toBeVisible()
        await this.businessAccountInput.click({force:true})
        await this.companyRegistrationNoInput.fill(companyRegistrationNumber)
        await this.VATNoInput.fill(VATNumber)
        await this.BICInput.fill(BICNumber)
        await this.IBANInput.fill(IBAN)
        await this.NameOfBankAccountIban.fill(NameOfBankAccountIbanInput)
    }

    // checkPersonalData(email: string, name: string, address: string, country: string, city: string, postCode: string, phoneNumber: string) {
    //     // this.emailInput.should('have.text',email)
    //     this.emailInput.invoke('val').then(val) => expect(val).to.equal(email))
    //     this.nameInput.invoke('val').then(val => expect(val).to.equal(name))
    //     this.addressInput.invoke('val').then(val => expect(val).to.equal(address))
    //     this.countrySelect.invoke('val').then(val => expect(val).to.equal(country))
    //     this.cityInput.invoke('val').then(val => expect(val).to.equal(city))
    //     this.postCodelInput.invoke('val').then(val => expect(val).to.equal(postCode))
    //     this.phoneNumberInput.invoke('val').then(val => expect(val).to.equal(phoneNumber))
    // }
    // checkBusinessData(companyRegistrationNumber: string, VATNumber: string, BICNumber: string, IBAN: string, nameOfBankAccountIbanInput: string) {
    //     this.companyRegistrationNoInput.invoke('val').then(val => expect(val).to.equal(companyRegistrationNumber))
    //     this.VATNoInput.invoke('val').then(val => expect(val).to.equal(VATNumber))
    //     this.BICInput.invoke('val').then(val => expect(val).to.equal(BICNumber))
    //     this.IBANInput.invoke('val').then(val => expect(val).to.equal(IBAN))
    //     this.NameOfBankAccountIban.invoke('val').then(val => expect(val).to.equal(nameOfBankAccountIbanInput))
    // }
}