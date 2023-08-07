import { ProductPage } from "./product.page";
import { CartPage } from "./cart.page";
import { ShippingPage } from "./shipping.page";
import { AddressPage } from "./address.page";
import { SummaryPage } from "./summary.page";
import { OrderPage } from "./order.page";

export class PageObjectManager{
    constructor(page:any){
        this.page = page
        this.productPage = new ProductPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.shippingPage = new ShippingPage(this.page)
        this.addressPage = new AddressPage(this.page)
        this.summaryPage = new SummaryPage(this.page)
        this.orderPage = new OrderPage(this.page)
    }
    page
    productPage
    cartPage
    shippingPage
    addressPage
    summaryPage
    orderPage
}