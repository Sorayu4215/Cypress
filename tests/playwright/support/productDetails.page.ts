export class ProductDetails{
    constructor(page: any) {
        this.page = page
    }
    page 

    get productWrapper(){
        return this.page.locator('[data-type="details-warpper"]')
    }
    get title(){
        return this.page.locator('[data-type="details-title"]')
    }
    get image(){
        return this.page.locator('[data-type="details-image"]')
    }
    get descriptionLabel(){
        return this.page.locator('[data-type="details-descrption"]')
    }
    get warrantyInput(){
        return this.page.locator('[data-type="details-waranty"]')
    }
    get returnOrderInput(){
        return this.page.locator('[data-type="details-return-option"]')
    }
    get addToCartButton(){
        return this.page.locator('[data-type="details-add-to-cart-btn"]')
    }
    get priceLabel(){
        return this.page.locator('[data-type="details-price"]')
    }
    //error
    get errorBox() {
        return this.page.locator('[data-type="error-div"]')
    }
}