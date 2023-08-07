export class CartPage{
    constructor(page:any){
        this.page = page
    }
    page 
    //cart top navigation
    get topNavigationCartLabel(){
        return this.page.locator('[data-type="navigation-cart"]')
    }
    //items
    get itemsWrapper(){
        return this.page.locator('[data-type="cart-wrapper"]')
    }
    get firstItemDiv(){
        return this.page.locator('[data-type="cart-single-item-0"]')
    }
    itemImage(id: string = '') {
        return this.page.locator(`[data-type="cart-item-image-${id}"]`)
    }
    itemTitleLabel(id: string = '') {
        return this.page.locator(`[data-type="cart-item-title-${id}"]`)
    }
    itemPriceLabel(id: string = '') {
        return this.page.locator(`[data-type="cart-item-price-${id}"]`)
    }
    itemCountInput(id: string = '') {
        return this.page.locator(`[data-type="cart-item-count-${id}"]`)
    }
    itemTotalPrice(id: string = '') {
        return this.page.locator(`[data-type^="cart-single-item-total-price-${id}"]`)
    }
    itemDeleteButton(id: string = '') {
        return this.page.locator(`[data-type="cart-delete-item-${id}"]`)
    }
    warrantyLabel(id: string = ''){
        return this.page.locator(`[data-type^="cart-warranty-title-${id}"]`)
    }
    warrantyDeleteButton(id: string = ''){
        return this.page.locator(`[data-type="cart-warranty-delete-${id}"]`)
    }
    returnOptionLabel(id: string = ''){
        return this.page.locator(`[data-type^="cart-return-option-title${id}"]`)
    }
    returnOptionDeleteButton(id: string = ''){
        return this.page.locator(`[data-type="cart-return-option-delete${id}"]`)
    }

    //price
    get totalPriceWithoutTAX(){
        return this.page.locator('[data-type="cart-price-without-DPH-price"]')
    }
    get totalPriceLabel(){
        return this.page.locator('[data-type="cart-total-price-price"]')
    }
    //navigation
    get shippingButton(){
        return this.page.locator('[data-type="cart-billing-navigation"]')
    }
    get backButton(){
        return this.page.locator('[data-type="cart-back-to-shop-navigation"]')
    }
}