import { ProductPage } from "./product.page";
import { CartPage } from "./cart.page";
import { ShippingPage } from "./shipping.page";
import { AddressPage } from "./address.page";
import { SummaryPage } from "./summary.page";
import { OrderPage } from "./order.page";
import { AuthorisationPage } from "./authorisation.page";
import { ProductDetails } from "./productDetails.page";
import { MyOrdersPage } from "./myOrders.page";
import { RegistrationPage } from "./registration.page";
import { PersonalDataPage } from "./personalData.page";

export class PageObjectManager{
    constructor(page:any){
        this.productPage = new ProductPage(page)
        this.cartPage = new CartPage(page)
        this.shippingPage = new ShippingPage(page)
        this.addressPage = new AddressPage(page)
        this.summaryPage = new SummaryPage(page)
        this.orderPage = new OrderPage(page)
        this.authorisationPage = new AuthorisationPage(page)
        this.productDetailsPage = new ProductDetails(page)
        this.myOrderPage = new MyOrdersPage(page)
        this.registrationPage = new RegistrationPage(page)
        this.perosnalDataPage = new PersonalDataPage(page)
    }
    productPage
    cartPage
    shippingPage
    addressPage
    summaryPage
    orderPage
    authorisationPage
    productDetailsPage
    myOrderPage
    registrationPage
    perosnalDataPage
}