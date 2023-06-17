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

    //navigation
    get summaryButton(){
        return cy.get('[data-type="save-values-btn"]')
    }

    //basic fnuctions
    pernalData(email:string,name:string,address:string,country:string,city:string,postCode:string,phoneNumber:string){
        this.emailInput.type(email)
        this.nameInput.type(name)
        this.addressInput.type(address)
        this.countrySelect.select(country)
        this.cityInput.type(city)
        this.postCodelInput.type(postCode)
        this.phoneNumberInput.type(phoneNumber)
        this.termsAndConditionInput.check({force:true})
    }
}