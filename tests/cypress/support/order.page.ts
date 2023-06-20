export class OrderPage {
    get successIcon() {
        return cy.get('[data-type="order-successful-icon"]')
    }

    get ID() {
        return cy.get('[data-type="order-successful-id"]')
    }

    //navigation
    get returnToShop(){
        return cy.get('[data-type="order-return-button"]')
    }
}