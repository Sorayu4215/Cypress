export class CartPage{
    //cart top navigation
    get topNavigationCartLabel(){
        return cy.get('[data-type="navigation-cart"]')
    }
    //items
    get itemsWrapper(){
        return cy.get('[data-type="cart-wrapper"]')
    }
    get firstItemDiv(){
        return cy.get('[data-type="cart-single-item-0"]')
    }
    itemImage(id: string = '') {
        return cy.get(`[data-type="cart-item-image-${id}"]`)
    }
    itemTitleLabel(id: string = '') {
        return cy.get(`[data-type="cart-item-title-${id}"]`)
    }
    itemPriceLabel(id: string = '') {
        return cy.get(`[data-type="cart-item-price-${id}"]`)
    }
    itemCountInput(id: string = '') {
        return cy.get(`[data-type="cart-item-count-${id}"]`)
    }
    itemTotalPrice(id: string = '') {
        return cy.get(`[data-type^="cart-single-item-total-price-${id}"]`)
    }
    itemDeleteButton(id: string = '') {
        return cy.get(`[data-type="cart-delete-item-${id}"]`)
    }
    warrantyLabel(id: string = ''){
        return cy.get(`[data-type^="cart-warranty-title-${id}"]`)
    }
    warrantyDeleteButton(id: string = ''){
        return cy.get(`[data-type="cart-warranty-delete-${id}"]`)
    }
    returnOptionLabel(id: string = ''){
        return cy.get(`[data-type^="cart-return-option-title${id}"]`)
    }
    returnOptionDeleteButton(id: string = ''){
        return cy.get(`[data-type="cart-return-option-delete${id}"]`)
    }

    //price
    get totalPriceWithoutTAX(){
        return cy.get('[data-type="cart-price-without-DPH-price"]')
    }
    get totalPriceLabel(){
        return cy.get('[data-type="cart-total-price-price"]')
    }
    //navigation
    get shippingButton(){
        return cy.get('[data-type="cart-billing-navigation"]')
    }
    get backButton(){
        return cy.get('[data-type="cart-back-to-shop-navigation"]')
    }
}