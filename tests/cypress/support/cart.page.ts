export class CartPage{
    //items
    get itemsWrapper(){
        return cy.get('[data-type="cart-wrapper"]')
    }
    get firstItemDiv(){
        return cy.get('[data-type="cart-single-item-0"]')
    }
    itemTotalPrice(id: string = '') {
        return cy.get(`[data-type^="cart-single-item-total-price-${id}"]`)
    }
    warrantyLabel(id: string = ''){
        return cy.get(`[data-type^="cart-warranty-title-${id}"]`)
    }
    returnOptionLabel(id: string = ''){
        return cy.get(`[data-type^="cart-return-option-title${id}"]`)
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