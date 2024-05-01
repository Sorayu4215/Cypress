describe('My first test', function(){

  it('Nas prvy test', function(){
    cy.visit('http://localhost:3000/shop')
    cy.get('[data-type="cookie-banner-allow-btn"]').click()
  })

})