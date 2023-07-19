import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { resourcesService } from './shared/resources.service';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { BillingComponent } from './billing/billing.component';
import { AddressComponent } from './address/address.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './my-orders/my-orders.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShippingGuardService } from './shared/service/shipping-guard.service';
import { AddressGuardService } from './shared/service/address-guard.service';
import { OrderGuardService } from './shared/service/order-guard.service';
import { SummaryGuardService } from './shared/service/summary-guard.service';
import { UserGuardService } from './shared/service/user-guard.service';
import { AuthorisationService } from './shared/service/authorisation-guard.service';

const resources = new resourcesService

const routes: Routes = [
  { path: '', redirectTo: resources.mainPageURL, pathMatch: 'full' },
  { path: resources.mainPageURL, component: MainPageComponent },
  { path: resources.authorizationURL, component: AuthorizationComponent, canActivate: [AuthorisationService] },
  { path: resources.cartURL, component: CartComponent },
  { path: resources.billingPageURL, component: BillingComponent, canActivate: [ShippingGuardService]},
  { path: resources.adressURL, component: AddressComponent, canActivate: [AddressGuardService]},
  { path: resources.summarryPageURL, component: SummaryComponent, canActivate: [SummaryGuardService] },
  { path: resources.orderURL, component: OrderComponent, canActivate: [OrderGuardService]},
  { path: resources.myOrdersURL, component: MyOrderComponent, canActivate: [UserGuardService] },
  { path: resources.userProfileURL, component: UserProfileComponent, canActivate: [UserGuardService] },
  { path: resources.registrationURL, component: RegistrationComponent },
  { path: ':id', component: ItemDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
