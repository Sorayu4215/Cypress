import { test, expect } from '@playwright/test';
import { createTestUser, APIWithoutToken, removeTestUser, APIInvalidtToken, quickLogIn, APIrequest } from "../support/init";


test.beforeAll(async() => {
    await createTestUser('test_api', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
})

test.describe('API security tests',()=>{
    test.describe('/order',()=>{
        test('Without authorisation token',async({baseURL,request,})=>{
            await APIWithoutToken(request, baseURL, "GET", 'api/v1/order',403)
        })
        test('With invalid authorisation token',async({baseURL,request})=>{
            await APIInvalidtToken(request,baseURL,"GET", 'api/v1/order', 403)
        })
        test('Valid authorisation token',async ({page,context,baseURL,request})=>{
            await quickLogIn(context,request,baseURL,'test_api','12345678')
            await APIrequest(page, request,baseURL,'GET', 'api/v1/order', {},200)
        })
    })
    test.describe('/user',()=>{
        test('Without authorisation token', async ({ baseURL, request, }) => {
            await APIWithoutToken(request, baseURL, "GET", 'api/v1/user', 403)
        })
        test('With invalid authorisation token', async ({ baseURL, request }) => {
            await APIInvalidtToken(request, baseURL, "GET", 'api/v1/user', 403)
        })
        test('Valid authorisation token', async ({ page, context, baseURL, request }) => {
            await quickLogIn(context, request, baseURL, 'test_api', '12345678')
            await APIrequest(page, request, baseURL, 'GET', 'api/v1/user', {}, 200)
        })
    })
    test.describe('/change-user-data',()=>{
        test('Without authorisation token',async ({ baseURL, request, }) => {
            await APIWithoutToken(request, baseURL,"POST", 'api/v1/change-user-data', 403)
        })
        test('With invalid authorisation token',async ({ baseURL, request }) => {
            await APIInvalidtToken(request, baseURL,"POST", 'api/v1/change-user-data', 403)
        })
        test('Valid authorisation token', async ({ page, context, baseURL, request }) => {
            await quickLogIn(context, request, baseURL,'test_api', '12345678')
            await APIrequest(page, request, baseURL,'POST', 'api/v1/change-user-data', { email: 'test@test.sk', name: 'Test Test', address: 'Main 40', country: 'Slovakia', city: 'Kosice', post_code: '09 878', phone_number: '9876123456', terms_and_condition: "true" }, 200)
        })
    })
    test.describe('/change-password',()=>{
        test('Without authorisation token',async ({ baseURL, request, }) => {
            await APIWithoutToken(request, baseURL,"POST", 'api/v1/change-password', 403)
        })
        test('With invalid authorisation token',async ({ baseURL, request, }) => {
            await APIInvalidtToken(request, baseURL,"POST", 'api/v1/change-password', 403)
        })
        test('Valid authorisation token', async ({ page, context, baseURL, request }) => {
            await quickLogIn(context, request, baseURL,'test_api', '12345678')
            await APIrequest(page, request, baseURL,'POST', 'api/v1/change-password', { newPassword: '123456789' }, 200)
        })
    })

    test.describe('/change-username',()=>{
        test('Without authorisation token',async ({ baseURL, request, }) => {
            await APIWithoutToken(request, baseURL,"POST", 'api/v1/change-username', 403)
        })
        test('With invalid authorisation token', async ({ baseURL, request, }) => {
            await APIInvalidtToken(request, baseURL,"POST", 'api/v1/change-username', 403)
        })
        test('Valid authorisation token', async ({ page, context, baseURL, request }) => {
            await quickLogIn(context, request, baseURL,'test_api', '123456789')
            await APIrequest(page, request, baseURL,'POST', 'api/v1/change-username', { username: 'test_api2' }, 200)
        })
    })
})

test.afterAll(async() => {
    await removeTestUser('test_api')
    await removeTestUser('test_api2')
})