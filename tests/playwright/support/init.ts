import { DBconnection } from "playwright.config"
import { PageObjectManager } from "./POManager.page"


export async function createTestUser(username: string, password: string, email: string, name: string, address: string, city: string, country: string, phone_number: string, post_code: string, terms_and_condition: string, newsletter?: string, bussiness_account?: string, compaty_reg_number?: string, BIC?: string, VAT?: string, IBAN?: string, bank_account_holder?: string){
    const connection = DBconnection()
    await new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users (username, password, email, name, address, city , post_code, phone_number, country, newsletter , terms_and_condition, bussiness_account , compaty_reg_number, BIC, VAT, IBAN, bank_account_holder) VALUES ('${username}','${password}','${email}', '${name}','${address}','${city}','${post_code}','${phone_number}','${country}','${newsletter}','${terms_and_condition}','${bussiness_account}','${compaty_reg_number}','${BIC}','${VAT}','${IBAN}' ,'${bank_account_holder}')`,
        (err,res)=>{
            resolve(res)
        })
    })
}

export async function removeTestUser(username: string){
    const connection = DBconnection()
    await new Promise((resolve,reject)=>{
        connection.query(`DELETE FROM users WHERE (username = '${username}');`,(err,res)=>{
            resolve(res)
        })
    })
}

export async function logIn(page:any,username:string, password:string) {
    const mainPages = new PageObjectManager(page)

    await mainPages.authorisationPage.usernameInput.fill('test_user')
    await mainPages.authorisationPage.passwordInput.fill('12345678')
    await mainPages.authorisationPage.logInButton.click({ force: true })
}

export async function quickLogIn(context:any, request:any, baseURL:any, username:string ,password:string){
    const response = await request.post(`${baseURL}/api/v1/login`,{
        data:{
            "username": username, "password": password
        }
    })
    await response.ok()
    const responseBody = await response.json()
    await context.addInitScript((responseBody:any)=>{
        window.localStorage.setItem("User", JSON.stringify({ token: responseBody.token }))
    }, responseBody)
}