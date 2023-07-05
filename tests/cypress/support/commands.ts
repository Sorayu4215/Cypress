/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import { authorisationPage } from "./main"

Cypress.Commands.add('testuserDatabaseRegistration', (username: string, password: string,  email: string, name:string, address: string, city: string, country: string, phone_number: string, post_code: string, terms_and_condition: string, newsletter?: string, bussiness_account?: string, compaty_reg_number?: string, BIC?: string, VAT?: string, IBAN?: string, bank_account_holder?:string ) => { 
        cy.task('queryDb', 
            `INSERT INTO users (username, password, email, name, address, city , post_code, phone_number, country, newsletter , terms_and_condition, bussiness_account , compaty_reg_number, BIC, VAT, IBAN, bank_account_holder) VALUES ('${username}','${password}','${email}', '${name}','${address}','${city}','${post_code}','${phone_number}','${country}','${newsletter}','${terms_and_condition}','${bussiness_account}','${compaty_reg_number}','${BIC}','${VAT}','${IBAN}' ,'${bank_account_holder}')`)
        .then(
            ($result: any) => {
                cy.log("Testuser is ready!")
        })
 
})

Cypress.Commands.add('testuserDatabaseDeregistration', (username: string) => { 
        cy.task('queryDb', 
            `DELETE FROM users WHERE (username = '${username}');`)
        .then(
            ($result: any) => {
                cy.log("User degeristered!")
        })
})

Cypress.Commands.add('logIn',(username:string, password:string)=>{
    authorisationPage.usernameInput.type(username)
    authorisationPage.passwordInput.type(password)
    authorisationPage.logInButton.click()
    //verify login
    authorisationPage.sucessMessage.should('be.visible')
})

Cypress.Commands.add('quickLogIn',(username:string, password:string)=>{
    cy.session(username,()=>{
        cy.request({
            method: 'POST',
            url: `${Cypress.config().baseUrl}/api/v1/login`,
            body: { username: username, password: password }
        }).then((result: any) => {
            window.localStorage.setItem('User', JSON.stringify({ token: result.body.token }))
        })
    })
})

Cypress.Commands.add('APIWithoutToken',(APImethod: "GET"| "POST"| "DELETE"| "PUT", endpoint: string, APIstatus:number)=>{
    cy.request({
        method: APImethod,
        url: `${Cypress.config().baseUrl}/${endpoint}`,
        headers: {
            "Authorization": null,
            'content-type': 'application/json'
        },
        body: {},
        failOnStatusCode: false
    }).then((result: any) => {
        expect(result.body).to.have.property('msg').to.eq('Not authorized!')
        expect(result.status).to.eq(APIstatus)
    })
})

Cypress.Commands.add('APIInvalidtToken', (APImethod: "GET" | "POST" | "DELETE" | "PUT", endpoint: string, APIstatus: number) =>{
    cy.request({
        method: APImethod,
        url: `${Cypress.config().baseUrl}/${endpoint}`,
        headers: {
            "Authorization": "Bearer LoremIpsum",
            'content-type': 'application/json'
        },
        body: {},
        failOnStatusCode: false
    }).then((result: any) => {
        expect(result.body).to.have.property('msg').to.eq('Not authorized!')
        expect(result.status).to.eq(APIstatus)
    })
})

Cypress.Commands.add('APIRequest', (APImethod: "GET" | "POST" | "DELETE" | "PUT", endpoint: string,APIbody:any, APIstatus: number) =>{
        cy.request({
            method: APImethod,
            url: `${Cypress.config('baseUrl')}/${endpoint}`,
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem('User')!).token}`,
                'content-type': 'application/json'
            },
            body: APIbody,
        }).then((response) => {
            expect(response.status).to.eq(APIstatus)
            cy.wrap(response.body).as('response')
        })
})