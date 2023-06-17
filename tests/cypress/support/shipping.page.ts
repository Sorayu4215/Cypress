export class ShippingPage {
    //delivery method
    get personalPickupOption(){
        return cy.get('[data-type="shippig-personal-pick-up-input"]')
    }

    //payment type
    get CreditCardOption() {
        return cy.get('[data-type="shippig-card-input"]')
    }

    //navigation
    get addressButton() {
        return cy.get('[data-type="shipping-address-navigation"]')
    }
}