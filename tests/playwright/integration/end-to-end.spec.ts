import { test, expect } from '@playwright/test';
import { ProductPage } from '../support/product.page';
import { PageObjectManager } from '../support/POManager.page'; 

test.beforeEach(async({browser, page,context})=>{
  await page.goto('/')
})

test.describe("Purchase flow",()=>{
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
    // await mainPages.orderPage.ID.then(element => {
    //   const wrappedID = element.text()
    //   const ID = wrappedID.match(/\d/g)!.join('')
    //   cy.wrap(ID).as('ID')
    // })
    //verify shop page
    await mainPages.orderPage.returnToShop.click()
    await expect(mainPages.productPage.productsWrapper).toBeVisible()
  })
})