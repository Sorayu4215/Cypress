export class MyOrdersPage {
    constructor(page: any) {
        this.page = page
    }
    page 

    order(orderNumber:string){
        return this.page.locator(`[data-type="my-orders-single-items-div-${orderNumber}"]`)
    }
}