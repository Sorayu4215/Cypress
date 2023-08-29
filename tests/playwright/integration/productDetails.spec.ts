import { PageObjectManager } from "../support/POManager.page";
import { test, expect } from '@playwright/test';

test.describe('Product details',()=>{
    test.beforeEach(async ({ page, context }) => {        
        await page.addInitScript(() => {
            window.document.cookie = 'Cookie = {needed = true , preferencies = true , stats = true}'
        })
        await page.goto('/1')
    })

    test('Attributes and add to cart check',async({page})=>{
        const mainPage = new PageObjectManager(page)

        //attributes check
        await expect(mainPage.productDetailsPage.image).toBeVisible()
        await expect(mainPage.productDetailsPage.title).toBeVisible()
        await expect(mainPage.productDetailsPage.descriptionLabel).toBeVisible()
        await expect(mainPage.productDetailsPage.warrantyInput).toBeVisible()
        await expect(mainPage.productDetailsPage.returnOrderInput).toBeVisible()
        await expect(mainPage.productDetailsPage.addToCartButton).toBeVisible()
        await expect(mainPage.productDetailsPage.priceLabel).toBeVisible()
        //add to cart
        await mainPage.productDetailsPage.addToCartButton.click()
        await mainPage.productPage.modalShoppingButton.click()
        await expect(mainPage.productPage.modalDiv).toBeHidden()
        await expect(mainPage.productPage.productsWrapper).toBeVisible()
        //verify item in cart
        await page.addInitScript(() => {
            expect(localStorage.getItem('Items')).toMatchObject([{ "idItems": 1, "amount": 1 }])
        })
        await expect(mainPage.productPage.headerCartBadgeButton).toBeVisible()
        await expect(mainPage.productPage.headerCartBadgeButton).toHaveText('1')
    })

    test('Waranty and return option check', async ({ page }) => {
        const mainPage = new PageObjectManager(page)

        //check checkbox waranty and return option 
        await mainPage.productDetailsPage.warrantyInput.check()
        await mainPage.productDetailsPage.returnOrderInput.check()
        await mainPage.productDetailsPage.addToCartButton.click()
        await mainPage.productPage.modalCloseButton.click()
        //verify item in cart
        await page.addInitScript(() => {
            expect(localStorage.getItem('Items')).toMatchObject([{
                "idItems": 1, "waranty": true, "returnOption": true, "amount": 1
            }])
        })
        //uncheck waranty and make order
        await mainPage.productDetailsPage.warrantyInput.uncheck()
        await mainPage.productDetailsPage.addToCartButton.click()
        await mainPage.productPage.modalCloseButton.click()
        //verify item in cart
        await page.addInitScript(() => {
            expect(localStorage.getItem('Items')).toMatchObject([{
                "idItems": 1, "waranty": true, "returnOption": true, "amount": 2
            }])
        })
    })
})

test.describe('Error cases',()=>{
    test.beforeEach(async ({ page, context }) => {  
        await page.addInitScript(() => {
            window.document.cookie = 'Cookie = {needed = true , preferencies = true , stats = true}'
        })
    })
    test("Invalid product id", async ({ page }) => {  
        const mainPage = new PageObjectManager(page)

        //test body
        await page.goto('/0')
        await expect(mainPage.productDetailsPage.productWrapper).toBeHidden()
        await expect(mainPage.productDetailsPage.errorBox).toBeVisible()
        await expect(mainPage.productDetailsPage.errorBox).toContainText("Item doesn't exist!")
    })
    test("Error status code", async ({ page }) => { 
        const mainPage = new PageObjectManager(page)
        //intercept call and return error status
        await page.route('**/api/v1/items/1**', async route => {
            const json: [] = [];
            await route.fulfill({
                status: 404,
                body: JSON.stringify([])
            });
        });
        await page.goto('/1')
        //verify error message
        await expect(mainPage.productDetailsPage.productWrapper).toBeHidden()
        await expect(mainPage.productDetailsPage.errorBox).toBeVisible()
        await expect(mainPage.productDetailsPage.errorBox).toContainText("404 Not Found")
    })

})