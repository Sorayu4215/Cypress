export class ProductPage{
    constructor(page:any){
        this.page = page
    }
    page    

    //cookie Banner
    get cookieBanner(){
        return this.page.locator('[data-type="cookie-banner"]')
    }
    get cookieBannerDetails(){
        return this.page.locator('[data-type="cookie-banner-header-details-btn"]')
    }
    get cookieBannerPreferenciesInput(){
        return this.page.locator('[data-type="cookie-banner-preferencies-span"]')
    }
    get cookieBannerStatusInput(){
        return this.page.locator('[data-type="cookie-banner-stats-span"]')
    } 
    get cookieBannerAllowButton(){
        return this.page.locator('[data-type="cookie-banner-allow-btn"]')
    }

    //filter
    get filterSearchInput(){
        return this.page.locator('[data-type="filter-search-input"]')
    }
    get filterAllButton(){
        return this.page.locator('[data-type="filter-category-button-All"]')
    }
    get filterClothingButton(){
        return this.page.locator('[data-type="filter-category-button-Clothing"]')
    }
    get filterElectronicButton(){
        return this.page.locator('[data-type="filter-category-button-Electronics"]')
    }
    get filterPriceSlider(){
        return this.page.locator('[data-type="filter-price-input"]')
    }
    get filterExpensiveOrderButton(){
        return this.page.locator('[data-type="filter-order-expensive"]')
    }

    //items
    get productsWrapper(){
        return this.page.locator('[data-type="product-wrapper"]')
    }
    get firstItem(){
        return this.page.locator('[data-type="single-product-0"]')
    }
    get firstItemCartButton(){
        return this.page.locator('[data-type="product-cart-button-0"]')
    }
    get productBackpack(){
        return this.page.getByText('Backpack').first()
    }
    product(name:string){
        return this.page.locator(name)
    }
    get productImage(){
        return this.page.locator('[data-type^="product-image-"]')
    }
    get productTitleLabel(){
        return this.page.locator('[data-type^="product-title-"]')
    }
    get productDescriptionParagraph(){
        return this.page.locator('[data-type^="product-description-"]')
    }
    get productPricenLabel(){
        return this.page.locator('[data-type^="product-price-"]')
    }
    get productInfoButton(){
        return this.page.locator('[data-type^="product-info-button-"]')
    }
    get productCartButton(){
        return this.page.locator('[data-type^="product-cart-button-"]')
    }

    //error
    get errorBox(){
        return this.page.locator('[data-type="error-div"]')
    }

    //navigation modal
    get modalCloseButton(){
        return this.page.locator('[data-type="close-button"]')
    }
    get modalDiv(){
        return this.page.locator('[data-type="info-modal"]')
    }
    get modalCartNavigationButton(){
        return this.page.locator('[data-type="navigate-to-cart"]')
    }
    get modalShoppingButton(){
        return this.page.locator('[data-type="back-to-shoping"]')
    }

    //header
    get headerShopButton(){
        return this.page.locator('[data-type="header-item-shop"]')
    }
    get headerLogInButton() {
        return this.page.locator('[data-type="header-item-logIn"]')
    }
    get headerMyOrdersButton(){
        return this.page.locator('[data-type="header-item-my-orders"]')
    }
    get headerUserProfileButton(){
        return this.page.locator('[data-type="header-item-user-profile"]')
    }
    get headerCartButton(){
        return this.page.locator('[data-type="header-item-cart"]')
    }
    get headerCartBadgeButton(){
        return this.page.locator('[data-type="header-badge"]')
    }
    get headerLogOutButton(){
        return this.page.locator('[data-type="header-log-out"]')
    }
}
