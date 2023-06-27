export class ProductDetails{
    get title(){
        return cy.get('[data-type="details-title"]')
    }
    get warrantyInput(){
        return cy.get('[data-type="details-waranty"]')
    }
    get returnOrderInput(){
        return cy.get('[data-type="details-return-option"]')
    }
    get addToCartButton(){
        return cy.get('[data-type="details-add-to-cart-btn"]')
    }
    get priceLabel(){
        return cy.get('[data-type="details-price"]')
    }
}