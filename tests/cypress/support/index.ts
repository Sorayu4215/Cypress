declare namespace Cypress {
    interface Chainable {
        testuserDatabaseDeregistration(username:string): void
        testuserDatabaseRegistration(username: string, password: string, email: string, name: string, address: string, city: string, country: string, phone_number: string, post_code: string, terms_and_condition: string, newsletter?: string, bussiness_account?: string, compaty_reg_number?: string, BIC?: string, VAT?: string, IBAN?: string, bank_account_holder?: string):void
        logIn(username: string, password: string):void
        quickLogIn(username: string, password: string):void
    }
}