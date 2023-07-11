import { productDetailsPage, productPage } from "../support/main"

describe('Product details',()=>{
    beforeEach(()=>{
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        cy.visit('/1')
    })

    it('Attributes and add to cart check',()=>{
        //attributes check
        productDetailsPage.image.should('be.visible')
        productDetailsPage.title.should('be.visible')
        productDetailsPage.descriptionLabel.should('be.visible')
        productDetailsPage.warrantyInput.should('be.visible')
        productDetailsPage.returnOrderInput.should('be.visible')
        productDetailsPage.addToCartButton.should('be.visible')
        productDetailsPage.priceLabel.should('be.visible')
        //add to cart
        productDetailsPage.addToCartButton.click()
        productPage.modalShoppingButton.click()
        productPage.modalDiv.should('not.exist')
        productPage.productsWrapper.should('be.visible')
        //verify item in cart
        cy.getAllLocalStorage().then(result => {
            expect(result[Cypress.config().baseUrl!]).to.haveOwnProperty("Items").to.eq(JSON.stringify([{ "idItems": 1, "amount": 1 }]))
        })
        productPage.headerCartBadgeButton.should('be.visible').should('have.text', '1')
    })

    it('Waranty and return option check',()=>{
        //check checkbox waranty and return option 
        productDetailsPage.warrantyInput.check()
        productDetailsPage.returnOrderInput.check()
        productDetailsPage.addToCartButton.click()
        productPage.modalCloseButton.click()
        //verify item in cart
        cy.getAllLocalStorage().then(result => {
            expect(result[Cypress.config().baseUrl!]).to.haveOwnProperty("Items").to.eq(JSON.stringify([{
                "idItems": 1, "waranty": true, "returnOption": true , "amount": 1}]))
        })
        //uncheck waranty and make order
        productDetailsPage.warrantyInput.uncheck()
        productDetailsPage.addToCartButton.click()
        productPage.modalCloseButton.click()
        //verify item in cart
        cy.getAllLocalStorage().then(result => {
            expect(result[Cypress.config().baseUrl!]).to.haveOwnProperty("Items").to.eq(JSON.stringify([{
                "idItems": 1, "waranty": true, "returnOption": true, "amount": 2
            }]))
        })
    })
})

describe('Error cases',()=>{
    beforeEach(() => {
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
    })
    it("Invalid product id",()=>{
        cy.visit('/0')
        productDetailsPage.productWrapper.should('not.exist')
        productDetailsPage.errorBox.should('be.visible').should('contain', "Item doesn't exist!")
    })
    it("Error status code",()=>{
        cy.intercept('GET', '**/api/v1/items/1**', {
            statusCode: 404,
            body: []
        }).as('emptyItems')
        cy.visit('/1')
        productDetailsPage.productWrapper.should('not.exist')
        productDetailsPage.errorBox.should('be.visible').should('contain', "404 Not Found")
    })

})