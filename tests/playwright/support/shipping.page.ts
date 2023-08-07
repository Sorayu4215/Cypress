export class ShippingPage {
    constructor(page:any){
        this.page = page
    }
    page 
    
    //topNavigation 
    get topNavigationShippingLabel() {
        return this.page.locator('[data-type="navigation-billing"]')
    }

    //delivery method
    get deliveryTitleLabel(){
        return this.page.locator('[data-type="shipping-delivery-method"]')
    }
    get deliveryTable(){
        return this.page.locator('[data-type="shipping-delivery-table"]')
    }
    get personalPickupOption(){
        return this.page.locator('[data-type="shippig-personal-pick-up-input"]')
    }
    get postOption(){
        return this.page.locator('[data-type="shippig-post-input"]')
    }
    get deliveryErrorMessage(){
        return this.page.locator('[data-type="delivery-error-message"]')
    }

    //payment type
    get paymentTitleLabel(){
        return this.page.locator('[data-type="shipping-delivery-method"]')
    }
    get paymentTable() {
        return this.page.locator('[data-type="shipping-delivery-table"]')
    }
    get creditCardOption() {
        return this.page.locator('[data-type="shippig-card-input"]')
    }
    get paypalOption() {
        return this.page.locator('[data-type="shippig-paypal-input"]')
    }
    get paymentErrorMessage() {
        return this.page.locator('[data-type="payment-error-message"]')
    }

    //navigation
    get backButton() {
        return this.page.locator('[data-type="shipping-back-to-cart-navigation"]')
    }
    get addressButton() {
        return this.page.locator('[data-type="shipping-address-navigation"]')
    }
}