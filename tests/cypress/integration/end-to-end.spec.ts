import { productPage,cartPage,shippingPage,addressPage,summaryPage,orderPage,authorisationPage,productDetailsPage,myOrdersPage,registrationPage, personalData } from "../support/main"
import '../support/commands'

before(() => {
    cy.testuserDatabaseRegistration('test_user', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
    cy.testuserDatabaseRegistration('test_change_credentials', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
})

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



    specify('User is logged in',()=>{
        //accept only technical cookies
        cy.intercept('**/user').as('getUser')
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
        cy.wait("@getUser")
        addressPage.summaryButton.should('be.visible')
        addressPage.summaryButton.click()
        //summary page check and make order 
        cy.wait(1000)
        summaryPage.orderButton.click({timeout:15000})
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

    afterEach(()=>{
        cy.get('@ID').then((result) => {
            cy.task('queryDb', `DELETE FROM Orders WHERE (orderId = '${Number(result)}');`).then(($result: any) => {
                   cy.log('Sucessfully deleted')
            })
        })
    })
})


describe('Authorisation flow',()=>{

    beforeEach(()=>{
        cy.setCookie('Cookie',JSON.stringify({needed:true, preferecies:false, stats:false}))
        cy.visit('/logIn')
    })

    specify('Log in and Log out',()=>{
        //log In 
        cy.logIn("test_user","12345678")
        //verify blank login page when user is logged in 
        productPage.headerMyOrdersButton.click()
        cy.visit('/logIn')
        authorisationPage.usernameInput.should('not.exist')
        //verify header elements
        productPage.headerMyOrdersButton.should('be.visible')
        productPage.headerUserProfileButton.should('be.visible')
        productPage.headerLogOutButton.should('be.visible')
        productPage.headerLogInButton.should('not.exist')
        //logOut
        productPage.headerLogOutButton.click()
        //verify headers
        cy.visit('/logIn')
        authorisationPage.usernameInput.should('be.visible')
        productPage.headerUserProfileButton.should('not.exist')
        productPage.headerMyOrdersButton.should('not.exist')
        productPage.headerLogInButton.should('be.visible')
    })

    specify('Registration',()=>{
        authorisationPage.registrationButton.click()
        //fill credentials
        registrationPage.usernameInput.type('test_user2')
        registrationPage.passwordInput.type('12345678')
        registrationPage.confirmPasswordInput.type('12345678')
        //fill user data
        addressPage.pernalData('johnSmilga@test.com', 'John Smilga', 'Main 32', 'Slovakia', 'Bratislava', '14 759', '0258471698')
        registrationPage.registerButon.click()
        //verify header elements
        registrationPage.successMessage.should('be.visible')
        productPage.headerMyOrdersButton.should('be.visible')
        productPage.headerUserProfileButton.should('be.visible')
        productPage.headerLogOutButton.should('be.visible')
        productPage.headerLogInButton.should('not.exist')
        //verify user in database 
        cy.task('queryDb', `SELECT * FROM users WHERE (username = 'test_user2')`).then(($result: any) => {
            expect($result).length(1)
        })
    })
    

    specify('Business account registration',()=>{
        authorisationPage.registrationButton.click()
        //fill credentials
        registrationPage.usernameInput.type('test_user3')
        registrationPage.passwordInput.type('12345678')
        registrationPage.confirmPasswordInput.type('12345678')
        //fill user data
        addressPage.pernalData('johnSmilga@test.com', 'John Smilga', 'Main 32', 'Slovakia', 'Bratislava', '14 759', '0258471698')
        addressPage.businessData('NI123456', 'GB999 9999 73', 'KBSPSKBXXXX','SK0809000000000123123123','John Smilga')
        //register
        registrationPage.registerButon.click()
        //verify
        registrationPage.successMessage.should('be.visible')
        productPage.headerMyOrdersButton.should('be.visible')
        productPage.headerUserProfileButton.should('be.visible')
        productPage.headerLogOutButton.should('be.visible')
        productPage.headerLogInButton.should('not.exist')
        //logout
        productPage.headerLogOutButton.click()
        //verify login
        cy.visit('/logIn')
        cy.logIn("test_user3", "12345678")
    })


})

describe('User profile',()=>{
    beforeEach(() => {
        cy.setCookie('Cookie', JSON.stringify({ needed: true, preferecies: false, stats: false }))
    })

    specify('Change Username and password',()=>{
        //log in 
        cy.quickLogIn('test_change_credentials', '12345678')
        cy.visit('/user-profile')
        //change username 
        personalData.changeUsernameButton.click()
        personalData.usernameInput.type('test_change_credentials2')
        personalData.saveUsernameButton.click()
        //success message
        personalData.successBox.should('be.visible')
        //change password
        cy.reload()
        personalData.changePasswordButton.click()
        personalData.passwordInput.type('123456789')
        personalData.confirmPasswordInput.type('123456789')
        personalData.savePasswordButton.click()
        //success message
        personalData.successBox.should('be.visible')
        //log out and log in with new credentials
        productPage.headerLogOutButton.click()
        cy.visit('/logIn')
        cy.logIn("test_change_credentials2", "123456789")
    })

    specify('Change Perosnal data',()=>{
        //log in 
        cy.quickLogIn('test_user', '12345678')
        cy.visit('/user-profile')
        //change data
        addressPage.pernalData('test@test.com', 'Junior Clark', 'Side 28', 'Italy','Milan', '92 698', '0123456789')
        personalData.saveButton.click()
        //success message
        personalData.successBox.should('be.visible')
        //check if data cahnged in database
        cy.task('queryDb', `SELECT * FROM users WHERE (username = 'test_user')`).then(($result: any) => {
            expect($result[0]).to.have.property('email').to.eq('test@test.com')
            expect($result[0]).to.have.property('name').to.eq('Junior Clark')
            expect($result[0]).to.have.property('address').to.eq('Side 28')
            expect($result[0]).to.have.property('country').to.eq('Italy')
            expect($result[0]).to.have.property('city').to.eq('Milan')
            expect($result[0]).to.have.property('post_code').to.eq('92 698')
            expect($result[0]).to.have.property('phone_number').to.eq('0123456789')
        })
    })

    specify('Change Business data',()=>{
        //log in 
        cy.quickLogIn('test_user', '12345678')
        cy.intercept('**/user').as('getUser')
        cy.visit('/user-profile')
        //change data
        cy.wait(1000)
        cy.wait('@getUser')
        addressPage.businessData('KIPRT123456', 'TR999 9999 73', 'KBSPSKBTRGJ', 'SK0809000000000123456789', 'Test User')
        personalData.saveButton.click()
        //success message
        personalData.successBox.should('be.visible')
        //check if data cahnged in database
        cy.task('queryDb', `SELECT * FROM users WHERE (username = 'test_user')`).then(($result: any) => {
            expect($result[0]).to.have.property('compaty_reg_number').to.eq('KIPRT123456')
            expect($result[0]).to.have.property('VAT').to.eq('TR999 9999 73')
            expect($result[0]).to.have.property('BIC').to.eq('KBSPSKBTRGJ')
            expect($result[0]).to.have.property('IBAN').to.eq('SK0809000000000123456789')
            expect($result[0]).to.have.property('bank_account_holder').to.eq('Test User')
        })
    })
})

after(() => {
    cy.testuserDatabaseDeregistration('test_user')
    cy.testuserDatabaseDeregistration('test_user2')
    cy.testuserDatabaseDeregistration('test_user3')
    cy.testuserDatabaseDeregistration('test_change_credentials2')
    cy.testuserDatabaseDeregistration('test_change_credentials')
})