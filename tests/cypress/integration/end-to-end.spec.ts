import { productPage,cartPage,shippingPage,addressPage,summaryPage,orderPage,authorisationPage,productDetailsPage,myOrdersPage } from "../support/main"
import '../support/commands'

describe('Purchase flow',()=>{

    beforeEach(()=>{
        cy.visit('/')
        cy.clearLocalStorage()
        cy.clearAllCookies()
    })

    specify('User is not logged in',()=>{
        //accept cookie banner 
        productPage.cookieBanner.should('be.visible')
        productPage.cookieBannerAllowButton.click()
        productPage.cookieBanner.should('not.exist')

        //filter
        productPage.filterSearchInput.type('T')
        productPage.filterClothingButton.click()
        productPage.productsWrapper.then((element)=>{
            expect(element[0].childElementCount).to.eq(1)
        })

        //add first item to cart
        productPage.firstItemCartButton.click()
        productPage.modalCartNavigationButton.click()

        //get total price and wrap it into variable and navigate into shipping page
        cartPage.firstItemDiv.should('be.visible')
        cartPage.itemsWrapper.then((element)=>{
            expect(element[0].childElementCount).to.eq(1)
        })
        cartPage.totalPriceLabel.then((element)=>{
            cy.wrap(element.text()).as('totalPrice')
        })
        cartPage.shippingButton.click()

        //choose delivery, payment type and navigate into adress
        shippingPage.personalPickupOption.click()
        shippingPage.CreditCardOption.click()
        shippingPage.addressButton.click()

        //fill address data and navigate to summary page
        addressPage.pernalData('johnSmilga@test.com','John Smilga','Main 32','Slovakia','Bratislava','14 759','0258471698')
        addressPage.summaryButton.click({force:true})

        //summary page check and make order 
        summaryPage.verifyUserlData('johnSmilga@test.com', 'John Smilga', 'Main 32', 'Slovakia', 'Bratislava', '14 759', '0258471698')
        summaryPage.verifyDeliveryAndPayment('Personal pickup','Credit / Debit Card')
        summaryPage.firstItem.should('be.visible')
        summaryPage.totalPrice.then(element=>{
            cy.get('@totalPrice').should('eq',element.text())
        })
        summaryPage.orderButton.click()

        //verify order and save ID 
        orderPage.successIcon.should('be.visible')
        orderPage.ID.then(element=>{
            const wrappedID = element.text()
            const ID = wrappedID.match(/\d/g)!.join('')
            cy.wrap(ID).as('ID')
        })
        
        //verify shop page
        orderPage.returnToShop.click()
        productPage.productsWrapper.should('be.visible')

        //verify order in database
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
    })

    before(()=>{
        cy.testuserDatabaseRegistration('test_user', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
    })

    specify('User is logged in',()=>{
        //accept only technical cookies
        productPage.cookieBannerDetails.click()
        productPage.cookieBannerPreferenciesInput.click()
        productPage.cookieBannerStatusInput.click()
        productPage.cookieBannerAllowButton.click()
        cy.getCookie('Cookie').then((result:any)=>{
            const cookieValues = JSON.parse(decodeURIComponent(result.value))
            expect(cookieValues).to.haveOwnProperty('needed').to.eq(true)  
            expect(cookieValues).to.haveOwnProperty('preferencies').to.eq(false)  
            expect(cookieValues).to.haveOwnProperty('stats').to.eq(false)  
        })

        //Log In
        productPage.headerLogInButton.click()
        authorisationPage.usernameInput.type('test_user')
        authorisationPage.passwordInput.type('12345678')

        authorisationPage.logInButton.click()

        //choose product
        productPage.headerShopButton.click()
        productPage.productBackpack.click()
        productDetailsPage.title.should('have.text','Backpack')
        productDetailsPage.warrantyInput.check()
        productDetailsPage.returnOrderInput.check()
        productDetailsPage.priceLabel.then(result=>{
            cy.wrap(result.text()).as('price')
        })
        productDetailsPage.addToCartButton.click()
        productPage.modalShoppingButton.click()
        productPage.headerCartBadgeButton.should('have.text','1')

        //cart
        productPage.headerCartButton.click()
        cartPage.warrantyLabel().should('be.visible')
        cartPage.returnOptionLabel().should('be.visible')
        cartPage.itemTotalPrice().then((resultTotalPrice: any) => {
            cy.get('@price').then((resultProductPrice: any) => {
                const price = Number(resultProductPrice.replace('€',''))
                expect(resultTotalPrice.text()).to.contain((price+20+10).toFixed(2))
            })
        })
        cartPage.shippingButton.click()

        //choose delivery, payment type and navigate into adress
        shippingPage.personalPickupOption.click()
        shippingPage.CreditCardOption.click()
        shippingPage.addressButton.click()

        //address page
        addressPage.summaryButton.click()
        
        //summary page check and make order 
        summaryPage.orderButton.click()

        //verify order and save ID 
        orderPage.successIcon.should('be.visible')
        orderPage.ID.then(element => {
            const wrappedID = element.text()
            const ID = wrappedID.match(/\d/g)!.join('')
            cy.wrap(ID).as('ID')
        })

        //verify My Orders 
        productPage.headerMyOrdersButton.click()
        cy.get('@ID').then((result:any)=>{
            myOrdersPage.order(result).should('be.visible')
        })
        
    })

    after(()=>{
        cy.testuserDatabaseDeregistration('test_user')
    })

    afterEach(()=>{
        cy.get('@ID').then((result) => {
            cy.task('queryDb', `DELETE FROM Orders WHERE (orderId = '${Number(result)}');`).then(($result: any) => {
                   cy.log('Sucessfully deleted')
            })
        })
    })
})


describe('Authorisation flow',()=>{
    specify('Log in and Log out',()=>{

    })

    specify('Registration',()=>{

    })

    specify('Forgot password',()=>{

    })

})

describe('User profile',()=>{
    specify('Change Username',()=>{
            
    })

    specify('Change Password',()=>{

    })

    specify('Change Perosnal data',()=>{

    })

    specify('Change Business data',()=>{

    })
})
