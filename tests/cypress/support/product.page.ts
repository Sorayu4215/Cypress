export class ProductPage{
    //cookie Banner
    get cookieBanner(){
        return cy.get('[data-type="cookie-banner"]')
    }
    get cookieBannerAllowButton(){
        return cy.get('[data-type="cookie-banner-allow-btn"]')
    }

    //filter
    get filterSearchInput(){
        return cy.get('[data-type="filter-search-input"]')
    }
    get filterClothingButton(){
        return cy.get('[data-type="filter-category-button-Clothing"]')
    }

    //items
    get productWrapper(){
        return cy.get('[data-type="product-wrapper"]')
    }
    get firstItem(){
        return cy.get('[data-type="single-product-0"]')
    }
    get firstItemCartButton(){
        return cy.get('[data-type="product-cart-button-0"]')
    }



    //navigation modal
    get modalCartNavigationButton(){
        return cy.get('[data-type="navigate-to-cart"]')
    }
}
