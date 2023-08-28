import { PageObjectManager } from "../support/POManager.page";
import { test, expect } from '@playwright/test';

test.describe('Filter',()=>{
    test.beforeEach(async({page,context})=>{
        await page.addInitScript(() => {
            window.document.cookie = 'Cookie = {needed = true , preferencies = true , stats = true}'
        })
        await page.goto('/')
    })

    test('Search filter',async({page})=>{
        const mainPage = new PageObjectManager(page)

        //use search filter and verify itme
        await mainPage.productPage.filterSearchInput.fill('Sneakers')
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(1)
        await expect(mainPage.productPage.product('Sneakers')).toBeVisible()
        //clear search filter and verify number of elements
        await mainPage.productPage.filterSearchInput.fill('')
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(10)
    })

    test('Category filter',async ({page})=>{
        const mainPage = new PageObjectManager(page)

        //use category filter and verify output
        await mainPage.productPage.filterClothingButton.click()
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(2)
        await expect(mainPage.productPage.product('T-Shirt')).toBeVisible()
        await expect(mainPage.productPage.product('Dress')).toBeVisible()
        //use category filter and verify output
        await mainPage.productPage.filterElectronicButton.click()
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(3)
        await expect(mainPage.productPage.product('Smartphone')).toBeVisible()
        await expect(mainPage.productPage.product('Headphones')).toBeVisible()
        await expect(mainPage.productPage.product('Smart Watch')).toBeVisible()
        //select all filter catoegory and verify number of elements
        await mainPage.productPage.filterAllButton.click()
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(10)
    })

    test('Price filter', async({page}) => {
        const mainPage = new PageObjectManager(page)
        //use price filter and verify output
        await page.$eval('[data-type="filter-price-input"]', (e,value)=>{
            (e as HTMLInputElement).value = value
            e.dispatchEvent(new Event('input', { 'bubbles': true }));
            e.dispatchEvent(new Event('change', { 'bubbles': true }));
        }, "20")
        // await mainPage.productPage.filterPriceSlider.selectOption({value: "20"})
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(1)
        await expect(mainPage.productPage.product('T-Shirt')).toBeVisible()
        //select all filter catoegory and verify number of elements
        // await mainPage.productPage.filterPriceSlider.selectOption(700)
        await page.$eval('[data-type="filter-price-input"]', (e, value) => {
            (e as HTMLInputElement).value = value
            e.dispatchEvent(new Event('input', { 'bubbles': true }));
            e.dispatchEvent(new Event('change', { 'bubbles': true }));
        }, "700")
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(10)
    })

    test('Complex filter test', async({page}) => {
        const mainPage = new PageObjectManager(page)

        //use category filter and verify output
        await mainPage.productPage.filterElectronicButton.click()
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(3)
        await expect(mainPage.productPage.product('Smartphone')).toBeVisible()
        await expect(mainPage.productPage.product('Headphones')).toBeVisible()
        await expect(mainPage.productPage.product('Smart Watch')).toBeVisible()
        //use price filter and verify output
        await page.$eval('[data-type="filter-price-input"]', (e, value) => {
            (e as HTMLInputElement).value = value
            e.dispatchEvent(new Event('input', { 'bubbles': true }));
            e.dispatchEvent(new Event('change', { 'bubbles': true }));
        }, "200")
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(2)
        await expect(mainPage.productPage.product('Headphones')).toBeVisible()
        await expect(mainPage.productPage.product('Smart Watch')).toBeVisible()
        //order from expenvise and verify order
        await mainPage.productPage.filterExpensiveOrderButton.click()
        //use search filter and verify itme
        await mainPage.productPage.filterSearchInput.fill('Smart')
        await expect(mainPage.productPage.allSingleProducts).toHaveCount(1)
        await expect(mainPage.productPage.product('Smart Watch')).toBeVisible()
    })
})

test.describe('Product',()=>{
    test.beforeEach(async({page})=>{
        await page.addInitScript(() => {
            window.document.cookie = 'Cookie = {needed = true , preferencies = true , stats = true}'
        })
        await page.goto('/')
    })

    test('Item attributes and add to cart check', async({page}) => {
        const mainPage = new PageObjectManager(page)

        //product attributes check
        await expect(mainPage.productPage.productImage).toBeVisible()
        await expect(mainPage.productPage.productTitleLabel).toBeVisible()
        await expect(mainPage.productPage.productDescriptionParagraph).toBeVisible()
        await expect(mainPage.productPage.productPricenLabel).toBeVisible()
        await expect(mainPage.productPage.productInfoButton).toBeVisible()
        await expect(mainPage.productPage.productCartButton).toBeVisible()        
        //add product to cart
        await mainPage.productPage.firstItem.locator('[data-type^="product-cart-button"]').click()
        await mainPage.productPage.modalShoppingButton.click()
        await expect(mainPage.productPage.modalDiv).toBeHidden()
        //verify item in cart
        await page.addInitScript(()=>{
            expect(localStorage.getItem('Items')).toMatchObject([{ "idItems": 1, "amount": 1 }])
        })
        await expect(mainPage.productPage.headerCartBadgeButton).toBeVisible()
        await expect(mainPage.productPage.headerCartBadgeButton).toHaveText('1')
    })

    test('Info button check', async ({ page }) => {
        const mainPage = new PageObjectManager(page)

        //add product to cart
        await mainPage.productPage.firstItem.locator('[data-type^="product-info-button"]').click()
        await expect(mainPage.productDetailsPage.title).toBeVisible()
        await expect(mainPage.productDetailsPage.title).toHaveText('T-Shirt')
    })
})

test.describe('Error cases',()=>{
    test.beforeEach(async({page}) => {
        await page.addInitScript(() => {
            window.document.cookie = 'Cookie = {needed = true , preferencies = true , stats = true}'
        })
    })
    test('No data loaded', async({page}) => {
        const mainPage = new PageObjectManager(page)
        
        //intercept call and return empty array
        await page.route('**/api/v1/items', async route => {
            const json:[] = [];
            await route.fulfill({json});
        });
        await page.goto('/')
        //verify case with no products avalable
        await expect(mainPage.productPage.productsWrapper).toBeHidden()
        await expect(mainPage.productPage.errorBox).toBeVisible()
        await expect(mainPage.productPage.errorBox).toHaveText('We are sorry! Currently are no products available!')
    })
    test('Error message', async ({ page }) => {
        const mainPage = new PageObjectManager(page)
        //intercept call and return error status
        await page.route('**/api/v1/items', async route => {
            const json: [] = [];
            await route.fulfill({ 
                status: 404,
                body: JSON.stringify([]) 
            });
        });
        await page.goto('/')
        //verify case with no products avalable
        await expect(mainPage.productPage.productsWrapper).toBeHidden()
        await expect(mainPage.productPage.errorBox).toBeVisible()
        await expect(mainPage. productPage.errorBox).toContainText('404 Not Found')

    })
})
