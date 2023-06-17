import { productPage,cartPage,shippingPage,addressPage,summaryPage,orderPage } from "../support/main"

describe('End to end tests',()=>{

    beforeEach(()=>{
        cy.visit('/')
        cy.clearLocalStorage()
        cy.clearAllCookies()
    })


    context('Purchase flow',()=>{
        specify.only('User is not logged in',()=>{
            //accept cookie banner 
            productPage.cookieBanner.should('be.visible')
            productPage.cookieBannerAllowButton.click()
            productPage.cookieBanner.should('not.exist')

            //filter
            productPage.filterSearchInput.type('T')
            productPage.filterClothingButton.click()

            //add first item to cart
            productPage.firstItemCartButton.click()
            productPage.modalCartNavigationButton.click()

            //get total price and wrap it into variable and navigate into shipping page
            cartPage.firstItemDiv.should('be.visible')
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

        })
        specify('User is logged in',()=>{

        })
    })

    context('Authorisation flow',()=>{
        specify('Log in and Log out',()=>{

        })
        specify('Registration',()=>{

        })
        specify('Forgot password',()=>{

        })
    })

    context('User profile',()=>{
        specify('Change Username',()=>{
            
        })
        specify('Change Password',()=>{

        })
        specify('Change Perosnal data',()=>{

        })
        specify('Change Business data',()=>{

        })
    })
})