import { ProductPage } from "./product.page";
import { CartPage } from "./cart.page";
import { ShippingPage } from "./shipping.page";
import { AddressPage } from "./address.page";
import { SummaryPage } from "./summary.page";
import { OrderPage } from "./order.page";

export class PageObjectManager{
    constructor(page:any){
        this.productPage = new ProductPage(page)
        this.cartPage = new CartPage(page)
        this.shippingPage = new ShippingPage(page)
        this.addressPage = new AddressPage(page)
        this.summaryPage = new SummaryPage(page)
        this.orderPage = new OrderPage(page)
    }
    productPage
    cartPage
    shippingPage
    addressPage
    summaryPage
    orderPage
}