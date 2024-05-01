describe('My first test', function(){

  beforeEach(function(){
    cy.visit("http://localhost:3000/shop")
    cy.get('[data-type="cookie-banner-allow-btn"]').click()  
  })

  it.skip('Test pre pisanie', function(){
    //cy.visit("http://localhost:3000/shop")
    //cy.get('[data-type="cookie-banner-allow-btn"]').click()   
    cy.get('[data-type="filter-search-input"]').type("T-shirt")
  })

  it.skip('Tricko M', function(){
    //cy.visit('http://localhost:3000/shop')
    //cy.get('[data-type="cookie-banner-allow-btn"]').click() 
    cy.get('[data-type="single-product-0"]').click()
    cy.get('[daat-type="detail-size-select"]').select("M") 
  })

  it.skip('Test na checkbox', function(){
    //cy.visit('http://localhost:3000/shop')
    //cy.get('[data-type="cookie-banner-allow-btn"]').click() 
    cy.get('[data-type="single-product-0"]').click() 
    cy.get('[data-type="details-waranty"]').check()
  })

  it.skip('Test na contains', function(){
    //cy.visit('http://localhost:3000/shop')
    //cy.get('[data-type="cookie-banner-allow-btn"]').click() 
    cy.contains('Smart Watch').click()
  })

  it.skip('Prvy ozajstny test scenar', function(){
    //cy.visit('http://localhost:3000/shop')
    //cy.get('[data-type="cookie-banner-allow-btn"]').click() 
    cy.contains('Hiking Boots').click()
    cy.get("[data-type='details-price']").should('have.text', "129.99€")
  })
})