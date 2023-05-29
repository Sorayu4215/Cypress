import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchComponent } from './main-page/search/search.component';
import { ItemDetailsComponent } from './item-details/item-details.component'; 
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartNavigationComponent } from './shared/components/cart-navigation/cart-navigation.component';
import { BillingComponent } from './billing/billing.component';
import { AddressComponent } from './address/address.component';
import { SummaryComponent } from './summary/summary.component';
import { OrderComponent } from './order/order.component';
import { MyOrderComponent } from './my-orders/my-orders.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { InputDataComponent } from './shared/components/input-data/input-data.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { FiltersComponent } from './main-page/filters/filters.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AddedToCartComponent } from './shared/components/added-to-cart/added-to-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    MainPageComponent,
    SearchComponent,
    ItemDetailsComponent,
    FooterComponent,
    CartComponent,
    CartNavigationComponent,
    BillingComponent,
    AddressComponent,
    SummaryComponent,
    OrderComponent,
    MyOrderComponent,
    UserProfileComponent,
    CookieBannerComponent,
    InputDataComponent,
    RegistrationComponent,
    ErrorComponent,
    FiltersComponent,
    LoaderComponent,
    AddedToCartComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
