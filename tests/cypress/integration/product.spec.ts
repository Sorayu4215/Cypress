import { productPage,productDetailsPage } from "../support/main"


context('Filter',()=>{
    beforeEach(()=>{
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        cy.visit('/')
    })
    it('Search filter',()=>{
        //use search filter and verify itme
        productPage.filterSearchInput.type('Sneakers')
        productPage.productsWrapper.then((result:any)=>{
            expect(result[0].children).to.have.length(1)
        })
        productPage.product('Sneakers').should('be.visible')
        //clear search filter and verify number of elements
        productPage.filterSearchInput.clear()
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(10)
        })
    })
    it('Category filter',()=>{
        //use category filter and verify output
        productPage.filterClothingButton.click()
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(2)
        })
        productPage.product('T-Shirt').should('be.visible')
        productPage.product('Dress').should('be.visible')
        //use category filter and verify output
        productPage.filterElectronicButton.click()
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(3)
        })
        productPage.product('Smartphone').should('be.visible')
        productPage.product('Headphones').should('be.visible')
        productPage.product('Smart Watch').should('be.visible')
        //select all filter catoegory and verify number of elements
        productPage.filterAllButton.click()
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(10)
        })
    })
    it('Price filter',()=>{
        //use price filter and verify output
        productPage.filterPriceSlider.invoke('val',20).trigger('change')
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(1)
        })
        productPage.product('T-Shirt').should('be.visible')
        //select all filter catoegory and verify number of elements
        productPage.filterPriceSlider.invoke('val', 700).trigger('change')
        productPage.productsWrapper.then((result: any) => {
            cy.log(result[0].children)
            expect(result[0].children).to.have.length(10)
        })
    })
    it('Complex filter test',()=>{
        //use category filter and verify output
        productPage.filterElectronicButton.click()
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(3)
        })
        productPage.product('Smartphone').should('be.visible')
        productPage.product('Headphones').should('be.visible')
        productPage.product('Smart Watch').should('be.visible')
        //use price filter and verify output
        productPage.filterPriceSlider.invoke('val', 200).trigger('change')
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(2)
        })
        productPage.product('Headphones').should('be.visible')
        productPage.product('Smart Watch').should('be.visible')
        //order from expenvise and verify order
        productPage.filterExpensiveOrderButton.click()
        productPage.firstItem.should('contain', "Smart Watch")
        //use search filter and verify itme
        productPage.filterSearchInput.type('Smart')
        productPage.productsWrapper.then((result: any) => {
            expect(result[0].children).to.have.length(1)
        })
        productPage.product('Smart Watch').should('be.visible')
    })
})

context('Product', ()=>{
    beforeEach(() => {
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        cy.visit('/')
    })
    it.only('Item attributes and add to cart check',()=>{
        //product attributes check
        productPage.productImage.should('be.visible')
        productPage.productTitleLabel.should('be.visible')
        productPage.productDescriptionParagraph.should('be.visible')
        productPage.productPricenLabel.should('be.visible')
        productPage.productInfoButton.should('be.visible')
        productPage.productCartButton.should('be.visible')

        //add product to cart
        productPage.firstItem.find('[data-type^="product-cart-button"]').click()
        productPage.modalShoppingButton.click()
        productPage.modalDiv.should('not.exist')
        cy.getAllLocalStorage().then(result=>{
            expect(result[Cypress.config().baseUrl!]).to.haveOwnProperty("Items").to.eq(JSON.stringify([{ "idItems": 1, "amount": 1 }]))
        })
        productPage.headerCartBadgeButton.should('be.visible').should('have.text','1')
    })

    it('Info button chcek',()=>{
        //add product to cart
        productPage.firstItem.find('[data-type^="product-info-button"]').click()
        productDetailsPage.title.should('be.visible').should('have.text','T-Shirt')
    })
})