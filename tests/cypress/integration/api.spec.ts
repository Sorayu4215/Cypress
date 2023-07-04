before(() => {
    cy.testuserDatabaseRegistration('test_api', '12345678', 'johnSmilga@test.com', 'John Smilga', 'Main 32', 'Bratislava', 'Slovakia', '0258471698', '14 759', 'true')
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
            cy.APIRequest('POST', 'api/v1/change-user-data', {}, 400)
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
            cy.quickLogIn('test1', '12345678')
            cy.APIRequest('POST', 'api/v1/change-username', {}, 400)
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
            cy.APIRequest('POST', 'api/v1/change-password', {}, 400)
        })
    })
})

after(() => {
    cy.testuserDatabaseDeregistration('test_api')
})