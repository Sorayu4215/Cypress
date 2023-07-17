export class AddressPage{
    //top navigation 
    get topNavigationAddressLabel(){
        return cy.get('[data-type="navigation-address"]')
    }
    //personal data
    get emailInput(){
        return cy.get('[data-type="email-input"]')
    }
    get nameInput(){
        return cy.get('[data-type="name-input"]')
    }
    get addressInput(){
        return cy.get('[data-type="address-input"]')
    }
    get countrySelect(){
        return cy.get('[data-type="country-input"]')
    }
    get cityInput(){
        return cy.get('[data-type="city-input"]')
    }
    get postCodelInput(){
        return cy.get('[data-type="post-code-input"]')
    }
    get phoneNumberInput(){
        return cy.get('[data-type="phone-number-input"]')
    }
    get newsletterInput(){
        return cy.get('[data-type="newsletter-input"]')
    }
    get termsAndConditionInput(){
        return cy.get('[data-type="terms-and-conditions-input"]')
    }

    //business data
    get businessAccountInput(){
        return cy.get('[data-type="business-account-input"]', { timeout: 15000 })
    }
    get businessAccountDiv(){
        return cy.get('[data-type="business-account-div"]', { timeout: 15000 })
    }
    get companyRegistrationNoInput() {
        return cy.get('[data-type="company-registration-number-input"]', { timeout: 15000 })
    }
    get VATNoInput() {
        return cy.get('[data-type="VAT-input"]')
    }
    get BICInput() {
        return cy.get('[data-type="BIC-input"]')
    }
    get IBANInput() {
        return cy.get('[data-type="IBAN-input"]')
    }
    get NameOfBankAccountIban() {
        return cy.get('[data-type="name-of-bank-account-input"]')
    }

    //error status
    get errorStatuses(){
        return cy.get('[data-type*="-error"]')
    }
    get errorStatusEmail(){
        return cy.get('[data-type*="email-error"]')
    }
    get errorStatusIBAN(){
        return cy.get('[data-type="IBAN-error"]')
    }

    //navigation
    get backButton(){
        return cy.get('[data-type="address-back-to-shipping"]')
    }
    get summaryButton(){
        return cy.get('[data-type="save-values-btn"]', { timeout: 15000 })
    }

    //basic fnuctions
    personalData(email:string,name:string,address:string,country:string,city:string,postCode:string,phoneNumber:string){
        this.emailInput.clear().type(email)
        this.nameInput.clear().type(name)
        this.addressInput.clear().type(address)
        this.countrySelect.select(country)
        this.cityInput.clear().type(city)
        this.postCodelInput.clear().type(postCode)
        this.phoneNumberInput.clear().type(phoneNumber)
        this.termsAndConditionInput.check({force:true})
    }

    businessData(companyRegistrationNumber: string, VATNumber: string, BICNumber: string, IBAN: string, NameOfBankAccountIbanInput:string){
        this.businessAccountDiv.should('be.visible')
        this.businessAccountInput.check({force:true})
        this.companyRegistrationNoInput.clear().type(companyRegistrationNumber, { timeout: 15000 })
        this.VATNoInput.clear().type(VATNumber)
        this.BICInput.clear().type(BICNumber)
        this.IBANInput.clear().type(IBAN)
        this.NameOfBankAccountIban.clear().type(NameOfBankAccountIbanInput)
    }

    checkPersonalData(email: string, name: string, address: string, country: string, city: string, postCode: string, phoneNumber: string) {
        // this.emailInput.should('have.text',email)
        this.emailInput.invoke('val').then(val => expect(val).to.equal(email))
        this.nameInput.invoke('val').then(val => expect(val).to.equal(name))
        this.addressInput.invoke('val').then(val => expect(val).to.equal(address))
        this.countrySelect.invoke('val').then(val => expect(val).to.equal(country))
        this.cityInput.invoke('val').then(val => expect(val).to.equal(city))
        this.postCodelInput.invoke('val').then(val => expect(val).to.equal(postCode))
        this.phoneNumberInput.invoke('val').then(val => expect(val).to.equal(phoneNumber))
    }
    checkBusinessData(companyRegistrationNumber: string, VATNumber: string, BICNumber: string, IBAN: string, nameOfBankAccountIbanInput: string) {
        this.companyRegistrationNoInput.invoke('val').then(val => expect(val).to.equal(companyRegistrationNumber))
        this.VATNoInput.invoke('val').then(val => expect(val).to.equal(VATNumber))
        this.BICInput.invoke('val').then(val => expect(val).to.equal(BICNumber))
        this.IBANInput.invoke('val').then(val => expect(val).to.equal(IBAN))
        this.NameOfBankAccountIban.invoke('val').then(val => expect(val).to.equal(nameOfBankAccountIbanInput))
    }
}