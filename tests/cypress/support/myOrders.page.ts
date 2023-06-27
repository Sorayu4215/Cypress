export class MyOrdersPage {
    order(orderNumber:string){
        return cy.get(`[data-type="my-orders-single-items-div-${orderNumber}"]`)
    }
}