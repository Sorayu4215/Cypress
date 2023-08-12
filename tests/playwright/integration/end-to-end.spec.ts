import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../support/POManager.page'; 
import { DBconnection } from 'playwright.config';
import { createTestUser, removeTestUser, logIn,quickLogIn } from '../support/init';

test.beforeAll(async ()=>{
  await createTestUser('test_user', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
  await createTestUser('test_change_credentials', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
})
const connection = DBconnection()

test.describe("Purchase flow",()=>{

    test.beforeEach(async({browser, page,context})=>{
      await page.goto('/')
    })

  let ID:any
  test('User is not logged in',async ({page})=>{
    const mainPages = new PageObjectManager(page)
    //cookiebanner accept
    await expect(mainPages.productPage.cookieBanner).toBeVisible()
    await mainPages.productPage.cookieBannerAllowButton.click()
    await expect(mainPages.productPage.cookieBanner).toBeHidden()
    //filter
    await mainPages.productPage.filterSearchInput.fill('T')
    await mainPages.productPage.filterClothingButton.click()
    await expect(mainPages.productPage.productsWrapper).toHaveCount(1)
    //add first item to cart
    await mainPages.productPage.firstItemCartButton.click()
    await mainPages.productPage.modalCartNavigationButton.click()
    // get total price and wrap it into variable and navigate into shipping page
    await expect(mainPages.cartPage.firstItemDiv).toBeVisible()
    await expect(mainPages.cartPage.itemsWrapper).toHaveCount(1)
    const totalPrice = await mainPages.cartPage.totalPriceLabel.textContent()
    await mainPages.cartPage.shippingButton.click()
    //choose delivery, payment type and navigate into adress
    await mainPages.shippingPage.personalPickupOption.click()
    await mainPages.shippingPage.creditCardOption.click()
    await mainPages.shippingPage.addressButton.click()
    //fill address data and navigate to summary page
    await mainPages.addressPage.personalData('johnSmilga@test.com', 'John Smilga', 'Main 32', 'Slovakia', 'Bratislava', '14 759', '0258471698')
    await mainPages.addressPage.summaryButton.click()
    //summary page check and make order 
    await mainPages.summaryPage.verifyUserlData('johnSmilga@test.com', 'John Smilga', 'Main 32', 'Slovakia', 'Bratislava', '14 759', '0258471698')
    await mainPages.summaryPage.verifyDeliveryAndPayment('Personal pickup', 'Credit / Debit Card')
    await expect(mainPages.summaryPage.firstItem).toBeVisible()
    await expect(mainPages.summaryPage.totalPrice).toHaveText(totalPrice)
    await mainPages.summaryPage.orderButton.click()
    //verify order and save ID 
    await expect(mainPages.orderPage.successIcon).toBeVisible()
    ID = await mainPages.orderPage.ID.textContent()
    ID = ID.match(/\d/g)!.join('')
    //verify shop page
    await mainPages.orderPage.returnToShop.click()
    await expect(mainPages.productPage.productsWrapper).toBeVisible()
  })

  test("User is loggied in",async ({page,context})=>{
    const mainPages = new PageObjectManager(page)

    //accept only technical cookies
    await mainPages.productPage.cookieBannerDetails.click()
    await mainPages.productPage.cookieBannerPreferenciesInput.click()
    await mainPages.productPage.cookieBannerStatusInput.click()
    await mainPages.productPage.cookieBannerAllowButton.click()
    const cookies = await context.cookies()
    await expect(JSON.parse(decodeURIComponent(cookies.find(c => c.name == 'Cookie')!.value))).toHaveProperty('needed')
    await expect(JSON.parse(decodeURIComponent(cookies.find(c => c.name == 'Cookie')!.value))).toHaveProperty('preferencies')
    await expect(JSON.parse(decodeURIComponent(cookies.find(c => c.name == 'Cookie')!.value))).toHaveProperty('stats')
    //Log In
    await mainPages.productPage.headerLogInButton.click()
    await mainPages.authorisationPage.usernameInput.fill('test_user')
    await mainPages.authorisationPage.passwordInput.fill('12345678')
    await mainPages.authorisationPage.logInButton.click({force:true})
    //choose product
    await mainPages.productPage.headerShopButton.click()
    await mainPages.productPage.productBackpack.click()
    await expect(mainPages.productDetailsPage.title).toHaveText("Backpack")
    await mainPages.productDetailsPage.warrantyInput.check()
    await mainPages.productDetailsPage.returnOrderInput.check()
    let price = await mainPages.productDetailsPage.priceLabel.textContent()
    price = Number(price.match(/\d+(\.\d+)?/g)!.join(''))
    await mainPages.productDetailsPage.addToCartButton.click()
    await mainPages.productPage.modalShoppingButton.click()
    await expect(mainPages.productPage.headerCartBadgeButton).toHaveText('1')
    // cart
    await mainPages.productPage.headerCartButton.click()
    await expect(mainPages.cartPage.warrantyLabel()).toBeVisible()
    await expect(mainPages.cartPage.returnOptionLabel()).toBeVisible()
    let totalPrice = await mainPages.cartPage.itemTotalPrice().textContent()
    totalPrice = totalPrice.match(/\d+(\.\d+)?/g)!.join('')
    expect(totalPrice).toEqual((price+10+20).toFixed(2))
    await mainPages.cartPage.shippingButton.click()
    //choose delivery, payment type and navigate into adress
    await mainPages.shippingPage.personalPickupOption.click()
    await mainPages.shippingPage.creditCardOption.click()
    await mainPages.shippingPage.addressButton.click()
    //address page
    await expect(mainPages.addressPage.summaryButton).toBeVisible()
    await mainPages.addressPage.summaryButton.click()
    // //summary page check and make order 
    await mainPages.summaryPage.orderButton.click()
    //verify order and save ID 
    await expect(mainPages.orderPage.successIcon).toBeVisible()
    ID = await mainPages.orderPage.ID.textContent()
    ID = String(ID.match(/\d/g)!.join(''))
    //verify My Orders 
    await mainPages.productPage.headerMyOrdersButton.click()
    await expect(mainPages.myOrderPage.order(ID)).toBeVisible()
  })

  test.afterEach(async ({page})=>{
    await new Promise((resolve, reject) => {
      connection.query(`DELETE FROM Orders WHERE (orderId = '${Number(ID)}');`,(err,res)=>{
        resolve(res)
      })
    })
  })

})

test.describe("Authorisation flow",()=>{
  test.beforeEach(async({page})=>{
    await page.addInitScript(()=>{
      window.document.cookie = 'Cookie = {needed = true , preferencies = true , stats = true}'
    })
    await page.goto('/logIn')
  })

  test("Log in and Log out",async ({page})=>{
    const mainPages = new PageObjectManager(page)
  //   //log In 
    logIn(page, "test_user", "12345678")
    //verify blank login page when user is logged in 
    await mainPages.productPage.headerMyOrdersButton.click()
    await page.goto('/logIn')
    await expect(mainPages.authorisationPage.usernameInput).toBeHidden()
    //verify header elements
    await expect(mainPages.productPage.headerMyOrdersButton).toBeVisible()
    await expect(mainPages.productPage.headerUserProfileButton).toBeVisible()
    await expect(mainPages.productPage.headerLogOutButton).toBeVisible()
    await expect(mainPages.productPage.headerLogInButton).toBeHidden()
    //logOut
    await mainPages.productPage.headerLogOutButton.click()
    //verify headers
    await page.goto('/logIn')
    await expect(mainPages.authorisationPage.usernameInput).toBeVisible()
    await expect(mainPages.productPage.headerUserProfileButton).toBeHidden()
    await expect(mainPages.productPage.headerMyOrdersButton).toBeHidden()
    await expect(mainPages.productPage.headerLogInButton).toBeVisible()
  })

  test("Registration",async({page})=>{
    const mainPages = new PageObjectManager(page)

    await mainPages.authorisationPage.registrationButton.click({force:true})
    //fill credentials
    await mainPages.registrationPage.usernameInput.fill('test_user2')
    await mainPages.registrationPage.passwordInput.fill('12345678')
    await mainPages.registrationPage.confirmPasswordInput.fill('12345678')
    //fill user data
    await mainPages.addressPage.personalData('johnSmilga@test.com', 'John Smilga', 'Main 32', 'Slovakia', 'Bratislava', '14 759', '0258471698')
    await mainPages.registrationPage.registerButon.click()
    //verify header elements
    await expect(mainPages.registrationPage.successMessage).toBeVisible()
    await expect(mainPages.productPage.headerMyOrdersButton).toBeVisible()
    await expect(mainPages.productPage.headerUserProfileButton).toBeVisible()
    await expect(mainPages.productPage.headerLogOutButton).toBeVisible()
    await expect(mainPages.productPage.headerLogInButton).toBeHidden()
    //verify user in database 
    await new Promise((resolve, reject)=>{
      connection.query(`SELECT * FROM users WHERE (username = 'test_user2')`, async (err,res)=>{
        await expect(res).toHaveLength(1)
        await resolve(res)
      })
    })
  })

  test("Business account registration",async({page})=>{
    const mainPages = new PageObjectManager(page)

    await mainPages.authorisationPage.registrationButton.click()
    //fill credentials
    await mainPages.registrationPage.usernameInput.fill('test_user3')
    await mainPages.registrationPage.passwordInput.fill('12345678')
    await mainPages.registrationPage.confirmPasswordInput.fill('12345678')
    //fill user data
    await mainPages.addressPage.personalData('johnSmilga@test.com', 'John Smilga', 'Main 32', 'Slovakia', 'Bratislava', '14 759', '0258471698')
    await mainPages.addressPage.businessData('NI123456', 'GB999 9999 73', 'KBSPSKBXXXX', 'SK0809000000000123123123', 'John Smilga')
    //register
    await mainPages.registrationPage.registerButon.click()
    //verify
    await expect(mainPages.registrationPage.successMessage).toBeVisible()
    await expect(mainPages.productPage.headerMyOrdersButton).toBeVisible()
    await expect(mainPages.productPage.headerUserProfileButton).toBeVisible()
    await expect(mainPages.productPage.headerLogOutButton).toBeVisible()
    await expect(mainPages.productPage.headerLogInButton).toBeHidden()
    //logout
    await mainPages.productPage.headerLogOutButton.click()
    //verify login
    await page.goto('/logIn')
    logIn(page, "test_user3", "12345678")
  })  
})

test.describe("User profile",()=>{
  test('Change username and password',async ({page,request,baseURL,context})=>{
    const mainPages = new PageObjectManager(page)

    //log in 
    await quickLogIn(context,request,baseURL,'test_change_credentials', '12345678')
    await page.addInitScript(()=>{
      window.document.cookie = `Cookie = ${JSON.stringify({ needed: true, preferecies: false, stats: false})}`
    })
    await page.goto('/user-profile')
    //change username 
    await mainPages.perosnalDataPage.changeUsernameButton.click({force:true})
    await mainPages.perosnalDataPage.usernameInput.type('test_change_credentials2')
    await mainPages.perosnalDataPage.saveUsernameButton.click({ force: true })
    //success message
    await expect(mainPages.perosnalDataPage.successBox).toBeVisible()
    //change password
    await page.reload()
    await mainPages.perosnalDataPage.changePasswordButton.click({ force: true })
    await mainPages.perosnalDataPage.passwordInput.fill('123456789')
    await mainPages.perosnalDataPage.confirmPasswordInput.type('123456789')
    await mainPages.perosnalDataPage.savePasswordButton.click({ force: true })
    //success message
    await expect(mainPages. perosnalDataPage.successBox).toBeVisible()
    //log out and log in with new credentials
    await mainPages.productPage.headerLogOutButton.click({force: true})
    await context.addInitScript((context) => {
      window.localStorage.clear()
    },context)
    await page.goto('/logIn')
    await logIn(page,"test_change_credentials2", "123456789")
  })

  test('Change Perosnal data', async ({page,context,request,baseURL}) => {
    const mainPages = new PageObjectManager(page)

    //log in 
    await quickLogIn(context,request,baseURL,'test_user', '12345678')
    await page.addInitScript(() => {
      window.document.cookie = `Cookie = ${JSON.stringify({ needed: true, preferecies: false, stats: false })}`
    })
    await page.goto('/user-profile')
    //change data
    await mainPages.addressPage.personalData('test@test.com', 'Junior Clark', 'Side 28', 'Italy', 'Milan', '92 698', '0123456789')
    await mainPages.perosnalDataPage.saveButton.click({force:true})
    //success message
    await expect(mainPages.perosnalDataPage.successBox).toBeVisible
    //check if data cahnged in database
    await new Promise((resolve,reject)=>{
      connection.query(`SELECT * FROM users WHERE (username = 'test_user')`, async (err,res)=>{
      await expect(res[0].email).toEqual('test@test.com')
      await expect(res[0].name).toEqual('Junior Clark')
      await expect(res[0].address).toEqual('Side 28')
      await expect(res[0].country).toEqual('Italy')
      await expect(res[0].city).toEqual('Milan')
      await expect(res[0].post_code).toEqual('92 698')
      await expect(res[0].phone_number).toEqual('0123456789')
      await resolve(res)
      })
    })
  })
  test('Change Business data', async ({page, baseURL,context,request}) => {
    const mainPages = new PageObjectManager(page)

    //log in 
    await quickLogIn(context,request,baseURL,'test_user', '12345678')
    await page.addInitScript(()=>{
      window.document.cookie =`Cookie = ${JSON.stringify({ needed: true, preferecies: false, stats: false })}`
    }) 
    await page.goto('/user-profile')
    //change data
    await mainPages.addressPage.businessData('KIPRT123456', 'TR999 9999 73', 'KBSPSKBTRGJ', 'SK0809000000000123456789', 'Test User')
    await mainPages.perosnalDataPage.saveButton.click({force:true})
    //success message
    await expect(mainPages.perosnalDataPage.successBox).toBeVisible()
    //check if data cahnged in database
    await new Promise((resolve, reject)=>{
      connection.query(`SELECT * FROM users WHERE (username = 'test_user')`,async (err,res)=>{
        expect(res[0].compaty_reg_number).toEqual('KIPRT123456')
        expect(res[0].VAT).toEqual('TR999 9999 73')
        expect(res[0].BIC).toEqual('KBSPSKBTRGJ')
        expect(res[0].IBAN).toEqual('SK0809000000000123456789')
        expect(res[0].bank_account_holder).toEqual('Test User')
        resolve(res)
      })
    })
  })
})

test.afterAll(async ()=>{
  await removeTestUser('test_user')
  await removeTestUser('test_user2')
  await removeTestUser('test_user3')
  await removeTestUser('test_change_credentials2')
})