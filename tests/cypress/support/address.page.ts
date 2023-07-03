export class AddressPage{
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
    get termsAndConditionInput(){
        return cy.get('[data-type="terms-and-conditions-input"]')
    }

    //business data
    get businessAccountInpt(){
        return cy.get('[data-type="business-account-input"]', { timeout: 15000 })
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

    //navigation
    get summaryButton(){
        return cy.get('[data-type="save-values-btn"]', { timeout: 15000 })
    }

    //basic fnuctions
    pernalData(email:string,name:string,address:string,country:string,city:string,postCode:string,phoneNumber:string){
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
        this.businessAccountInpt.check({force:true})
        this.companyRegistrationNoInput.type(companyRegistrationNumber, { timeout: 15000 })
        this.VATNoInput.type(VATNumber)
        this.BICInput.type(BICNumber)
        this.IBANInput.type(IBAN)
        this.NameOfBankAccountIban.type(NameOfBankAccountIbanInput)
    }
}