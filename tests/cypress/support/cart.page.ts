export class CartPage{
    //items
    get firstItemDiv(){
        return cy.get('[data-type="cart-single-item-0"]')
    }

    //price
    get totalPriceLabel(){
        return cy.get('[data-type="cart-total-price-price"]')
    }
    //navigation
    get shippingButton(){
        return cy.get('[data-type="cart-billing-navigation"]')
    }
}