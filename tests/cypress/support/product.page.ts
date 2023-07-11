export class ProductPage{
    //cookie Banner
    get cookieBanner(){
        return cy.get('[data-type="cookie-banner"]')
    }
    get cookieBannerDetails(){
        return cy.get('[data-type="cookie-banner-header-details-btn"]')
    }
    get cookieBannerPreferenciesInput(){
        return cy.get('[data-type="cookie-banner-preferencies-span"]')
    }
    get cookieBannerStatusInput(){
        return cy.get('[data-type="cookie-banner-stats-span"]')
    } 
    get cookieBannerAllowButton(){
        return cy.get('[data-type="cookie-banner-allow-btn"]')
    }

    //filter
    get filterSearchInput(){
        return cy.get('[data-type="filter-search-input"]')
    }
    get filterAllButton(){
        return cy.get('[data-type="filter-category-button-All"]')
    }
    get filterClothingButton(){
        return cy.get('[data-type="filter-category-button-Clothing"]')
    }
    get filterElectronicButton(){
        return cy.get('[data-type="filter-category-button-Electronics"]')
    }
    get filterPriceSlider(){
        return cy.get('[data-type="filter-price-input"]')
    }
    get filterExpensiveOrderButton(){
        return cy.get('[data-type="filter-order-expensive"]')
    }

    //items
    get productsWrapper(){
        return cy.get('[data-type="product-wrapper"]')
    }
    get firstItem(){
        return cy.get('[data-type="single-product-0"]')
    }
    get firstItemCartButton(){
        return cy.get('[data-type="product-cart-button-0"]')
    }
    get productBackpack(){
        return cy.contains('Backpack')
    }
    product(name:string){
        return cy.contains(name)
    }
    get productImage(){
        return cy.get('[data-type^="product-image-"]')
    }
    get productTitleLabel(){
        return cy.get('[data-type^="product-title-"]')
    }
    get productDescriptionParagraph(){
        return cy.get('[data-type^="product-description-"]')
    }
    get productPricenLabel(){
        return cy.get('[data-type^="product-price-"]')
    }
    get productInfoButton(){
        return cy.get('[data-type^="product-info-button-"]')
    }
    get productCartButton(){
        return cy.get('[data-type^="product-cart-button-"]')
    }

    //error
    get errorBox(){
        return cy.get('[data-type="error-div"]')
    }

    //navigation modal
    get modalCloseButton(){
        return cy.get('[data-type="close-button"]')
    }
    get modalDiv(){
        return cy.get('[data-type="info-modal"]')
    }
    get modalCartNavigationButton(){
        return cy.get('[data-type="navigate-to-cart"]')
    }
    get modalShoppingButton(){
        return cy.get('[data-type="back-to-shoping"]')
    }

    //header
    get headerShopButton(){
        return cy.get('[data-type="header-item-shop"]')
    }
    get headerLogInButton() {
        return cy.get('[data-type="header-item-logIn"]')
    }
    get headerMyOrdersButton(){
        return cy.get('[data-type="header-item-my-orders"]')
    }
    get headerUserProfileButton(){
        return cy.get('[data-type="header-item-user-profile"]')
    }
    get headerCartButton(){
        return cy.get('[data-type="header-item-cart"]')
    }
    get headerCartBadgeButton(){
        return cy.get('[data-type="header-badge"]')
    }
    get headerLogOutButton(){
        return cy.get('[data-type="header-log-out"]')
    }
}
