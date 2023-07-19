export class OrderPage {
    get successIcon() {
        return cy.get('[data-type="order-successful-icon"]')
    }
    //text
    get thankLabel(){
        return cy.get('[data-type="order-successful-thank-label"]')
    }
    get sucessLabel(){
        return cy.get('[data-type="order-successful-order-label"]')
    }
    get ID() {
        return cy.get('[data-type="order-successful-id"]')
    }

    //navigation
    get returnToShop(){
        return cy.get('[data-type="order-return-button"]')
    }
}