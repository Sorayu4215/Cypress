import { AddressPage } from "./address.page";
import { CartPage } from "./cart.page";
import { AuthorisationPage } from "./authorisation.page";
import { MyOrdersPage } from "./myOrders.page";
import { OrderPage } from "./order.page";
import { PersonalDataPage } from "./personalData.page";
import { ProductPage } from "./product.page";
import { SummaryPage } from "./summary.page";
import { ShippingPage } from "./shipping.page";

const addressPage = new AddressPage()
const cartPage = new CartPage()
const authorisationPage = new AuthorisationPage()
const myOrdersPage = new MyOrdersPage()
const orderPage = new OrderPage()
const personalData = new PersonalDataPage()
const productPage = new ProductPage()
const summaryPage = new SummaryPage()
const shippingPage = new ShippingPage()

export { productPage, addressPage, cartPage, authorisationPage, myOrdersPage, orderPage, personalData, summaryPage, shippingPage }