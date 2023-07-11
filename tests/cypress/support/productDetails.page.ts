export class ProductDetails{
    get productWrapper(){
        return cy.get('[data-type="details-warpper"]')
    }
    get title(){
        return cy.get('[data-type="details-title"]')
    }
    get image(){
        return cy.get('[data-type="details-image"]')
    }
    get descriptionLabel(){
        return cy.get('[data-type="details-descrption"]')
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
    //error
    get errorBox() {
        return cy.get('[data-type="error-div"]')
    }
}