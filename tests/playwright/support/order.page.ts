export class OrderPage {
    constructor(page: any) {
        this.page = page
    }
    page 
    
    get successIcon() {
        return this.page.locator('[data-type="order-successful-icon"]')
    }
    //text
    get thankLabel(){
        return this.page.locator('[data-type="order-successful-thank-label"]')
    }
    get sucessLabel(){
        return this.page.locator('[data-type="order-successful-order-label"]')
    }
    get ID() {
        return this.page.locator('[data-type="order-successful-id"]')
    }

    //navigation
    get returnToShop(){
        return this.page.locator('[data-type="order-return-button"]')
    }
}