import { cartPage,productPage } from "../support/main"
import { extractNumber,numberFormation } from "../support/utils"


describe('Cart',()=>{
    beforeEach(()=>{
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        cy.visit('/cart')
    })
    it('Attrributes and price counting verification',()=>{
        //atributes check
        cartPage.topNavigationCartLabel.should('be.visible').should('have.class','active')
        cartPage.itemImage('1').should('be.visible')
        cartPage.itemTitleLabel('1').should('be.visible')
        cartPage.itemPriceLabel('1').should('be.visible')
        cartPage.itemCountInput('1').should('be.visible')
        cartPage.itemTotalPrice('1').should('be.visible')
        cartPage.warrantyLabel('1').should('be.visible')
        cartPage.returnOptionLabel('1').should('be.visible')
        cartPage.totalPriceWithoutTAX.should('be.visible')
        cartPage.totalPriceLabel.should('be.visible')
        //verify total Price in first item
        let itemTotalPrice: number = 1
        var itemTotalPrice2:number
        cartPage.itemPriceLabel('0').then(price => itemTotalPrice *= extractNumber(price.text()))
        cartPage.itemCountInput('0').invoke('val').then(amount => itemTotalPrice *= Number(amount))
        cartPage.itemTotalPrice('0').then(result =>{
            expect(extractNumber(result.text())).to.eq(itemTotalPrice)
        })
        //get totla price from second item
        cartPage.itemTotalPrice('1').then(price => itemTotalPrice2 = extractNumber(price.text()))
        //verify price without tax
        cartPage.totalPriceWithoutTAX.then(priceWithoutTax =>{
            expect(extractNumber(priceWithoutTax.text())).to.eq(itemTotalPrice + itemTotalPrice2)
        })
        //verify price with tax
        cartPage.totalPriceLabel.then(totalPrice =>{
            expect(extractNumber(totalPrice.text())).to.eq(numberFormation((itemTotalPrice + itemTotalPrice2)*1.2))
        })
    })
    it('Change amount',()=>{
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }]))
        cy.reload()
        let itemTotalPriceOriginal: number = 1
        var itemTotalPriceChanged: number = 1
        //change chcek initial total value
        cartPage.itemPriceLabel('0').then(price => {
            itemTotalPriceOriginal *= extractNumber(price.text())
            itemTotalPriceChanged *= extractNumber(price.text())
        })
        cartPage.itemCountInput('0').invoke('val').then(amount => itemTotalPriceOriginal *= Number(amount))
        cartPage.itemTotalPrice('0').then(result => expect(extractNumber(result.text())).to.eq(itemTotalPriceOriginal))
        //change amount
        cartPage.itemCountInput('0').clear().type('4{enter}')
        //check price
        cartPage.itemCountInput('0').invoke('val').then(amount => itemTotalPriceChanged *= Number(amount))
        cartPage.itemTotalPrice('0').then(result => expect(extractNumber(result.text())).to.eq(itemTotalPriceChanged))
        //check total price
        cartPage.totalPriceLabel.then(totalPrice => expect(extractNumber(totalPrice.text())).to.eq(numberFormation(itemTotalPriceChanged*1.2)))
        //change amount to 0
        cartPage.itemCountInput('0').clear().type('0{enter}')
        //check that element is not visible 
        cartPage.itemTitleLabel('0').should('not.exist')
        cartPage.totalPriceLabel.should('contain','0.00')
    })
    it('Delete waranty and returin option',()=>{
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        cy.reload()
        let itemTotalPrice: number = 1
        //save original price and total price
        cartPage.itemTotalPrice('0').then(price => {
            itemTotalPrice *= extractNumber(price.text())
        })
        cartPage.totalPriceLabel.then(totalPrice => expect(extractNumber(totalPrice.text())).to.eq(numberFormation(itemTotalPrice * 1.2)))
        //delete waranty and return option
        cartPage.warrantyDeleteButton('0').click()
        cartPage.returnOptionDeleteButton('0').click()
        //check price
        cartPage.itemTotalPrice('0').then(result => {
            expect(extractNumber(result.text())).to.eq(itemTotalPrice-10-20)
        })
        cartPage.totalPriceLabel.then(totalPrice => expect(extractNumber(totalPrice.text())).to.eq(numberFormation((itemTotalPrice-10-20) * 1.2)))
    })
    it('Delete item',()=>{
        let itemTotalPrice: number = 1
        //detele item
        cartPage.itemDeleteButton('1').click()
        cartPage.itemTitleLabel('1').should('not.exist')
        //save price
        cartPage.itemTotalPrice('0').then(price => {
            itemTotalPrice *= extractNumber(price.text())
        })
        //verify total price
        cartPage.totalPriceLabel.then(totalPrice => expect(extractNumber(totalPrice.text())).to.eq(numberFormation((itemTotalPrice) * 1.2)))
    })
})

describe('Error cases', ()=>{
    beforeEach(()=>{
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        window.localStorage.setItem('Items', JSON.stringify([]))
        cy.visit('/cart')
    })
    it('No item',()=>{
        productPage.errorBox.should('be.visible').should('have.text','Your cart is empty!')
        cartPage.shippingButton.should('not.exist')
    })
    it('Error status code',()=>{
        //intercept call and return error status
        cy.intercept('GET', '**/api/v1/items**', {
            statusCode: 404,
            body: []
        }).as('emptyItems')
        cy.visit('/')
        //verify case with no products avalable
        productPage.productsWrapper.should('not.exist')
        productPage.errorBox.should('be.visible').should('contain', '404 Not Found')
    })
})