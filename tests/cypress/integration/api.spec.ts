before(() => {
    cy.testuserDatabaseRegistration('test_api', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
    Cypress.session.clearAllSavedSessions()
})

describe('API security tests',()=>{
    context('/order',()=>{
        it('Without authorisation token',()=>{
            cy.APIWithoutToken("GET", 'api/v1/order',403)
        })
        it('With invalid authorisation token',()=>{
            cy.APIInvalidtToken("GET", 'api/v1/order', 403)
        })
        it('Valid authorisation token',function(){
            cy.quickLogIn('test_api','12345678')
            cy.APIRequest('GET', 'api/v1/order', {},200)
        })
    })
    context('/user',()=>{
        it('Without authorisation token',()=> {
            cy.APIWithoutToken("GET", 'api/v1/user', 403)
        })
        it('With invalid authorisation token', () => {
            cy.APIInvalidtToken("GET", 'api/v1/user', 403)
        })
        it('Valid authorisation token', function () {
            cy.quickLogIn('test_api', '12345678')
            cy.APIRequest('GET', 'api/v1/user', {}, 200)
        })
    })
    context('/change-user-data',()=>{
        it('Without authorisation token',()=> {
            cy.APIWithoutToken("POST", 'api/v1/change-user-data', 403)
        })
        it('With invalid authorisation token', () => {
            cy.APIInvalidtToken("POST", 'api/v1/change-user-data', 403)
        })
        it('Valid authorisation token', function () {
            cy.quickLogIn('test_api', '12345678')
            cy.APIRequest('POST', 'api/v1/change-user-data', { email: 'test@test.sk', name: 'Test Test', address: 'Main 40', country: 'Slovakia', city: 'Kosice', post_code: '09 878', phone_number: '9876123456', terms_and_condition: "true" }, 200)
        })
    })
    context('/change-password',()=>{
        it('Without authorisation token',()=> {
            cy.APIWithoutToken("POST", 'api/v1/change-password', 403)
        })
        it('With invalid authorisation token', () => {
            cy.APIInvalidtToken("POST", 'api/v1/change-password', 403)
        })
        it('Valid authorisation token', function () {
            cy.quickLogIn('test_api', '12345678')
            cy.APIRequest('POST', 'api/v1/change-password', { newPassword: '123456789' }, 200)
        })
    })

    context('/change-username',()=>{
        it('Without authorisation token',()=> {
            cy.APIWithoutToken("POST", 'api/v1/change-username', 403)
        })
        it('With invalid authorisation token', () => {
            cy.APIInvalidtToken("POST", 'api/v1/change-username', 403)
        })
        it('Valid authorisation token', function () {
            cy.quickLogIn('test_api', '12345678')
            cy.APIRequest('POST', 'api/v1/change-username', { username: 'test_api2' }, 200)
        })
    })
})

after(() => {
    cy.testuserDatabaseDeregistration('test_api')
    cy.testuserDatabaseDeregistration('test_api2')
})