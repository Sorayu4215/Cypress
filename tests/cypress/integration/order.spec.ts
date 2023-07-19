import { orderPage, productPage } from "../support/main"

before(()=>{
    cy.testuserDatabaseRegistration('test_order', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
})

describe('Order page',()=>{
    beforeEach(() => {
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
        window.localStorage.setItem('Items', JSON.stringify([{ idItems: 1, amount: 2 }, { idItems: 4, waranty: true, returnOption: true, amount: 1 }]))
        window.localStorage.setItem('Shipping', JSON.stringify({ "shipping": "Post", "payment": "Paypal" }))
        window.localStorage.setItem('Address', JSON.stringify({ "email": "test2@test.sk", "name": "Test Testov2", "address": "Hlavna 56", "country": "Slovakia", "city": "Tatralandia", "post_code": "84 475", "phone_number": "9999 999 999", "newsletter": false, "terms_and_condition": true, "bussiness_account": true, "compaty_reg_number": "NI123456", "VAT": "GB999 9999 73", "BIC": "KBSPSKBXXXX", "IBAN": "SK0809000000000123123123", "bank_account_holder": "John Smilga", "idUsers": "" }))
        window.localStorage.setItem('Confirmed', JSON.stringify(true))
    })
    it('Basic check',()=>{
        cy.visit('/Order')
        orderPage.successIcon.should('be.visible')
        orderPage.thankLabel.should('be.visible')
        orderPage.sucessLabel.should('be.visible')
        orderPage.ID.should('be.visible')
        //wrap ID 
        orderPage.ID.then(element => {
            const wrappedID = element.text()
            const ID = wrappedID.match(/\d/g)!.join('')
            cy.wrap(ID).as('ID')
        })
        //check ID in database
        cy.task('queryDb', 'SELECT * FROM Orders;').then(($result: any) => {
            cy.get('@ID').then((result) => {
                const match = $result.some(($element: {
                    orderId: number;
                    item: string;
                    address: string;
                    date: string;
                    shipping: string;
                    userID: string;
                }) => $element.orderId === Number(result));
                expect(match).to.be.true;
            });
        });
        //back navigation
        orderPage.returnToShop.click()
        productPage.productsWrapper.should('be.visible')
    })
    it.only('User logged in.',()=>{
        cy.quickLogIn('test_order','12345678')
        cy.intercept('POST', '**/api/v1/order**').as('orderResponse')
        cy.visit('/Order')
        //wrap ID 
        orderPage.ID.then(element => {
            const wrappedID = element.text()
            const ID = wrappedID.match(/\d/g)!.join('')
            cy.wrap(ID).as('ID')
        })
        //check if
    })

    // afterEach(() => {
    //     cy.get('@ID').then((result) => {
    //         cy.task('queryDb', `DELETE FROM Orders WHERE (orderId = '${Number(result)}');`).then(($result: any) => {
    //             cy.log('Sucessfully deleted')
    //         })
    //     })
    // })
})

describe('Error case',()=>{
    it('Error status API repsonse.',()=>{

    })
})

// after(() => {
//     cy.testuserDatabaseDeregistration('test_order')
// })