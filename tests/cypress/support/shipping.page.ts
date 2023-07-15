export class ShippingPage {
    //topNavigation 
    get topNavigationShippingLabel() {
        return cy.get('[data-type="navigation-billing"]')
    }

    //delivery method
    get deliveryTitleLabel(){
        return cy.get('[data-type="shipping-delivery-method"]')
    }
    get deliveryTable(){
        return cy.get('[data-type="shipping-delivery-table"]')
    }
    get personalPickupOption(){
        return cy.get('[data-type="shippig-personal-pick-up-input"]')
    }
    get postOption(){
        return cy.get('[data-type="shippig-post-input"]')
    }
    get deliveryErrorMessage(){
        return cy.get('[data-type="delivery-error-message"]')
    }

    //payment type
    get paymentTitleLabel(){
        return cy.get('[data-type="shipping-delivery-method"]')
    }
    get paymentTable() {
        return cy.get('[data-type="shipping-delivery-table"]')
    }
    get creditCardOption() {
        return cy.get('[data-type="shippig-card-input"]')
    }
    get paypalOption() {
        return cy.get('[data-type="shippig-paypal-input"]')
    }
    get paymentErrorMessage() {
        return cy.get('[data-type="payment-error-message"]')
    }

    //navigation
    get backButton() {
        return cy.get('[data-type="shipping-back-to-cart-navigation"]')
    }
    get addressButton() {
        return cy.get('[data-type="shipping-address-navigation"]')
    }
}