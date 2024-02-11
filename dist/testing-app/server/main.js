/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 51527:
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressComponent": () => (/* binding */ AddressComponent)
/* harmony export */ });
/* harmony import */ var _enum_address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enum-address */ 60927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/cart-navigation/cart-navigation.component */ 97474);
/* harmony import */ var _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/input-data/input-data.component */ 63781);







class AddressComponent {
  constructor(resources, router) {
    this.resources = resources;
    this.router = router;
    this.summary = _enum_address__WEBPACK_IMPORTED_MODULE_0__.address;
    this.showErrorMessage = false;
    this.companyUser = false;
  }
  item(event) {
    localStorage.setItem('Address', JSON.stringify(event.value));
    this.router.navigate([this.resources.summarryPageURL]);
  }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('Address'));
  }
}
AddressComponent.ɵfac = function AddressComponent_Factory(t) {
  return new (t || AddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
AddressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddressComponent,
  selectors: [["app-address"]],
  decls: 6,
  vars: 6,
  consts: [[3, "userData", "submitBtnName", "formData"], [1, "cart-wrapper", "cart-navigation"], [1, "cart-navidation-btn", 3, "routerLink"], [1, "cart-navidation-icon", 3, "icon"]],
  template: function AddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-input-data", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("formData", function AddressComponent_Template_app_input_data_formData_1_listener($event) {
        return ctx.item($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("userData", ctx.data)("submitBtnName", ctx.resources.summarryPageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/" + ctx.resources.billingPageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-type", ctx.summary.backToShipping);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.resources.arrowLeft);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Back to ", ctx.resources.billingPageURL, " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_2__.CartNavigationComponent, _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_3__.InputDataComponent],
  styles: [".address-title[_ngcontent-%COMP%]{\n    margin: 1rem;\n    text-align: center;\n}\n.form-style[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: 32.5%;\n    align-items: start;\n    position: relative;\n}\n.form[_ngcontent-%COMP%]{\n    overflow: hidden;\n}\n\n.input-checkbox[_ngcontent-%COMP%]{\n    margin-right: 0.75rem;\n}\n.input-name[_ngcontent-%COMP%]{\n font-size: 70%;\n color: var(--lighter-primary2-color);\n}\n.input-checkbox-name[_ngcontent-%COMP%]{\n\n}\n.line[_ngcontent-%COMP%]{\n    position: absolute;\n    left: -50%;\n    width: 100vw;\n    border-top: 0.1px solid #d2d2d2;\n}\n.margin-top[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%]{\n    border: 1px solid red;\n}\n\n\n.cart-navigation[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    margin: 2rem 3rem;\n}\n.cart-navidation-btn[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    padding: 0.2rem 0.5rem;\n    background-color: var(--primary-primary1-color);\n    border-radius: 5px;\n    border: 1px solid var(--darker-primary1-color);\n    cursor: pointer;\n    color: var(--white-color);\n}\n.cart-navidation-btn[_ngcontent-%COMP%]:hover{\n    color: var(--darker-primary2-color);\n    transition: 0.1s linear;\n}\n@media screen  and (max-width:550px){\n    .total[_ngcontent-%COMP%]{\n        margin: 1rem 0.5rem;\n    }\n    .cart-navigation[_ngcontent-%COMP%]{\n        margin: 5rem 0.5rem;\n    }\n    .form-style[_ngcontent-%COMP%]{\n    margin-left: 22.5%;\n}\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRkcmVzcy9hZGRyZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0NBQ0MsY0FBYztDQUNkLG9DQUFvQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsOENBQThDO0lBQzlDLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtJQUNBLGtCQUFrQjtBQUN0QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtdGl0bGV7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLXN0eWxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAzMi41JTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm17XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlucHV0LWNoZWNrYm94e1xuICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbn1cbi5pbnB1dC1uYW1le1xuIGZvbnQtc2l6ZTogNzAlO1xuIGNvbG9yOiB2YXIoLS1saWdodGVyLXByaW1hcnkyLWNvbG9yKTtcbn1cbi5pbnB1dC1jaGVja2JveC1uYW1le1xuXG59XG4ubGluZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTUwJTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgI2QyZDJkMjtcbn1cbi5tYXJnaW4tdG9we1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5cbi5jYXJ0LW5hdmlnYXRpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAycmVtIDNyZW07XG59XG4uY2FydC1uYXZpZGF0aW9uLWJ0bntcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xufVxuLmNhcnQtbmF2aWRhdGlvbi1idG46aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1wcmltYXJ5Mi1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBsaW5lYXI7XG59XG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC13aWR0aDo1NTBweCl7XG4gICAgLnRvdGFse1xuICAgICAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICAgIH1cbiAgICAuY2FydC1uYXZpZ2F0aW9ue1xuICAgICAgICBtYXJnaW46IDVyZW0gMC41cmVtO1xuICAgIH1cbiAgICAuZm9ybS1zdHlsZXtcbiAgICBtYXJnaW4tbGVmdDogMjIuNSU7XG59XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 60927:
/*!*****************************************!*\
  !*** ./src/app/address/enum-address.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "address": () => (/* binding */ address)
/* harmony export */ });
var address;
(function (address) {
  address["emailDiv"] = "address-email-div";
  address["emailInput"] = "address-email-input";
  address["emailLabel"] = "address-email-label";
  address["nameDiv"] = "address-name-div";
  address["nameInput"] = "address-name-input";
  address["nameLabel"] = "address-name-label";
  address["addressDiv"] = "address-address-div";
  address["addressInput"] = "address-address-input";
  address["addressLabel"] = "address-address-label";
  address["cityDiv"] = "address-city-div";
  address["cityInput"] = "address-city-input";
  address["cityLabel"] = "address-city-label";
  address["postCodeDiv"] = "address-post-code-div";
  address["postCodeInput"] = "address-post-code-input";
  address["postCodeLabel"] = "address-post-code-label";
  address["phoneNumberDiv"] = "address-phone-number-div";
  address["phoneNumberInput"] = "address-phone-number-input";
  address["phoneNumberLabel"] = "address-phone-number-label";
  address["newsletterDiv"] = "address-newsletter-div";
  address["newsletterInput"] = "address-newsletter-input";
  address["newsletterLabel"] = "address-newsletter-label";
  address["termsAndConditionDiv"] = "address-terms-and-condition-div";
  address["termsAndConditionInput"] = "address-terms-and-condition-input";
  address["termsAndConditionLabel"] = "address-terms-and-condition-label";
  address["businessAccountDiv"] = "address-business-account-div";
  address["businessAccountInput"] = "address-business-account-input";
  address["businessAccountLabel"] = "address-business-account-label";
  address["companyRegistrationNumberDiv"] = "address-company-registration-number-div";
  address["companyRegistrationNumberInput"] = "address-company-registration-number-input";
  address["companyRegistrationNumberLabel"] = "address-company-registration-number-label";
  address["VATDiv"] = "address-VAT-div";
  address["VATInput"] = "address-VAT-input";
  address["VATLabel"] = "address-VAT-label";
  address["BICDiv"] = "address-BIC-div";
  address["BICInput"] = "address-BIC-input";
  address["BICLabel"] = "address-BIC-label";
  address["IBANDiv"] = "address-IBAN-div";
  address["IBANInput"] = "address-IBAN-input";
  address["IBANLabel"] = "address-IBAN-label";
  address["nameOfBankAccountDiv"] = "address-name-of-bank-account-div";
  address["nameOfBankAccountInput"] = "address-name-of-bank-account-input";
  address["nameOfBankAccountLabel"] = "address-name-of-bank-account-label";
  address["backToShipping"] = "address-back-to-shipping";
  address["summary"] = "address-summary";
})(address || (address = {}));

/***/ }),

/***/ 32702:
/*!******************************************!*\
  !*** ./src/app/animations/animations.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerTransition": () => (/* binding */ headerTransition),
/* harmony export */   "introFadeout": () => (/* binding */ introFadeout),
/* harmony export */   "mainTransition": () => (/* binding */ mainTransition),
/* harmony export */   "novinkyTransition": () => (/* binding */ novinkyTransition),
/* harmony export */   "subpage": () => (/* binding */ subpage)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 35564);

const headerTransition = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('headerTransition', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'opacity': '1%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200)])]);
const mainTransition = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('mainTransition', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'transform': 'translateY(+5rem)',
  'opacity': '1%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(500)])]);
const novinkyTransition = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('novinkyTransition', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('1s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(-100%)'
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("void => *", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateX(+100%)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('1s')])]);
const subpage = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('subpage', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'opacity': '1%'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(200)])]);
const introFadeout = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('introFadeout', [
// transition('* => void', [style({ 'opacity': '1%' }), animate(200)]),
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.2s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  'opacity': '1%'
}))])]);

/***/ }),

/***/ 34621:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/resources.service */ 95859);
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization/authorization.component */ 77949);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ 6357);
/* harmony import */ var _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-details/item-details.component */ 36798);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ 85250);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing/billing.component */ 23261);
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address/address.component */ 51527);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary/summary.component */ 78891);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order/order.component */ 10915);
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-orders/my-orders.component */ 7099);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ 71091);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./registration/registration.component */ 94969);
/* harmony import */ var _shared_service_shipping_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/service/shipping-guard.service */ 44859);
/* harmony import */ var _shared_service_address_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/service/address-guard.service */ 22291);
/* harmony import */ var _shared_service_order_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/service/order-guard.service */ 55028);
/* harmony import */ var _shared_service_summary_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/service/summary-guard.service */ 91724);
/* harmony import */ var _shared_service_user_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/service/user-guard.service */ 83384);
/* harmony import */ var _shared_service_authorisation_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/service/authorisation-guard.service */ 60249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 4009);





















const resources = new _shared_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService();
const routes = [{
  path: '',
  redirectTo: resources.mainPageURL,
  pathMatch: 'full'
}, {
  path: resources.mainPageURL,
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent
}, {
  path: resources.authorizationURL,
  component: _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_1__.AuthorizationComponent,
  canActivate: [_shared_service_authorisation_guard_service__WEBPACK_IMPORTED_MODULE_17__.AuthorisationService]
}, {
  path: resources.cartURL,
  component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent
}, {
  path: resources.billingPageURL,
  component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_5__.BillingComponent,
  canActivate: [_shared_service_shipping_guard_service__WEBPACK_IMPORTED_MODULE_12__.ShippingGuardService]
}, {
  path: resources.adressURL,
  component: _address_address_component__WEBPACK_IMPORTED_MODULE_6__.AddressComponent,
  canActivate: [_shared_service_address_guard_service__WEBPACK_IMPORTED_MODULE_13__.AddressGuardService]
}, {
  path: resources.summarryPageURL,
  component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__.SummaryComponent,
  canActivate: [_shared_service_summary_guard_service__WEBPACK_IMPORTED_MODULE_15__.SummaryGuardService]
}, {
  path: resources.orderURL,
  component: _order_order_component__WEBPACK_IMPORTED_MODULE_8__.OrderComponent,
  canActivate: [_shared_service_order_guard_service__WEBPACK_IMPORTED_MODULE_14__.OrderGuardService]
}, {
  path: resources.myOrdersURL,
  component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__.MyOrderComponent,
  canActivate: [_shared_service_user_guard_service__WEBPACK_IMPORTED_MODULE_16__.UserGuardService]
}, {
  path: resources.userProfileURL,
  component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__.UserProfileComponent,
  canActivate: [_shared_service_user_guard_service__WEBPACK_IMPORTED_MODULE_16__.UserGuardService]
}, {
  path: resources.registrationURL,
  component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__.RegistrationComponent
}, {
  path: ':id',
  component: _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_3__.ItemDetailsComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

/***/ }),

/***/ 59229:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/resources.service */ 95859);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 55806);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 62829);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 13433);
/* harmony import */ var _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie-banner/cookie-banner.component */ 28309);









class AppComponent {
  constructor(resources, meta, platformId) {
    this.resources = resources;
    this.meta = meta;
    this.platformId = platformId;
    this.isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId);
    this.title = 'testing-app';
    this.meta.addTag({
      name: 'description',
      content: this.resources.metaDescription
    });
    this.meta.addTag({
      name: 'keywords',
      content: this.resources.metaKeywords
    });
    this.meta.addTag({
      name: 'author',
      content: this.resources.metaAuthor
    });
    this.meta.addTag({
      name: 'template',
      content: this.resources.metaTemplate
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 6,
  vars: 0,
  consts: [[1, "content"], [1, "footer"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "body")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-header")(3, "app-cookie-banner")(4, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-footer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_3__.CookieBannerComponent],
  styles: ["*[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var( --font-Nunito);\n    font-weight: 400;\n}\n\nbody[_ngcontent-%COMP%]{\n    height: 100%;\n    margin: 0 auto;\n}\n\n[_ngcontent-%COMP%]:root {\n    \n    \n    --lighter-primary1-color: #42b1bd;\n    --light-primary1-color: #42a9bd;\n    --primary-primary1-color: #4298BD;\n    --dark-primary1-color: #428cbd;\n    --darker-primary1-color: #4261bd;\n\n\n    \n    --lighter-primary2-color: #323232;\n    --light-primary2-color: #282828;\n    --primary-primary2-color: #1E1E1E;\n    --dark-primary2-color: #141414;\n    --darker-primary2-color: #0A0A0A;\n\n\n    \n    --primary2-color: #000000;\n    \n    \n    --white-color: #fff;\n\n    \n    --font-Maitree: 'Maitree', serif;\n    --font-Noto: 'Noto Sans JP', sans-serif;\n    --font-Verdana: 'Verdana,Helvetica,Helvetica CE,Arial,Arial Regular,Arial CE,sans-serif;';\n    --font-Comme:  'Comme', sans-serif;\n    --font-Nunito: 'Nunito', sans-serif;\n\n    \n    --error-background-color: #f65454;\n\n    \n    --success-color: #4BB543;\n}\n\n.background-white[_ngcontent-%COMP%]{\nbackground-color: var(--white-color);\n}\n\n.background-transparent[_ngcontent-%COMP%]{\n    background-color: transparent;\n}\n\n.color-primary[_ngcontent-%COMP%]{\n    color: var(--primary-primary1-color)\n}\n\n.color-white[_ngcontent-%COMP%]{\n    color: var(--white-color)\n}\n\n.zindex[_ngcontent-%COMP%]{\n    z-index: 20;\n}\n\n.color-primary2[_ngcontent-%COMP%]{\n    color: var(--primary-primary2-color)\n}\n\n.display-not[_ngcontent-%COMP%]{\n    display: none;\n}\n.font-weight300[_ngcontent-%COMP%]{\n    font-weight: 300;\n}\n.font-weight400[_ngcontent-%COMP%]{\n    font-weight: 400;\n}\n.font-weight500[_ngcontent-%COMP%]{\n    font-weight: 500;\n}\n.font-weight600[_ngcontent-%COMP%]{\n    font-weight: 600;\n}\n.margin[_ngcontent-%COMP%]{\n    margin: 1rem;\n}\n\n.padding-right[_ngcontent-%COMP%]{\n    padding-right: 0.7rem ;\n}\n\n.transition[_ngcontent-%COMP%]{\n   transition: all 0.2s linear;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 3.3rem;\n   \n}\nh2[_ngcontent-%COMP%]{\n    font-size: 2.7rem;\n    font-family: var( --font-Comme);\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 2.2rem;\n    font-family: var( --font-Comme);\n}\nh4[_ngcontent-%COMP%]{\n    font-size: 1.7rem;\n}\nh5[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 0.85rem;\n    font-weight: 600;\n}\np[_ngcontent-%COMP%]{\n    font-weight: 300;\n    font-size: 0.9rem;\n    display: inline-block;\n}\n.flex[_ngcontent-%COMP%]{\n    display: flex;\n}\n.block[_ngcontent-%COMP%]{\n    display: block;\n}\n\n.invalid[_ngcontent-%COMP%]{\n    font-size: 0.8rem;\n    color: rgba(255,0,0, 0.8);\n    }\n\n\n    @media screen and (max-width:850px) {\n    .items[_ngcontent-%COMP%] {\n    margin-left: 15%;\n}\n}\n\n@media screen and (min-width:1300px) {\n    \n    h1[_ngcontent-%COMP%]{\n        font-size: 5rem;\n        \n    }\n    h2[_ngcontent-%COMP%]{\n        font-size: 3rem;\n        font-family: var( --font-Comme);\n    }\n    h3[_ngcontent-%COMP%]{\n        font-size: 2.5rem;\n        font-family: var( --font-Comme);\n    }\n    h4[_ngcontent-%COMP%]{\n        font-size: 1.8rem;\n    }\n    h5[_ngcontent-%COMP%]{\n        font-size: 1.3rem;\n    }\n    h6[_ngcontent-%COMP%]{\n    font-size: 1.1rem;\n    font-weight: 600;\n}\n    p[_ngcontent-%COMP%]{\n        font-weight: 300;\n        font-size: 1rem;\n            display: inline-block;\n    }\n}\n\n@media screen and (max-width:700px) {\nh1[_ngcontent-%COMP%]{\n    font-size: 4rem;\n   \n}\nh2[_ngcontent-%COMP%]{\n    font-size: 3rem;\n\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 2rem;\n\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n} \n\n.title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 1rem;\n    font-weight: 500;\n}\n.btn[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    font-size: 1.5rem ;\n    margin-right: 0.5rem;\n    margin-left: 0.5rem;\n    cursor: pointer;\n}\n\n.padding[_ngcontent-%COMP%]{\n    padding: 1rem;\n}\n.margin[_ngcontent-%COMP%]{\n    margin: 1rem;\n}\n\n.width-100[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.aligh[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border: 5px solid #000;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: _ngcontent-%COMP%_rotation 1s linear infinite;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    }\n\n    @keyframes _ngcontent-%COMP%_rotation {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n    } \n\n.loader-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n\n.center-text[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.description[_ngcontent-%COMP%]{\n    display: block;\n    text-align: center;\n    margin: 2rem auto;\n    max-width: 800px;\n    padding: 0 1.5rem;\n}\n\n.loader[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    border: 5px solid #000;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: _ngcontent-%COMP%_rotation 1s linear infinite;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    }\n\n    @keyframes _ngcontent-%COMP%_rotation {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n    } \n\n\n.loader-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n\n.edit-button[_ngcontent-%COMP%]{\n    width: 35%;\n    cursor: pointer;\n    border-radius: 15px;\n    font-size: 1.2rem;\n    padding: 0.35rem 0.5rem;\n    background-color: var(--lighter-primary1-color);\n    border: 1px solid var(--darker-primary1-color);\n    color: var(--white-color);\n    font-weight: 500;\n    outline-offset: 5px;\n    outline: 1px solid var(--darker-primary1-color);\n    margin: 2rem auto;\n    display: block;\n}\n\n.input-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    border: none;\n}\n\n.input-name[_ngcontent-%COMP%]{\n font-size: 70%;\n color: var(--lighter-primary2-color);\n}\n\n.alighn[_ngcontent-%COMP%]{\n  text-align: center;\n  margin: 0 auto;\n}\n\n.input[_ngcontent-%COMP%]{\n    width: 100%;\n    max-width: 500px;\n    padding: 0.5rem 0.5rem 0.5rem 0.2rem;\n    border: 1.2px solid var(--darker-primary1-color);\n    border-radius: 3px;\n    \n}\n.input-width[_ngcontent-%COMP%]{\n    width: 65%;\n}\n\n@media screen and (max-width:950px) {\n.input[_ngcontent-%COMP%]{ \n  width: 80%;\n}\n}\n\n\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 1px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\n.line-vertical[_ngcontent-%COMP%]{\n    width: 1px;\n    min-height: 100%;\n    background-color: #d2d2d2;\n}\n.line-horizontal[_ngcontent-%COMP%]{\n    margin: 0.3rem 0;\n    height: 1px;\n    width: 100%;\n    background-color: #d2d2d2;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196F3;\n}\n.shadow[_ngcontent-%COMP%]{\n    box-shadow: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n\n\n\n.background-header[_ngcontent-%COMP%]{\n    background-color: var(--primary-primary2-color);\n}\n\n.dropdown[_ngcontent-%COMP%]{\n    background-color: var(--white-color);\n}\n\n\n\n\n[_ngcontent-%COMP%]:root{\n    --kontakt-dashboard-background: rgba(255, 140, 0, 0.2);\n    --price-list-dashoard: #FFD7A2;\n    --price-list-dark-color: var(--lighter-primary2-color);\n    --kalendar-text:#434345\n}\n.icon[_ngcontent-%COMP%]{\n    color: var(--primary-primary2-color);\n}\n.icon[_ngcontent-%COMP%]:hover{\n    color: var(--primary-primary1-color);\n}\n.icon-white[_ngcontent-%COMP%]{\n    color: var(--whitecolor);\n}\n.icon-white[_ngcontent-%COMP%]:hover{\n    transition: all linear 0.2s;\n    color: var(--primary-primary1-color);\n}\n.color-primary2[_ngcontent-%COMP%]:hover{\n    color: var(--primary-primary1-color);\n}\n\n.darker[_ngcontent-%COMP%]{\n     background-color: var(--lighter-primar2-color);\n}\n\n\n\n.input-box[_ngcontent-%COMP%]{\n    background-color: var(--price-list-dark-color);\n}\n.input-box2[_ngcontent-%COMP%]{\n    background-color: var(--price-list-dark-color);\n}\n.input-name[_ngcontent-%COMP%]{\n    color: var(--primary-primary2-color);\n}\n.input-description-box[_ngcontent-%COMP%]{\n    background-color: var(--price-list-dark-color);\n}\n.btn-submit[_ngcontent-%COMP%]{\n    background-color:var(--primary-primary1-color);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--darker-primary2-color); \n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--primary-primary2-color); \n}\n\n\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%]{\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n.footer[_ngcontent-%COMP%]{\n    margin-top: auto;\n}\n.intro[_ngcontent-%COMP%]{\n    display: block;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background: var(--lighter-primary2-color);\n    z-index: 25;\n    transition: linear 0,2s;\n}\n\n.middle[_ngcontent-%COMP%]{\n  position: fixed;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n.content[_ngcontent-%COMP%]{\n  width: 100%;\n  max-width: 1200px; \n  margin: 0 auto;\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3ZhcmlhYmxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK1BBQStQO0FBQy9QLHNHQUFzRzs7QUFFdEc7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7OztJQUdoQyxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLGdDQUFnQzs7O0lBR2hDLGFBQWE7SUFDYix5QkFBeUI7O0lBRXpCLFVBQVU7SUFDVixtQkFBbUI7O0lBRW5CLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3ZDLHlGQUF5RjtJQUN6RixrQ0FBa0M7SUFDbEMsbUNBQW1DOztJQUVuQyxnQkFBZ0I7SUFDaEIsaUNBQWlDOztJQUVqQyxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtHQUNHLDJCQUEyQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekI7OztJQUdBO0lBQ0E7SUFDQSxnQkFBZ0I7QUFDcEI7QUFDQTs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7O0lBRW5CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO0lBQ0EsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7WUFDWCxxQkFBcUI7SUFDN0I7QUFDSjs7QUFFQTtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxlQUFlOztBQUVuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Q7O0lBRUE7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7O0FBRUo7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVDs7SUFFQTtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTs7O0FBR0o7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwrQ0FBK0M7SUFDL0MsOENBQThDO0lBQzlDLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxvQ0FBb0M7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdEQUFnRDtJQUNoRCxrQkFBa0I7SUFDbEI7NEJBQ3dCO0FBQzVCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBOzs7QUFHQSwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUdFLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUdBLFdBQVc7QUFDWDtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7OztBQUlBLFlBQVk7QUFDWjtJQUNJLHNEQUFzRDtJQUN0RCw4QkFBOEI7SUFDOUIsc0RBQXNEO0lBQ3REO0FBQ0o7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtLQUNLLDhDQUE4QztBQUNuRDs7O0FBR0EsaUJBQWlCO0FBQ2pCO0lBQ0ksOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtFQUNFLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFpdHJlZTp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1Ob3RvK1NlcmlmK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpOyAqL1xuLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpOyAqL1xuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHZhciggLS1mb250LU51bml0byk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbjpyb290IHtcbiAgICBcbiAgICAvKiBwcmltYXJ5MSAqL1xuICAgIC0tbGlnaHRlci1wcmltYXJ5MS1jb2xvcjogIzQyYjFiZDtcbiAgICAtLWxpZ2h0LXByaW1hcnkxLWNvbG9yOiAjNDJhOWJkO1xuICAgIC0tcHJpbWFyeS1wcmltYXJ5MS1jb2xvcjogIzQyOThCRDtcbiAgICAtLWRhcmstcHJpbWFyeTEtY29sb3I6ICM0MjhjYmQ7XG4gICAgLS1kYXJrZXItcHJpbWFyeTEtY29sb3I6ICM0MjYxYmQ7XG5cblxuICAgIC8qIHByaW1hcnkyIHByaW1hcnkgKi9cbiAgICAtLWxpZ2h0ZXItcHJpbWFyeTItY29sb3I6ICMzMjMyMzI7XG4gICAgLS1saWdodC1wcmltYXJ5Mi1jb2xvcjogIzI4MjgyODtcbiAgICAtLXByaW1hcnktcHJpbWFyeTItY29sb3I6ICMxRTFFMUU7XG4gICAgLS1kYXJrLXByaW1hcnkyLWNvbG9yOiAjMTQxNDE0O1xuICAgIC0tZGFya2VyLXByaW1hcnkyLWNvbG9yOiAjMEEwQTBBO1xuXG5cbiAgICAvKiBwcmltYXJ5MiAqL1xuICAgIC0tcHJpbWFyeTItY29sb3I6ICMwMDAwMDA7XG4gICAgXG4gICAgLyogd2hpdGUgKi9cbiAgICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xuXG4gICAgLyogZm9udHMgKi9cbiAgICAtLWZvbnQtTWFpdHJlZTogJ01haXRyZWUnLCBzZXJpZjtcbiAgICAtLWZvbnQtTm90bzogJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XG4gICAgLS1mb250LVZlcmRhbmE6ICdWZXJkYW5hLEhlbHZldGljYSxIZWx2ZXRpY2EgQ0UsQXJpYWwsQXJpYWwgUmVndWxhcixBcmlhbCBDRSxzYW5zLXNlcmlmOyc7XG4gICAgLS1mb250LUNvbW1lOiAgJ0NvbW1lJywgc2Fucy1zZXJpZjtcbiAgICAtLWZvbnQtTnVuaXRvOiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcblxuICAgIC8qIGVycm9yIGNvbG9yICovXG4gICAgLS1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjY1NDU0O1xuXG4gICAgLyogc3VjY2VzcyBjb2xvciAgKi9cbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICM0QkI1NDM7XG59XG5cbi5iYWNrZ3JvdW5kLXdoaXRle1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xufVxuLyogLmxpbmFyLWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXdoaXRlLWNvbG9yKSwgdmFyKC0ta29udGFrdC1kYXNoYm9hcmQtYmFja2dyb3VuZCkgODUlLCB2YXIoLS13aGl0ZS1jb2xvcikpO1xufSAqL1xuLmJhY2tncm91bmQtdHJhbnNwYXJlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb2xvci1wcmltYXJ5e1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKVxufVxuXG4uY29sb3Itd2hpdGV7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKVxufVxuXG4uemluZGV4e1xuICAgIHotaW5kZXg6IDIwO1xufVxuXG4uY29sb3ItcHJpbWFyeTJ7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHJpbWFyeTItY29sb3IpXG59XG5cbi5kaXNwbGF5LW5vdHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmZvbnQtd2VpZ2h0MzAwe1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZm9udC13ZWlnaHQ0MDB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb250LXdlaWdodDUwMHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtd2VpZ2h0NjAwe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFyZ2lue1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLnBhZGRpbmctcmlnaHR7XG4gICAgcGFkZGluZy1yaWdodDogMC43cmVtIDtcbn1cblxuLnRyYW5zaXRpb257XG4gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG5cbmgxe1xuICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xuICAgXG59XG5oMntcbiAgICBmb250LXNpemU6IDIuN3JlbTtcbiAgICBmb250LWZhbWlseTogdmFyKCAtLWZvbnQtQ29tbWUpO1xufVxuaDN7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgZm9udC1mYW1pbHk6IHZhciggLS1mb250LUNvbW1lKTtcbn1cbmg0e1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuaDV7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5oNntcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbnB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsb2Nre1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW52YWxpZHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMCwwLCAwLjgpO1xuICAgIH1cblxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCkge1xuICAgIC5pdGVtcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzAwcHgpIHtcbiAgICBcbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICBcbiAgICB9XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhciggLS1mb250LUNvbW1lKTtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKCAtLWZvbnQtQ29tbWUpO1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gICAgaDZ7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KSB7XG5oMXtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICBcbn1cbmgye1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcblxufVxuaDN7XG4gICAgZm9udC1zaXplOiAycmVtO1xuXG59XG5oNntcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxufSBcblxuLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbSA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG4ubWFyZ2lue1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLndpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFsaWdoIFxuXG4ubG9hZGVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICAgIH0gXG5cbi5sb2FkZXItd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xufVxuXG4ubG9hZGVyIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICAgIH0gXG5cblxuLmxvYWRlci13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lZGl0LWJ1dHRvbntcbiAgICB3aWR0aDogMzUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG91dGxpbmUtb2Zmc2V0OiA1cHg7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnB1dC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnB1dC1uYW1le1xuIGZvbnQtc2l6ZTogNzAlO1xuIGNvbG9yOiB2YXIoLS1saWdodGVyLXByaW1hcnkyLWNvbG9yKTtcbn1cblxuLmFsaWdobntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC4ycmVtO1xuICAgIGJvcmRlcjogMS4ycHggc29saWQgdmFyKC0tZGFya2VyLXByaW1hcnkxLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07ICovXG59XG4uaW5wdXQtd2lkdGh7XG4gICAgd2lkdGg6IDY1JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NTBweCkge1xuLmlucHV0eyBcbiAgd2lkdGg6IDgwJTtcbn1cbn1cblxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgbGVmdDogMXB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5saW5lLXZlcnRpY2Fse1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xufVxuLmxpbmUtaG9yaXpvbnRhbHtcbiAgICBtYXJnaW46IDAuM3JlbSAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuLnNoYWRvd3tcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4O1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG4vKiBoZWFkZXIgKi9cbi5iYWNrZ3JvdW5kLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkyLWNvbG9yKTtcbn1cblxuLmRyb3Bkb3due1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbn1cblxuXG5cbi8qIGtvbnRha3QgKi9cbjpyb290e1xuICAgIC0ta29udGFrdC1kYXNoYm9hcmQtYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MCwgMCwgMC4yKTtcbiAgICAtLXByaWNlLWxpc3QtZGFzaG9hcmQ6ICNGRkQ3QTI7XG4gICAgLS1wcmljZS1saXN0LWRhcmstY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTItY29sb3IpO1xuICAgIC0ta2FsZW5kYXItdGV4dDojNDM0MzQ1XG59XG4uaWNvbntcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5Mi1jb2xvcik7XG59XG4uaWNvbjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5MS1jb2xvcik7XG59XG4uaWNvbi13aGl0ZXtcbiAgICBjb2xvcjogdmFyKC0td2hpdGVjb2xvcik7XG59XG4uaWNvbi13aGl0ZTpob3ZlcntcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xufVxuLmNvbG9yLXByaW1hcnkyOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbn1cblxuLmRhcmtlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1wcmltYXIyLWNvbG9yKTtcbn1cblxuXG4vKiBrb250YWt0IGZvcm0gKi9cbi5pbnB1dC1ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpY2UtbGlzdC1kYXJrLWNvbG9yKTtcbn1cbi5pbnB1dC1ib3gye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaWNlLWxpc3QtZGFyay1jb2xvcik7XG59XG4uaW5wdXQtbmFtZXtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5Mi1jb2xvcik7XG59XG4uaW5wdXQtZGVzY3JpcHRpb24tYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaWNlLWxpc3QtZGFyay1jb2xvcik7XG59XG4uYnRuLXN1Ym1pdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1wcmltYXJ5Mi1jb2xvcik7IFxufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktcHJpbWFyeTItY29sb3IpOyBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYzs7QUFFaEIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NoYXJlZC92YXJpYWJsZXMuY3NzJztcbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLmludHJve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRlci1wcmltYXJ5Mi1jb2xvcik7XG4gICAgei1pbmRleDogMjU7XG4gICAgdHJhbnNpdGlvbjogbGluZWFyIDAsMnM7XG59XG5cbi5taWRkbGV7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cbi5jb250ZW50e1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7IFxuICBtYXJnaW46IDAgYXV0bztcblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 63370:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "startupDataFactory": () => (/* binding */ startupDataFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 55806);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 89166);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-cookie-service */ 45121);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 34621);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization/authorization.component */ 77949);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 62829);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ 6357);
/* harmony import */ var _main_page_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/search/search.component */ 44410);
/* harmony import */ var _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-details/item-details.component */ 36798);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ 13433);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ 85250);
/* harmony import */ var _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/cart-navigation/cart-navigation.component */ 97474);
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./billing/billing.component */ 23261);
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./address/address.component */ 51527);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./summary/summary.component */ 78891);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order/order.component */ 10915);
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my-orders/my-orders.component */ 7099);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-profile/user-profile.component */ 71091);
/* harmony import */ var _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cookie-banner/cookie-banner.component */ 28309);
/* harmony import */ var _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/input-data/input-data.component */ 63781);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./registration/registration.component */ 94969);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/error/error.component */ 72765);
/* harmony import */ var _main_page_filters_filters_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main-page/filters/filters.component */ 91605);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 4068);
/* harmony import */ var _shared_components_added_to_cart_added_to_cart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/components/added-to-cart/added-to-cart.component */ 80756);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/data/data.service */ 91228);
/* harmony import */ var _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/components/succuess/succuess.component */ 50393);


































function startupDataFactory(startupService) {
  return () => startupService.initializeApp();
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
  providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_26__.CookieService, _shared_data_data_service__WEBPACK_IMPORTED_MODULE_23__.DataService, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_25__.APP_INITIALIZER,
    useFactory: startupDataFactory,
    deps: [_shared_data_data_service__WEBPACK_IMPORTED_MODULE_23__.DataService],
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__.FontAwesomeModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_2__.AuthorizationComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__.MainPageComponent, _main_page_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent, _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_6__.ItemDetailsComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__.CartComponent, _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_9__.CartNavigationComponent, _billing_billing_component__WEBPACK_IMPORTED_MODULE_10__.BillingComponent, _address_address_component__WEBPACK_IMPORTED_MODULE_11__.AddressComponent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_12__.SummaryComponent, _order_order_component__WEBPACK_IMPORTED_MODULE_13__.OrderComponent, _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_14__.MyOrderComponent, _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__.UserProfileComponent, _cookie_banner_cookie_banner_component__WEBPACK_IMPORTED_MODULE_16__.CookieBannerComponent, _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_17__.InputDataComponent, _registration_registration_component__WEBPACK_IMPORTED_MODULE_18__.RegistrationComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_19__.ErrorComponent, _main_page_filters_filters_component__WEBPACK_IMPORTED_MODULE_20__.FiltersComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__.LoaderComponent, _shared_components_added_to_cart_added_to_cart_component__WEBPACK_IMPORTED_MODULE_22__.AddedToCartComponent, _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_24__.SuccuessComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_28__.FontAwesomeModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule]
  });
})();

/***/ }),

/***/ 84362:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 78163);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 63370);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 59229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);




class AppServerModule {}
AppServerModule.ɵfac = function AppServerModule_Factory(t) {
  return new (t || AppServerModule)();
};
AppServerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppServerModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppServerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 40342:
/*!*****************************************************!*\
  !*** ./src/app/authorization/authorization-enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authorization": () => (/* binding */ authorization)
/* harmony export */ });
var authorization;
(function (authorization) {
  authorization["title"] = "authorization-title";
  authorization["form"] = "authorization-form";
  authorization["usernameDiv"] = "username-div";
  authorization["usernameLabel"] = "username-label";
  authorization["usernameInput"] = "username-Input";
  authorization["usernameError"] = "username-error";
  authorization["passwordDiv"] = "password-div";
  authorization["passwordLabel"] = "password-label";
  authorization["passwordInput"] = "password-Input";
  authorization["passwordError"] = "password-error";
  authorization["buttons"] = "buttons";
  authorization["registration"] = "registration-button";
  authorization["forgotPassword"] = "forgor-password-button";
  authorization["logIn"] = "log-in-button";
  authorization["showPassword"] = "show-password-button";
  authorization["passwordRevealed"] = "password";
})(authorization || (authorization = {}));

/***/ }),

/***/ 77949:
/*!**********************************************************!*\
  !*** ./src/app/authorization/authorization.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationComponent": () => (/* binding */ AuthorizationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _authorization_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorization-enum */ 40342);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 97354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);
/* harmony import */ var _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/succuess/succuess.component */ 50393);













function AuthorizationComponent_app_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", ctx_r0.errorMessage);
  }
}
function AuthorizationComponent_app_succuess_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-succuess", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("successText", ctx_r1.resources.authorizationSucessful);
  }
}
function AuthorizationComponent_form_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r8.attr.usernameError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.resources.authorizationInsertValue);
  }
}
function AuthorizationComponent_form_4_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r9.attr.passwordError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r9.resources.authorizationInsertValue);
  }
}
function AuthorizationComponent_form_4_input_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 21);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r10.attr.logIn);
  }
}
function AuthorizationComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AuthorizationComponent_form_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.LogInFunction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 10)(3, "div", 11)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AuthorizationComponent_form_4_span_7_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 11)(10, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AuthorizationComponent_form_4_span_13_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 16)(16, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthorizationComponent_form_4_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.forgotPassword = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AuthorizationComponent_form_4_input_22_Template, 1, 1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.LogIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.usernameDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.usernameLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.resources.authorisationUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r2.resources.authorisationUsername, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.usernameInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r7.submitted && ctx_r2.LogIn.get("username").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.passwordDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.passwordLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.resources.authorisationPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r2.resources.authorisationPassword, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.passwordInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r7.submitted && ctx_r2.LogIn.get("password").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.buttons);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "../", ctx_r2.resources.registrationURL, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.registration);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.resources.registrationTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.forgotPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.resources.authorizationForgotPasswordBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.loader);
  }
}
function AuthorizationComponent_app_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 6);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", ctx_r3.errorMessageForgot);
  }
}
function AuthorizationComponent_form_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r15.attr.usernameError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r15.resources.authorizationInsertValue);
  }
}
function AuthorizationComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function AuthorizationComponent_form_6_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.forgotPasswordFunction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 10)(3, "div", 11)(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AuthorizationComponent_form_6_span_7_Template, 2, 2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthorizationComponent_form_6_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.forgotPassword = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r4.ForgotPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.usernameDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.usernameLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.resources.authorisationUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r4.resources.authorisationUsername, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.usernameInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r14.submitted && ctx_r4.ForgotPassword.get("username").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.buttons);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("value", "Show ", ctx_r4.resources.authorisationPassword, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.showPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "../", ctx_r4.resources.registrationURL, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.registration);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.resources.registrationTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.logIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r4.resources.authorizationLogInBtn, "?");
  }
}
function AuthorizationComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r5.attr.passwordRevealed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r5.resources.authorizationShowPassword, " ", ctx_r5.password, "");
  }
}
function AuthorizationComponent_app_loader_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
  }
}
class AuthorizationComponent {
  constructor(resources, http, data) {
    this.resources = resources;
    this.http = http;
    this.data = data;
    this.forgotPassword = false;
    this.sucess = false;
    this.password = '';
    this.loader = false;
    this.attr = _authorization_enum__WEBPACK_IMPORTED_MODULE_0__.authorization;
    this.LogIn = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
    });
    this.ForgotPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email])
    });
  }
  LogInFunction() {
    if (this.LogIn.valid) {
      this.loader = true;
      const {
        username,
        password
      } = this.LogIn.value;
      this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url}/api/v1/login`, {
        username: username,
        password: password
      }).subscribe(data => {
        localStorage.setItem('User', JSON.stringify({
          token: data.token,
          username: data.username
        }));
        this.sucess = true;
        this.data.logedIn.next('');
        this.loader = false;
        this.error = false;
      }, err => {
        this.error = true;
        this.errorMessage = 'Something went wrong!';
        this.loader = false;
      });
    }
  }
  forgotPasswordFunction() {
    if (this.ForgotPassword.valid) {
      const {
        username: email
      } = this.ForgotPassword.value;
      // this.auth.forgotPassword(email)
    }
  }

  ngOnInit() {}
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) {
  return new (t || AuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService));
};
AuthorizationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AuthorizationComponent,
  selectors: [["app-authorization"]],
  decls: 9,
  vars: 9,
  consts: [[1, "title"], [3, "errorText", 4, "ngIf"], [3, "successText", 4, "ngIf"], ["action", "", "class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "alighn", 4, "ngIf"], [4, "ngIf"], [3, "errorText"], [3, "successText"], ["action", "", 1, "form", 3, "formGroup", "ngSubmit"], ["ngForm", "ngForm"], [1, "form-style"], [1, "input-wrapper"], [1, "input-name"], ["type", "text", "formControlName", "username", 1, "input", 3, "placeholder"], ["class", "invalid", 4, "ngIf"], ["type", "password", "formControlName", "password", 1, "input", 3, "placeholder"], [1, "buttons"], ["type", "button", 1, "forgot-password", 3, "routerLink"], ["type", "button", 1, "forgot-password", 3, "click"], ["type", "submit", "class", "edit-button", "value", "Log In", 4, "ngIf"], [1, "invalid"], ["type", "submit", "value", "Log In", 1, "edit-button"], ["type", "submit", 1, "edit-button", 3, "value"], [1, "alighn"]],
  template: function AuthorizationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AuthorizationComponent_app_error_2_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AuthorizationComponent_app_succuess_3_Template, 1, 1, "app-succuess", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AuthorizationComponent_form_4_Template, 23, 21, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AuthorizationComponent_app_error_5_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AuthorizationComponent_form_6_Template, 15, 16, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AuthorizationComponent_div_7_Template, 3, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AuthorizationComponent_app_loader_8_Template, 1, 0, "app-loader", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.resources.authorizationTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sucess);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.forgotPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorForgot);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.forgotPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.password != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_6__.SuccuessComponent],
  styles: ["*[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var( --font-Nunito);\n    font-weight: 400;\n}\n\nbody[_ngcontent-%COMP%]{\n    height: 100%;\n    margin: 0 auto;\n}\n\n[_ngcontent-%COMP%]:root {\n    \n    \n    --lighter-primary1-color: #42b1bd;\n    --light-primary1-color: #42a9bd;\n    --primary-primary1-color: #4298BD;\n    --dark-primary1-color: #428cbd;\n    --darker-primary1-color: #4261bd;\n\n\n    \n    --lighter-primary2-color: #323232;\n    --light-primary2-color: #282828;\n    --primary-primary2-color: #1E1E1E;\n    --dark-primary2-color: #141414;\n    --darker-primary2-color: #0A0A0A;\n\n\n    \n    --primary2-color: #000000;\n    \n    \n    --white-color: #fff;\n\n    \n    --font-Maitree: 'Maitree', serif;\n    --font-Noto: 'Noto Sans JP', sans-serif;\n    --font-Verdana: 'Verdana,Helvetica,Helvetica CE,Arial,Arial Regular,Arial CE,sans-serif;';\n    --font-Comme:  'Comme', sans-serif;\n    --font-Nunito: 'Nunito', sans-serif;\n\n    \n    --error-background-color: #f65454;\n\n    \n    --success-color: #4BB543;\n}\n\n.background-white[_ngcontent-%COMP%]{\nbackground-color: var(--white-color);\n}\n\n.background-transparent[_ngcontent-%COMP%]{\n    background-color: transparent;\n}\n\n.color-primary[_ngcontent-%COMP%]{\n    color: var(--primary-primary1-color)\n}\n\n.color-white[_ngcontent-%COMP%]{\n    color: var(--white-color)\n}\n\n.zindex[_ngcontent-%COMP%]{\n    z-index: 20;\n}\n\n.color-primary2[_ngcontent-%COMP%]{\n    color: var(--primary-primary2-color)\n}\n\n.display-not[_ngcontent-%COMP%]{\n    display: none;\n}\n.font-weight300[_ngcontent-%COMP%]{\n    font-weight: 300;\n}\n.font-weight400[_ngcontent-%COMP%]{\n    font-weight: 400;\n}\n.font-weight500[_ngcontent-%COMP%]{\n    font-weight: 500;\n}\n.font-weight600[_ngcontent-%COMP%]{\n    font-weight: 600;\n}\n.margin[_ngcontent-%COMP%]{\n    margin: 1rem;\n}\n\n.padding-right[_ngcontent-%COMP%]{\n    padding-right: 0.7rem ;\n}\n\n.transition[_ngcontent-%COMP%]{\n   transition: all 0.2s linear;\n}\n\nh1[_ngcontent-%COMP%]{\n    font-size: 3.3rem;\n   \n}\nh2[_ngcontent-%COMP%]{\n    font-size: 2.7rem;\n    font-family: var( --font-Comme);\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 2.2rem;\n    font-family: var( --font-Comme);\n}\nh4[_ngcontent-%COMP%]{\n    font-size: 1.7rem;\n}\nh5[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 0.85rem;\n    font-weight: 600;\n}\np[_ngcontent-%COMP%]{\n    font-weight: 300;\n    font-size: 0.9rem;\n    display: inline-block;\n}\n.flex[_ngcontent-%COMP%]{\n    display: flex;\n}\n.block[_ngcontent-%COMP%]{\n    display: block;\n}\n\n.invalid[_ngcontent-%COMP%]{\n    font-size: 0.8rem;\n    color: rgba(255,0,0, 0.8);\n    }\n\n\n    @media screen and (max-width:850px) {\n    .items[_ngcontent-%COMP%] {\n    margin-left: 15%;\n}\n}\n\n@media screen and (min-width:1300px) {\n    \n    h1[_ngcontent-%COMP%]{\n        font-size: 5rem;\n        \n    }\n    h2[_ngcontent-%COMP%]{\n        font-size: 3rem;\n        font-family: var( --font-Comme);\n    }\n    h3[_ngcontent-%COMP%]{\n        font-size: 2.5rem;\n        font-family: var( --font-Comme);\n    }\n    h4[_ngcontent-%COMP%]{\n        font-size: 1.8rem;\n    }\n    h5[_ngcontent-%COMP%]{\n        font-size: 1.3rem;\n    }\n    h6[_ngcontent-%COMP%]{\n    font-size: 1.1rem;\n    font-weight: 600;\n}\n    p[_ngcontent-%COMP%]{\n        font-weight: 300;\n        font-size: 1rem;\n            display: inline-block;\n    }\n}\n\n@media screen and (max-width:700px) {\nh1[_ngcontent-%COMP%]{\n    font-size: 4rem;\n   \n}\nh2[_ngcontent-%COMP%]{\n    font-size: 3rem;\n\n}\nh3[_ngcontent-%COMP%]{\n    font-size: 2rem;\n\n}\nh6[_ngcontent-%COMP%]{\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n} \n\n.title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 1rem;\n    font-weight: 500;\n}\n.btn[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    font-size: 1.5rem ;\n    margin-right: 0.5rem;\n    margin-left: 0.5rem;\n    cursor: pointer;\n}\n\n.padding[_ngcontent-%COMP%]{\n    padding: 1rem;\n}\n.margin[_ngcontent-%COMP%]{\n    margin: 1rem;\n}\n\n.width-100[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.aligh[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border: 5px solid #000;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: _ngcontent-%COMP%_rotation 1s linear infinite;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    }\n\n    @keyframes _ngcontent-%COMP%_rotation {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n    } \n\n.loader-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n\n.center-text[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.description[_ngcontent-%COMP%]{\n    display: block;\n    text-align: center;\n    margin: 2rem auto;\n    max-width: 800px;\n    padding: 0 1.5rem;\n}\n\n.loader[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    border: 5px solid #000;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: _ngcontent-%COMP%_rotation 1s linear infinite;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    }\n\n    @keyframes _ngcontent-%COMP%_rotation {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n    } \n\n\n.loader-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n\n.edit-button[_ngcontent-%COMP%]{\n    width: 35%;\n    cursor: pointer;\n    border-radius: 15px;\n    font-size: 1.2rem;\n    padding: 0.35rem 0.5rem;\n    background-color: var(--lighter-primary1-color);\n    border: 1px solid var(--darker-primary1-color);\n    color: var(--white-color);\n    font-weight: 500;\n    outline-offset: 5px;\n    outline: 1px solid var(--darker-primary1-color);\n    margin: 2rem auto;\n    display: block;\n}\n\n.input-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    border: none;\n}\n\n.input-name[_ngcontent-%COMP%]{\n font-size: 70%;\n color: var(--lighter-primary2-color);\n}\n\n.alighn[_ngcontent-%COMP%]{\n  text-align: center;\n  margin: 0 auto;\n}\n\n.input[_ngcontent-%COMP%]{\n    width: 100%;\n    max-width: 500px;\n    padding: 0.5rem 0.5rem 0.5rem 0.2rem;\n    border: 1.2px solid var(--darker-primary1-color);\n    border-radius: 3px;\n    \n}\n.input-width[_ngcontent-%COMP%]{\n    width: 65%;\n}\n\n@media screen and (max-width:950px) {\n.input[_ngcontent-%COMP%]{ \n  width: 80%;\n}\n}\n\n\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 1px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n}\n\n.line-vertical[_ngcontent-%COMP%]{\n    width: 1px;\n    min-height: 100%;\n    background-color: #d2d2d2;\n}\n.line-horizontal[_ngcontent-%COMP%]{\n    margin: 0.3rem 0;\n    height: 1px;\n    width: 100%;\n    background-color: #d2d2d2;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196F3;\n}\n.shadow[_ngcontent-%COMP%]{\n    box-shadow: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n\n\n\n.background-header[_ngcontent-%COMP%]{\n    background-color: var(--primary-primary2-color);\n}\n\n.dropdown[_ngcontent-%COMP%]{\n    background-color: var(--white-color);\n}\n\n\n\n\n[_ngcontent-%COMP%]:root{\n    --kontakt-dashboard-background: rgba(255, 140, 0, 0.2);\n    --price-list-dashoard: #FFD7A2;\n    --price-list-dark-color: var(--lighter-primary2-color);\n    --kalendar-text:#434345\n}\n.icon[_ngcontent-%COMP%]{\n    color: var(--primary-primary2-color);\n}\n.icon[_ngcontent-%COMP%]:hover{\n    color: var(--primary-primary1-color);\n}\n.icon-white[_ngcontent-%COMP%]{\n    color: var(--whitecolor);\n}\n.icon-white[_ngcontent-%COMP%]:hover{\n    transition: all linear 0.2s;\n    color: var(--primary-primary1-color);\n}\n.color-primary2[_ngcontent-%COMP%]:hover{\n    color: var(--primary-primary1-color);\n}\n\n.darker[_ngcontent-%COMP%]{\n     background-color: var(--lighter-primar2-color);\n}\n\n\n\n.input-box[_ngcontent-%COMP%]{\n    background-color: var(--price-list-dark-color);\n}\n.input-box2[_ngcontent-%COMP%]{\n    background-color: var(--price-list-dark-color);\n}\n.input-name[_ngcontent-%COMP%]{\n    color: var(--primary-primary2-color);\n}\n.input-description-box[_ngcontent-%COMP%]{\n    background-color: var(--price-list-dark-color);\n}\n.btn-submit[_ngcontent-%COMP%]{\n    background-color:var(--primary-primary1-color);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--darker-primary2-color); \n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--primary-primary2-color); \n}\n\n\n.form[_ngcontent-%COMP%]{\n    max-width: 1300px;\n    width: 50%;\n    margin: 3rem auto;\n}\n.form-style[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: 5%;\n}\n.input-box[_ngcontent-%COMP%]{\n    border: 1px solid var(--price-list-dark-color);\n    display: block;\n    padding: 0.5rem;\n    border-radius: 5px;\n    grid-area: header;\n}\n\n\ninput[_ngcontent-%COMP%]:focus {\n    outline: none;\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{\n    background-color: rgba(255,0,0, 0.8);\n}\n\n.btn-submit[_ngcontent-%COMP%]{\n    grid-area: button;\n    width: 98%;\n    outline: 1px solid var(--primary-primary1-color);\n    outline-offset: 10px;\n    border-radius:5px ;\n    margin-bottom: 1rem;\n    \n}\n.buttons[_ngcontent-%COMP%]{\n    \n    margin-bottom: 5rem;\n    text-align: center;\n}\n.forgot-password[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    color: var(--lighter-primary2-color);\n    cursor: pointer;\n}\n.forgot-password[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n}\n\n.success-wrapper[_ngcontent-%COMP%]{\n    display: block;\n    margin: 2rem auto;\n    text-align: center;\n}\n.success-box[_ngcontent-%COMP%]{\n    display: inline-block;\n    padding: 1rem 3rem;\n    background-color: #d2d2d2;\n    border-radius: 2px;\n    border: 2px solid var(--success-color);\n}\n.success-icon[_ngcontent-%COMP%]{\n    font-size: 150%;\n    color: var(--success-color);\n    margin-right: 1.5rem;\n}\n.success-text[_ngcontent-%COMP%]{\n    letter-spacing: 1px;\n    font-weight: 500;\n    font-size: 125%;\n}\n\n@media screen and (max-width:600px){\n    .form[_ngcontent-%COMP%]{\n        width: 85%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3ZhcmlhYmxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK1BBQStQO0FBQy9QLHNHQUFzRzs7QUFFdEc7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7OztJQUdoQyxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLGdDQUFnQzs7O0lBR2hDLGFBQWE7SUFDYix5QkFBeUI7O0lBRXpCLFVBQVU7SUFDVixtQkFBbUI7O0lBRW5CLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsdUNBQXVDO0lBQ3ZDLHlGQUF5RjtJQUN6RixrQ0FBa0M7SUFDbEMsbUNBQW1DOztJQUVuQyxnQkFBZ0I7SUFDaEIsaUNBQWlDOztJQUVqQyxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0dBRUc7QUFDSDtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtHQUNHLDJCQUEyQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekI7OztJQUdBO0lBQ0E7SUFDQSxnQkFBZ0I7QUFDcEI7QUFDQTs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7O0lBRW5CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO0lBQ0EsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7WUFDWCxxQkFBcUI7SUFDN0I7QUFDSjs7QUFFQTtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxlQUFlOztBQUVuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Q7O0lBRUE7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7O0FBRUo7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVDs7SUFFQTtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTs7O0FBR0o7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QiwrQ0FBK0M7SUFDL0MsOENBQThDO0lBQzlDLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxvQ0FBb0M7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdEQUFnRDtJQUNoRCxrQkFBa0I7SUFDbEI7NEJBQ3dCO0FBQzVCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBOzs7QUFHQSwyQ0FBMkM7QUFDM0M7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx1QkFBdUI7RUFFdkIsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUdFLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUdBLFdBQVc7QUFDWDtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7OztBQUlBLFlBQVk7QUFDWjtJQUNJLHNEQUFzRDtJQUN0RCw4QkFBOEI7SUFDOUIsc0RBQXNEO0lBQ3REO0FBQ0o7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtLQUNLLDhDQUE4QztBQUNuRDs7O0FBR0EsaUJBQWlCO0FBQ2pCO0lBQ0ksOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSw4Q0FBOEM7QUFDbEQ7QUFDQTtFQUNFLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFpdHJlZTp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmZhbWlseT1Ob3RvK1NlcmlmK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpOyAqL1xuLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpOyAqL1xuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHZhciggLS1mb250LU51bml0byk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbjpyb290IHtcbiAgICBcbiAgICAvKiBwcmltYXJ5MSAqL1xuICAgIC0tbGlnaHRlci1wcmltYXJ5MS1jb2xvcjogIzQyYjFiZDtcbiAgICAtLWxpZ2h0LXByaW1hcnkxLWNvbG9yOiAjNDJhOWJkO1xuICAgIC0tcHJpbWFyeS1wcmltYXJ5MS1jb2xvcjogIzQyOThCRDtcbiAgICAtLWRhcmstcHJpbWFyeTEtY29sb3I6ICM0MjhjYmQ7XG4gICAgLS1kYXJrZXItcHJpbWFyeTEtY29sb3I6ICM0MjYxYmQ7XG5cblxuICAgIC8qIHByaW1hcnkyIHByaW1hcnkgKi9cbiAgICAtLWxpZ2h0ZXItcHJpbWFyeTItY29sb3I6ICMzMjMyMzI7XG4gICAgLS1saWdodC1wcmltYXJ5Mi1jb2xvcjogIzI4MjgyODtcbiAgICAtLXByaW1hcnktcHJpbWFyeTItY29sb3I6ICMxRTFFMUU7XG4gICAgLS1kYXJrLXByaW1hcnkyLWNvbG9yOiAjMTQxNDE0O1xuICAgIC0tZGFya2VyLXByaW1hcnkyLWNvbG9yOiAjMEEwQTBBO1xuXG5cbiAgICAvKiBwcmltYXJ5MiAqL1xuICAgIC0tcHJpbWFyeTItY29sb3I6ICMwMDAwMDA7XG4gICAgXG4gICAgLyogd2hpdGUgKi9cbiAgICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xuXG4gICAgLyogZm9udHMgKi9cbiAgICAtLWZvbnQtTWFpdHJlZTogJ01haXRyZWUnLCBzZXJpZjtcbiAgICAtLWZvbnQtTm90bzogJ05vdG8gU2FucyBKUCcsIHNhbnMtc2VyaWY7XG4gICAgLS1mb250LVZlcmRhbmE6ICdWZXJkYW5hLEhlbHZldGljYSxIZWx2ZXRpY2EgQ0UsQXJpYWwsQXJpYWwgUmVndWxhcixBcmlhbCBDRSxzYW5zLXNlcmlmOyc7XG4gICAgLS1mb250LUNvbW1lOiAgJ0NvbW1lJywgc2Fucy1zZXJpZjtcbiAgICAtLWZvbnQtTnVuaXRvOiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcblxuICAgIC8qIGVycm9yIGNvbG9yICovXG4gICAgLS1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZjY1NDU0O1xuXG4gICAgLyogc3VjY2VzcyBjb2xvciAgKi9cbiAgICAtLXN1Y2Nlc3MtY29sb3I6ICM0QkI1NDM7XG59XG5cbi5iYWNrZ3JvdW5kLXdoaXRle1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xufVxuLyogLmxpbmFyLWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLXdoaXRlLWNvbG9yKSwgdmFyKC0ta29udGFrdC1kYXNoYm9hcmQtYmFja2dyb3VuZCkgODUlLCB2YXIoLS13aGl0ZS1jb2xvcikpO1xufSAqL1xuLmJhY2tncm91bmQtdHJhbnNwYXJlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb2xvci1wcmltYXJ5e1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKVxufVxuXG4uY29sb3Itd2hpdGV7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKVxufVxuXG4uemluZGV4e1xuICAgIHotaW5kZXg6IDIwO1xufVxuXG4uY29sb3ItcHJpbWFyeTJ7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHJpbWFyeTItY29sb3IpXG59XG5cbi5kaXNwbGF5LW5vdHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmZvbnQtd2VpZ2h0MzAwe1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZm9udC13ZWlnaHQ0MDB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb250LXdlaWdodDUwMHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvbnQtd2VpZ2h0NjAwe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFyZ2lue1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLnBhZGRpbmctcmlnaHR7XG4gICAgcGFkZGluZy1yaWdodDogMC43cmVtIDtcbn1cblxuLnRyYW5zaXRpb257XG4gICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG5cbmgxe1xuICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xuICAgXG59XG5oMntcbiAgICBmb250LXNpemU6IDIuN3JlbTtcbiAgICBmb250LWZhbWlseTogdmFyKCAtLWZvbnQtQ29tbWUpO1xufVxuaDN7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgZm9udC1mYW1pbHk6IHZhciggLS1mb250LUNvbW1lKTtcbn1cbmg0e1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuaDV7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5oNntcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbnB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsb2Nre1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW52YWxpZHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMCwwLCAwLjgpO1xuICAgIH1cblxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCkge1xuICAgIC5pdGVtcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzAwcHgpIHtcbiAgICBcbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICBcbiAgICB9XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhciggLS1mb250LUNvbW1lKTtcbiAgICB9XG4gICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKCAtLWZvbnQtQ29tbWUpO1xuICAgIH1cbiAgICBoNHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gICAgaDZ7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiAgICBwe1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KSB7XG5oMXtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICBcbn1cbmgye1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcblxufVxuaDN7XG4gICAgZm9udC1zaXplOiAycmVtO1xuXG59XG5oNntcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxufSBcblxuLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDEuNXJlbSA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG4ubWFyZ2lue1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLndpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFsaWdoIFxuXG4ubG9hZGVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICAgIH0gXG5cbi5sb2FkZXItd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2VudGVyLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRlc2NyaXB0aW9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xufVxuXG4ubG9hZGVyIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICAgIH0gXG5cblxuLmxvYWRlci13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lZGl0LWJ1dHRvbntcbiAgICB3aWR0aDogMzUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG91dGxpbmUtb2Zmc2V0OiA1cHg7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbnB1dC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnB1dC1uYW1le1xuIGZvbnQtc2l6ZTogNzAlO1xuIGNvbG9yOiB2YXIoLS1saWdodGVyLXByaW1hcnkyLWNvbG9yKTtcbn1cblxuLmFsaWdobntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMC4ycmVtO1xuICAgIGJvcmRlcjogMS4ycHggc29saWQgdmFyKC0tZGFya2VyLXByaW1hcnkxLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07ICovXG59XG4uaW5wdXQtd2lkdGh7XG4gICAgd2lkdGg6IDY1JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NTBweCkge1xuLmlucHV0eyBcbiAgd2lkdGg6IDgwJTtcbn1cbn1cblxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFRoZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgbGVmdDogMXB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5saW5lLXZlcnRpY2Fse1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xufVxuLmxpbmUtaG9yaXpvbnRhbHtcbiAgICBtYXJnaW46IDAuM3JlbSAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuLnNoYWRvd3tcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4O1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG4vKiBoZWFkZXIgKi9cbi5iYWNrZ3JvdW5kLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkyLWNvbG9yKTtcbn1cblxuLmRyb3Bkb3due1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbn1cblxuXG5cbi8qIGtvbnRha3QgKi9cbjpyb290e1xuICAgIC0ta29udGFrdC1kYXNoYm9hcmQtYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MCwgMCwgMC4yKTtcbiAgICAtLXByaWNlLWxpc3QtZGFzaG9hcmQ6ICNGRkQ3QTI7XG4gICAgLS1wcmljZS1saXN0LWRhcmstY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTItY29sb3IpO1xuICAgIC0ta2FsZW5kYXItdGV4dDojNDM0MzQ1XG59XG4uaWNvbntcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5Mi1jb2xvcik7XG59XG4uaWNvbjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5MS1jb2xvcik7XG59XG4uaWNvbi13aGl0ZXtcbiAgICBjb2xvcjogdmFyKC0td2hpdGVjb2xvcik7XG59XG4uaWNvbi13aGl0ZTpob3ZlcntcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xufVxuLmNvbG9yLXByaW1hcnkyOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbn1cblxuLmRhcmtlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1wcmltYXIyLWNvbG9yKTtcbn1cblxuXG4vKiBrb250YWt0IGZvcm0gKi9cbi5pbnB1dC1ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpY2UtbGlzdC1kYXJrLWNvbG9yKTtcbn1cbi5pbnB1dC1ib3gye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaWNlLWxpc3QtZGFyay1jb2xvcik7XG59XG4uaW5wdXQtbmFtZXtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5Mi1jb2xvcik7XG59XG4uaW5wdXQtZGVzY3JpcHRpb24tYm94e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaWNlLWxpc3QtZGFyay1jb2xvcik7XG59XG4uYnRuLXN1Ym1pdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1wcmltYXJ5Mi1jb2xvcik7IFxufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktcHJpbWFyeTItY29sb3IpOyBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDhDQUE4QztJQUM5QyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBOztJQUVJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsZ0RBQWdEO0lBQ2hELG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3NoYXJlZC92YXJpYWJsZXMuY3NzJztcbi5mb3Jte1xuICAgIG1heC13aWR0aDogMTMwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XG59XG4uZm9ybS1zdHlsZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG4uaW5wdXQtYm94e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaWNlLWxpc3QtZGFyay1jb2xvcik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuXG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwwLDAsIDAuOCk7XG59XG5cbi5idG4tc3VibWl0e1xuICAgIGdyaWQtYXJlYTogYnV0dG9uO1xuICAgIHdpZHRoOiA5OCU7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NXB4IDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIFxufVxuLmJ1dHRvbnN7XG4gICAgLyogbWFyZ2luLXRvcDogMnJlbTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jnb3QtcGFzc3dvcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLXByaW1hcnkyLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9yZ290LXBhc3N3b3JkOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc3VjY2Vzcy13cmFwcGVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWNjZXNzLWJveHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xufVxuLnN1Y2Nlc3MtaWNvbntcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuLnN1Y2Nlc3MtdGV4dHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMjUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAuZm9ybXtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23524:
/*!*****************************************!*\
  !*** ./src/app/billing/billing-enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "billing": () => (/* binding */ billing)
/* harmony export */ });
var billing;
(function (billing) {
  billing["deliveryMethod"] = "shipping-delivery-method";
  billing["deliveryTable"] = "shipping-delivery-table";
  billing["deliveryPersonalPickupTr"] = "shippig-personal-pick-up-tr";
  billing["deliveryPersonalPickupInput"] = "shippig-personal-pick-up-input";
  billing["deliveryPersonalPickupOption"] = "shippig-personal-pick-up-option";
  billing["deliveryPersonalPickupFee"] = "shippig-personal-pick-up-fee";
  billing["deliveryPersonalPickupDelivery"] = "shippig-personal-pick-up-delivery";
  billing["deliveryPostTr"] = "shippig-post-tr";
  billing["deliveryPostInput"] = "shippig-post-input";
  billing["deliveryPostOption"] = "shippig-post-option";
  billing["deliveryPostFee"] = "shippig-post-fee";
  billing["deliveryPostDelivery"] = "shippig-post-delivery";
  billing["deliveryCurierTr"] = "shippig-curier-tr";
  billing["deliveryCurierInput"] = "shippig-curier-input";
  billing["deliveryCurierOption"] = "shippig-curier-option";
  billing["deliveryCurierFee"] = "shippig-curier-fee";
  billing["deliveryCurierDelivery"] = "shippig-curier-delivery";
  billing["deliveryError"] = "delivery-error-message";
  billing["paymentMethod"] = "shipping-delivery-method";
  billing["paymentTable"] = "shipping-delivery-table";
  billing["paymentCardTr"] = "shippig-card-tr";
  billing["paymentCardInput"] = "shippig-card-input";
  billing["paymentCardOption"] = "shippig-card-option";
  billing["paymentCardFee"] = "shippig-card-fee";
  billing["paymentGooglePayTr"] = "shippig-google-pay-tr";
  billing["paymentGooglePayInput"] = "shippig-google-pay-input";
  billing["paymentGooglePayOption"] = "shippig-google-pay-option";
  billing["paymentGooglePayFee"] = "shippig-google-pay-fee";
  billing["paymentPaypalTr"] = "shippig-paypal-tr";
  billing["paymentPaypalInput"] = "shippig-paypal-input";
  billing["paymentPaypalOption"] = "shippig-paypal-option";
  billing["paymentPaypalFee"] = "shippig-paypal-fee";
  billing["paymentCryptocurrencyTr"] = "shippig-cryptocurrency-tr";
  billing["paymentCryptocurrencyInput"] = "shippig-cryptocurrency-input";
  billing["paymentCryptocurrencyOption"] = "shippig-cryptocurrency-option";
  billing["paymentCryptocurrencyFee"] = "shippig-cryptocurrency-fee";
  billing["paymentBankTransferTr"] = "shippig-bank-transfer-tr";
  billing["paymentBankTransferInput"] = "shippig-bank-transfer-input";
  billing["paymentBankTransferOption"] = "shippig-bank-transfer-option";
  billing["paymentBankTransferFee"] = "shippig-bank-transfer-fee";
  billing["paymentCashTr"] = "shippig-cash-tr";
  billing["paymentCashInput"] = "shippig-cash-input";
  billing["paymentCashOption"] = "shippig-cash-option";
  billing["paymentCashFee"] = "shippig-cash-fee";
  billing["paymentError"] = "payment-error-message";
  billing["backToCartNavigation"] = "shipping-back-to-cart-navigation";
  billing["addressNavigation"] = "shipping-address-navigation";
})(billing || (billing = {}));

/***/ }),

/***/ 23261:
/*!**********************************************!*\
  !*** ./src/app/billing/billing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingComponent": () => (/* binding */ BillingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _billing_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing-enum */ 23524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/cart-navigation/cart-navigation.component */ 97474);








const _c0 = ["payment"];
function BillingComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BillingComponent_tr_6_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const shipping_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.shippingFunction(shipping_r4.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const shipping_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", shipping_r4.TRData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", shipping_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", shipping_r4.title == ctx_r0.shippingfee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", shipping_r4.inputData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", shipping_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", shipping_r4.optionData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](shipping_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", shipping_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", shipping_r4.feeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](shipping_r4.fee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", shipping_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", shipping_r4.deliveryData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](shipping_r4.delivery);
  }
}
function BillingComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r1.attr.deliveryError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.resources.billingErrorMessage);
  }
}
function BillingComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function BillingComponent_tr_12_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const payment_r8 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.paymentMethodFunction(payment_r8.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const payment_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", payment_r8.TRData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", payment_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", payment_r8.title == ctx_r2.paymentMethodfee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", payment_r8.inputData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", payment_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", payment_r8.optionData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](payment_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", payment_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", payment_r8.feeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](payment_r8.fee);
  }
}
function BillingComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r3.attr.paymentError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.resources.billingErrorMessage);
  }
}
class BillingComponent {
  constructor(resources, router) {
    this.resources = resources;
    this.router = router;
    this.attr = _billing_enum__WEBPACK_IMPORTED_MODULE_0__.billing;
    this.shippingfee = '';
    this.paymentMethodfee = '';
    this.showErrorMessage = false;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      shipping: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }
  shippingFunction(item) {
    this.shippingfee = item;
  }
  paymentMethodFunction(item) {
    this.paymentMethodfee = item;
  }
  navigateTo() {
    this.showErrorMessage = true;
    if (this.paymentMethodfee && this.shippingfee) {
      localStorage.setItem('Shipping', JSON.stringify({
        shipping: this.shippingfee,
        payment: this.paymentMethodfee
      }));
      this.router.navigate([this.resources.adresstitle]);
    }
  }
  ngOnInit() {
    if (localStorage.getItem('Shipping')) {
      this.shippingfee = JSON.parse(localStorage.getItem('Shipping')).shipping;
      this.paymentMethodfee = JSON.parse(localStorage.getItem('Shipping')).payment;
    }
  }
}
BillingComponent.ɵfac = function BillingComponent_Factory(t) {
  return new (t || BillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
BillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BillingComponent,
  selectors: [["app-billing"]],
  viewQuery: function BillingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.payment = _t.first);
    }
  },
  decls: 21,
  vars: 19,
  consts: [[1, "billing-wrapper"], [1, "billing-shipping-method", "billing-title"], [1, "billing-table"], [1, "billing-form", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "billing-error-message", 4, "ngIf"], [1, "billing-payment", "billing-title"], [1, "cart-wrapper", "cart-navigation"], [1, "cart-navidation-btn", 3, "routerLink"], [1, "cart-navidation-icon", 3, "icon"], [1, "cart-navidation-btn", 3, "click"], ["type", "radio", "name", "pick_up", 3, "id", "checked", "change"], [3, "for"], [1, "billing-error-message"], ["type", "radio", "name", "payment", 3, "id", "checked", "change"]],
  template: function BillingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-cart-navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BillingComponent_tr_6_Template, 12, 13, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BillingComponent_p_7_Template, 2, 2, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2)(11, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BillingComponent_tr_12_Template, 9, 10, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BillingComponent_p_13_Template, 2, 2, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "fa-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BillingComponent_Template_button_click_18_listener() {
        return ctx.navigateTo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "fa-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.deliveryMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.billingMainDescription);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.shippingfee && ctx.showErrorMessage ? "billing-error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.deliveryTable);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.resources.billingShiping);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.shippingfee && ctx.showErrorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.paymentMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.billintChoosePaymentType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", !ctx.paymentMethodfee && ctx.showErrorMessage ? "billing-error" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.paymentTable);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.resources.billingPaymentMethod);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.paymentMethodfee && ctx.showErrorMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/" + ctx.resources.cartURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.backToCartNavigation);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.resources.arrowLeft);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Back to ", ctx.resources.cartURL, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.addressNavigation);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.resources.adresstitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.resources.arrowRight);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_2__.CartNavigationComponent],
  styles: [".billing-title[_ngcontent-%COMP%]{\n    margin: 1rem;\n    text-align: center;\n\n }\n .billing-table[_ngcontent-%COMP%]{\n\n }\n table[_ngcontent-%COMP%]{\n    border-collapse: collapse;\n }\n .billing-form[_ngcontent-%COMP%]{\n    box-shadow: 0 0 5px;\n    padding: 0.5rem;\n    margin: 0 auto;\n    width: 60%;\n    text-align: center;\n    border-radius: 10px;\n }\ntd[_ngcontent-%COMP%]{\n    padding: 0.5rem;\n        border-bottom: 1px solid #d2d2d2 ;\n}\n.billing-payment[_ngcontent-%COMP%]{\n    margin-top: 3rem;\n}\n\n.cart-navigation[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    margin: 2rem 3rem;\n}\n.cart-navidation-btn[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    padding: 0.2rem 0.5rem;\n    background-color: var(--primary-primary1-color);\n    border-radius: 5px;\n    border: 1px solid var(--darker-primary1-color);\n    cursor: pointer;\n    color: var(--white-color);\n}\n\n.cart-navidation-btn[_ngcontent-%COMP%]:hover{\n    color: var(--darker-primary2-color);\n    transition: 0.1s linear;\n}\n.billing-error-message[_ngcontent-%COMP%]{\n    color: red;\n    text-align: center;\n    display: block;\n    margin: 1rem;\n}\n\n.billing-error[_ngcontent-%COMP%]{\n    color: red;\n}\ntr[_ngcontent-%COMP%]:hover{\n    background-color: #d2d2d2;\n}\n\n@media screen  and (max-width:550px){\n    .total[_ngcontent-%COMP%]{\n        margin: 1rem 0.5rem;\n    }\n    .cart-navigation[_ngcontent-%COMP%]{\n        margin: 2rem 0.5rem;\n    }\n     .billing-form[_ngcontent-%COMP%]{\n        width: 90%;\n     }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmlsbGluZy9iaWxsaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxZQUFZO0lBQ1osa0JBQWtCOztDQUVyQjtDQUNBOztDQUVBO0NBQ0E7SUFDRyx5QkFBeUI7Q0FDNUI7Q0FDQTtJQUNHLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztJQUNkLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO1FBQ1gsaUNBQWlDO0FBQ3pDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QiwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtLQUNDO1FBQ0csVUFBVTtLQUNiO0FBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyIgLmJpbGxpbmctdGl0bGV7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuIH1cbiAuYmlsbGluZy10YWJsZXtcblxuIH1cbiB0YWJsZXtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuIH1cbiAuYmlsbGluZy1mb3Jte1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHg7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gfVxudGR7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QyZDJkMiA7XG59XG4uYmlsbGluZy1wYXltZW50e1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbi5jYXJ0LW5hdmlnYXRpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAycmVtIDNyZW07XG59XG4uY2FydC1uYXZpZGF0aW9uLWJ0bntcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xufVxuXG4uY2FydC1uYXZpZGF0aW9uLWJ0bjpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLXByaW1hcnkyLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGxpbmVhcjtcbn1cbi5iaWxsaW5nLWVycm9yLW1lc3NhZ2V7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuXG4uYmlsbGluZy1lcnJvcntcbiAgICBjb2xvcjogcmVkO1xufVxudHI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDJkMjtcbn1cblxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6NTUwcHgpe1xuICAgIC50b3RhbHtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgICB9XG4gICAgLmNhcnQtbmF2aWdhdGlvbntcbiAgICAgICAgbWFyZ2luOiAycmVtIDAuNXJlbTtcbiAgICB9XG4gICAgIC5iaWxsaW5nLWZvcm17XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 25828:
/*!***********************************!*\
  !*** ./src/app/cart/cart-enum.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cart": () => (/* binding */ cart)
/* harmony export */ });
var cart;
(function (cart) {
  cart["cartWrapper"] = "cart-wrapper";
  cart["cartSingleItem"] = "cart-single-item-";
  cart["cartImage"] = "cart-item-image-";
  cart["cartTitle"] = "cart-item-title-";
  cart["cartPrice"] = "cart-item-price-";
  cart["cartCount"] = "cart-item-count-";
  cart["cartPriceWithAccesories"] = "cart-single-item-total-price-";
  cart["cartDeleteItem"] = "cart-delete-item-";
  cart["cartWarrantyTitle"] = "cart-warranty-title-";
  cart["cartWarrantyPrice"] = "cart-warranty-price-";
  cart["cartWarrantyDelete"] = "cart-warranty-delete-";
  cart["cartReturnOptionTitle"] = "cart-return-option-title";
  cart["cartReturnOptionPrice"] = "cart-return-option-price";
  cart["cartReturnOptionDelete"] = "cart-return-option-delete";
  cart["cartPriceWithoutDPHTitle"] = "cart-price-without-DPH-title";
  cart["cartPriceWithoutDPHPrice"] = "cart-price-without-DPH-price";
  cart["cartDPHTitle"] = "cart-DPH-title";
  cart["cartDPHPrice"] = "cart-DPH-price";
  cart["cartTotalPriceTitle"] = "cart-total-price-title";
  cart["cartTotalPricePrice"] = "cart-total-price-price";
  cart["cartBackToShopNavigation"] = "cart-back-to-shop-navigation";
  cart["cartBillingNavigation"] = "cart-billing-navigation";
})(cart || (cart = {}));

/***/ }),

/***/ 85250:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _cart_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-enum */ 25828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/common.service */ 7577);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/cart-navigation/cart-navigation.component */ 97474);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);











function CartComponent_app_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
  }
}
function CartComponent_app_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", "Your cart is empty!");
  }
}
function CartComponent_app_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", "Something whet wrong!");
  }
}
function CartComponent_div_4_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "20 \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CartComponent_div_4_div_1_div_12_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.deleteWaranty(item_r7.idItems));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r9.attr.cartWarrantyTitle + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r9.resources.cartWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r9.attr.cartWarrantyPrice + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r9.attr.cartWarrantyDelete + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r9.resources.close);
  }
}
function CartComponent_div_4_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "10 \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CartComponent_div_4_div_1_div_13_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.deleteReturnOption(item_r7.idItems));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r10.attr.cartReturnOptionTitle + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r10.resources.cartReturnOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r10.attr.cartReturnOptionPrice + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r10.attr.cartReturnOptionDelete + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r10.resources.close);
  }
}
function CartComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CartComponent_div_4_div_1_Template_input_change_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r19.amountChange(item_r7.idItems, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CartComponent_div_4_div_1_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.deleteItem(item_r7.idItems));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CartComponent_div_4_div_1_div_12_Template, 7, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, CartComponent_div_4_div_1_div_13_Template, 7, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r6.attr.cartSingleItem + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r6.attr.cartImage + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r6.attr.cartTitle + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r6.attr.cartPrice + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r7.price, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", item_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r6.attr.cartCount + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r6.attr.cartPriceWithAccesories + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r6.common.totalItemPrice(item_r7.price, item_r7.waranty, item_r7.returnOption, item_r7.amount), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r6.attr.cartDeleteItem + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r6.resources.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.waranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r7.returnOption);
  }
}
function CartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CartComponent_div_4_div_1_Template, 14, 15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r3.attr.cartWrapper);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.items);
  }
}
function CartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 24)(7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "+ 20 %");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 24)(12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.cartPriceWithoutDPHTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.resources.cartPriceWithoutDPH);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.cartPriceWithoutDPHPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r4.common.allItemsPrice(ctx_r4.items), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.cartDPHTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.resources.cartDPH);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.cartDPHPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.cartTotalPriceTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.resources.cartTotalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r4.attr.cartTotalPricePrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r4.common.amountWithDPH(ctx_r4.common.allItemsPrice(ctx_r4.items)), " \u20AC");
  }
}
function CartComponent_div_6_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r22.resources.billingPageTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r22.attr.cartBillingNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r22.resources.cartBillingNavigation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r22.resources.arrowRight);
  }
}
function CartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CartComponent_div_6_button_4_Template, 3, 4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/" + ctx_r5.resources.mainPageURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r5.attr.cartBackToShopNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r5.resources.arrowLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.resources.cartBactToShopingNavigation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r5.loader && ctx_r5.items.length !== 0);
  }
}
class CartComponent {
  constructor(resources, common, data) {
    this.resources = resources;
    this.common = common;
    this.data = data;
    this.loader = true;
    this.allItemPrice = 0;
    this.allItemPriceWithDPH = 0;
    this.items = undefined;
    this.attr = _cart_enum__WEBPACK_IMPORTED_MODULE_0__.cart;
    this.originalData = JSON.parse(localStorage.getItem('Items'));
    this.data.getItemsAttributes(this.originalData).subscribe(item => {
      this.loader = false;
      this.items = item;
      this.allItemPrice = this.common.allItemsPrice(item);
    }, err => {
      this.loader = false;
      this.error = true;
    });
  }
  deleteItem(id) {
    this.originalData = this.originalData.filter(element => element.idItems !== id);
    this.items = this.items.filter(element => element.idItems !== id);
    localStorage.setItem('Items', JSON.stringify(this.originalData));
    this.common.badge.next('');
  }
  warantyAndReturnOptionChange(dataArray, id, category) {
    dataArray.map(element => {
      if (element.idItems == id) {
        element[category] = false;
      }
      return element;
    });
  }
  deleteWaranty(id) {
    this.warantyAndReturnOptionChange(this.originalData, id, 'waranty');
    this.warantyAndReturnOptionChange(this.items, id, 'waranty');
    localStorage.setItem('Items', JSON.stringify(this.originalData));
  }
  deleteReturnOption(id) {
    this.warantyAndReturnOptionChange(this.originalData, id, 'returnOption');
    this.warantyAndReturnOptionChange(this.items, id, 'returnOption');
    localStorage.setItem('Items', JSON.stringify(this.originalData));
  }
  changevalue(array, id, value) {
    array.map(element => {
      if (element.idItems == id) {
        element.amount = value;
      }
      if (element.amount == 0) {
        this.deleteItem(id);
      } else {
        return element;
      }
    });
  }
  amountChange(id, event) {
    const value = +event.target.value;
    this.changevalue(this.originalData, id, value);
    this.changevalue(this.items, id, value);
    localStorage.setItem('Items', JSON.stringify(this.originalData));
    this.common.badge.next('');
  }
  ngOnInit() {}
}
CartComponent.ɵfac = function CartComponent_Factory(t) {
  return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService));
};
CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CartComponent,
  selectors: [["app-cart"]],
  decls: 7,
  vars: 6,
  consts: [[4, "ngIf"], [3, "errorText", 4, "ngIf"], ["class", "cart-wrapper", 4, "ngIf"], ["class", "cart-wrapper total-wrapper", 4, "ngIf"], ["class", "cart-wrapper cart-navigation", 4, "ngIf"], [3, "errorText"], [1, "cart-wrapper"], ["class", "cart-single-element", 4, "ngFor", "ngForOf"], [1, "cart-single-element"], [1, "cart-info"], ["alt", "", 1, "cart-image", 3, "src"], [1, "cart-title"], [1, "cart-price"], ["type", "number", 1, "cart-count", 3, "value", "change"], [1, "cart-single-total-price"], [1, "close", "close-mobile", 3, "click"], [1, "close-icon", "close-icon-mobile", 3, "icon"], ["class", "cart-additional", 4, "ngIf"], [1, "cart-additional"], [1, "cart-additional-label"], [1, "cart-additional-price"], [1, "close", 3, "click"], [1, "close-icon", 3, "icon"], [1, "cart-wrapper", "total-wrapper"], [1, "total"], [1, "cart-total-price"], [1, "cart-wrapper", "cart-navigation"], [1, "cart-navidation-btn", 3, "routerLink"], [1, "cart-navidation-icon", 3, "icon"], ["class", "cart-navidation-btn", 3, "routerLink", 4, "ngIf"]],
  template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-cart-navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CartComponent_app_loader_1_Template, 1, 0, "app-loader", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CartComponent_app_error_2_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CartComponent_app_error_3_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CartComponent_div_4_Template, 2, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CartComponent_div_5_Template, 16, 11, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CartComponent_div_6_Template, 5, 5, "div", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loader && ctx.items.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.items !== undefined && ctx.error !== true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.items !== undefined && ctx.error !== true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.items !== undefined && ctx.error !== true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _shared_components_cart_navigation_cart_navigation_component__WEBPACK_IMPORTED_MODULE_4__.CartNavigationComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent],
  styles: [".cart-wrapper[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\n.cart-info[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1rem;\n}\n.cart-single-element[_ngcontent-%COMP%]{\n    box-shadow: 0 0 5px;\n    border-radius: 5px;\n    max-width: 95%;\n    margin: 0 auto;\n}\n.cart-image[_ngcontent-%COMP%]{\n    width: 7.5rem;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n.cart-title[_ngcontent-%COMP%]{\n    font-weight: 600;\n    color: var(--darker-primary1-color);\n}\n.cart-count[_ngcontent-%COMP%]{\n    width: 4.5rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    text-align: center;\n}\n.cart-single-total-price[_ngcontent-%COMP%]{\n    font-weight: 600;\n    font-family: var(--font-Maitree);\n}\n.cart-additional[_ngcontent-%COMP%]{\n    margin-left: 25%;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    max-width: 40%;\n    justify-content: space-between;\n    padding-bottom: 0.5rem;\n    text-align: center;\n}\n\n.cart-additional-label[_ngcontent-%COMP%]{\n    text-align: left;\n    font-weight: 500;\n}\n\n.close[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n.close-icon[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    color: red;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {  \n\n   opacity: 1;\n\n}\n\n@media screen and (max-width:450px) {\n.cart-info[_ngcontent-%COMP%]{\n    display: block;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1rem;\n    text-align: center;\n    position: relative;\n}\n.cart-additional[_ngcontent-%COMP%]{\n    margin-left: 5%;\n    max-width: 100%;\n}\n.cart-image[_ngcontent-%COMP%]{\n    width: 100%;\n    \n}\n.cart-title[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-right: 2rem;\n}\n.cart-price[_ngcontent-%COMP%]{\n    display: inline-block;\n        margin-right: 2rem;\n}\n.close-mobile[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 1%;\n    right: 1%;\n}\n.close-icon-mobile[_ngcontent-%COMP%]{\n    font-size: 1.5rem;\n}\n}\n\n\n\n\n.total-wrapper[_ngcontent-%COMP%]{\n    border-top: 0.1px solid #d2d2d2;\n}\n.total[_ngcontent-%COMP%]{\n    margin: 1rem 5rem;\n    display: flex;\n    justify-content: space-between;\n}\n.DPH-count[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.cart-navigation[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    margin: 2rem 3rem;\n}\n.cart-navidation-btn[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    padding: 0.2rem 0.5rem;\n    background-color: var(--primary-primary1-color);\n    border-radius: 5px;\n    border: 1px solid var(--darker-primary1-color);\n    cursor: pointer;\n    color: var(--white-color);\n}\n\n.cart-navidation-btn[_ngcontent-%COMP%]:hover{\n    color: var(--darker-primary2-color);\n    transition: 0.1s linear;\n}\n\n@media screen  and (max-width:450px){\n    .total[_ngcontent-%COMP%]{\n        margin: 1rem 0.5rem;\n    }\n    .cart-navigation[_ngcontent-%COMP%]{\n        margin: 2rem 0.5rem;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7OztHQUdHLFVBQVU7O0FBRWI7O0FBRUE7QUFDQTtJQUNJLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO1FBQ2pCLGtCQUFrQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQixVQUFVOztBQUVWO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QiwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7O0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC13cmFwcGVye1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG4uY2FydC1pbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtO1xufVxuLmNhcnQtc2luZ2xlLWVsZW1lbnR7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FydC1pbWFnZXtcbiAgICB3aWR0aDogNy41cmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5jYXJ0LXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG59XG4uY2FydC1jb3VudHtcbiAgICB3aWR0aDogNC41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FydC1zaW5nbGUtdG90YWwtcHJpY2V7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1NYWl0cmVlKTtcbn1cbi5jYXJ0LWFkZGl0aW9uYWx7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJ0LWFkZGl0aW9uYWwtbGFiZWx7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2xvc2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jbG9zZS1pY29ue1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyAgXG5cbiAgIG9wYWNpdHk6IDE7XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0NTBweCkge1xuLmNhcnQtaW5mb3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJ0LWFkZGl0aW9uYWx7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbi5jYXJ0LWltYWdle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIG1hcmdpbi10b3A6IDFyZW07ICovXG59XG4uY2FydC10aXRsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLmNhcnQtcHJpY2V7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uY2xvc2UtbW9iaWxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDElO1xuICAgIHJpZ2h0OiAxJTtcbn1cbi5jbG9zZS1pY29uLW1vYmlsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cbn1cblxuLyogPT09PT09PT09PT09PT0gKi9cbi8qIHRvdGFsICovXG5cbi50b3RhbC13cmFwcGVye1xuICAgIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkICNkMmQyZDI7XG59XG4udG90YWx7XG4gICAgbWFyZ2luOiAxcmVtIDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uRFBILWNvdW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmNhcnQtbmF2aWdhdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDJyZW0gM3JlbTtcbn1cbi5jYXJ0LW5hdmlkYXRpb24tYnRue1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5MS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG59XG5cbi5jYXJ0LW5hdmlkYXRpb24tYnRuOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItcHJpbWFyeTItY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuMXMgbGluZWFyO1xufVxuXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC13aWR0aDo0NTBweCl7XG4gICAgLnRvdGFse1xuICAgICAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICAgIH1cbiAgICAuY2FydC1uYXZpZ2F0aW9ue1xuICAgICAgICBtYXJnaW46IDJyZW0gMC41cmVtO1xuICAgIH1cbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 31189:
/*!*****************************************************!*\
  !*** ./src/app/cookie-banner/cookie-banner-enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookieBanner": () => (/* binding */ cookieBanner)
/* harmony export */ });
var cookieBanner;
(function (cookieBanner) {
  cookieBanner["cookieBanner"] = "cookie-banner";
  cookieBanner["header"] = "cookie-banner-header-section";
  cookieBanner["headerApprovalBtn"] = "cookie-banner-header-approval-btn";
  cookieBanner["headerDetailsBtn"] = "cookie-banner-header-details-btn";
  cookieBanner["headerAboutCookies"] = "cookie-banner-header-about-btn";
  cookieBanner["middle"] = "cookie-banner-middle-section";
  cookieBanner["middleDiv"] = "cookie-banner-middle-div";
  cookieBanner["middleUseCookieTitle"] = "cookie-banner-use-cookie-title";
  cookieBanner["middleUseCookieDescription"] = "cookie-banner-middle-use-cookies-description";
  cookieBanner["detailsNeededDiv"] = "cookie-banner-needed-div";
  cookieBanner["detailsNeededTitle"] = "cookie-banner-needed-title";
  cookieBanner["detailsNeededDescription"] = "cookie-banner-needed-description";
  cookieBanner["detailsNeededInput"] = "cookie-banner-needed-input";
  cookieBanner["detailsNeededSpan"] = "cookie-banner-needed-span";
  cookieBanner["detailsPreferenciesDiv"] = "cookie-banner-preferencies-div";
  cookieBanner["detailsPreferenciesTitle"] = "cookie-banner-preferencies-Title";
  cookieBanner["detailsPreferenciesSpan"] = "cookie-banner-preferencies-span";
  cookieBanner["detailsPreferenciesDesciption"] = "cookie-banner-preferencies-Description";
  cookieBanner["detailsPreferenciesInput"] = "cookie-banner-preferencies-Input";
  cookieBanner["detailsStatsDiv"] = "cookie-banner-stats-div";
  cookieBanner["detailsStatsTitle"] = "cookie-banner-stats-Title";
  cookieBanner["detailsStatsDescription"] = "cookie-banner-stats-Description";
  cookieBanner["detailsStatsInput"] = "cookie-banner-stats-Input";
  cookieBanner["detailsStatsSpan"] = "cookie-banner-stats-span";
  cookieBanner["bottom"] = "cookie-banner-bottom-section";
  cookieBanner["about"] = "cookie-banner-about";
  cookieBanner["adjust"] = "cookie-banner-adjust-btn";
  cookieBanner["allow"] = "cookie-banner-allow-btn";
})(cookieBanner || (cookieBanner = {}));

/***/ }),

/***/ 28309:
/*!**********************************************************!*\
  !*** ./src/app/cookie-banner/cookie-banner.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieBannerComponent": () => (/* binding */ CookieBannerComponent)
/* harmony export */ });
/* harmony import */ var _cookie_banner_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-banner-enum */ 31189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 45121);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);





function CookieBannerComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r1.attr.middleDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r1.attr.middleUseCookieTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.resources.cookieBannerUsagesOfCookiesTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r1.attr.middleUseCookieDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.resources.cookieBannerUsagesOfCookiesDescription);
  }
}
function CookieBannerComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "section", 12)(2, "div")(3, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_div_14_Template_label_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.disable());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 14, 15)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "section", 12)(12, "div")(13, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 17)(18, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_div_14_Template_input_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.preferenciesAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "section", 12)(21, "div")(22, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 17)(27, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_div_14_Template_input_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.statsAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.middleDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsNeededDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsNeededTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.resources.cookieBannerNeededTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsNeededDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.resources.cookieBannerNeededDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r2.resources.cookieBannerNeededTitle)("checked", ctx_r2.neededCookies);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsNeededInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsNeededSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsPreferenciesDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsPreferenciesTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.resources.cookieBannerPreferenciesTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsPreferenciesDesciption);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.resources.cookieBannerPreferenciesDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r2.resources.cookieBannerPreferenciesTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsPreferenciesInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsPreferenciesSpan);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsStatsDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsStatsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.resources.cookieBannerStatsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsStatsDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.resources.cookieBannerStatsDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r2.resources.cookieBannerStatsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsStatsInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsStatsSpan);
  }
}
function CookieBannerComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r3.attr.middleDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r3.resources.cookieBannerAbout, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r3.attr.about);
  }
}
function CookieBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.sectionActivation(ctx_r9.resources.cookieBannerApprovalTopSection));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.sectionActivation(ctx_r11.resources.cookieBannerDetailsTopSection));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.sectionActivation(ctx_r12.resources.cookieBannerAboutTopSection));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CookieBannerComponent_div_0_div_13_Template, 5, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CookieBannerComponent_div_0_div_14_Template, 29, 26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CookieBannerComponent_div_0_div_15_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8)(18, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.sectionActivation(ctx_r13.resources.cookieBannerDetailsTopSection));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CookieBannerComponent_div_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.cookieBanner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.headerApprovalBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.resources.cookieBannerApprovalTopSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.headerDetailsBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.resources.cookieBannerDetailsTopSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.headerAboutCookies);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.resources.cookieBannerAboutTopSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.middle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.section == ctx_r0.resources.cookieBannerApprovalTopSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.section == ctx_r0.resources.cookieBannerDetailsTopSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.section == ctx_r0.resources.cookieBannerAboutTopSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.bottom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.adjust);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.resources.cookieBannerAdjust);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx_r0.attr.allow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.resources.cookieBannerAllow);
  }
}
class CookieBannerComponent {
  constructor(resources, cookie) {
    this.resources = resources;
    this.cookie = cookie;
    this.section = 'Approval';
    this.attr = _cookie_banner_enum__WEBPACK_IMPORTED_MODULE_0__.cookieBanner;
    this.accpetedCookie = false;
    this.neededCookies = true;
    this.preferencies = true;
    this.stats = true;
  }
  sectionActivation(section) {
    this.section = section;
    const headerBtns = document.querySelectorAll('#btnSection');
    headerBtns.forEach(element => {
      element.classList.remove('active');
      if (element.textContent == section) {
        element.classList.add('active');
      }
    });
  }
  disable() {
    if (confirm("Are you sure you don't want to use this cookies? it may case problems with function this page!")) {
      this.neededCookies = !this.neededCookies;
    }
  }
  preferenciesAction() {
    this.preferencies = !this.preferencies;
  }
  statsAction() {
    this.stats = !this.stats;
  }
  confirm() {
    this.cookie.set('Cookie', JSON.stringify({
      needed: this.neededCookies,
      preferencies: this.preferencies,
      stats: this.stats
    }));
    this.accpetedCookie = false;
  }
  ngOnInit() {
    if (!this.cookie.check('Cookie')) {
      this.accpetedCookie = true;
    }
  }
}
CookieBannerComponent.ɵfac = function CookieBannerComponent_Factory(t) {
  return new (t || CookieBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService));
};
CookieBannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CookieBannerComponent,
  selectors: [["app-cookie-banner"]],
  decls: 1,
  vars: 1,
  consts: [["class", "modal", 4, "ngIf"], [1, "modal"], [1, "top-section"], ["id", "btnSection", 1, "button", "active", 3, "click"], ["id", "btnSection", 1, "button", 3, "click"], [1, "line"], [1, "middle-section"], [4, "ngIf"], [1, "bottom-section"], [1, "button", "bottom", 3, "click"], [1, "details-title"], [1, "details-paragraph"], [1, "align-checkbox"], [1, "switch", 3, "click"], ["type", "checkbox", "disabled", "", 3, "id", "checked"], ["needed", ""], [1, "slider", "round"], [1, "switch"], ["type", "checkbox", "checked", "", 3, "id", "click"], [1, "details-paragraph", 3, "innerHTML"]],
  template: function CookieBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CookieBannerComponent_div_0_Template, 24, 17, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.accpetedCookie);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".modal[_ngcontent-%COMP%]{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: white;\n    padding: 1rem;\n    box-shadow: 0  0 5px; \n    border-radius: 5px;\n    z-index: 10;\n    border: 2px solid var(--dark-primary1-color);\n}\n.line[_ngcontent-%COMP%]{\n    height: 0.5px;\n    width: 100%;\n    background-color: #d2d2d2;\n    margin: 0.5rem 0 ;\n}\n.top-section[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n}\n.button[_ngcontent-%COMP%]{\n    background: transparent;\n    border: none;\n    padding: 0.5rem;\n    cursor: pointer;\n}\n.active[_ngcontent-%COMP%]{\n    color: var(--dark-primary1-color);\n    border-bottom: 1px dashed var(--dark-primary1-color);\n}\n.middle-section[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.details-title[_ngcontent-%COMP%]{\n    margin: 0.5rem;\n}\n.details-paragraph[_ngcontent-%COMP%]{\n    line-height: 1.4;\n    letter-spacing: 0.5px;\n}\n.align-checkbox[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr auto;\n    justify-content: center;\n    align-items: center;\n    margin: 0.5rem 0;\n}\n.bottom-section[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 0.5rem;\n    padding: 0.5rem;\n}\n.bottom[_ngcontent-%COMP%]{\n    background-color: var(--dark-primary1-color);\n    border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29va2llLWJhbm5lci9jb29raWUtYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxvREFBb0Q7QUFDeEQ7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLG1CQUFtQjtBQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1vZGFse1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IDAgIDAgNXB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1wcmltYXJ5MS1jb2xvcik7XG59XG4ubGluZXtcbiAgICBoZWlnaHQ6IDAuNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG4gICAgbWFyZ2luOiAwLjVyZW0gMCA7XG59XG4udG9wLXNlY3Rpb257XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XG59XG4uYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjdGl2ZXtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5MS1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1kYXJrLXByaW1hcnkxLWNvbG9yKTtcbn1cbi5taWRkbGUtc2VjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGV0YWlscy10aXRsZXtcbiAgICBtYXJnaW46IDAuNXJlbTtcbn1cbi5kZXRhaWxzLXBhcmFncmFwaHtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5hbGlnbi1jaGVja2JveHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xufVxuLmJvdHRvbS1zZWN0aW9ue1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5ib3R0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5MS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 94015:
/*!***************************************!*\
  !*** ./src/app/footer/footer-enum.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
var footer;
(function (footer) {
  footer["footer"] = "footer";
  footer["links"] = "link";
  footer["firstLink"] = "facebook-link";
  footer["secondLink"] = "instagram-link";
  footer["footerContent"] = "footer-div";
  footer["mainIcon"] = "main-icon";
  footer["sections"] = "secntions";
  footer["section"] = "secntion-";
  footer["contacts"] = "contacts";
  footer["contactAddress"] = "contact-address";
  footer["contactPhone"] = "contact-phone";
  footer["contactEmail"] = "contact-email";
  footer["copyright"] = "copyright-div";
  footer["rights"] = "rights-resrved";
  footer["founder"] = "founder";
})(footer || (footer = {}));

/***/ }),

/***/ 13433:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97354);
/* harmony import */ var _footer_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-enum */ 94015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);







function FooterComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sekcia_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", sekcia_r1.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r0.attr.links + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sekcia_r1.title, "");
  }
}
class FooterComponent {
  constructor(resources) {
    this.resources = resources;
    this.date = new Date().getFullYear();
    this.envAssets = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.assets;
    this.iconSource = this.resources.icon;
    this.attr = _footer_enum__WEBPACK_IMPORTED_MODULE_1__.footer;
  }
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__.resourcesService));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 39,
  vars: 30,
  consts: [[1, "footer"], [1, "footer-links"], [1, "SN-links", 3, "href"], [1, "icon-white", 3, "icon"], [1, "footer-wrepper"], [1, "footer-info-text"], [1, "icon-footer"], ["alt", "", 1, "icon", 3, "src"], [1, "footer-sections"], [1, "footer-title"], [4, "ngFor", "ngForOf"], [1, "footer-contact-us"], [1, "icons", 3, "icon"], [1, "footer-kontakt"], [1, "copyright"], [1, "copyright-text"], [1, "block", 3, "routerLink"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Sections");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, FooterComponent_div_13_Template, 3, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "fa-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 14)(30, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Copyright \u00A9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " All Rights Reserved");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Created by Martin O.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.footer);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.links);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.resources.kontaktLinkFacebook, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.firstLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.resources.facebook);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.resources.kontaktLinkInstagram, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.secondLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.resources.instagram);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.footerContent);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.mainIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("src", "", ctx.envAssets, "assets/", ctx.iconSource, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.sections);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.resources.Sections);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.contacts);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.resources.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.contactAddress);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.resources.kontaktStreet, ", ", ctx.resources.kontaktTown, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.resources.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.contactPhone);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.kontaktPhone);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.resources.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.contactEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.kontaktEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.copyright);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.rights);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.resources.nameOfOrganization, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.founder);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
  styles: [".footer[_ngcontent-%COMP%]{\n    \n   width: 100%;\n   background-color: var(--primary-primary2-color);\n   color: var(--white-color);\n   \n}\n.footer-kontakt[_ngcontent-%COMP%]{\n    font-size: 1.1rem;\n}\n.footer-wrepper[_ngcontent-%COMP%]{\n    display: flex;\n    padding: 0.8rem 0;\n    justify-content: space-around;\n    align-items: center;\n    max-width: 1300px;\n   margin: 0 auto;\n}\n.icons[_ngcontent-%COMP%]{\n    margin-right: 0.8rem;\n    color: var(--dark-primary1-color);\n    font-size: 1.2rem;\n}\n.footer-links[_ngcontent-%COMP%]{\n    justify-content: center;\n    padding: 1rem;\n    text-align: center;\n    border-bottom: 1px solid var(--light-primary2-color);\n    max-width: 1300px;\n    margin: 0 auto;\n}\n.SN-links[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: var(--light-primary1-color);\n    font-size: 2rem;\n    margin-right: 1rem;\n}\n.SN-links[_ngcontent-%COMP%]:hover{\n    transition: all linear 0.2s;\n    counter-reset: var(--light-primary1-color);\n}\n.icon[_ngcontent-%COMP%]{\n    height: 3rem;\n    \n}\n.footer-contact-us[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.footer-sections[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.block[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: var(--white-color);\n    font-size: 1.1rem;\n}\n.block[_ngcontent-%COMP%]:hover{\n    color: var(--primary-primary1-color);\n    transition: all linear 0.5s;\n}\n.footer-title[_ngcontent-%COMP%]{\n    font-size: 0.8rem;\n    color: var(--darker-primary1-color);\n}\n\n.copyright[_ngcontent-%COMP%]{\n    border-top: 1px solid var(--light-primary2-color);\n\n    display: flex;\n    justify-content: space-between;\n    max-width: 1300px;\n    margin: 0 auto;\n}\n.copyright-text[_ngcontent-%COMP%]{\n    margin: 0 0.5rem ;\n    font-size: 0.8rem;\n}\n.icon-footer[_ngcontent-%COMP%]{\n        min-width: 15rem;\n    text-align: center;\n}\n@media screen and (max-width:700px) {\n    .footer-wrepper[_ngcontent-%COMP%]{\n        display: block;\n    }\n    .footer-info-text[_ngcontent-%COMP%]{\n        text-align: center;\n        margin: 1rem 0;\n    }\n    .footer-contact-us[_ngcontent-%COMP%]{\n        margin: 1rem 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0dBQ3pCLFdBQVc7R0FDWCwrQ0FBK0M7R0FDL0MseUJBQXlCO0dBQ3pCLHdCQUF3QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0dBQ2xCLGNBQWM7QUFDakI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvREFBb0Q7SUFDcEQsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksaURBQWlEOztJQUVqRCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7UUFDUSxnQkFBZ0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIC8qIG1hcmdpbi10b3A6IDIuNXJlbTsgKi9cbiAgIHdpZHRoOiAxMDAlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1wcmltYXJ5Mi1jb2xvcik7XG4gICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xuICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xufVxuLmZvb3Rlci1rb250YWt0e1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLmZvb3Rlci13cmVwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMC44cmVtIDA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmljb25ze1xuICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXByaW1hcnkxLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5mb290ZXItbGlua3N7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnkyLWNvbG9yKTtcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5TTi1saW5rc3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnkxLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLlNOLWxpbmtzOmhvdmVye1xuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4ycztcbiAgICBjb3VudGVyLXJlc2V0OiB2YXIoLS1saWdodC1wcmltYXJ5MS1jb2xvcik7XG59XG4uaWNvbntcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgLyogd2lkdGg6IDNyZW07ICovXG59XG4uZm9vdGVyLWNvbnRhY3QtdXN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb3Rlci1zZWN0aW9uc3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmxvY2t7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uYmxvY2s6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC41cztcbn1cbi5mb290ZXItdGl0bGV7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG59XG5cbi5jb3B5cmlnaHR7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnkyLWNvbG9yKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1heC13aWR0aDogMTMwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvcHlyaWdodC10ZXh0e1xuICAgIG1hcmdpbjogMCAwLjVyZW0gO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmljb24tZm9vdGVye1xuICAgICAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzAwcHgpIHtcbiAgICAuZm9vdGVyLXdyZXBwZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuZm9vdGVyLWluZm8tdGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG4gICAgLmZvb3Rlci1jb250YWN0LXVze1xuICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 33350:
/*!***************************************!*\
  !*** ./src/app/header/header-enum.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
var header;
(function (header) {
  header["headerIcon"] = "header-icon";
  header["headerDropdownBtn"] = "header-dropdown-btn";
  header["headerDropdownIcon"] = "header-dropdown-icon";
  header["shopingCartBtn"] = "header-cart-btn";
  header["shopingCartIcon"] = "header-cart-icon";
  header["headerItem"] = "header-item-";
  header["headerItems"] = "header-items";
  header["headerBadge"] = "header-badge";
  header["headerLogOut"] = "header-log-out";
  header["headerLogOutIcon"] = "header-log-out-icon";
})(header || (header = {}));

/***/ }),

/***/ 62829:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 92171);
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/animations */ 32702);
/* harmony import */ var _header_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-enum */ 33350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/common.service */ 7577);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);










function HeaderComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_button_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r0.resources.logOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r0.attr.headerLogOutIcon);
  }
}
function HeaderComponent_li_11_div_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_li_11_div_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.dropdownShow = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i_r8 = ctx_r12.index;
    const sekcia_r7 = ctx_r12.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r9.Sections[i_r8].section);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sekcia_r7.title);
  }
}
function HeaderComponent_li_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderComponent_li_11_div_2_button_1_Template, 2, 2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sekcia_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r6.attr.headerItem + sekcia_r7.section)("data-type", ctx_r6.attr.headerItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.authorized == true && sekcia_r7.title !== ctx_r6.resources.authorizationTitle || ctx_r6.authorized == false && sekcia_r7.title !== ctx_r6.resources.myOrdersTitle && sekcia_r7.title !== ctx_r6.resources.userProfileTitle);
  }
}
function HeaderComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HeaderComponent_li_11_div_2_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@headerTransition", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@headerTransition", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.Sections);
  }
}
function HeaderComponent_div_13_button_1_fa_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 23);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r16.shopingCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r16.attr.shopingCartIcon);
  }
}
function HeaderComponent_div_13_button_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r17.attr.headerBadge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r17.amountItems);
  }
}
function HeaderComponent_div_13_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HeaderComponent_div_13_button_1_fa_icon_2_Template, 1, 2, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HeaderComponent_div_13_button_1_div_3_Template, 2, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const i2_r14 = ctx_r18.index;
    const section_r13 = ctx_r18.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r15.Sections[i2_r14].section);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r15.attr.headerItem + section_r13.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", section_r13.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", section_r13.section == ctx_r15.resources.cartURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", section_r13.section == ctx_r15.resources.cartURL && ctx_r15.amountItems !== 0);
  }
}
function HeaderComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderComponent_div_13_button_1_Template, 4, 5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r13 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r2.attr.headerItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.authorized == true && section_r13.title !== ctx_r2.resources.authorizationTitle || ctx_r2.authorized == false && section_r13.title !== ctx_r2.resources.myOrdersTitle && section_r13.title !== ctx_r2.resources.userProfileTitle);
  }
}
function HeaderComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.logOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Log Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r3.attr.headerLogOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r3.resources.logOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r3.attr.headerLogOutIcon);
  }
}
class HeaderComponent {
  constructor(resources, common, data, router) {
    this.resources = resources;
    this.common = common;
    this.data = data;
    this.router = router;
    //pouzite v hmtl
    this.bars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBarsStaggered;
    this.iconSource = this.resources.icon;
    this.scrolled = false;
    this.Sections = this.resources.Sections;
    this.dropdownShow = false;
    this.dropdownAuthorizatedShow = false;
    this.shopingCart = this.resources.cart;
    this.amountItems = 0;
    this.authorized = false;
    this.attr = _header_enum__WEBPACK_IMPORTED_MODULE_1__.header;
    this.data.userData.subscribe(data => {
      if (data) {
        this.authorized = true;
      } else if (data == false) {
        this.authorized = false;
      }
    });
  }
  getAmount() {
    this.amountItems = 0;
    if (localStorage.getItem('Items')) {
      let items = JSON.parse(localStorage.getItem('Items'));
      items.forEach(element => {
        this.amountItems += element.amount;
      });
    }
  }
  logOut() {
    localStorage.removeItem('User');
    this.data.logedIn.next('');
    this.router.navigate([this.resources.mainPageURL]);
  }
  ngOnInit() {
    this.getAmount();
    this.common.badge.subscribe(() => {
      this.getAmount();
    });
  }
  documentClick(event) {
    let element = event.target.classList;
    if (!element.contains('dropdown-button-cover') && !element.contains('dropdown-auth-button-cover')) {
      this.dropdownShow = false;
      this.dropdownAuthorizatedShow = false;
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) {
        return ctx.documentClick($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveDocument"]);
    }
  },
  decls: 15,
  vars: 13,
  consts: [[1, "transition", "zindex"], [1, "content-box"], [1, "icon"], ["alt", "icon", 1, "header-icon", 3, "src"], ["id", "dropdownButton", 1, "dropdown-button", 3, "click"], [1, "fa-3x", 3, "icon"], [1, "dropdown-button-cover"], [1, "header-cart", "btn", "relative", 3, "routerLink"], ["class", "header-cart btn", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [1, "sections"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], [1, "header-cart", "btn"], [3, "click"], [1, "dropdown"], [1, "dropdown-select-section"], ["class", "btn dropdown-selector color-primary2", 3, "routerLink", "click", 4, "ngIf"], [1, "btn", "dropdown-selector", "color-primary2", 3, "routerLink", "click"], ["class", "btn padding-right  header-btn", 3, "routerLink", 4, "ngIf"], [1, "btn", "padding-right", "header-btn", 3, "routerLink"], [3, "icon", 4, "ngIf"], ["class", "badge", 4, "ngIf"], [3, "icon"], [1, "badge"], [1, "btn", "padding-right", "header-btn"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul")(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() {
        return ctx.dropdownShow = !ctx.dropdownShow;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "fa-icon", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "fa-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HeaderComponent_button_10_Template, 3, 2, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 3, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 2, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 4, 3, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "assets/", ctx.iconSource, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx.attr.headerIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx.attr.headerDropdownBtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.bars);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx.attr.headerDropdownIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx.resources.cartURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx.attr.shopingCartBtn);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx.shopingCart);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx.attr.shopingCartIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authorized == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dropdownShow);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.Sections);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authorized == true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent],
  styles: ["header[_ngcontent-%COMP%]{\n    height: 3rem;\n    \n    width: 100%;\n    opacity: 100%;\n}\n.header-btn[_ngcontent-%COMP%]{\n    position: relative;\n    font-size: 1rem;\n}\n\n.header-btn[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n}\n\n.header-icon[_ngcontent-%COMP%]{\n    height: 3rem;\n    max-width: 8rem;\n    object-fit: contain;\n    opacity: 100%;\n}\n\n.content-box[_ngcontent-%COMP%]{\n    margin: 0 auto;\n    max-width: 1700px;\n    padding: 0.5rem 3rem;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    height: 3rem;\n}\n\n .fa-3x[_ngcontent-%COMP%]{\n    margin: auto 0 ;\n    opacity: 100%;        \n    top: 5px;\n    right: 1rem;\n    color: var(--dark-orange-color);\n    }\n\n.dropdown-button[_ngcontent-%COMP%]{\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n.dropdown[_ngcontent-%COMP%]{\n    text-decoration: none;\n    position: absolute;\n    top: 4rem;\n    left: 0;\n    width: 100%;\n    box-shadow: 0px 0px 5px rgb(0 0 0 / 0.6);\n    z-index: 5;\n}\n\n\n .dropdown-selector[_ngcontent-%COMP%]{\n    display: block;\n    text-decoration: none;\n    margin: 0.5rem auto;\n    border-bottom: 1px solid;\n    border-bottom-color: silver;\n\n }\n  .dropdown-selector[_ngcontent-%COMP%]:hover{\n    border-bottom: 2px solid;\n    border-bottom-color: var(--primary-orange-color);\n       transition: all 0.2s linear;\n  }\n  .dropdown-button-cover[_ngcontent-%COMP%], .dropdown-auth-button-cover[_ngcontent-%COMP%]{\n    position: absolute;\n    height: 2.5rem;\n    width: 2.5rem;\n    opacity: 0;\n    transform: translateX(-100%);\n    cursor: pointer; \n  }\n\n.dropdown-select-section[_ngcontent-%COMP%]{\n    \n    display: block;\n    position: relative;\n}\n.dropdown-select-section[_ngcontent-%COMP%]::before{\n    position: absolute;\n    content: '';\n    right: 3.5rem;\n    top: -0.75rem;\n     width: 0;\n    height: 0;\n    border-left: 7.5px solid transparent;\n    border-right: 7.5px solid transparent;\n    border-bottom: 15px solid ;\n    border-bottom-color: var(--white-color) ;\n}\n\nli[_ngcontent-%COMP%]{\n    list-style-type: none;\n}\n.sections[_ngcontent-%COMP%]{\n    display: flex;\n    position: relative;\n}\n.subsection-wrapper[_ngcontent-%COMP%]{\n    position: absolute;\n    \n    transform: translateX(10px);\n}\n.subsection-wrapper-logIn[_ngcontent-%COMP%]{\n    position: absolute;\n    \n    transform: translateX(-65px);\n}\n\n\n.subsections[_ngcontent-%COMP%]{\n    background-color: rgba(255,255,255,0.85);\n    margin-top: 1.5rem;\n    padding: 0.5rem;\n    \n    position: relative; \n    border-radius: 5px;\n    width: 10rem;\n    \n    box-shadow: 0px 3px 3px;\n\n}\n.subsections[_ngcontent-%COMP%]::before{\n    position: absolute;\n    content: '';\n    right: 4rem;\n    top: -1.2rem;\n     width: 0;\n    height: 0;\n    border-left: 7.5px solid transparent;\n    border-right: 7.5px solid transparent;\n    border-bottom: 15px solid ;\n    border-bottom-color: var(--white-color) ;\n    \n}\n.arrow-down[_ngcontent-%COMP%]{\n    position: relative; \n}\n.arrow-down[_ngcontent-%COMP%]::before{\n    position: absolute;\n    content: '';\n     right: -1rem;\n    bottom: 0.8rem;  \n     width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 10px solid ;\n    border-bottom-color: var(--primary-orange-color) ;\n}\n\n.username[_ngcontent-%COMP%]{\n    display: block;\n    margin: 0.5rem auto;\n    border-bottom-color: silver;\n    font-size: 1.5rem;\n    text-align: center;\n}\n.badge[_ngcontent-%COMP%]{\n    position: absolute; \n    width: 1rem;\n    height: 1rem;\n    background-color: var(--primary-primary1-color);\n    border-radius: 50px;\n    top: -5px;\n    right: -5px;\n    font-size: 0.8rem;\n}\n\n\n@media screen and (min-width:970px) {\n    .fa-3x[_ngcontent-%COMP%]{\n        display: none;\n    }\n     .dropdown[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .space[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .header-cart[_ngcontent-%COMP%]{\n        font-size: 0.7rem;\n        position: relative;\n    }\n    .header-cart-icon[_ngcontent-%COMP%]{\n        font-size: 1.5rem;\n    }\n\n}\n.badge-mobile[_ngcontent-%COMP%]{\n    display: none;\n}\n\n@media screen and (max-width:970px) {\n    .sections[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .fa-3x[_ngcontent-%COMP%]{\n        font-size: 2rem;\n    }\n    .badge-mobile[_ngcontent-%COMP%]{\n    display: block;\n    position: absolute; \n    width: 1rem;\n    height: 1rem;\n    background-color: var(--primary-primary1-color);\n    border-radius: 50px;\n    top: 7.5px;\n    right: 50px;\n    font-size: 0.8rem;\n    }\n}\n\n.header-icon[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    box-shadow: 0px 0px 5px var(--lighter-black-color);\n}\n.space[_ngcontent-%COMP%]{\n    margin-left: 0.5rem;\n    background: var(--lighter-black-color);\n    width: 2.5rem;\n    border-radius: 50px;\n}\n.space2[_ngcontent-%COMP%]{\n    margin-left: 0.5rem;\n    background: var(--lighter-black-color);\n    width: 2.5rem;\n    border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0NBRUM7SUFDRyxlQUFlO0lBQ2YsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsK0JBQStCO0lBQy9COztBQUVKO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxVQUFVO0FBQ2Q7OztDQUdDO0lBQ0csY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDJCQUEyQjs7Q0FFOUI7RUFDQztJQUNFLHdCQUF3QjtJQUN4QixnREFBZ0Q7T0FDN0MsMkJBQTJCO0VBQ2hDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLGVBQWU7RUFDakI7O0FBRUY7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtLQUNaLFFBQVE7SUFDVCxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQywwQkFBMEI7SUFDMUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7OztBQUdBO0lBQ0ksd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Y7MEJBQ3NCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1EQUFtRDtJQUNuRCx1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0tBQ1gsUUFBUTtJQUNULFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQix3Q0FBd0M7SUFDeEMsbURBQW1EO0FBQ3ZEO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0tBQ1YsWUFBWTtJQUNiLGNBQWM7S0FDYixRQUFRO0lBQ1QsU0FBUztJQUNULGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLCtDQUErQztJQUMvQyxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0tBQ0M7UUFDRyxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUo7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtJQUNBLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtEQUFrRDtBQUN0RDtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmhlYWRlcntcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgLyogYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiKDAgMCAwIC8gMC42KTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAxMDAlO1xufVxuLmhlYWRlci1idG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmhlYWRlci1idG46aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5oZWFkZXItaWNvbntcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgbWF4LXdpZHRoOiA4cmVtO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmNvbnRlbnQtYm94e1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTcwMHB4O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbn1cblxuIC5mYS0zeHtcbiAgICBtYXJnaW46IGF1dG8gMCA7XG4gICAgb3BhY2l0eTogMTAwJTsgICAgICAgIFxuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZS1jb2xvcik7XG4gICAgfVxuXG4uZHJvcGRvd24tYnV0dG9ue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd257XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDRyZW07XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoMCAwIDAgLyAwLjYpO1xuICAgIHotaW5kZXg6IDU7XG59XG5cblxuIC5kcm9wZG93bi1zZWxlY3RvcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0bztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogc2lsdmVyO1xuXG4gfVxuICAuZHJvcGRvd24tc2VsZWN0b3I6aG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXByaW1hcnktb3JhbmdlLWNvbG9yKTtcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIH1cbiAgLmRyb3Bkb3duLWJ1dHRvbi1jb3ZlciwgLmRyb3Bkb3duLWF1dGgtYnV0dG9uLWNvdmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICB9XG5cbi5kcm9wZG93bi1zZWxlY3Qtc2VjdGlvbntcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyb3Bkb3duLXNlbGVjdC1zZWN0aW9uOjpiZWZvcmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgdG9wOiAtMC43NXJlbTtcbiAgICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA3LjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDcuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKSA7XG59XG5cbmxpe1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5zZWN0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdWJzZWN0aW9uLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIGxlZnQ6IDY1cHg7ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xufVxuLnN1YnNlY3Rpb24td3JhcHBlci1sb2dJbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogbGVmdDogNjVweDsgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTY1cHgpO1xufVxuXG5cbi5zdWJzZWN0aW9uc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuODUpO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgLyogcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIC8qIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXByaW1hcnktb3JhbmdlLWNvbG9yKTsgKi9cbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweDtcblxufVxuLnN1YnNlY3Rpb25zOjpiZWZvcmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHJpZ2h0OiA0cmVtO1xuICAgIHRvcDogLTEuMnJlbTtcbiAgICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA3LjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDcuNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKSA7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1vcmFuZ2UtY29sb3IpOyAqL1xufVxuLmFycm93LWRvd257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cbi5hcnJvdy1kb3duOjpiZWZvcmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgICByaWdodDogLTFyZW07XG4gICAgYm90dG9tOiAwLjhyZW07ICBcbiAgICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcHJpbWFyeS1vcmFuZ2UtY29sb3IpIDtcbn1cblxuLnVzZXJuYW1le1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMC41cmVtIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogc2lsdmVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYWRnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRvcDogLTVweDtcbiAgICByaWdodDogLTVweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjk3MHB4KSB7XG4gICAgLmZhLTN4e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAgLmRyb3Bkb3due1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuc3BhY2V7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5oZWFkZXItY2FydHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmhlYWRlci1jYXJ0LWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxufVxuLmJhZGdlLW1vYmlsZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk3MHB4KSB7XG4gICAgLnNlY3Rpb25ze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZmEtM3h7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgLmJhZGdlLW1vYmlsZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRvcDogNy41cHg7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxufVxuXG4uaGVhZGVyLWljb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWxpZ2h0ZXItYmxhY2stY29sb3IpO1xufVxuLnNwYWNle1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRlci1ibGFjay1jb2xvcik7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnNwYWNlMntcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0ZXItYmxhY2stY29sb3IpO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [_animations_animations__WEBPACK_IMPORTED_MODULE_0__.headerTransition]
  }
});

/***/ }),

/***/ 91344:
/*!**************************************************!*\
  !*** ./src/app/item-details/item-detail-enum.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemDetails": () => (/* binding */ itemDetails)
/* harmony export */ });
var itemDetails;
(function (itemDetails) {
  itemDetails["detailsWrapper"] = "details-warpper";
  itemDetails["detailsImage"] = "details-image";
  itemDetails["detailsTitle"] = "details-title";
  itemDetails["detailsDescription"] = "details-descrption";
  itemDetails["detailsWarranty"] = "details-waranty";
  itemDetails["detailsReturnOption"] = "details-return-option";
  itemDetails["detailsAddToCartBtn"] = "details-add-to-cart-btn";
  itemDetails["detailsPrice"] = "details-price";
})(itemDetails || (itemDetails = {}));

/***/ }),

/***/ 36798:
/*!********************************************************!*\
  !*** ./src/app/item-details/item-details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDetailsComponent": () => (/* binding */ ItemDetailsComponent)
/* harmony export */ });
/* harmony import */ var _item_detail_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-detail-enum */ 91344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/common.service */ 7577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);
/* harmony import */ var _shared_components_added_to_cart_added_to_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/added-to-cart/added-to-cart.component */ 80756);











function ItemDetailsComponent_app_error_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", ctx_r0.errorMessage);
  }
}
function ItemDetailsComponent_app_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
  }
}
function ItemDetailsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 6)(3, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ItemDetailsComponent_div_2_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.warantyAndReturnOption());
    })("click", function ItemDetailsComponent_div_2_Template_button_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.common.addToCart($event, ctx_r5.item[0].idItems, ctx_r5.waranty, ctx_r5.returnOption));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsWrapper);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r2.item[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.item[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.item[0].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsWarranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.resources.detailsExtendedWarranty, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsReturnOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.resources.detailReturnOption, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsAddToCartBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", ctx_r2.resources.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.resources.detailsAddToCartButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r2.attr.detailsPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r2.item[0].price, "\u20AC");
  }
}
class ItemDetailsComponent {
  constructor(data, router, resources, common) {
    this.data = data;
    this.router = router;
    this.resources = resources;
    this.common = common;
    this.attr = _item_detail_enum__WEBPACK_IMPORTED_MODULE_0__.itemDetails;
    const id = this.router.url.slice(1);
    this.data.getItem(id).subscribe(data => {
      this.item = data;
      if (this.item.length == 0) {
        this.error = true;
        this.errorMessage = "Item doesn't exist!";
      }
    }, err => {
      this.error = true;
      this.errorMessage = err.message;
    });
  }
  warantyAndReturnOption() {
    const waranty = window.document.querySelector('#Warranty');
    this.waranty = waranty.checked;
    const returnOption = window.document.querySelector('#return_option');
    this.returnOption = returnOption.checked;
  }
  ngOnInit() {}
}
ItemDetailsComponent.ɵfac = function ItemDetailsComponent_Factory(t) {
  return new (t || ItemDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
ItemDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ItemDetailsComponent,
  selectors: [["app-item-details"]],
  decls: 4,
  vars: 3,
  consts: [[3, "errorText", 4, "ngIf"], [4, "ngIf"], ["class", "details-wraper", 4, "ngIf"], [3, "errorText"], [1, "details-wraper"], ["alt", "", 1, "details-image", 3, "src"], [1, "details-info"], [1, "details-title"], [1, "details-description"], ["type", "checkbox", "value", "Extended Warranty + 1 Year", "id", "Warranty", 1, "details-warranty-checkbox"], ["for", "Warranty"], ["type", "checkbox", "value", "60-Day Return Option", "id", "return_option"], ["for", "return_option"], [1, "details-add-to-cart", 3, "click"], [2, "font-size", "1.2rem", 3, "icon"], [1, "details-btn"], [1, "details-price"]],
  template: function ItemDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ItemDetailsComponent_app_error_0_Template, 1, 1, "app-error", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ItemDetailsComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ItemDetailsComponent_div_2_Template, 21, 16, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-added-to-cart");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.error && ctx.item == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.error && ctx.item !== undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _shared_components_added_to_cart_added_to_cart_component__WEBPACK_IMPORTED_MODULE_6__.AddedToCartComponent],
  styles: [".details-wraper[_ngcontent-%COMP%]{\n    display: flex;\n    margin-top: 3rem;\n    gap: 2rem;\n    justify-content: center;\n}\n\n.details-image[_ngcontent-%COMP%]{\n    height: 25rem;  \n    width: 60vw;\n    max-width: 700px;\n    object-fit: contain;\n}\n\n.details-title[_ngcontent-%COMP%]{\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: var(--lighter-primary2-color);\n    letter-spacing: 1px;\n    font-size: 700;\n}\n\n.details-description[_ngcontent-%COMP%]{\n    padding-bottom: 0.5rem;\n    margin-right: 1rem;\n    max-width: 400px;\n}\n\n.details-btn[_ngcontent-%COMP%]{\n    background-color: transparent;\n    border: none;\n    font-size: 1.2rem;\n    margin-right: 0.5rem;\n    margin-left: 0.5rem;\n    cursor: pointer;\n    color: var(--primary-primary2-color);\n    font-weight: 500;\n}\n\n.details-add-to-cart[_ngcontent-%COMP%]{\n    \n    padding: 0.2rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    background-color: var(--lighter-primary1-color);\n    border: solid 1px var(--primary-primary1-color);\n    border-radius: 3px;\n    box-shadow: 0 0 5px;\n}\n\n.details-price[_ngcontent-%COMP%]{\n    font-weight: 500;\n    margin-top: 0.5rem;\n    font-size: 1.5rem;\n    letter-spacing: 1.5px;\n    font-family: var(--font-Maitree);\n}\n\n@media screen and (max-width: 500px){\n\n.details-wraper[_ngcontent-%COMP%]{\n    display: block;\n    margin-top: 3rem;\n    gap: 2rem;\n    justify-content: center;\n    text-align: center;\n}\n\n.details-image[_ngcontent-%COMP%]{\n    max-width: 80vw; \n    object-fit: cover;\n}\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1kZXRhaWxzL2l0ZW0tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztBQUNwQzs7QUFFQTs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscy13cmFwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRldGFpbHMtaW1hZ2V7XG4gICAgaGVpZ2h0OiAyNXJlbTsgIFxuICAgIHdpZHRoOiA2MHZ3O1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmRldGFpbHMtdGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLXByaW1hcnkyLWNvbG9yKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogNzAwO1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbntcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZGV0YWlscy1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkyLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGV0YWlscy1hZGQtdG8tY2FydHtcbiAgICAvKiBmb250LXNpemU6IDJyZW07ICovXG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeS1wcmltYXJ5MS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHg7XG59XG5cbi5kZXRhaWxzLXByaWNle1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1NYWl0cmVlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuXG4uZGV0YWlscy13cmFwZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBnYXA6IDJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGV0YWlscy1pbWFnZXtcbiAgICBtYXgtd2lkdGg6IDgwdnc7IFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2664:
/*!***************************************************!*\
  !*** ./src/app/main-page/filters/filters-enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filters": () => (/* binding */ filters)
/* harmony export */ });
var filters;
(function (filters) {
  filters["filter"] = "filter";
  filters["filterTitle"] = "filter-title";
  filters["filterSearchSection"] = " filter-search-section";
  filters["filterSearchTitle"] = " filter-search-title";
  filters["filterSearchInput"] = "filter-search-input";
  filters["filterCategorySection"] = " filter-category-section";
  filters["filterCategoryTitle"] = " filter-category-title";
  filters["filterCategoryButton"] = "filter-category-button-";
  filters["filterPriceSection"] = "filter-price-section";
  filters["filterPriceTitle"] = "filter-price-title";
  filters["filterPriceInput"] = "filter-price-input";
  filters["filterOrderSection"] = "filter-order-section";
  filters["filterOrderTitle"] = "filter-order-title";
  filters["filterOrderCheapest"] = "filter-order-cheapest";
  filters["filterOrderExpensive"] = "filter-order-expensive";
  filters["filterOrderAlphabet"] = "filter-order-alphabet";
  filters["filterOrderReverseAplhabet"] = "filter-order-reverse-alphabet";
})(filters || (filters = {}));

/***/ }),

/***/ 91605:
/*!********************************************************!*\
  !*** ./src/app/main-page/filters/filters.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersComponent": () => (/* binding */ FiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _filters_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters-enum */ 2664);
/* harmony import */ var src_app_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/resources.service */ 95859);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/data.service */ 91228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);






const _c0 = ["priceInput"];
const _c1 = ["searchInput"];
function FiltersComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FiltersComponent_button_15_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const option_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.applyFilter(option_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r1.activeCategory == option_r4 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r1.attr.filterCategoryButton + option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r4);
  }
}
function FiltersComponent_label_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.currentValue);
  }
}
class FiltersComponent {
  constructor(resources, data) {
    this.resources = resources;
    this.data = data;
    this.filteredData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.activeCategory = this.resources.filtersCategoryAll;
    this.attr = _filters_enum__WEBPACK_IMPORTED_MODULE_0__.filters;
  }
  applyFilter(category, order) {
    let searchValue = this.searchInput.nativeElement.value.toLowerCase();
    this.currentValue = this.priceInput.nativeElement.value;
    if (category == this.resources.filtersCategoryAll) {
      this.activeCategory = this.resources.filtersCategoryAll;
      this.category = undefined;
    } else if (category) {
      this.category = category;
      this.activeCategory = category;
    }
    if (order) this.order = order;
    this.filteredArray = this.originalArray.filter(item => {
      //search
      const searchFilter = item.title.toLowerCase().includes(searchValue);
      //category
      const matchCategory = !this.category || item.category == this.category;
      //price
      const price = item.price <= this.priceInput.nativeElement.value;
      return price && searchFilter && matchCategory;
    });
    this.filteredData.emit(this.filteredArray);
  }
  getFilterValues(data) {
    const allFilterElement = data.map(element => {
      return element.category;
    });
    const filterValues = [...new Set(allFilterElement)];
    return filterValues;
  }
  gefMaximumNumber(data) {
    const allNumbers = data.map(element => {
      return element.price;
    });
    const maxNumber = Math.ceil(Math.max(...allNumbers));
    return maxNumber;
  }
  orderChapest() {
    this.orderArray = this.filteredArray.sort((a, b) => a.price - b.price);
    this.filteredData.emit(this.orderArray);
    this.activeOrder = this.resources.filterCheapers;
  }
  orderExpensive() {
    this.orderArray = this.filteredArray.sort((a, b) => a.price - b.price).reverse();
    this.filteredData.emit(this.orderArray);
    this.activeOrder = this.resources.filterExpensie;
  }
  orderAlphabet() {
    this.orderArray = this.filteredArray.sort((a, b) => a.title.localeCompare(b.title));
    this.filteredData.emit(this.orderArray);
    this.activeOrder = this.resources.filterAlphabetOrder;
  }
  orderAlphabetReverse() {
    this.orderArray = this.filteredArray.sort((a, b) => a.title.localeCompare(b.title)).reverse();
    this.filteredData.emit(this.orderArray);
    this.activeOrder = this.resources.filterReverseAlphabetOrder;
  }
  ngOnInit() {
    this.filterOptions = this.getFilterValues(this.items);
    this.maximumNumber = this.gefMaximumNumber(this.items);
    this.originalArray = this.items;
    this.filteredArray = this.originalArray;
  }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) {
  return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
FiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FiltersComponent,
  selectors: [["app-filters"]],
  viewQuery: function FiltersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.priceInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    }
  },
  inputs: {
    items: "items"
  },
  outputs: {
    filteredData: "filteredData"
  },
  decls: 40,
  vars: 37,
  consts: [[1, "filter-wrapper", "shadow"], [1, "filter-title"], [1, "line-horizontal"], [1, "section"], [1, "subfilter-title"], ["type", "text", "name", "", "id", "", "placeholder", "Type item to find...", 1, "input-search", 3, "input"], ["searchInput", ""], [1, "subfilter-button", 3, "ngClass", "click"], ["class", "subfilter-button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "range", "min", "1", "id", "myRange", 1, "", 3, "max", "value", "change", "input"], ["priceInput", ""], [1, "slier-values"], ["for", ""], ["for", "", 4, "ngIf"]],
  template: function FiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function FiltersComponent_Template_input_input_7_listener() {
        return ctx.applyFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3)(11, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_13_listener() {
        return ctx.applyFilter("All");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FiltersComponent_button_15_Template, 2, 3, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3)(18, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FiltersComponent_Template_input_change_20_listener() {
        return ctx.applyFilter();
      })("input", function FiltersComponent_Template_input_input_20_listener() {
        return ctx.applyFilter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 11)(23, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, FiltersComponent_label_25_Template, 2, 1, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 3)(30, "h6", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_32_listener() {
        return ctx.orderChapest();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_34_listener() {
        return ctx.orderExpensive();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_36_listener() {
        return ctx.orderAlphabet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_38_listener() {
        return ctx.orderAlphabetReverse();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filter);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filterTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterSearchSection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterSearchTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.feitlerSearch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterSearchInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterCategorySection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterCategoryTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filtersCategory);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.activeCategory == ctx.resources.filtersCategoryAll ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterCategoryButton + "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filtersCategoryAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filterOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterPriceSection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterPriceTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filterPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.maximumNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.maximumNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterPriceInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentValue !== ctx.maximumNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.maximumNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterOrderSection);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterOrderTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filterOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.activeOrder == ctx.resources.filterCheapers ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterOrderCheapest);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filterCheapers);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.activeOrder == ctx.resources.filterExpensie ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterOrderExpensive);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filterExpensie);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.activeOrder == ctx.resources.filterAlphabetOrder ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterOrderAlphabet);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filterAlphabetOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.activeOrder == ctx.resources.filterReverseAlphabetOrder ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx.attr.filterOrderReverseAplhabet);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.resources.filterReverseAlphabetOrder);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".filter-wrapper[_ngcontent-%COMP%]{\n    margin-top: 2rem;\n    min-width: 175px;\n    border-radius: 10px;\n    padding: 0.5rem 1rem;\n    text-align: center;\n}\n\n.filter-title[_ngcontent-%COMP%]{\n    letter-spacing: 1px;\n    font-weight: 400;\n    padding: 0.2rem 0;\n    margin: 0 0.1rem;\n}\n\n.slier-values[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n}\n\n.subfilter-title[_ngcontent-%COMP%]{\n    letter-spacing: 1.2px;\n    font-weight: 600;\n    font-size: 90%;\n    padding: 0.25rem 0;\n    color: var(--primary-primary1-color);\n}\n.subfilter-button[_ngcontent-%COMP%]{\n    text-decoration: none;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 95%;\n    display: block;\n    margin: 0.2rem auto;\n\n}\n.subfilter-button[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n}\n.input-search[_ngcontent-%COMP%]{\n    border: 1px solid var(--primary-primary1-color);\n    margin: 0.35rem 0;\n    padding: 0.2rem;\n    border-radius: 5px;\n}\n.active[_ngcontent-%COMP%]{\n    color: var(--darker-primary1-color);\n}\n\n@media screen and (max-width:500px) {\n    .filter-wrapper[_ngcontent-%COMP%]{    \n        padding: 0.5rem 0.25rem;\n        min-width: 100px;\n    }   \n    .slier-values[_ngcontent-%COMP%]{\n        margin: 0 auto;\n    max-width: 50%;\n}\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLCtDQUErQztJQUMvQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItd3JhcHBlcntcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1pbi13aWR0aDogMTc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWx0ZXItdGl0bGV7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xuICAgIG1hcmdpbjogMCAwLjFyZW07XG59XG5cbi5zbGllci12YWx1ZXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zdWJmaWx0ZXItdGl0bGV7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbn1cbi5zdWJmaWx0ZXItYnV0dG9ue1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogOTUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMC4ycmVtIGF1dG87XG5cbn1cbi5zdWJmaWx0ZXItYnV0dG9uOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmlucHV0LXNlYXJjaHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbiAgICBtYXJnaW46IDAuMzVyZW0gMDtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFjdGl2ZXtcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLXByaW1hcnkxLWNvbG9yKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCkge1xuICAgIC5maWx0ZXItd3JhcHBlcnsgICAgXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIH0gICBcbiAgICAuc2xpZXItdmFsdWVze1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDUwJTtcbn1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 29959:
/*!*********************************************!*\
  !*** ./src/app/main-page/main-page-enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPage": () => (/* binding */ mainPage)
/* harmony export */ });
var mainPage;
(function (mainPage) {
  mainPage["productWrapper"] = "product-wrapper";
  mainPage["productTitle"] = "product-title-";
  mainPage["productImage"] = "product-image-";
  mainPage["productDescription"] = "product-description-";
  mainPage["productPrice"] = "product-price-";
  mainPage["productInfoBtn"] = "product-info-button-";
  mainPage["productInfoIcon"] = "product-info-icon-";
  mainPage["productCartBtn"] = "product-cart-button-";
  mainPage["productCartIcon"] = "product-cart-icon-";
  mainPage["productSingleProduct"] = "single-product-";
})(mainPage || (mainPage = {}));

/***/ }),

/***/ 6357:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page-enum */ 29959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/common.service */ 7577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/filters.component */ 91605);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);
/* harmony import */ var _shared_components_added_to_cart_added_to_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/added-to-cart/added-to-cart.component */ 80756);












function MainPageComponent_app_error_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-error", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("errorText", ctx_r0.errorMessage);
  }
}
function MainPageComponent_app_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader");
  }
}
function MainPageComponent_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MainPageComponent_div_3_div_3_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.router.navigate([item_r4.idItems]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 13)(9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MainPageComponent_div_3_div_3_Template_div_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.router.navigate([item_r4.idItems]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MainPageComponent_div_3_div_3_Template_div_click_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.common.addToCart($event, item_r4.idItems));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productSingleProduct + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", item_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productImage + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productTitle + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productDescription + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productPrice + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r4.price, "\u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productInfoBtn + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r3.resources.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productInfoIcon + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productCartBtn + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r3.resources.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r3.attr.productCartIcon + i_r5);
  }
}
function MainPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "app-filters", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filteredData", function MainPageComponent_div_3_Template_app_filters_filteredData_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.filterApplied($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MainPageComponent_div_3_div_3_Template, 13, 15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r2.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-type", ctx_r2.attr.productWrapper);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.items);
  }
}
class MainPageComponent {
  constructor(resources, data, router, common) {
    this.resources = resources;
    this.data = data;
    this.router = router;
    this.common = common;
    this.attr = _main_page_enum__WEBPACK_IMPORTED_MODULE_0__.mainPage;
    this.items = undefined;
  }
  filterApplied(data) {
    this.items = data;
  }
  ngOnInit() {
    this.data.getItems().subscribe(data => {
      this.items = data;
      if (this.items.length == 0) {
        this.error = true;
        this.errorMessage = "We are sorry! Currently are no products available!";
      }
    }, err => {
      this.error = true;
      this.errorMessage = err.message;
    });
  }
  ngOnDestroy() {
    // this.data.data.unsubscribe()
  }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
  return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
MainPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MainPageComponent,
  selectors: [["app-main-page"]],
  decls: 4,
  vars: 3,
  consts: [[3, "errorText", 4, "ngIf"], [4, "ngIf"], ["class", "main-wrapper", 4, "ngIf"], [3, "errorText"], [1, "main-wrapper"], [3, "items", "filteredData"], [1, "post-wrapper"], ["class", "single-product", 3, "click", 4, "ngFor", "ngForOf"], [1, "single-product", 3, "click"], ["alt", "Product image", 1, "product-image", 3, "src"], [1, "product-title"], [1, "product-description"], [1, "product-price"], [1, "product-icons"], [1, "product-icon", 3, "click"], [3, "icon"]],
  template: function MainPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, MainPageComponent_app_error_0_Template, 1, 1, "app-error", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MainPageComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-added-to-cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MainPageComponent_div_3_Template, 4, 3, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.error && ctx.items == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.error && ctx.items !== undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _filters_filters_component__WEBPACK_IMPORTED_MODULE_5__.FiltersComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _shared_components_added_to_cart_added_to_cart_component__WEBPACK_IMPORTED_MODULE_7__.AddedToCartComponent],
  styles: [".post-wrapper[_ngcontent-%COMP%]{\n    width: 85%;\n    display: grid;\n    grid-template-columns: repeat( auto-fit , minmax(225px, 1fr));\n    gap: 3rem;\n    max-width: 1300px;\n    margin: 1rem auto;\n    \n    padding: 1rem 2rem;\n}\n\n.single-product[_ngcontent-%COMP%]{\n    text-align: center;\n    box-shadow: 0 0 10px #000;\n    height: 22.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 10px;\n}\n.single-product[_ngcontent-%COMP%]:hover{\n    transform: scale(1.05);\n    transition: all 0.1s ease;\n    z-index: 5;\n}\n.main-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    width: 90%;\n    margin: 0 auto;\n}\n\n@media screen and (max-width:900px) {\n    .post-wrapper[_ngcontent-%COMP%]{\n        max-width: none;\n    }\n}\n\n@media screen and (max-width:450px) {\n    .main-wrapper[_ngcontent-%COMP%]{\n        width: 95%;\n        display: block;\n    }\n\n}\n.product-image[_ngcontent-%COMP%]{\n    height: 10rem;\n    width: 100%;\n    object-fit: cover;\n    display: block;\n    margin: 0 auto;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n}\n\n.product-title[_ngcontent-%COMP%]{\n    text-align: center; \n    font-weight: 500;\n}\n\n.product-description[_ngcontent-%COMP%]{\n    font-weight: 200;\n}\n\n.product-price[_ngcontent-%COMP%]{\n    letter-spacing: 1px;\n    font-family: var(--font-Maitree);\n    font-weight: 500;\n}\n\n.product-icons[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    margin: 0 auto;\n}\n\n.product-icon[_ngcontent-%COMP%]{\n    width: 2.5rem;\n    padding: 0.5rem;\n    margin: 0.5rem;\n    background-color: var(--primary-primary1-color);\n    border-radius: 50%;\n}\n.product-icon[_ngcontent-%COMP%]:hover{\n    background-color: var(--darker-primary1-color);\n    cursor: pointer;\n    transition: 0.1s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw2REFBNkQ7SUFDN0QsU0FBUztJQUNULGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsY0FBYztJQUNsQjs7QUFFSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksOENBQThDO0lBQzlDLGVBQWU7SUFDZixxQkFBcUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC13cmFwcGVye1xuICAgIHdpZHRoOiA4NSU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggYXV0by1maXQgLCBtaW5tYXgoMjI1cHgsIDFmcikpO1xuICAgIGdhcDogM3JlbTtcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICAvKiBoZWlnaHQ6IDI1cmVtOyAqL1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLnNpbmdsZS1wcm9kdWN0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMDAwO1xuICAgIGhlaWdodDogMjIuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2luZ2xlLXByb2R1Y3Q6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICAgIHotaW5kZXg6IDU7XG59XG4ubWFpbi13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCkge1xuICAgIC5wb3N0LXdyYXBwZXJ7XG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDUwcHgpIHtcbiAgICAubWFpbi13cmFwcGVye1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbn1cbi5wcm9kdWN0LWltYWdle1xuICAgIGhlaWdodDogMTByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLnByb2R1Y3QtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbntcbiAgICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ucHJvZHVjdC1wcmljZXtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LU1haXRyZWUpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9kdWN0LWljb25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnByb2R1Y3QtaWNvbntcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvZHVjdC1pY29uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbn0gICBcblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 14819:
/*!*************************************************!*\
  !*** ./src/app/main-page/search/search-enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search)
/* harmony export */ });
var search;
(function (search) {
  search["searchInput"] = "search-input";
  search["searchButton"] = "search-button";
})(search || (search = {}));

/***/ }),

/***/ 44410:
/*!******************************************************!*\
  !*** ./src/app/main-page/search/search.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _search_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-enum */ 14819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var src_app_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/resources.service */ 95859);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);




class SearchComponent {
  constructor(resources) {
    this.resources = resources;
    this.attr = _search_enum__WEBPACK_IMPORTED_MODULE_0__.search;
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService));
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  inputs: {
    items: "items"
  },
  outputs: {
    filteredData: "filteredData"
  },
  decls: 5,
  vars: 3,
  consts: [[1, "search-wrap"], ["type", "text", "placeholder", "Type text to find...", 1, "search"], [1, "search-icon"], [1, "search-icon", 3, "icon"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.searchInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.searchButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.resources.magnifyingGlass);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
  styles: [".search[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin: 0 auto;\n    padding: 0.5rem;\n    padding-right: 15%;\n    \n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    padding-left: 2rem;\n    border-top-left-radius: 25px;\n    border-bottom-left-radius: 25px;\n\n}\n\n.search-icon[_ngcontent-%COMP%]{\n    display: inline-block;\n    \n    padding: 0.31rem ;\n    padding-right: 0.5rem;\n    background-color: var(--primary-primary1-color);\n    border-top-right-radius: 25px;\n    border-bottom-right-radius: 25px;\n    cursor: pointer;\n    border: none;\n    text-decoration: none;\n\n}\n.search-wrap[_ngcontent-%COMP%]{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLCtCQUErQjs7QUFFbkM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckI7a0JBQ2M7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLCtDQUErQztJQUMvQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyNXB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xuXG59XG5cbi5zZWFyY2gtaWNvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtOyAqL1xuICAgIHBhZGRpbmc6IDAuMzFyZW0gO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXByaW1hcnkxLWNvbG9yKTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuLnNlYXJjaC13cmFwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 67936:
/*!*********************************************!*\
  !*** ./src/app/my-orders/my-orders-enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myOrders": () => (/* binding */ myOrders)
/* harmony export */ });
var myOrders;
(function (myOrders) {
  myOrders["myOrdersTopTitle"] = "my-order-top-title";
  myOrders["myOrdersItemDiv"] = "my-orders-single-items-div-";
  myOrders["myOrdersItemHeadline"] = "my-orders-single-items-headline-div-";
  myOrders["myOrdersID"] = "my-orders-id";
  myOrders["myOrdersTime"] = "my-orders-time";
  myOrders["myOrdersArrow"] = "my-orders-arrow";
  myOrders["myOrdersTotalPrice"] = "my-orders-total-price-";
  myOrders["myOrdersSingleItem"] = "my-orders-single-details-item-";
  myOrders["myOrdersImage"] = "my-orders-item-image-";
  myOrders["myOrdersTitle"] = "my-orders-item-title-";
  myOrders["myOrdersPrice"] = "my-orders-item-price-";
  myOrders["myOrdersCount"] = "my-orders-item-count-";
  myOrders["myOrdersPriceWithAccesories"] = "my-orders-single-item-total-price-";
  myOrders["myOrdersWarrantyDiv"] = "my-orders-warranty-div-";
  myOrders["myOrdersWarrantyTitle"] = "my-orders-warranty-title-";
  myOrders["myOrdersWarrantyPrice"] = "my-orders-warranty-price-";
  myOrders["myOrdersReturnOptionDiv"] = "my-orders-return-option-div-";
  myOrders["myOrdersReturnOptionTitle"] = "my-orders-return-option-title-";
  myOrders["myOrdersReturnOptionPrice"] = "my-orders-return-option-price-";
})(myOrders || (myOrders = {}));

/***/ }),

/***/ 7099:
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyOrderComponent": () => (/* binding */ MyOrderComponent)
/* harmony export */ });
/* harmony import */ var _my_orders_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-orders-enum */ 67936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/common.service */ 7577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);









function MyOrderComponent_app_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-error", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorText", ctx_r0.errorMessage);
  }
}
function MyOrderComponent_app_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader");
  }
}
function MyOrderComponent_div_5_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "20 \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r8.attr.myOrdersWarrantyDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r8.attr.myOrdersWarrantyTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.resources.cartWarranty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r8.attr.myOrdersWarrantyPrice);
  }
}
function MyOrderComponent_div_5_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "10 \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r9.attr.myOrdersReturnOptionDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r9.attr.myOrdersReturnOptionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r9.resources.cartReturnOption, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r9.attr.myOrdersReturnOptionPrice);
  }
}
function MyOrderComponent_div_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MyOrderComponent_div_5_div_11_div_9_Template, 5, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, MyOrderComponent_div_5_div_11_div_10_Template, 5, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i2_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", item_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r5.attr.myOrdersImage + i2_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r5.attr.myOrdersTitle + i2_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r5.attr.myOrdersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r6.price, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r5.attr.myOrdersPriceWithAccesories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r5.common.totalItemPrice(item_r6.price, item_r6.waranty, item_r6.returnOption, item_r6.amount), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r6.waranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r6.returnOption);
  }
}
function MyOrderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyOrderComponent_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.showDetails($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MyOrderComponent_div_5_div_11_Template, 11, 10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.myOrdersItemDiv + element_r3.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.myOrdersItemHeadline + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.myOrdersID + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.resources.myOrderID, "", element_r3.orderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.myOrdersTitle + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.resources.myOrderTime, "", element_r3.date.slice(1, -1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.myOrdersTotalPrice + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total price: ", ctx_r2.common.amountWithDPH(ctx_r2.common.allItemsPrice(element_r3.item)), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.myOrdersArrow + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r2.resources.arrowDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.myOrdersSingleItem + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", element_r3.item);
  }
}
class MyOrderComponent {
  constructor(resources, data, common) {
    this.resources = resources;
    this.data = data;
    this.common = common;
    this.attr = _my_orders_enum__WEBPACK_IMPORTED_MODULE_0__.myOrders;
    this.loader = true;
    this.data.getOrders().subscribe(data => {
      this.items = data;
      this.loader = false;
      if (data.length == 0) {
        this.error = true;
        this.errorMessage = "You don't have any orders.";
      }
    }, err => {
      this.error = true;
      this.loader = false;
      this.errorMessage = 'Something went wrong!';
    });
  }
  showDetails(event) {
    let detailElement = event.currentTarget.nextElementSibling;
    detailElement?.classList.toggle('hide');
  }
}
MyOrderComponent.ɵfac = function MyOrderComponent_Factory(t) {
  return new (t || MyOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
MyOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MyOrderComponent,
  selectors: [["app-my-orders"]],
  decls: 6,
  vars: 5,
  consts: [[1, "my-orders-title"], [3, "errorText", 4, "ngIf"], [4, "ngIf"], [1, "cart-wrapper"], ["style", "margin: 1rem;", 4, "ngFor", "ngForOf"], [3, "errorText"], [2, "margin", "1rem"], [1, "my-order-hadline", 3, "click"], [1, "my-order-text"], [1, "my-order-buton"], [3, "icon"], [1, "cart-single-element", "hide"], [4, "ngFor", "ngForOf"], [1, "cart-info"], ["alt", "", 1, "cart-image", 3, "src"], [1, "cart-title"], [1, "cart-price"], [1, "cart-single-total-price"], ["class", "cart-additional", 4, "ngIf"], [1, "cart-additional"], [1, "cart-additional-label"], [1, "cart-additional-price"]],
  template: function MyOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MyOrderComponent_app_error_2_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MyOrderComponent_app_loader_3_Template, 1, 0, "app-loader", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, MyOrderComponent_div_5_Template, 12, 14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx.attr.myOrdersTopTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.resources.myOrdersTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: [".my-orders-title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 1rem;\n    font-weight: 500;\n}\n.my-order-hadline[_ngcontent-%COMP%]{\n    box-shadow: 0 -1.5px 3px 1px;\n    max-width: 95%;\n    border-radius: 5px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n}\n.my-order-text[_ngcontent-%COMP%]{\n    font-weight: 400;\n    font-size: 120%;\n}\n.my-order-buton[_ngcontent-%COMP%]{\n    border: 0;\n    background: transparent;\n}\n.cart-wrapper[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n    \n}\n.cart-info[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    \n}\n.cart-single-element[_ngcontent-%COMP%]{\n    box-shadow: 0 3px 5px, 0 0 0;\n    border-radius: 5px;\n    max-width: 95%;\n    margin: 0 auto;\n}\n.cart-image[_ngcontent-%COMP%]{\n    width: 7.5rem;\n    margin-top: 1rem;\n}\n.cart-title[_ngcontent-%COMP%]{\n    font-weight: 600;\n    color: var(--darker-primary1-color);\n}\n.cart-count[_ngcontent-%COMP%]{\n    width: 3rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    text-align: center;\n}\n.cart-single-total-price[_ngcontent-%COMP%]{\n    font-weight: 600;\n    font-family: var(--font-Maitree);\n}\n.cart-additional[_ngcontent-%COMP%]{\n    margin-left: 25%;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    max-width: 40%;\n    justify-content: space-between;\n    padding-bottom: 0.5rem;\n    text-align: center;\n}\n\n.cart-additional-label[_ngcontent-%COMP%]{\n    text-align: left;\n    font-weight: 500;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {  \n\n   opacity: 1;\n\n}\n\n.hide[_ngcontent-%COMP%]{\n    display: none;\n}\n\n@media screen and (max-width:450px) {\n.cart-info[_ngcontent-%COMP%]{\n    display: block;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n    position: relative;\n}\n.cart-additional[_ngcontent-%COMP%]{\n    margin-left: 5%;\n    max-width: 100%;\n}\n.cart-image[_ngcontent-%COMP%]{\n    width: 100%;\n    \n}\n.cart-title[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-right: 2rem;\n}\n.cart-price[_ngcontent-%COMP%]{\n    display: inline-block;\n        margin-right: 2rem;\n}\n.close-mobile[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 1%;\n    right: 1%;\n}\n.close-icon-mobile[_ngcontent-%COMP%]{\n    font-size: 1.5rem;\n}\n}\n\n.total-wrapper[_ngcontent-%COMP%]{\n    border-top: 0.1px solid #d2d2d2;\n}\n.total[_ngcontent-%COMP%]{\n    margin: 1rem 5rem;\n    display: flex;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksU0FBUztJQUNULHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7OztHQUdHLFVBQVU7O0FBRWI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO1FBQ2pCLGtCQUFrQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1vcmRlcnMtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5teS1vcmRlci1oYWRsaW5le1xuICAgIGJveC1zaGFkb3c6IDAgLTEuNXB4IDNweCAxcHg7XG4gICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5teS1vcmRlci10ZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMjAlO1xufVxuLm15LW9yZGVyLWJ1dG9ue1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jYXJ0LXdyYXBwZXJ7XG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIFxufVxuLmNhcnQtaW5mb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIG1hcmdpbjogMXJlbTsgKi9cbn1cbi5jYXJ0LXNpbmdsZS1lbGVtZW50e1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCwgMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC13aWR0aDogOTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcnQtaW1hZ2V7XG4gICAgd2lkdGg6IDcuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmNhcnQtdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLXByaW1hcnkxLWNvbG9yKTtcbn1cbi5jYXJ0LWNvdW50e1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FydC1zaW5nbGUtdG90YWwtcHJpY2V7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1NYWl0cmVlKTtcbn1cbi5jYXJ0LWFkZGl0aW9uYWx7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJ0LWFkZGl0aW9uYWwtbGFiZWx7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgIFxuXG4gICBvcGFjaXR5OiAxO1xuXG59XG5cbi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDUwcHgpIHtcbi5jYXJ0LWluZm97XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJ0LWFkZGl0aW9uYWx7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbi5jYXJ0LWltYWdle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIG1hcmdpbi10b3A6IDFyZW07ICovXG59XG4uY2FydC10aXRsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLmNhcnQtcHJpY2V7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uY2xvc2UtbW9iaWxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDElO1xuICAgIHJpZ2h0OiAxJTtcbn1cbi5jbG9zZS1pY29uLW1vYmlsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cbn1cblxuLnRvdGFsLXdyYXBwZXJ7XG4gICAgYm9yZGVyLXRvcDogMC4xcHggc29saWQgI2QyZDJkMjtcbn1cbi50b3RhbHtcbiAgICBtYXJnaW46IDFyZW0gNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 96283:
/*!*************************************!*\
  !*** ./src/app/order/order-enum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "order": () => (/* binding */ order)
/* harmony export */ });
var order;
(function (order) {
  order["loading"] = "order-loading";
  order["succesfullIcon"] = "order-successful-icon";
  order["succesfullThankLbl"] = "order-successful-thank-label";
  order["succesfullOrderLbl"] = "order-successful-order-label";
  order["successfulID"] = "order-successful-id";
  order["problemlIcon"] = "order-problem-icon";
  order["problemOrderLbl"] = "order-problem-order-label";
  order["backButton"] = "order-return-button";
})(order || (order = {}));

/***/ }),

/***/ 10915:
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderComponent": () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var _order_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-enum */ 96283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/service/common.service */ 7577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);










function OrderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r0.attr.loading);
  }
}
function OrderComponent_app_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader");
  }
}
function OrderComponent_app_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-error", 5);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorText", ctx_r2.errorMessage);
  }
}
function OrderComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.succesfullIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r4.resources.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.succesfullThankLbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.resources.orderSuccessfulThank);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.succesfullOrderLbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.resources.orderSuccessful);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.successfulID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("ID of your order: ", ctx_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/" + ctx_r4.resources.mainPageURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.backButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r4.resources.arrowLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Return to ", ctx_r4.resources.orderTitle, " ");
  }
}
function OrderComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r5.attr.problemlIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r5.resources.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r5.attr.problemOrderLbl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.resources.orderProblem);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/" + ctx_r5.resources.mainPageURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r5.attr.backButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r5.resources.arrowLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Return to ", ctx_r5.resources.mainPageTitle, " ");
  }
}
function OrderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderComponent_div_3_div_1_Template, 12, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderComponent_div_3_div_2_Template, 8, 8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.showSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.showProblem);
  }
}
class OrderComponent {
  constructor(resources, data, common) {
    this.resources = resources;
    this.data = data;
    this.common = common;
    this.showLoader = false;
    this.showSuccess = true;
    this.showProblem = false;
    this.attr = _order_enum__WEBPACK_IMPORTED_MODULE_0__.order;
    const shipping = JSON.parse(localStorage.getItem('Shipping'));
    const items = JSON.parse(localStorage.getItem('Items'));
    const address = JSON.parse(localStorage.getItem('Address'));
    this.id = this.generateUniqueId();
    let date = new Date().toLocaleDateString('en-GB');
    this.data.makeOrder(this.id, items, address, shipping, date).subscribe(data => {
      this.orderDone = true;
      this.deleteItems();
      this.common.badge.next('');
    }, err => {
      this.error = true;
      this.errorMessage = 'Something went wrong';
    });
  }
  generateUniqueId() {
    const currentTime = new Date().getTime();
    const randomNumbers = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const uniqueId = Number(`${currentTime}${randomNumbers}`);
    return uniqueId;
  }
  deleteItems() {
    localStorage.removeItem('Shipping');
    localStorage.removeItem('Items');
    localStorage.removeItem('Address');
    localStorage.removeItem('Confirmed');
  }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) {
  return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
};
OrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: OrderComponent,
  selectors: [["app-order"]],
  decls: 4,
  vars: 4,
  consts: [["class", "loader", 4, "ngIf"], [4, "ngIf"], [3, "errorText", 4, "ngIf"], ["class", "order-wrapper", 4, "ngIf"], [1, "loader"], [3, "errorText"], [1, "order-wrapper"], ["class", "order-successfull", 4, "ngIf"], ["class", "order-problem", 4, "ngIf"], [1, "order-successfull"], [1, "icon", "success"], [1, "success-chacked", 3, "icon"], [1, "order-text"], [1, "navigation-btn", 3, "routerLink"], [1, "", 3, "icon"], [1, "order-problem"], [1, "icon", "problem"]],
  template: function OrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, OrderComponent_div_0_Template, 1, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderComponent_app_error_2_Template, 1, 1, "app-error", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrderComponent_div_3_Template, 3, 2, "div", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error == undefined && ctx.orderDone == undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.orderDone == true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: [".icon[_ngcontent-%COMP%]{\n    display: inline-block;\n    padding: 5rem;\n    border-radius:50%;\n    margin-top: 4rem;\n    margin-bottom: 2rem;\n}\n.success[_ngcontent-%COMP%]{\n    background-color: green;\n}\n.problem[_ngcontent-%COMP%]{\n    background-color: #ff5349;\n}\n.success-chacked[_ngcontent-%COMP%]{\n    font-size: 5rem;\n    color: white;\n    font-size: 3rem;\n}\n.order-wrapper[_ngcontent-%COMP%]{\n    display: block;\n    text-align: center;\n}\n.order-text[_ngcontent-%COMP%]{\n    display: block;\n    font-size: 120%;\n    letter-spacing: 1px;\n    padding: 0.2rem;\n}\n.navigation-btn[_ngcontent-%COMP%]{\n    margin-top: 0.5rem;\n    width: 35%;\n    cursor: pointer;\n    border-radius: 15px;\n    font-weight: 300;\n    font-size: 120%;\n    background-color: transparent;\n    border: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmljb257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLnN1Y2Nlc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4ucHJvYmxlbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MzQ5O1xufVxuLnN1Y2Nlc3MtY2hhY2tlZHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5vcmRlci13cmFwcGVye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vcmRlci10ZXh0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbn1cbi5uYXZpZ2F0aW9uLWJ0bntcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgd2lkdGg6IDM1JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 31673:
/*!***************************************************!*\
  !*** ./src/app/registration/registration-enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registration": () => (/* binding */ registration)
/* harmony export */ });
var registration;
(function (registration) {
  registration["title"] = "registration-title";
  registration["usernameDiv"] = "username-div";
  registration["usernameLabel"] = "username-label";
  registration["usernameInput"] = "username-input";
  registration["passwordDiv"] = "password-div";
  registration["passwordLabel"] = "password-label";
  registration["passwordInput"] = "password-input";
  registration["passwordConfirmationDiv"] = "password-confirmation-div";
  registration["passwordConfirmationLabel"] = "password-confirmation-label";
  registration["passwordConfirmationInput"] = "password-confirmation-input";
})(registration || (registration = {}));

/***/ }),

/***/ 94969:
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _registration_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration-enum */ 31673);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/input-data/input-data.component */ 63781);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);
/* harmony import */ var _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/succuess/succuess.component */ 50393);











function RegistrationComponent_app_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 14);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", ctx_r0.errorMessage);
  }
}
function RegistrationComponent_app_succuess_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-succuess", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("successText", ctx_r1.resources.registrationSuccess);
  }
}
function RegistrationComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegistrationComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegistrationComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegistrationComponent_app_loader_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
  }
}
class RegistrationComponent {
  constructor(resources, data) {
    this.resources = resources;
    this.data = data;
    this.attr = _registration_enum__WEBPACK_IMPORTED_MODULE_0__.registration;
    this.submitted = false;
    this.success = false;
    this.loader = false;
    this.credentials = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
    });
  }
  getFormData(data) {
    this.submitted = true;
    this.loader = true;
    if (this.credentials.status == 'VALID') {
      //password matching check
      if (this.credentials.value.newPassword !== this.credentials.value.passwordConfirmation) {
        this.error = true;
        this.errorMessage = 'Passwords are not matching';
        this.loader = false;
      } else {
        this.data.registration({
          ...data.value,
          password: this.credentials.value.newPassword,
          username: this.credentials.value.username
        }).subscribe(data => {
          localStorage.setItem('User', JSON.stringify({
            token: data.token,
            username: data.username
          }));
          this.success = true;
          this.data.logedIn.next('');
          this.loader = false;
          this.error = false;
        }, err => {
          this.error = true;
          this.errorMessage = err.error.msg;
          this.loader = false;
        });
      }
    } else {
      this.loader = false;
    }
  }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
  return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
RegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RegistrationComponent,
  selectors: [["app-registration"]],
  decls: 27,
  vars: 25,
  consts: [[1, "title"], [3, "errorText", 4, "ngIf"], [3, "successText", 4, "ngIf"], [1, "items"], ["action", "", 1, "form", 3, "formGroup", "ngSubmit"], ["ngFormPasswordCredentials", "ngForm"], [1, "input-wrapper"], [1, "input-name"], ["type", "username", "formControlName", "username", 1, "input", "input-width", 3, "placeholder"], ["class", "invalid", 4, "ngIf"], ["type", "password", "formControlName", "newPassword", 1, "input", "input-width", 3, "placeholder"], ["type", "password", "formControlName", "passwordConfirmation", 1, "input", "input-width", 3, "placeholder"], [2, "margin-bottom", "3rem", 3, "submitBtnName", "formData"], [4, "ngIf"], [3, "errorText"], [3, "successText"], [1, "invalid"]],
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegistrationComponent_app_error_2_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RegistrationComponent_app_succuess_3_Template, 1, 1, "app-succuess", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "form", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_5_listener() {
        return ctx.getFormData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "fieldset", 6)(8, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RegistrationComponent_span_11_Template, 2, 0, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "fieldset", 6)(14, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, RegistrationComponent_span_17_Template, 2, 0, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "fieldset", 6)(20, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, RegistrationComponent_span_23_Template, 2, 0, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "app-input-data", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formData", function RegistrationComponent_Template_app_input_data_formData_25_listener($event) {
        return ctx.getFormData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RegistrationComponent_app_loader_26_Template, 1, 0, "app-loader", 13);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.resources.registrationTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.success);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.credentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.usernameDiv);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.usernameLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("New ", ctx.resources.userProfileUsername, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert new ", ctx.resources.userProfilePassword, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.usernameInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.credentials.get("username").touched && ctx.credentials.get("username").invalid || ctx.submitted && ctx.credentials.get("username").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.passwordDiv);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.passwordLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("New ", ctx.resources.userProfilePassword, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert new ", ctx.resources.userProfilePassword, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.passwordInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.credentials.get("newPassword").touched && ctx.credentials.get("newPassword").invalid || ctx.submitted && ctx.credentials.get("newPassword").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.passwordConfirmationDiv);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.passwordConfirmationLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.resources.userProfilePasswordConfirmation);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx.resources.userProfilePasswordConfirmation, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.passwordConfirmationInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.credentials.get("passwordConfirmation").touched && ctx.credentials.get("passwordConfirmation").invalid || ctx.submitted && ctx.credentials.get("newPassword").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("submitBtnName", "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_3__.InputDataComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_6__.SuccuessComponent],
  styles: [".items[_ngcontent-%COMP%]{\n        width: 70%;\n    margin-left: 30%;\n    margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsVUFBVTtJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXN7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 27960:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/added-to-cart/added-to-cart-enum.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addedToCart": () => (/* binding */ addedToCart)
/* harmony export */ });
var addedToCart;
(function (addedToCart) {
  addedToCart["modal"] = "info-modal";
  addedToCart["sucesfullMessage"] = "successful-message";
  addedToCart["closeButton"] = "close-button";
  addedToCart["navigateShoping"] = "back-to-shoping";
  addedToCart["navigateToCart"] = "navigate-to-cart";
})(addedToCart || (addedToCart = {}));

/***/ }),

/***/ 80756:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/added-to-cart/added-to-cart.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddedToCartComponent": () => (/* binding */ AddedToCartComponent)
/* harmony export */ });
/* harmony import */ var _added_to_cart_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./added-to-cart-enum */ 27960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources.service */ 95859);
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/common.service */ 7577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);







function AddedToCartComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddedToCartComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.show = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "fa-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddedToCartComponent_div_0_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.show = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddedToCartComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.show = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r0.attr.modal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r0.attr.closeButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.resources.close);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r0.attr.sucesfullMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.resources.addedToCartMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "../" + ctx_r0.resources.cartURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r0.attr.navigateToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.resources.addedToCartNavigateToCart);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "../" + ctx_r0.resources.mainPageURL);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-type", ctx_r0.attr.navigateShoping);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.resources.addedToCartNavigateShoping);
  }
}
class AddedToCartComponent {
  constructor(resources, common) {
    this.resources = resources;
    this.common = common;
    this.show = false;
    this.attr = _added_to_cart_enum__WEBPACK_IMPORTED_MODULE_0__.addedToCart;
  }
  ngOnInit() {
    this.common.addedToCart.subscribe(() => {
      this.show = true;
    });
  }
}
AddedToCartComponent.ɵfac = function AddedToCartComponent_Factory(t) {
  return new (t || AddedToCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService));
};
AddedToCartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AddedToCartComponent,
  selectors: [["app-added-to-cart"]],
  decls: 1,
  vars: 1,
  consts: [["class", "modal-wrapper", 4, "ngIf"], [1, "modal-wrapper"], [1, "modal"], [1, "close-button", 3, "click"], [3, "icon"], [1, "title"], [1, "button", 3, "routerLink", "click"]],
  template: function AddedToCartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddedToCartComponent_div_0_Template, 10, 11, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent],
  styles: [".modal-wrapper[_ngcontent-%COMP%]{\n    position: fixed;\n    top: 0;\n    left: -50%;\n    width: 150%;\n    height: 150%;\n    background-color: rgba(210, 210, 210, 0.4);\n    z-index: 20;\n}\n.modal[_ngcontent-%COMP%]{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    background-color: white;\n    padding: 1rem;\n    box-shadow: 0  0 5px; \n    border-radius: 5px;\n    z-index: 10;\n    border: 2px solid var(--dark-primary1-color);\n\n}\n.button[_ngcontent-%COMP%]{\n    margin: 1rem auto;\n    display: block;\n    padding: 0.2rem 0.5rem;\n    background-color: var(--lighter-primary1-color);\n    border: solid 1px var(--primary-primary1-color);\n    border-radius: 3px;\n    box-shadow: 0 0 5px;\n    font-size: 110%;\n    cursor: pointer;\n}\n\n.close-button[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    font-size: 1.2rem;\n    color: red;\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRkZWQtdG8tY2FydC9hZGRlZC10by1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDRDQUE0Qzs7QUFFaEQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAxNTAlO1xuICAgIGhlaWdodDogMTUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMjEwLCAyMTAsIDAuNCk7XG4gICAgei1pbmRleDogMjA7XG59XG4ubW9kYWx7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAgMCA1cHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLXByaW1hcnkxLWNvbG9yKTtcblxufVxuLmJ1dHRvbntcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXByaW1hcnktcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4O1xuICAgIGZvbnQtc2l6ZTogMTEwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZS1idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 27113:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/cart-navigation/cart-navigation-enum.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartNavigation": () => (/* binding */ cartNavigation)
/* harmony export */ });
var cartNavigation;
(function (cartNavigation) {
  cartNavigation["navigationOne"] = "navigation-cart";
  cartNavigation["navigationTwo"] = "navigation-billing";
  cartNavigation["navigationThree"] = "navigation-address";
})(cartNavigation || (cartNavigation = {}));

/***/ }),

/***/ 97474:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/cart-navigation/cart-navigation.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartNavigationComponent": () => (/* binding */ CartNavigationComponent)
/* harmony export */ });
/* harmony import */ var _cart_navigation_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-navigation-enum */ 27113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources.service */ 95859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);






class CartNavigationComponent {
  constructor(resources, router) {
    this.resources = resources;
    this.router = router;
    this.attr = _cart_navigation_enum__WEBPACK_IMPORTED_MODULE_0__.cartNavigation;
  }
}
CartNavigationComponent.ɵfac = function CartNavigationComponent_Factory(t) {
  return new (t || CartNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
CartNavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CartNavigationComponent,
  selectors: [["app-cart-navigation"]],
  decls: 12,
  vars: 11,
  consts: [[1, "cart-navigation"], [1, "cart-navigation-page", 3, "ngClass"], [1, "cart-navigation-icon", 3, "icon"]],
  template: function CartNavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.router.url.slice(1) == ctx.resources.cartURL ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.navigationOne);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("1. ", ctx.resources.cartTitle, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.resources.arrowRight);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.router.url.slice(1) == ctx.resources.billingPageURL ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.navigationTwo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("2. ", ctx.resources.billingPageTitle, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.resources.arrowRight);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.router.url.slice(1) == ctx.resources.adressURL ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.navigationThree);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("3. ", ctx.resources.adresstitle, "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
  styles: [".cart-navigation[_ngcontent-%COMP%]{\n    margin: 2rem 3rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    text-align: center;\n}\n.cart-navigation-page[_ngcontent-%COMP%]{\n    background-color: var(--lighter-primary1-color) ;\n    padding: 0.5rem 0.7rem;\n    border-radius: 20px;\n    color: white;\n    opacity: 0.5;\n}\n.cart-navigation-icon[_ngcontent-%COMP%]{\nmargin: 0.5rem;\n}\n\n.active[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\n@media screen and (max-width:450px) {\n.cart-navigation-icon[_ngcontent-%COMP%]{\n    margin: 1rem;\n}\n    h5[_ngcontent-%COMP%]{\n        font-size: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FydC1uYXZpZ2F0aW9uL2NhcnQtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQtbmF2aWdhdGlvbntcbiAgICBtYXJnaW46IDJyZW0gM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcnQtbmF2aWdhdGlvbi1wYWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTEtY29sb3IpIDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cbi5jYXJ0LW5hdmlnYXRpb24taWNvbntcbm1hcmdpbjogMC41cmVtO1xufVxuXG4uYWN0aXZle1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDUwcHgpIHtcbi5jYXJ0LW5hdmlnYXRpb24taWNvbntcbiAgICBtYXJnaW46IDFyZW07XG59XG4gICAgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 76981:
/*!*******************************************************!*\
  !*** ./src/app/shared/components/error/error-rnum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": () => (/* binding */ error)
/* harmony export */ });
var error;
(function (error) {
  error["error"] = "error";
  error["box"] = "error-div";
  error["icon"] = "error-icon";
  error["label"] = "error-text";
})(error || (error = {}));

/***/ }),

/***/ 72765:
/*!************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _error_rnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-rnum */ 76981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources.service */ 95859);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);




class ErrorComponent {
  constructor(resources) {
    this.resources = resources;
    this.attr = _error_rnum__WEBPACK_IMPORTED_MODULE_0__.error;
  }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService));
};
ErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-error"]],
  inputs: {
    errorText: "errorText"
  },
  decls: 5,
  vars: 6,
  consts: [[1, "error-wrapper"], [1, "error-box"], [1, "error-icon", 3, "icon"], [1, "error-text"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.box);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.resources.warning);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.errorText);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
  styles: [".error-wrapper[_ngcontent-%COMP%]{\n    display: block;\n    margin: 2rem auto;\n    text-align: center;\n}\n.error-box[_ngcontent-%COMP%]{\n    display: inline-block;\n    padding: 1rem 3rem;\n    background-color: #d2d2d2;\n    border-radius: 2px;\n    border: 2px solid var(--error-background-color);\n}\n.error-icon[_ngcontent-%COMP%]{\n    font-size: 150%;\n    color: var(--error-background-color);\n    margin-right: 1.5rem;\n}\n.error-text[_ngcontent-%COMP%]{\n    letter-spacing: 1px;\n    font-weight: 500;\n    font-size: 125%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLXdyYXBwZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVycm9yLWJveHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWVycm9yLWJhY2tncm91bmQtY29sb3IpO1xufVxuLmVycm9yLWljb257XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIGNvbG9yOiB2YXIoLS1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5lcnJvci10ZXh0e1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEyNSU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 77853:
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/input-data/input-data-enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputData": () => (/* binding */ inputData)
/* harmony export */ });
var inputData;
(function (inputData) {
  inputData["emailDiv"] = "email-div";
  inputData["emailInput"] = "email-input";
  inputData["emailLabel"] = "email-label";
  inputData["emailError"] = "email-error";
  inputData["nameDiv"] = "name-div";
  inputData["nameInput"] = "name-input";
  inputData["nameLabel"] = "name-label";
  inputData["nameError"] = "name-error";
  inputData["addressDiv"] = "address-div";
  inputData["addressInput"] = "address-input";
  inputData["addressLabel"] = "address-label";
  inputData["addressError"] = "address-error";
  inputData["cityDiv"] = "city-div";
  inputData["cityInput"] = "city-input";
  inputData["cityLabel"] = "city-label";
  inputData["cityError"] = "city-error";
  inputData["countryDiv"] = "country-div";
  inputData["countryInput"] = "country-input";
  inputData["countryLabel"] = "country-label";
  inputData["countryError"] = "country-error";
  inputData["postCodeDiv"] = "post-code-div";
  inputData["postCodeInput"] = "post-code-input";
  inputData["postCodeLabel"] = "post-code-label";
  inputData["postCodeError"] = "post-code-error";
  inputData["phoneNumberDiv"] = "phone-number-div";
  inputData["phoneNumberInput"] = "phone-number-input";
  inputData["phoneNumberLabel"] = "phone-number-label";
  inputData["phoneNumberError"] = "phone-number-error";
  inputData["newsletterDiv"] = "newsletter-div";
  inputData["newsletterInput"] = "newsletter-input";
  inputData["newsletterLabel"] = "newsletter-label";
  inputData["newsletterError"] = "newsletter-error";
  inputData["businessAccountDiv"] = "business-account-div";
  inputData["businessAccountInput"] = "business-account-input";
  inputData["businessAccountLabel"] = "business-account-label";
  inputData["businessAccountError"] = "business-account-error";
  inputData["termsAndConditionsDiv"] = "terms-and-conditions-div";
  inputData["termsAndConditionsInput"] = "terms-and-conditions-input";
  inputData["termsAndConditionsLabel"] = "terms-and-conditions-label";
  inputData["termsAndConditionsError"] = "terms-and-conditions-error";
  inputData["companyRegistrationNumberDiv"] = "company-registration-number-div";
  inputData["companyRegistrationNumberInput"] = "company-registration-number-input";
  inputData["companyRegistrationNumberLabel"] = "company-registration-number-label";
  inputData["companyRegistrationNumberError"] = "company-registration-number-error";
  inputData["VATDiv"] = "VAT-div";
  inputData["VATInput"] = "VAT-input";
  inputData["VATLabel"] = "VAT-label";
  inputData["VATError"] = "VAT-error";
  inputData["BICDiv"] = "BIC-div";
  inputData["BICInput"] = "BIC-input";
  inputData["BICLabel"] = "BIC-label";
  inputData["BICError"] = "BIC-error";
  inputData["IBANDiv"] = "IBAN-div";
  inputData["IBANInput"] = "IBAN-input";
  inputData["IBANLabel"] = "IBAN-label";
  inputData["IBANError"] = "IBAN-error";
  inputData["changeValuesBtn"] = "change-values-btn";
  inputData["saveValuesBtn"] = "save-values-btn";
  inputData["nameOfBankAccountDiv"] = "name-of-bank-account-div";
  inputData["nameOfBankAccountInput"] = "name-of-bank-account-input";
  inputData["nameOfBankAccountLabel"] = "name-of-bank-account-label";
  inputData["nameOfBankAccountError"] = "name-of-bank-account-error";
})(inputData || (inputData = {}));

/***/ }),

/***/ 63781:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/input-data/input-data.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputDataComponent": () => (/* binding */ InputDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _input_data_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-data-enum */ 77853);
/* harmony import */ var _data_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/country */ 58037);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources.service */ 95859);
/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/data.service */ 91228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.component */ 4068);










function InputDataComponent_app_loader_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
  }
}
function InputDataComponent_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r3.attr.emailError);
  }
}
function InputDataComponent_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r4.attr.nameError);
  }
}
function InputDataComponent_div_2_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r5.attr.addressError);
  }
}
function InputDataComponent_div_2_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", country_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", country_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", country_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](country_r14.name);
  }
}
function InputDataComponent_div_2_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r7.attr.countryError);
  }
}
function InputDataComponent_div_2_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r8.attr.cityError);
  }
}
function InputDataComponent_div_2_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r9.attr.postCodeError);
  }
}
function InputDataComponent_div_2_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r10.attr.phoneNumberError);
  }
}
function InputDataComponent_div_2_span_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r11.attr.termsAndConditionsError);
  }
}
function InputDataComponent_div_2_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 34);
  }
}
function InputDataComponent_div_2_div_74_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r15.attr.companyRegistrationNumberError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.resources.addressErrorMessage);
  }
}
function InputDataComponent_div_2_div_74_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r16.attr.VATError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r16.resources.addressErrorMessage);
  }
}
function InputDataComponent_div_2_div_74_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r17.attr.BICError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r17.resources.addressErrorMessage);
  }
}
function InputDataComponent_div_2_div_74_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r18.attr.IBANError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r18.resources.addressErrorMessage);
  }
}
function InputDataComponent_div_2_div_74_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r19.attr.nameOfBankAccountError);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r19.resources.addressErrorMessage);
  }
}
function InputDataComponent_div_2_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35)(1, "fieldset", 36)(2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, InputDataComponent_div_2_div_74_span_5_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "fieldset", 8)(8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, InputDataComponent_div_2_div_74_span_11_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "fieldset", 8)(14, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, InputDataComponent_div_2_div_74_span_17_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "fieldset", 8)(20, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, InputDataComponent_div_2_div_74_span_23_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "fieldset", 8)(26, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, InputDataComponent_div_2_div_74_span_29_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.companyRegistrationNumberDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.companyRegistrationNumberLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.resources.addressCompanyRegistrationNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r13.resources.addressCompanyRegistrationNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.companyRegistrationNumberInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.address.get("compaty_reg_number").touched && ctx_r13.address.get("compaty_reg_number").invalid || _r2.submitted && ctx_r13.address.get("compaty_reg_number").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.VATDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.VATLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.resources.addressVATNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r13.resources.addressVATNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.VATInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.address.get("VAT").touched && ctx_r13.address.get("VAT").invalid || _r2.submitted && ctx_r13.address.get("VAT").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.BICDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.BICLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.resources.addressBIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r13.resources.addressBIC, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.BICInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.address.get("BIC").touched && ctx_r13.address.get("BIC").invalid || _r2.submitted && ctx_r13.address.get("BIC").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.IBANDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.IBANLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.resources.addressIBAN);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r13.resources.addressIBAN, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.IBANInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.address.get("IBAN").touched && ctx_r13.address.get("IBAN").invalid || _r2.submitted && ctx_r13.address.get("IBAN").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.nameOfBankAccountDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.nameOfBankAccountLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r13.resources.addressNameOfBank);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r13.resources.addressNameOfBank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r13.attr.nameOfBankAccountInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.address.get("bank_account_holder").touched && ctx_r13.address.get("bank_account_holder").invalid || _r2.submitted && ctx_r13.address.get("bank_account_holder").invalid);
  }
}
function InputDataComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function InputDataComponent_div_2_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.addNewItem());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 6)(4, "div", 7)(5, "fieldset", 8)(6, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, InputDataComponent_div_2_span_9_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "fieldset", 8)(12, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, InputDataComponent_div_2_span_15_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "fieldset", 8)(18, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, InputDataComponent_div_2_span_21_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "fieldset", 8)(24, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "select", 14)(27, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, InputDataComponent_div_2_option_29_Template, 2, 4, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, InputDataComponent_div_2_span_30_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "fieldset", 8)(33, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, InputDataComponent_div_2_span_36_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "fieldset", 8)(39, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, InputDataComponent_div_2_span_42_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "fieldset", 8)(45, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, InputDataComponent_div_2_span_48_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "fieldset", 20)(51, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 22)(53, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "fieldset", 20)(58, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "input", 25)(60, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, InputDataComponent_div_2_span_64_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "fieldset", 20)(67, "label", 21)(68, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InputDataComponent_div_2_Template_input_change_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.companyUser = !ctx_r22.companyUser);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, InputDataComponent_div_2_div_73_Template, 1, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, InputDataComponent_div_2_div_74_Template, 31, 30, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.emailDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.emailLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.resources.addressEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r1.resources.addressEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.emailInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.address.get("email").touched && ctx_r1.address.get("email").invalid || _r2.submitted && ctx_r1.address.get("email").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.nameDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.nameLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.resources.addressFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r1.resources.addressFullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.nameInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.address.get("name").touched && ctx_r1.address.get("name").invalid || _r2.submitted && ctx_r1.address.get("name").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.addressDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.addressLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.resources.addressAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r1.resources.addressAddress, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.addressInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.address.get("address").touched && ctx_r1.address.get("address").invalid || _r2.submitted && ctx_r1.address.get("address").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.countryDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.countryLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.resources.addressCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.countryInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Select ", ctx_r1.resources.addressCountry, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.address.get("city").touched && ctx_r1.address.get("country").invalid || _r2.submitted && ctx_r1.address.get("country").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.cityDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.cityLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.resources.addressCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r1.resources.addressCity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.cityInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.address.get("city").touched && ctx_r1.address.get("city").invalid || _r2.submitted && ctx_r1.address.get("city").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.postCodeDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.postCodeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.resources.addressPostCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r1.resources.addressPostCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.postCodeInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.address.get("post_code").touched && ctx_r1.address.get("post_code").invalid || _r2.submitted && ctx_r1.address.get("post_code").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.phoneNumberDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.phoneNumberLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.resources.addressPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx_r1.resources.addressPhoneNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.phoneNumberInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.address.get("phone_number").touched && ctx_r1.address.get("phone_number").invalid || _r2.submitted && ctx_r1.address.get("phone_number").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.newsletterDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.newsletterInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.newsletterLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.resources.addressNwssletter, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.termsAndConditionsDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.termsAndConditionsInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.termsAndConditionsLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.resources.addressTermsAndCondition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r1.address.get("terms_and_condition").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.businessAccountDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.businessAccountInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.businessAccountLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.resources.addressBusinessAccount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.companyUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.companyUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx_r1.submitBtnName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-type", ctx_r1.attr.saveValuesBtn);
  }
}
class InputDataComponent {
  constructor(resources, data) {
    this.resources = resources;
    this.data = data;
    this.userData = {};
    //  undefined | {
    //   email: string, name: string, address: string, city: string, postCode: number | undefined, phoneNumber: number |undefined, newsletter: boolean, termsAndCondition: boolean, companyRegistrationNo?: string, VAT?: string, BIC?: string, IBAN?: string, bankAccountHolder?: string}
    //   = { email: '', name: '', address: '', city: '', postCode: undefined, phoneNumber: undefined, newsletter: false, termsAndCondition: false, companyRegistrationNo: '', VAT: '', BIC: '', IBAN: '', bankAccountHolder: '' }
    this.countries = _data_country__WEBPACK_IMPORTED_MODULE_1__.countries;
    this.companyUser = false;
    this.editButton = true;
    this.isDisabledCredentials = true;
    this.editButtonCredentials = true;
    this.attr = _input_data_enum__WEBPACK_IMPORTED_MODULE_0__.inputData;
    this.address = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      country: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      post_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(9)]),
      newsletter: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
      terms_and_condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.requiredTrue),
      bussiness_account: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false),
      compaty_reg_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      VAT: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      BIC: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      IBAN: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      bank_account_holder: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      idUsers: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    });
    this.loader = true;
    this.formData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    if (localStorage.getItem('User')) {
      const token = JSON.parse(localStorage.getItem('User')).token;
      this.data.user(token).subscribe(data => {
        this.loader = false;
        this.address.setValue(data);
        this.companyUser = data.bussiness_account;
      }, error => {
        this.loader = false;
      });
    } else {
      this.loader = false;
    }
  }
  addNewItem() {
    const {
      email,
      name,
      address,
      country,
      city,
      post_code,
      phone_number,
      newsletter,
      terms_and_condition,
      bussiness_account,
      compaty_reg_number,
      VAT,
      BIC,
      IBAN,
      bank_account_holder
    } = this.address.value;
    if (this.address.get('email')?.status == 'VALID' && this.address.get('name')?.status == 'VALID' && this.address.get('address')?.status !== undefined && this.address.get('country')?.status !== undefined && this.address.get('city')?.status !== undefined && this.address.get('post_code')?.status !== undefined && this.address.get('phone_number')?.status !== undefined && this.address.get('terms_and_condition')?.status !== undefined) {
      if (bussiness_account == true && this.address.get('compaty_reg_number')?.status == 'VALID' && this.address.get('VAT')?.status == 'VALID' && this.address.get('BIC')?.status == 'VALID' && this.address.get('IBAN')?.status == 'VALID' && this.address.get('bank_account_holder')?.status == 'VALID') {
        this.formData.emit(this.address);
      } else if (bussiness_account == false) {
        this.formData.emit(this.address);
      }
    }
  }
  ngOnInit() {
    this.address.setValue(this.userData);
    this.loader = false;
    this.companyUser = this.userData.bussiness_account;
    this.data.userData.subscribe(data => {
      this.loader = false;
      this.address.setValue(data);
    });
  }
}
InputDataComponent.ɵfac = function InputDataComponent_Factory(t) {
  return new (t || InputDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_resources_service__WEBPACK_IMPORTED_MODULE_2__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService));
};
InputDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: InputDataComponent,
  selectors: [["app-input-data"]],
  inputs: {
    submitBtnName: "submitBtnName",
    prefilledValues: "prefilledValues",
    userData: "userData"
  },
  outputs: {
    formData: "formData"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "user-profile-wrapper"], [4, "ngIf"], ["class", "wrapper", 4, "ngIf"], [1, "wrapper"], ["action", "", 1, "form", 3, "formGroup", "ngSubmit"], ["ngForm", "ngForm"], [1, "split"], [1, "items"], [1, "input-wrapper"], [1, "input-name"], ["type", "text", "formControlName", "email", 1, "input", 3, "placeholder"], ["class", "invalid", 4, "ngIf"], ["type", "text", "formControlName", "name", 1, "input", 3, "placeholder"], ["type", "text", "formControlName", "address", 1, "input", 3, "placeholder"], ["id", "country", "name", "country", "formControlName", "country", "placehol", "", 1, "input"], ["value", "", "selected", "", "disabled", ""], ["placehol", "", 3, "value", "id", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "city", 1, "input", 3, "placeholder"], ["type", "text", "formControlName", "post_code", 1, "input", 3, "placeholder"], ["type", "text", "formControlName", "phone_number", 1, "input", 3, "placeholder"], [1, "input-checkbox"], [1, "switch"], ["type", "checkbox", "formControlName", "newsletter", "id", "newsletter"], [1, "slider", "round"], ["for", "newsletter", 1, "input-checkbox-name"], ["type", "checkbox", "id", "terms-and-condition", "formControlName", "terms_and_condition"], ["for", "terms-and-condition", 1, "input-checkbox-name"], ["type", "checkbox", "id", "business-account", "formControlName", "bussiness_account", 3, "change"], ["for", "business-account", 1, "input-checkbox-name"], ["class", "line-vertical", 4, "ngIf"], ["class", "items items-right", 4, "ngIf"], ["type", "submit", 1, "edit-button", 3, "value"], [1, "invalid"], ["placehol", "", 3, "value", "id"], [1, "line-vertical"], [1, "items", "items-right"], [1, "input-wrapper", "margin-top"], ["type", "text", "formControlName", "compaty_reg_number", "required", "", 1, "input", "inpt-width", 3, "placeholder"], ["type", "text", "formControlName", "VAT", "required", "", 1, "input", 3, "placeholder"], ["type", "text", "formControlName", "BIC", "required", "", 1, "input", 3, "placeholder"], ["type", "text", "formControlName", "IBAN", "required", "", "pattern", "[A-Za-z]{2}\\d+", "required", "", 1, "input", 3, "placeholder"], ["type", "text", "formControlName", "bank_account_holder", "required", "", 1, "input", 3, "placeholder"]],
  template: function InputDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InputDataComponent_app_loader_1_Template, 1, 0, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, InputDataComponent_div_2_Template, 77, 61, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent],
  styles: [".user-profile-wrapper[_ngcontent-%COMP%]{\n    \n    position: relative;\n}\n.user-accout-buttons[_ngcontent-%COMP%]{\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.address-title[_ngcontent-%COMP%]{\n    margin: 1rem;\n    text-align: center;\n}\n.form-style[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: 32.5%;\n    align-items: start;\n    position: relative;\n}\n.form[_ngcontent-%COMP%]{\n    overflow: hidden;\n}\n.input-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    border: none;\n}\n.input-checkbox[_ngcontent-%COMP%]{\n    margin-right: 0.5rem;\n}\n.input-name[_ngcontent-%COMP%]{\n font-size: 70%;\n color: var(--lighter-primary2-color);\n}\n*[_ngcontent-%COMP%]:disabled {\n\n    opacity: 0.6;\n}\n.wrapper[_ngcontent-%COMP%]{\n    margin-bottom: 6rem;\n\n}\n.items[_ngcontent-%COMP%]{\n  width: 70%;\n  margin-left: 30%;\n}\n.items-right[_ngcontent-%COMP%]{\n    margin-left: 0%;\n}\n\n.split[_ngcontent-%COMP%]{\n    display: grid;\n    \n    \n    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));\n    justify-items: center;\n}\n.input-checkbox[_ngcontent-%COMP%]{\n    border: none;\n}\n.ng-invalid[_ngcontent-%COMP%] { color: gray; }\n.user-account-title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 2rem;\n}\n.martin-top[_ngcontent-%COMP%]{\n  margin-top: 6rem;\n}\n.line[_ngcontent-%COMP%]{\n    position: absolute;\n    \n    left: -50%;\n    width: 100vw;\n    border-top: 0.1px solid #d2d2d2;\n}\n.margin-top[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%]{\n    border: 1px solid red;\n}\n\n\n.button[_ngcontent-%COMP%]{\n    width: 135%;\n}\n\n.form-margin[_ngcontent-%COMP%]{\n  margin-bottom: 10rem;\n}\n\n@media screen and (max-width:850px) {\n    .items[_ngcontent-%COMP%] {\n    margin-left: 15%;\n}\n}\n\n\n@media screen and (max-width:650px) {\n  .split[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .user-accout-buttons[_ngcontent-%COMP%]{\n        bottom: -5rem;\n  }\n  .form-margin[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n  }\n  .edit-button[_ngcontent-%COMP%]{\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtZGF0YS9pbnB1dC1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTswQ0FDc0M7SUFDdEMsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2Qsb0NBQW9DO0FBQ3JDO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsMkJBQTJCO0lBQzNCLDBEQUEwRDtJQUMxRCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQSxjQUFjLFdBQVcsRUFBRTtBQUMzQjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7SUFDSTtJQUNBLGdCQUFnQjtBQUNwQjtBQUNBOzs7QUFHQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO1FBQ00sYUFBYTtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLXByb2ZpbGUtd3JhcHBlcntcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMWZyOyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51c2VyLWFjY291dC1idXR0b25ze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmFkZHJlc3MtdGl0bGV7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3JtLXN0eWxle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAzMi41JTtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm17XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbnB1dC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uaW5wdXQtY2hlY2tib3h7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uaW5wdXQtbmFtZXtcbiBmb250LXNpemU6IDcwJTtcbiBjb2xvcjogdmFyKC0tbGlnaHRlci1wcmltYXJ5Mi1jb2xvcik7XG59XG4qOmRpc2FibGVkIHtcblxuICAgIG9wYWNpdHk6IDAuNjtcbn1cbi53cmFwcGVye1xuICAgIG1hcmdpbi1ib3R0b206IDZyZW07XG5cbn1cbi5pdGVtc3tcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cbi5pdGVtcy1yaWdodHtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5zcGxpdHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMWZyOyAqL1xuICAgIC8qIGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgKi9cbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwcHgsIDFmcikpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5pbnB1dC1jaGVja2JveHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ubmctaW52YWxpZCB7IGNvbG9yOiBncmF5OyB9XG4udXNlci1hY2NvdW50LXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW07XG59XG4ubWFydGluLXRvcHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cbi5saW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiB0b3A6IDIwJTsgKi9cbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCAjZDJkMmQyO1xufVxuLm1hcmdpbi10b3B7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi8qIC5lZGl0LWJ1dHRvbntcbiAgICB3aWR0aDogMzUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG91dGxpbmUtb2Zmc2V0OiA1cHg7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59ICovXG4uYnV0dG9ue1xuICAgIHdpZHRoOiAxMzUlO1xufVxuXG4uZm9ybS1tYXJnaW57XG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg1MHB4KSB7XG4gICAgLml0ZW1zIHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xufVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjUwcHgpIHtcbiAgLnNwbGl0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51c2VyLWFjY291dC1idXR0b25ze1xuICAgICAgICBib3R0b206IC01cmVtO1xuICB9XG4gIC5mb3JtLW1hcmdpbntcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5lZGl0LWJ1dHRvbntcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4068:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class LoaderComponent {}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)();
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  decls: 2,
  vars: 0,
  consts: [[1, "loader-wrapper"], [1, "loader"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".loader[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border: 5px solid #000;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: _ngcontent-%COMP%_rotation 1s linear infinite;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    }\n\n    @keyframes _ngcontent-%COMP%_rotation {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n    } \n\n.loader-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVDs7SUFFQTtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTs7QUFFSjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICAgIH0gXG5cbi5sb2FkZXItd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70514:
/*!************************************************************!*\
  !*** ./src/app/shared/components/succuess/success-enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "success": () => (/* binding */ success)
/* harmony export */ });
var success;
(function (success) {
  success["success"] = "success";
  success["successBox"] = "success-box";
  success["successIcon"] = "success-icon";
  success["successLable"] = "success-lable";
})(success || (success = {}));

/***/ }),

/***/ 50393:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/succuess/succuess.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccuessComponent": () => (/* binding */ SuccuessComponent)
/* harmony export */ });
/* harmony import */ var _success_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-enum */ 70514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources.service */ 95859);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);




class SuccuessComponent {
  constructor(resources) {
    this.resources = resources;
    this.attr = _success_enum__WEBPACK_IMPORTED_MODULE_0__.success;
  }
}
SuccuessComponent.ɵfac = function SuccuessComponent_Factory(t) {
  return new (t || SuccuessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService));
};
SuccuessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SuccuessComponent,
  selectors: [["app-succuess"]],
  inputs: {
    successText: "successText"
  },
  decls: 5,
  vars: 6,
  consts: [[1, "success-wrapper"], [1, "success-box"], [1, "success-icon", 3, "icon"], [1, "success-text"]],
  template: function SuccuessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.success);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.successBox);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.resources.success);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.successIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-type", ctx.attr.successLable);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.successText);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
  styles: [".success-wrapper[_ngcontent-%COMP%]{\n    display: block;\n    margin: 2rem auto;\n    text-align: center;\n}\n.success-box[_ngcontent-%COMP%]{\n    display: inline-block;\n    padding: 1rem 3rem;\n    background-color: #d2d2d2;\n    border-radius: 2px;\n    border: 2px solid var(--success-color);\n}\n.success-icon[_ngcontent-%COMP%]{\n    font-size: 150%;\n    color: var(--success-color);\n    margin-right: 1.5rem;\n}\n.success-text[_ngcontent-%COMP%]{\n    letter-spacing: 1px;\n    font-weight: 500;\n    font-size: 125%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3VjY3Vlc3Mvc3VjY3Vlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3Mtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3VjY2Vzcy1ib3h7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcbn1cbi5zdWNjZXNzLWljb257XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbn1cbi5zdWNjZXNzLXRleHR7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTI1JTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 58037:
/*!****************************************!*\
  !*** ./src/app/shared/data/country.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countries": () => (/* binding */ countries)
/* harmony export */ });
const countries = [{
  name: "Afghanistan",
  code: "AF",
  id: 1
}, {
  name: "Aland Islands",
  code: "AX",
  id: 2
}, {
  name: "Albania",
  code: "AL",
  id: 3
}, {
  name: "Algeria",
  code: "DZ",
  id: 4
}, {
  name: "American Samoa",
  code: "AS",
  id: 5
}, {
  name: "Andorra",
  code: "AD",
  id: 6
}, {
  name: "Angola",
  code: "AO",
  id: 7
}, {
  name: "Anguilla",
  code: "AI",
  id: 8
}, {
  name: "Antarctica",
  code: "AQ",
  id: 9
}, {
  name: "Antigua and Barbuda",
  code: "AG",
  id: 10
}, {
  name: "Argentina",
  code: "AR",
  id: 11
}, {
  name: "Armenia",
  code: "AM",
  id: 12
}, {
  name: "Aruba",
  code: "AW",
  id: 13
}, {
  name: "Australia",
  code: "AU",
  id: 14
}, {
  name: "Austria",
  code: "AT",
  id: 15
}, {
  name: "Azerbaijan",
  code: "AZ",
  id: 16
}, {
  name: "Bahamas",
  code: "BS",
  id: 17
}, {
  name: "Bahrain",
  code: "BH",
  id: 18
}, {
  name: "Bangladesh",
  code: "BD",
  id: 19
}, {
  name: "Barbados",
  code: "BB",
  id: 20
}, {
  name: "Belarus",
  code: "BY",
  id: 21
}, {
  name: "Belgium",
  code: "BE",
  id: 22
}, {
  name: "Belize",
  code: "BZ",
  id: 23
}, {
  name: "Benin",
  code: "BJ",
  id: 24
}, {
  name: "Bermuda",
  code: "BM",
  id: 25
}, {
  name: "Bhutan",
  code: "BT",
  id: 26
}, {
  name: "Bolivia",
  code: "BO",
  id: 27
}, {
  name: "Bonaire, Sint Eustatius and Saba",
  code: "BQ",
  id: 28
}, {
  name: "Bosnia and Herzegovina",
  code: "BA",
  id: 29
}, {
  name: "Botswana",
  code: "BW",
  id: 30
}, {
  name: "Bouvet Island",
  code: "BV",
  id: 31
}, {
  name: "Brazil",
  code: "BR",
  id: 32
}, {
  name: "British Indian Ocean Territory",
  code: "IO",
  id: 33
}, {
  name: "Brunei Darussalam",
  code: "BN",
  id: 34
}, {
  name: "Bulgaria",
  code: "BG",
  id: 35
}, {
  name: "Burkina Faso",
  code: "BF",
  id: 36
}, {
  name: "Burundi",
  code: "BI",
  id: 37
}, {
  name: "Cambodia",
  code: "KH",
  id: 38
}, {
  name: "Cameroon",
  code: "CM",
  id: 39
}, {
  name: "Canada",
  code: "CA",
  id: 40
}, {
  name: "Cape Verde",
  code: "CV",
  id: 41
}, {
  name: "Cayman Islands",
  code: "KY",
  id: 42
}, {
  name: "Central African Republic",
  code: "CF",
  id: 43
}, {
  name: "Chad",
  code: "TD",
  id: 44
}, {
  name: "Chile",
  code: "CL",
  id: 45
}, {
  name: "China",
  code: "CN",
  id: 46
}, {
  name: "Christmas Island",
  code: "CX",
  id: 47
}, {
  name: "Cocos (Keeling) Islands",
  code: "CC",
  id: 48
}, {
  name: "Colombia",
  code: "CO",
  id: 49
}, {
  name: "Comoros",
  code: "KM",
  id: 50
}, {
  name: "Congo",
  code: "CG",
  id: 51
}, {
  name: "Congo, Democratic Republic of the Congo",
  code: "CD",
  id: 52
}, {
  name: "Cook Islands",
  code: "CK",
  id: 53
}, {
  name: "Costa Rica",
  code: "CR",
  id: 54
}, {
  name: "Cote D'Ivoire",
  code: "CI",
  id: 55
}, {
  name: "Croatia",
  code: "HR",
  id: 56
}, {
  name: "Cuba",
  code: "CU",
  id: 57
}, {
  name: "Curacao",
  code: "CW",
  id: 58
}, {
  name: "Cyprus",
  code: "CY",
  id: 59
}, {
  name: "Czech Republic",
  code: "CZ",
  id: 60
}, {
  name: "Denmark",
  code: "DK",
  id: 61
}, {
  name: "Djibouti",
  code: "DJ",
  id: 62
}, {
  name: "Dominica",
  code: "DM",
  id: 63
}, {
  name: "Dominican Republic",
  code: "DO",
  id: 64
}, {
  name: "Ecuador",
  code: "EC",
  id: 65
}, {
  name: "Egypt",
  code: "EG",
  id: 66
}, {
  name: "El Salvador",
  code: "SV",
  id: 67
}, {
  name: "Equatorial Guinea",
  code: "GQ",
  id: 68
}, {
  name: "Eritrea",
  code: "ER",
  id: 69
}, {
  name: "Estonia",
  code: "EE",
  id: 70
}, {
  name: "Ethiopia",
  code: "ET",
  id: 71
}, {
  name: "Falkland Islands (Malvinas)",
  code: "FK",
  id: 72
}, {
  name: "Faroe Islands",
  code: "FO",
  id: 73
}, {
  name: "Fiji",
  code: "FJ",
  id: 74
}, {
  name: "Finland",
  code: "FI",
  id: 75
}, {
  name: "France",
  code: "FR",
  id: 76
}, {
  name: "French Guiana",
  code: "GF",
  id: 77
}, {
  name: "French Polynesia",
  code: "PF",
  id: 78
}, {
  name: "French Southern Territories",
  code: "TF",
  id: 79
}, {
  name: "Gabon",
  code: "GA",
  id: 80
}, {
  name: "Gambia",
  code: "GM",
  id: 81
}, {
  name: "Georgia",
  code: "GE",
  id: 82
}, {
  name: "Germany",
  code: "DE",
  id: 83
}, {
  name: "Ghana",
  code: "GH",
  id: 84
}, {
  name: "Gibraltar",
  code: "GI",
  id: 85
}, {
  name: "Greece",
  code: "GR",
  id: 86
}, {
  name: "Greenland",
  code: "GL",
  id: 87
}, {
  name: "Grenada",
  code: "GD",
  id: 88
}, {
  name: "Guadeloupe",
  code: "GP",
  id: 89
}, {
  name: "Guam",
  code: "GU",
  id: 90
}, {
  name: "Guatemala",
  code: "GT",
  id: 91
}, {
  name: "Guernsey",
  code: "GG",
  id: 92
}, {
  name: "Guinea",
  code: "GN",
  id: 93
}, {
  name: "Guinea-Bissau",
  code: "GW",
  id: 94
}, {
  name: "Guyana",
  code: "GY",
  id: 95
}, {
  name: "Haiti",
  code: "HT",
  id: 96
}, {
  name: "Heard Island and McDonald Islands",
  code: "HM",
  id: 97
}, {
  name: "Holy See (Vatican City State)",
  code: "VA",
  id: 98
}, {
  name: "Honduras",
  code: "HN",
  id: 99
}, {
  name: "Hong Kong",
  code: "HK",
  id: 100
}, {
  name: "Hungary",
  code: "HU",
  id: 101
}, {
  name: "Iceland",
  code: "IS",
  id: 102
}, {
  name: "India",
  code: "IN",
  id: 103
}, {
  name: "Indonesia",
  code: "ID",
  id: 104
}, {
  name: "Iran, Islamic Republic of",
  code: "IR",
  id: 105
}, {
  name: "Iraq",
  code: "IQ",
  id: 106
}, {
  name: "Ireland",
  code: "IE",
  id: 107
}, {
  name: "Isle of Man",
  code: "IM",
  id: 108
}, {
  name: "Israel",
  code: "IL",
  id: 109
}, {
  name: "Italy",
  code: "IT",
  id: 110
}, {
  name: "Jamaica",
  code: "JM",
  id: 111
}, {
  name: "Japan",
  code: "JP",
  id: 112
}, {
  name: "Jersey",
  code: "JE",
  id: 113
}, {
  name: "Jordan",
  code: "JO",
  id: 114
}, {
  name: "Kazakhstan",
  code: "KZ",
  id: 115
}, {
  name: "Kenya",
  code: "KE",
  id: 116
}, {
  name: "Kiribati",
  code: "KI",
  id: 117
}, {
  name: "Korea, Democratic People's Republic of",
  code: "KP",
  id: 118
}, {
  name: "Korea, Republic of",
  code: "KR",
  id: 119
}, {
  name: "Kosovo",
  code: "XK",
  id: 120
}, {
  name: "Kuwait",
  code: "KW",
  id: 121
}, {
  name: "Kyrgyzstan",
  code: "KG",
  id: 122
}, {
  name: "Lao People's Democratic Republic",
  code: "LA",
  id: 123
}, {
  name: "Latvia",
  code: "LV",
  id: 124
}, {
  name: "Lebanon",
  code: "LB",
  id: 125
}, {
  name: "Lesotho",
  code: "LS",
  id: 126
}, {
  name: "Liberia",
  code: "LR",
  id: 127
}, {
  name: "Libyan Arab Jamahiriya",
  code: "LY",
  id: 128
}, {
  name: "Liechtenstein",
  code: "LI",
  id: 129
}, {
  name: "Lithuania",
  code: "LT",
  id: 130
}, {
  name: "Luxembourg",
  code: "LU",
  id: 131
}, {
  name: "Macao",
  code: "MO",
  id: 132
}, {
  name: "Macedonia, the Former Yugoslav Republic of",
  code: "MK",
  id: 133
}, {
  name: "Madagascar",
  code: "MG",
  id: 134
}, {
  name: "Malawi",
  code: "MW",
  id: 135
}, {
  name: "Malaysia",
  code: "MY",
  id: 136
}, {
  name: "Maldives",
  code: "MV",
  id: 137
}, {
  name: "Mali",
  code: "ML",
  id: 138
}, {
  name: "Malta",
  code: "MT",
  id: 139
}, {
  name: "Marshall Islands",
  code: "MH",
  id: 140
}, {
  name: "Martinique",
  code: "MQ",
  id: 141
}, {
  name: "Mauritania",
  code: "MR",
  id: 142
}, {
  name: "Mauritius",
  code: "MU",
  id: 143
}, {
  name: "Mayotte",
  code: "YT",
  id: 144
}, {
  name: "Mexico",
  code: "MX",
  id: 145
}, {
  name: "Micronesia, Federated States of",
  code: "FM",
  id: 146
}, {
  name: "Moldova, Republic of",
  code: "MD",
  id: 147
}, {
  name: "Monaco",
  code: "MC",
  id: 148
}, {
  name: "Mongolia",
  code: "MN",
  id: 149
}, {
  name: "Montenegro",
  code: "ME",
  id: 150
}, {
  name: "Montserrat",
  code: "MS",
  id: 151
}, {
  name: "Morocco",
  code: "MA",
  id: 152
}, {
  name: "Mozambique",
  code: "MZ",
  id: 153
}, {
  name: "Myanmar",
  code: "MM",
  id: 154
}, {
  name: "Namibia",
  code: "NA",
  id: 155
}, {
  name: "Nauru",
  code: "NR",
  id: 156
}, {
  name: "Nepal",
  code: "NP",
  id: 157
}, {
  name: "Netherlands",
  code: "NL",
  id: 158
}, {
  name: "Netherlands Antilles",
  code: "AN",
  id: 159
}, {
  name: "New Caledonia",
  code: "NC",
  id: 160
}, {
  name: "New Zealand",
  code: "NZ",
  id: 161
}, {
  name: "Nicaragua",
  code: "NI",
  id: 162
}, {
  name: "Niger",
  code: "NE",
  id: 163
}, {
  name: "Nigeria",
  code: "NG",
  id: 164
}, {
  name: "Niue",
  code: "NU",
  id: 165
}, {
  name: "Norfolk Island",
  code: "NF",
  id: 166
}, {
  name: "Northern Mariana Islands",
  code: "MP",
  id: 167
}, {
  name: "Norway",
  code: "NO",
  id: 168
}, {
  name: "Oman",
  code: "OM",
  id: 169
}, {
  name: "Pakistan",
  code: "PK",
  id: 170
}, {
  name: "Palau",
  code: "PW",
  id: 171
}, {
  name: "Palestinian Territory, Occupied",
  code: "PS",
  id: 172
}, {
  name: "Panama",
  code: "PA",
  id: 173
}, {
  name: "Papua New Guinea",
  code: "PG",
  id: 174
}, {
  name: "Paraguay",
  code: "PY",
  id: 175
}, {
  name: "Peru",
  code: "PE",
  id: 176
}, {
  name: "Philippines",
  code: "PH",
  id: 177
}, {
  name: "Pitcairn",
  code: "PN",
  id: 178
}, {
  name: "Poland",
  code: "PL",
  id: 179
}, {
  name: "Portugal",
  code: "PT",
  id: 180
}, {
  name: "Puerto Rico",
  code: "PR",
  id: 181
}, {
  name: "Qatar",
  code: "QA",
  id: 182
}, {
  name: "Reunion",
  code: "RE",
  id: 183
}, {
  name: "Romania",
  code: "RO",
  id: 184
}, {
  name: "Russian Federation",
  code: "RU",
  id: 185
}, {
  name: "Rwanda",
  code: "RW",
  id: 186
}, {
  name: "Saint Barthelemy",
  code: "BL",
  id: 187
}, {
  name: "Saint Helena",
  code: "SH",
  id: 188
}, {
  name: "Saint Kitts and Nevis",
  code: "KN",
  id: 189
}, {
  name: "Saint Lucia",
  code: "LC",
  id: 190
}, {
  name: "Saint Martin",
  code: "MF",
  id: 191
}, {
  name: "Saint Pierre and Miquelon",
  code: "PM",
  id: 192
}, {
  name: "Saint Vincent and the Grenadines",
  code: "VC",
  id: 193
}, {
  name: "Samoa",
  code: "WS",
  id: 194
}, {
  name: "San Marino",
  code: "SM",
  id: 195
}, {
  name: "Sao Tome and Principe",
  code: "ST",
  id: 196
}, {
  name: "Saudi Arabia",
  code: "SA",
  id: 197
}, {
  name: "Senegal",
  code: "SN",
  id: 198
}, {
  name: "Serbia",
  code: "RS",
  id: 199
}, {
  name: "Serbia and Montenegro",
  code: "CS",
  id: 200
}, {
  name: "Seychelles",
  code: "SC",
  id: 201
}, {
  name: "Sierra Leone",
  code: "SL",
  id: 202
}, {
  name: "Singapore",
  code: "SG",
  id: 203
}, {
  name: "St Martin",
  code: "SX",
  id: 204
}, {
  name: "Slovakia",
  code: "SK",
  id: 205
}, {
  name: "Slovenia",
  code: "SI",
  id: 206
}, {
  name: "Solomon Islands",
  code: "SB",
  id: 207
}, {
  name: "Somalia",
  code: "SO",
  id: 208
}, {
  name: "South Africa",
  code: "ZA",
  id: 209
}, {
  name: "South Georgia and the South Sandwich Islands",
  code: "GS",
  id: 210
}, {
  name: "South Sudan",
  code: "SS",
  id: 211
}, {
  name: "Spain",
  code: "ES",
  id: 212
}, {
  name: "Sri Lanka",
  code: "LK",
  id: 213
}, {
  name: "Sudan",
  code: "SD",
  id: 214
}, {
  name: "Suriname",
  code: "SR",
  id: 215
}, {
  name: "Svalbard and Jan Mayen",
  code: "SJ",
  id: 216
}, {
  name: "Swaziland",
  code: "SZ",
  id: 217
}, {
  name: "Sweden",
  code: "SE",
  id: 218
}, {
  name: "Switzerland",
  code: "CH",
  id: 219
}, {
  name: "Syrian Arab Republic",
  code: "SY",
  id: 220
}, {
  name: "Taiwan, Province of China",
  code: "TW",
  id: 221
}, {
  name: "Tajikistan",
  code: "TJ",
  id: 222
}, {
  name: "Tanzania, United Republic of",
  code: "TZ",
  id: 223
}, {
  name: "Thailand",
  code: "TH",
  id: 224
}, {
  name: "Timor-Leste",
  code: "TL",
  id: 225
}, {
  name: "Togo",
  code: "TG",
  id: 226
}, {
  name: "Tokelau",
  code: "TK",
  id: 227
}, {
  name: "Tonga",
  code: "TO",
  id: 228
}, {
  name: "Trinidad and Tobago",
  code: "TT",
  id: 229
}, {
  name: "Tunisia",
  code: "TN",
  id: 230
}, {
  name: "Turkey",
  code: "TR",
  id: 231
}, {
  name: "Turkmenistan",
  code: "TM",
  id: 232
}, {
  name: "Turks and Caicos Islands",
  code: "TC",
  id: 233
}, {
  name: "Tuvalu",
  code: "TV",
  id: 234
}, {
  name: "Uganda",
  code: "UG",
  id: 235
}, {
  name: "Ukraine",
  code: "UA",
  id: 236
}, {
  name: "United Arab Emirates",
  code: "AE",
  id: 237
}, {
  name: "United Kingdom",
  code: "GB",
  id: 238
}, {
  name: "United States",
  code: "US",
  id: 239
}, {
  name: "United States Minor Outlying Islands",
  code: "UM",
  id: 240
}, {
  name: "Uruguay",
  code: "UY",
  id: 241
}, {
  name: "Uzbekistan",
  code: "UZ",
  id: 242
}, {
  name: "Vanuatu",
  code: "VU",
  id: 243
}, {
  name: "Venezuela",
  code: "VE",
  id: 244
}, {
  name: "Viet Nam",
  code: "VN",
  id: 245
}, {
  name: "Virgin Islands, British",
  code: "VG",
  id: 246
}, {
  name: "Virgin Islands, U.s.",
  code: "VI",
  id: 247
}, {
  name: "Wallis and Futuna",
  code: "WF",
  id: 248
}, {
  name: "Western Sahara",
  code: "EH",
  id: 249
}, {
  name: "Yemen",
  code: "YE",
  id: 250
}, {
  name: "Zambia",
  code: "ZM",
  id: 251
}, {
  name: "Zimbabwe",
  code: "ZW",
  id: 252
}];

/***/ }),

/***/ 91228:
/*!*********************************************!*\
  !*** ./src/app/shared/data/data.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 97354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources.service */ 95859);





class DataService {
  constructor(http, resources) {
    this.http = http;
    this.resources = resources;
    this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.logedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.logedIn.subscribe(() => {
      this.initializeApp();
    });
  }
  getItems() {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/items`);
  }
  getItem(id) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/items/${id}`);
  }
  makeOrder(idProperty, itemProperty, addressProperty, shippinngProperty, date) {
    let token = undefined;
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')).token;
    }
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/order`, {
      id: idProperty,
      item: itemProperty,
      address: addressProperty,
      shipping: shippinngProperty,
      date: date
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  getItemsAttributes(arrayOfIds) {
    return this.getItems().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      if (arrayOfIds == null) return [];
      const updatedItems = [];
      data.forEach(item => {
        const option = arrayOfIds.find(opt => opt.idItems === item.idItems);
        if (option) {
          const updatedItem = {
            ...item,
            amount: option.amount,
            waranty: option.waranty,
            returnOption: option.returnOption
          };
          updatedItems.push(updatedItem);
        }
      });
      return updatedItems;
    }));
  }
  user(token) {
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  registration(data) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/registration`, data);
  }
  getOrders() {
    let token = undefined;
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')).token;
    }
    return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/order`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  changeUserData(data) {
    let token = undefined;
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')).token;
    }
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/change-user-data`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  changeUsername(data) {
    let token = undefined;
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')).token;
    }
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/change-username`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  changePassword(data) {
    let token = undefined;
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')).token;
    }
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}/api/v1/change-password`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  initializeApp() {
    if (JSON.parse(localStorage.getItem('User'))) {
      const user = JSON.parse(localStorage.getItem('User'));
      this.user(user.token).subscribe(data => {
        this.userData.next(data);
      }, err => {
        localStorage.removeItem('User');
      });
    } else {
      this.userData.next(false);
    }
    return Promise.resolve();
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService));
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 95859:
/*!*********************************************!*\
  !*** ./src/app/shared/resources.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resourcesService": () => (/* binding */ resourcesService)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 46644);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 92171);
/* harmony import */ var _billing_billing_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../billing/billing-enum */ 23524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);




class resourcesService {
  constructor() {
    this.nameOfOrganization = 'Testing App';
    //api server
    this.apiURL = 'http://localhost:3000';
    //meta 
    this.metaDescription = 'Ockay Testing app, testing app for purposes of testing and learning.';
    this.metaKeywords = 'Testing app, leargning testing, QA, automation app, testing eshop';
    this.metaAuthor = 'Martin Ockay | Ockay Template page, QA leader';
    this.metaTemplate = 'Ockay template, testing app esphop done';
    //icons
    this.facebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFacebook;
    this.instagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faInstagram;
    this.location = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faLocationDot;
    this.phone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPhone;
    this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faEnvelope;
    this.cart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faShoppingCart;
    this.info = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faInfo;
    this.magnifyingGlass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faMagnifyingGlass;
    this.close = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faClose;
    this.arrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowLeft;
    this.arrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowRight;
    this.arrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faArrowDown;
    this.success = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faCheck;
    this.warning = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faWarning;
    this.logOut = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSignOut;
    //authorizaition
    this.authorizationURL = 'logIn';
    this.authorizationTitle = 'Log In';
    this.authorizationSucessful = "Authorization was successful!";
    this.authorizationInsertValue = 'Insert Value!';
    this.authorizationLogInBtn = 'Log In';
    this.authorizationForgotPasswordBtn = "Forgot Password?";
    this.authorisationUsername = 'Username';
    this.authorisationPassword = 'Password';
    this.authorizationShowPassword = 'Your password is: ';
    //registration
    this.registrationURL = 'Registration';
    this.registrationTitle = 'Registration';
    this.registrationSuccess = 'User was successfully registered!';
    //main Page
    this.mainPageTitle = 'Shop';
    this.mainPageURL = 'shop';
    //filter
    this.filterTitle = 'Filters';
    this.filtersCategory = 'Category';
    this.filtersCategoryAll = 'All';
    this.filterPrice = "Price";
    this.filterOrder = 'Order';
    this.filterAlphabetOrder = 'From A-Z';
    this.filterReverseAlphabetOrder = 'From Z-A';
    this.filterCheapers = 'From cheap';
    this.filterExpensie = 'From expensive';
    this.feitlerSearch = 'Search';
    //item details
    this.detailsAddToCartButton = 'Add to Cart';
    this.detailsExtendedWarranty = 'Extended Warranty + 1 Year | 20€';
    this.detailReturnOption = '60-Day Return Option | 10€';
    //billing page
    this.billingEnum = _billing_billing_enum__WEBPACK_IMPORTED_MODULE_0__.billing;
    this.billingPageTitle = 'Shipping';
    this.billingPageURL = 'Shipping';
    this.billingMainDescription = 'Select a delivery method';
    this.billintChoosePaymentType = 'Choose payment type';
    this.billingShiping = [{
      title: 'Personal pickup',
      fee: 'For free',
      delivery: 'Tomorrow from 8:00',
      TRData: this.billingEnum.deliveryPersonalPickupTr,
      inputData: this.billingEnum.deliveryPersonalPickupInput,
      optionData: this.billingEnum.deliveryPersonalPickupOption,
      feeData: this.billingEnum.deliveryPersonalPickupFee,
      deliveryData: this.billingEnum.deliveryPersonalPickupDelivery
    }, {
      title: 'Post',
      fee: 'For free',
      delivery: 'In 2 days from 8:00',
      TRData: this.billingEnum.deliveryPostTr,
      inputData: this.billingEnum.deliveryPostInput,
      optionData: this.billingEnum.deliveryPostOption,
      feeData: this.billingEnum.deliveryPostFee,
      deliveryData: this.billingEnum.deliveryPostDelivery
    }, {
      title: 'Curier',
      fee: 'For free',
      delivery: 'Tomorow from 9:00',
      TRData: this.billingEnum.deliveryCurierTr,
      inputData: this.billingEnum.deliveryCurierInput,
      optionData: this.billingEnum.deliveryCurierOption,
      feeData: this.billingEnum.deliveryCurierFee,
      deliveryData: this.billingEnum.deliveryPostDelivery
    }];
    this.billingPaymentMethod = [{
      title: 'Credit / Debit Card',
      fee: 'For free',
      TRData: this.billingEnum.paymentCardTr,
      inputData: this.billingEnum.paymentCardInput,
      optionData: this.billingEnum.paymentCardOption,
      feeData: this.billingEnum.paymentCardFee
    }, {
      title: 'Google Pay',
      fee: 'For free',
      TRData: this.billingEnum.paymentGooglePayTr,
      inputData: this.billingEnum.paymentGooglePayInput,
      optionData: this.billingEnum.paymentGooglePayOption,
      feeData: this.billingEnum.paymentGooglePayFee
    }, {
      title: 'Paypal',
      fee: 'For free',
      TRData: this.billingEnum.paymentPaypalTr,
      inputData: this.billingEnum.paymentPaypalInput,
      optionData: this.billingEnum.paymentPaypalOption,
      feeData: this.billingEnum.paymentPaypalFee
    }, {
      title: 'Cryptocurrency',
      fee: 'For free',
      TRData: this.billingEnum.paymentCryptocurrencyTr,
      inputData: this.billingEnum.paymentCryptocurrencyInput,
      optionData: this.billingEnum.paymentCryptocurrencyOption,
      feeData: this.billingEnum.paymentCryptocurrencyFee
    }, {
      title: 'Bank transfer',
      fee: 'For free',
      TRData: this.billingEnum.paymentBankTransferTr,
      inputData: this.billingEnum.paymentBankTransferInput,
      optionData: this.billingEnum.paymentCryptocurrencyOption,
      feeData: this.billingEnum.paymentCryptocurrencyInput
    }, {
      title: 'Cash',
      fee: 'For free',
      TRData: this.billingEnum.paymentCashTr,
      inputData: this.billingEnum.paymentCashInput,
      optionData: this.billingEnum.paymentCashOption,
      feeData: this.billingEnum.paymentCashFee
    }];
    this.billingErrorMessage = 'Choose option!';
    // adress page
    this.adresstitle = 'Address';
    this.adressURL = 'Address';
    this.addressEmail = 'Email';
    this.addressFullName = 'Full Name';
    this.addressAddress = 'Address';
    this.addressCountry = 'Country';
    this.addressCity = 'City';
    this.addressPostCode = 'Postcode';
    this.addressPhoneNumber = 'Phone Number';
    this.addressNwssletter = 'Newsletter subscribe';
    this.addressTermsAndCondition = 'Agree with terms and conditions';
    this.addressBusinessAccount = 'Business Account';
    this.addressCompanyRegistrationNumber = 'Company Registration No.';
    this.addressVATNumber = 'VAT No.';
    this.addressBIC = 'BIC';
    this.addressIBAN = 'IBAN';
    this.addressNameOfBank = 'Name of Bank Account Holder';
    this.addressErrorMessage = 'Insert value!';
    //added to cart
    this.addedToCartMessage = 'Your item was sucesfully added into cart!';
    this.addedToCartNavigateShoping = 'Continue shopping';
    this.addedToCartNavigateToCart = 'Navigate to Cart';
    //cart
    this.cartTitle = 'Cart';
    this.cartURL = 'cart';
    this.cartWarranty = 'Warranty + 1 year';
    this.cartReturnOption = 'Return option';
    this.cartDPH = 'Tax';
    this.cartPriceWithoutDPH = 'Price without Tax';
    this.cartTotalPrice = 'Total Price with TAX';
    this.cartBillingNavigation = this.billingPageTitle;
    this.cartBactToShopingNavigation = `Back to ${this.mainPageURL}`;
    //summary page
    this.summarryPageTitle = 'Summary';
    this.summarryPageURL = 'Summary';
    this.summaryMakeOrderBtn = 'Order';
    this.summaryEmail = this.addressEmail;
    this.summaryName = this.addressFullName;
    this.summaryAddress = this.addressAddress;
    this.summaryCity = this.addressCity;
    this.summaryPostcode = this.addressPostCode;
    this.summaryPhoneNumber = this.addressPhoneNumber;
    this.summaryCompanyRegistrationNo = this.addressCompanyRegistrationNumber;
    this.summaryVAT = this.addressVATNumber;
    this.summaryBIC = this.addressBIC;
    this.summaryIBAN = this.addressIBAN;
    this.summaryNameOfBankAccountHolder = this.addressNameOfBank;
    this.summaryDeliveryMethod = 'Delivery Method';
    this.summaryPaymentType = 'Payment Type';
    //order
    this.orderTitle = 'Order';
    this.orderURL = 'Order';
    this.orderSuccessfulThank = 'Thank you for your order.';
    this.orderSuccessful = 'Order was made successful!';
    this.orderProblem = 'Something went wrong.';
    //my-orders
    this.myOrdersURL = 'my-orders';
    this.myOrdersTitle = 'My Orders';
    this.myOrderID = 'ID: ';
    this.myOrderTime = 'Time: ';
    //user-profile
    this.userProfileTitle = "User Profile";
    this.userProfileURL = "user-profile";
    this.userProfileUsernameCredentialsTitle = 'Change username';
    this.userProfilePasswordCredentialsTitle = 'Change password';
    this.userProfileUsername = 'Username';
    this.userProfilePassword = 'Password';
    this.userProfilePasswordConfirmation = 'Password confirmation';
    this.userProfileCredentials = 'Save credentials';
    this.userProfileCredentialsChange = 'Yours credentials was successfully changed!';
    this.userProfileUserDataChange = 'Yours data was successfully changed!';
    //cookie-banner
    this.cookieBanner = 'Cookie Banner';
    this.cookieBannerApprovalTopSection = 'Approval';
    this.cookieBannerDetailsTopSection = 'Details';
    this.cookieBannerAboutTopSection = 'About Cookies';
    this.cookieBannerUsagesOfCookiesTitle = 'This website use cookie files';
    this.cookieBannerUsagesOfCookiesDescription = "At Autmation Web, we do our best to only show you content that interests you. But for that we need consent to the use of cookies. By doing so, you allow us to use data about your browsing on AutomationWeb.com. Don't worry, there is noobligation. You can adjust or disable this setting at any time.";
    this.cookieBannerNeededTitle = 'Needed';
    this.cookieBannerNeededDescription = "Necessary cookies help create usable websites by enabling basic functions such as site navigation and access to protected areas of websites.Websites cannot function properly without these cookies.";
    this.cookieBannerPreferenciesTitle = 'Preferencies';
    this.cookieBannerPreferenciesDescription = "Preference cookies allow the website to remember information that will change the way the website behaves or looks, such as your preferred language or the region you are currently in.";
    this.cookieBannerStatsTitle = 'Stats';
    this.cookieBannerStatsDescription = "Statistical cookies help website owners understand how to interact with website visitors by collecting and reporting information anonymously.";
    this.cookieBannerAbout = 'Cookies are small text files that can be used by websites to improve the user experience. <br><br> The law says that we can store cookies on your device if they are necessary for the operation of these sites.For all other types of cookies, we need your consent. <br> <br> This page uses different types of cookies.Some cookies are placed here by third - party services that appear on our pages. <br> <br> You can change or revoke your consent to the Cookie Policy at any time on our website. <br> ';
    this.cookieBannerAdjust = 'Adjust';
    this.cookieBannerAllow = 'Allow';
    //footer
    this.kontaktLinkFacebook = 'https://www.facebook.com';
    this.kontaktFacebook = 'Facebook';
    this.kontaktLinkInstagram = 'https://www.instagram.com';
    this.kontaktInstagram = 'Instagram';
    this.kontaktTown = '924 01 Galanta';
    this.kontaktPhone = '+421 908 123 456';
    this.kontaktLinkPhone = 'tel:' + this.kontaktPhone;
    this.kontaktEmail = 'info@test.sk';
    this.kontaktStreet = 'Hlavna ulica 2';
    this.problem = 'Something went wrong!';
    this.icon = 'logo.png';
    this.Sections = [{
      section: this.mainPageURL,
      title: this.mainPageTitle
    }, {
      section: this.authorizationURL,
      title: this.authorizationTitle
    }, {
      section: this.myOrdersURL,
      title: this.myOrdersTitle
    }, {
      section: this.userProfileURL,
      title: this.userProfileTitle
    }, {
      section: this.cartURL,
      title: this.cartTitle
    }];
  }
}
resourcesService.ɵfac = function resourcesService_Factory(t) {
  return new (t || resourcesService)();
};
resourcesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: resourcesService,
  factory: resourcesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 22291:
/*!*********************************************************!*\
  !*** ./src/app/shared/service/address-guard.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressGuardService": () => (/* binding */ AddressGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources.service */ 95859);



class AddressGuardService {
  constructor(router, resources) {
    this.router = router;
    this.resources = resources;
  }
  canActivate() {
    const shipping = JSON.parse(localStorage.getItem('Shipping'));
    const itemsProvided = JSON.parse(localStorage.getItem('Items'));
    if (shipping && itemsProvided) {
      return true;
    } else {
      // Navigate to a specific component or route
      this.router.navigate([this.resources.mainPageURL]);
      return false;
    }
  }
}
AddressGuardService.ɵfac = function AddressGuardService_Factory(t) {
  return new (t || AddressGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService));
};
AddressGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AddressGuardService,
  factory: AddressGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 60249:
/*!***************************************************************!*\
  !*** ./src/app/shared/service/authorisation-guard.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorisationService": () => (/* binding */ AuthorisationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources.service */ 95859);



class AuthorisationService {
  constructor(http, resources) {
    this.http = http;
    this.resources = resources;
  }
  canActivate() {
    let user;
    if (JSON.parse(localStorage.getItem('User'))) {
      return false;
    } else {
      return true;
    }
  }
}
AuthorisationService.ɵfac = function AuthorisationService_Factory(t) {
  return new (t || AuthorisationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService));
};
AuthorisationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthorisationService,
  factory: AuthorisationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7577:
/*!**************************************************!*\
  !*** ./src/app/shared/service/common.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


class CommonService {
  constructor() {
    this.badge = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.addedToCart = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  addToCart(event, itemId, waranty, returnOption) {
    event.stopPropagation();
    let singleItems = {
      idItems: itemId
    };
    if (waranty) {
      singleItems.waranty = true;
    }
    if (returnOption) {
      singleItems.returnOption = true;
    }
    if (localStorage.getItem('Items') == null) {
      singleItems.amount = 1;
      localStorage.setItem('Items', JSON.stringify([singleItems]));
    } else {
      const items = JSON.parse(localStorage.getItem('Items'));
      singleItems.amount = 1;
      //if there is element not duplic him but only add amount
      let isPresent = false;
      items.forEach(element => {
        if (element.idItems == itemId) {
          isPresent = true;
        }
      });
      if (isPresent) {
        items.map(element => {
          if (element.idItems == itemId) {
            if (waranty) {
              element.waranty = true;
            }
            if (returnOption) {
              element.returnOption = true;
            }
            element.amount++;
          }
          return element;
        });
      } else {
        items.push(singleItems);
      }
      localStorage.setItem('Items', JSON.stringify(items));
    }
    this.badge.next('');
    this.addedToCart.next('');
  }
  totalItemPrice(itemPrice, warranty, returnOption, amount) {
    let totalPrice = itemPrice * amount;
    if (warranty) {
      totalPrice = totalPrice + 20;
    }
    if (returnOption) {
      totalPrice = totalPrice + 10;
    }
    return totalPrice.toFixed(2);
  }
  allItemsPrice(items) {
    let price = 0;
    items.forEach(element => {
      price = price + element.amount * element.price;
      if (element.waranty == true) {
        price = price + 20;
      }
      if (element.returnOption == true) {
        price = price + 10;
      }
    });
    return price.toFixed(2);
  }
  amountWithDPH(amount) {
    return (amount * 1.2).toFixed(2);
  }
}
CommonService.ɵfac = function CommonService_Factory(t) {
  return new (t || CommonService)();
};
CommonService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CommonService,
  factory: CommonService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 55028:
/*!*******************************************************!*\
  !*** ./src/app/shared/service/order-guard.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderGuardService": () => (/* binding */ OrderGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources.service */ 95859);



class OrderGuardService {
  constructor(router, resources) {
    this.router = router;
    this.resources = resources;
  }
  canActivate() {
    const shipping = JSON.parse(localStorage.getItem('Shipping'));
    const items = JSON.parse(localStorage.getItem('Items'));
    const address = JSON.parse(localStorage.getItem('Address'));
    const confirmed = JSON.parse(localStorage.getItem('Confirmed'));
    if (shipping && items && address && confirmed) {
      return true;
    } else {
      this.router.navigate([this.resources.mainPageURL]);
      return false;
    }
  }
}
OrderGuardService.ɵfac = function OrderGuardService_Factory(t) {
  return new (t || OrderGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService));
};
OrderGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OrderGuardService,
  factory: OrderGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 44859:
/*!**********************************************************!*\
  !*** ./src/app/shared/service/shipping-guard.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingGuardService": () => (/* binding */ ShippingGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources.service */ 95859);



class ShippingGuardService {
  constructor(router, resources) {
    this.router = router;
    this.resources = resources;
  }
  canActivate() {
    const itemsProvided = JSON.parse(localStorage.getItem('Items'));
    if (itemsProvided !== null) {
      if (itemsProvided.length == 0) {
        // Navigate to a specific component or route
        this.router.navigate([this.resources.mainPageURL]);
        return false;
      }
      return true;
    } else {
      this.router.navigate([this.resources.mainPageURL]);
      return false;
    }
  }
}
ShippingGuardService.ɵfac = function ShippingGuardService_Factory(t) {
  return new (t || ShippingGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService));
};
ShippingGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShippingGuardService,
  factory: ShippingGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 91724:
/*!*********************************************************!*\
  !*** ./src/app/shared/service/summary-guard.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryGuardService": () => (/* binding */ SummaryGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources.service */ 95859);



class SummaryGuardService {
  constructor(router, resources) {
    this.router = router;
    this.resources = resources;
  }
  canActivate() {
    const shipping = JSON.parse(localStorage.getItem('Shipping'));
    const itemsProvided = JSON.parse(localStorage.getItem('Items'));
    const address = JSON.parse(localStorage.getItem('Address'));
    if (shipping && itemsProvided && address) {
      return true;
    } else {
      // Navigate to a specific component or route
      this.router.navigate([this.resources.mainPageURL]);
      return false;
    }
  }
}
SummaryGuardService.ɵfac = function SummaryGuardService_Factory(t) {
  return new (t || SummaryGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService));
};
SummaryGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SummaryGuardService,
  factory: SummaryGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 83384:
/*!******************************************************!*\
  !*** ./src/app/shared/service/user-guard.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuardService": () => (/* binding */ UserGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources.service */ 95859);



class UserGuardService {
  constructor(http, resources) {
    this.http = http;
    this.resources = resources;
  }
  canActivate() {
    let user;
    if (JSON.parse(localStorage.getItem('User'))) {
      return true;
    } else {
      alert('Not Authorized!');
      return false;
    }
  }
}
UserGuardService.ɵfac = function UserGuardService_Factory(t) {
  return new (t || UserGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_resources_service__WEBPACK_IMPORTED_MODULE_0__.resourcesService));
};
UserGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserGuardService,
  factory: UserGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 55936:
/*!*****************************************!*\
  !*** ./src/app/summary/summary-enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "summary": () => (/* binding */ summary)
/* harmony export */ });
var summary;
(function (summary) {
  summary["summaryTitleHeading"] = "summary-title-heading";
  summary["emailDiv"] = "summary-email-div";
  summary["emailDataLabel"] = "summary-email-DataLabel";
  summary["emailLabel"] = "summary-email-label";
  summary["nameDiv"] = "summary-name-div";
  summary["nameDataLabel"] = "summary-name-DataLabel";
  summary["nameLabel"] = "summary-name-label";
  summary["addressDiv"] = "summary-address-div";
  summary["addressDataLabel"] = "summary-address-DataLabel";
  summary["addressLabel"] = "summary-address-label";
  summary["countryDiv"] = "summary-country-div";
  summary["countryDataLabel"] = "summary-country-DataLabel";
  summary["countryLabel"] = "summary-country-label";
  summary["cityDiv"] = "summary-city-div";
  summary["cityDataLabel"] = "summary-city-DataLabel";
  summary["cityLabel"] = "summary-city-label";
  summary["postCodeDiv"] = "summary-post-code-div";
  summary["postCodeDataLabel"] = "summary-post-code-DataLabel";
  summary["postCodeLabel"] = "summary-post-code-label";
  summary["phoneNumberDiv"] = "summary-phone-number-div";
  summary["phoneNumberDataLabel"] = "summary-phone-number-DataLabel";
  summary["phoneNumberLabel"] = "summary-phone-number-label";
  summary["newsletterDiv"] = "summary-newsletter-div";
  summary["newsletterDataLabel"] = "summary-newsletter-DataLabel";
  summary["newsletterLabel"] = "summary-newsletter-label";
  summary["termsAndConditionDiv"] = "summary-terms-and-condition-div";
  summary["termsAndConditionDataLabel"] = "summary-terms-and-condition-DataLabel";
  summary["termsAndConditionLabel"] = "summary-terms-and-condition-label";
  summary["businessAccountDiv"] = "summary-business-account-div";
  summary["businessAccountDataLabel"] = "summary-business-account-DataLabel";
  summary["businessAccountLabel"] = "summary-business-account-label";
  summary["companyRegistrationNumberDiv"] = "summary-company-registration-number-div";
  summary["companyRegistrationNumberDataLabel"] = "summary-company-registration-number-DataLabel";
  summary["companyRegistrationNumberLabel"] = "summary-company-registration-number-label";
  summary["VATDiv"] = "summary-VAT-div";
  summary["VATDataLabel"] = "summary-VAT-DataLabel";
  summary["VATLabel"] = "summary-VAT-label";
  summary["BICDiv"] = "summary-BIC-div";
  summary["BICDataLabel"] = "summary-BIC-DataLabel";
  summary["BICLabel"] = "summary-BIC-label";
  summary["IBANDiv"] = "summary-IBAN-div";
  summary["IBANDataLabel"] = "summary-IBAN-DataLabel";
  summary["IBANLabel"] = "summary-IBAN-label";
  summary["nameOfBankAccountDiv"] = "summary-name-of-bank-account-div";
  summary["nameOfBankAccountDataLabel"] = "summary-name-of-bank-account-DataLabel";
  summary["nameOfBankAccountLabel"] = "summary-name-of-bank-account-label";
  summary["deliveryMethodDiv"] = "summary-delivery-method-div";
  summary["deliveryMethodDataLabel"] = "summary-delivery-method-DataLabel";
  summary["deliveryMethodLabel"] = "summary-delivery-method-label";
  summary["paymentTypeDiv"] = "summary-payment-type-div";
  summary["paymentTypeDataLabel"] = "summary-payment-type-DataLabel";
  summary["paymentTypeLabel"] = "summary-payment-type-label";
  summary["summarySingleItem"] = "summary-single-item-";
  summary["summaryImage"] = "summary-item-image-";
  summary["summaryTitle"] = "summary-item-title-";
  summary["summaryPrice"] = "summary-item-price-";
  summary["summaryCount"] = "summary-item-count-";
  summary["summaryAmount"] = "summary-item-amount-";
  summary["summaryPriceWithAccesories"] = "summary-single-item-total-price-";
  summary["summaryWarrantyDiv"] = "summary-warranty-div-";
  summary["summaryWarrantyTitle"] = "summary-warranty-title-";
  summary["summaryWarrantyPrice"] = "summary-warranty-price-";
  summary["summaryReturnOptionDiv"] = "summary-return-option-div-";
  summary["summaryReturnOptionTitle"] = "summary-return-option-title-";
  summary["summaryReturnOptionPrice"] = "summary-return-option-price-";
  summary["summaryTotalPriceDiv"] = "summary-total-price-div";
  summary["summaryTotalPriceTitle"] = "summary-total-price-title";
  summary["summaryTotalPricePrice"] = "summary-total-price-price";
  summary["backToAddress"] = "summary-back-to-address";
  summary["order"] = "summary-order";
})(summary || (summary = {}));

/***/ }),

/***/ 78891:
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _summary_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summary-enum */ 55936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/common.service */ 7577);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);










function SummaryComponent_app_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader");
  }
}
function SummaryComponent_div_3_div_38_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r7.attr.VATDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r7.attr.VATLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.resources.summaryVAT);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r7.attr.VATDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.userData.VAT);
  }
}
function SummaryComponent_div_3_div_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r8.attr.BICDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r8.attr.BICLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.resources.summaryBIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r8.attr.BICDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.userData.BIC);
  }
}
function SummaryComponent_div_3_div_38_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r9.attr.IBANDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r9.attr.IBANLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.resources.summaryIBAN);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r9.attr.IBANDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r9.userData.IBAN);
  }
}
function SummaryComponent_div_3_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17)(1, "div", 4)(2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, SummaryComponent_div_3_div_38_div_6_Template, 5, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SummaryComponent_div_3_div_38_div_7_Template, 5, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SummaryComponent_div_3_div_38_div_8_Template, 5, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 4)(10, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.companyRegistrationNumberDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.companyRegistrationNumberLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.resources.summaryCompanyRegistrationNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.companyRegistrationNumberDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.userData.compaty_reg_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.userData.VAT);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.userData.BIC);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.userData.IBAN);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.nameOfBankAccountDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.nameOfBankAccountLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.resources.summaryNameOfBankAccountHolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r2.attr.nameOfBankAccountDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.userData.bank_account_holder);
  }
}
function SummaryComponent_div_3_div_51_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "20 \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r13.attr.summaryWarrantyDiv + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r13.attr.summaryWarrantyTitle + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r13.resources.cartWarranty, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r13.attr.summaryWarrantyPrice + i_r12);
  }
}
function SummaryComponent_div_3_div_51_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "10 \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r14.attr.summaryReturnOptionDiv + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r14.attr.summaryReturnOptionTitle + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r14.resources.cartReturnOption, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r14.attr.summaryReturnOptionPrice + i_r12);
  }
}
function SummaryComponent_div_3_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SummaryComponent_div_3_div_51_div_1_div_11_Template, 5, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SummaryComponent_div_3_div_51_div_1_div_12_Template, 5, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r10.attr.summarySingleItem + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r10.attr.summaryImage + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r10.attr.summaryTitle + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r10.attr.summaryCount + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", item_r11.price, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r10.attr.summaryAmount + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r11.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r10.attr.summaryPriceWithAccesories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r10.common.totalItemPrice(item_r11.price, item_r11.waranty, item_r11.returnOption, item_r11.amount), " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r11.waranty);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r11.returnOption);
  }
}
function SummaryComponent_div_3_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SummaryComponent_div_3_div_51_div_1_Template, 13, 13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.items);
  }
}
function SummaryComponent_div_3_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.summaryTotalPriceDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.summaryTotalPriceTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.resources.cartTotalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r4.attr.summaryTotalPricePrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r4.common.amountWithDPH(ctx_r4.common.allItemsPrice(ctx_r4.items)), " \u20AC");
  }
}
function SummaryComponent_div_3_app_error_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-error", 34);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("errorText", ctx_r5.errorMessage);
  }
}
function SummaryComponent_div_3_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SummaryComponent_div_3_button_58_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.makeOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r6.attr.order);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.resources.orderTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r6.resources.arrowRight);
  }
}
function SummaryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4)(9, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 4)(14, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 4)(19, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 4)(24, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 4)(29, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 4)(34, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SummaryComponent_div_3_div_38_Template, 14, 13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 9)(41, "div", 4)(42, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 4)(47, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, SummaryComponent_div_3_div_51_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, SummaryComponent_div_3_div_52_Template, 6, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, SummaryComponent_div_3_app_error_53_Template, 1, 1, "app-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 13)(55, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, SummaryComponent_div_3_button_58_Template, 3, 3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.nameDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.nameLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.nameDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.userData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.emailDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.emailLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.emailDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.userData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.addressDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.addressLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.addressDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.userData.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.countryDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.countryLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.addressCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.countryDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.userData.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.cityDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.cityLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.cityDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.userData.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.postCodeDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.postCodeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryPostcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.postCodeDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.userData.post_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.phoneNumberDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.phoneNumberLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryPhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.phoneNumberDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.userData.phone_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.userData.bussiness_account);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.deliveryMethodDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.deliveryMethodLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryDeliveryMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.deliveryMethodDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.shipping.shipping);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.paymentTypeDiv);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.paymentTypeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.resources.summaryPaymentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.paymentTypeDataLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.shipping.payment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.loader && !ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.loader && !ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/" + ctx_r1.resources.adresstitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx_r1.attr.backToAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r1.resources.arrowLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Back to ", ctx_r1.resources.adresstitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.error);
  }
}
class SummaryComponent {
  constructor(resources, router, common, data) {
    this.resources = resources;
    this.router = router;
    this.common = common;
    this.data = data;
    this.attr = _summary_enum__WEBPACK_IMPORTED_MODULE_0__.summary;
    this.loader = true;
    this.originalData = JSON.parse(localStorage.getItem('Items'));
    this.data.getItemsAttributes(this.originalData).subscribe(item => {
      this.items = item;
      this.loader = false;
    }, err => {
      this.loader = false;
      this.error = true;
      this.errorMessage = "Something went wrong! Currenly isn't possible make order.";
    });
    if (this.items == null) this.items = [];
  }
  makeOrder() {
    localStorage.setItem('Confirmed', JSON.stringify(true));
    this.router.navigate([this.resources.orderURL]);
  }
  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('Items'));
    this.userData = JSON.parse(localStorage.getItem('Address'));
    this.shipping = JSON.parse(localStorage.getItem('Shipping'));
  }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
  return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService));
};
SummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SummaryComponent,
  selectors: [["app-summary"]],
  decls: 4,
  vars: 4,
  consts: [[1, "summary-title"], [4, "ngIf"], [1, "summary-wrapper"], [1, "summary-address"], [1, "summary-single-element"], [1, "summary-headling"], ["for", "", 1, "summary", "data"], ["class", "summary-company", 4, "ngIf"], [1, "line-vertical"], [1, "summary-billing"], ["class", "cart-wrapper", 4, "ngIf"], ["class", "cart-wrapper total-wrapper", 4, "ngIf"], [3, "errorText", 4, "ngIf"], [1, "cart-wrapper", "cart-navigation"], [1, "cart-navigation-btn", "back", 3, "routerLink"], [1, "cart-navigation-icon", 3, "icon"], ["class", "cart-navigation-btn order", 3, "click", 4, "ngIf"], [1, "summary-company"], ["class", "summary-single-element", 4, "ngIf"], [1, "cart-wrapper"], ["class", "cart-single-element", 4, "ngFor", "ngForOf"], [1, "cart-single-element"], [1, "cart-info"], ["alt", "", 1, "cart-image", 3, "src"], [1, "cart-title"], [1, "cart-price"], [1, "cart-single-total-price"], ["class", "cart-additional", 4, "ngIf"], [1, "cart-additional"], [1, "cart-additional-label"], [1, "cart-additional-price"], [1, "cart-wrapper", "total-wrapper"], [1, "total"], [1, "cart-total-price"], [3, "errorText"], [1, "cart-navigation-btn", "order", 3, "click"]],
  template: function SummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, SummaryComponent_app_loader_2_Template, 1, 0, "app-loader", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, SummaryComponent_div_3_Template, 59, 54, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("data-type", ctx.attr.summaryTitleHeading);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.resources.summarryPageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: [".summary-title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-top: 1rem;\n    font-weight: 500;\n}\n.summary-wrapper[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    gap: 3rem ;\n    margin: 2.5rem 0;\n    \n}\n.line-vertical[_ngcontent-%COMP%]{\n    width: 1px;\n    min-height: 100%;\n    background-color: #d2d2d2;\n}\n\n@media screen and (max-width:550px) {\n    .summary-wrapper[_ngcontent-%COMP%]{\n        display: block;\n    }\n    .line-vertical[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 1px;\n        background-color: #d2d2d2;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n    .summary-address[_ngcontent-%COMP%]{\n        margin: 1rem;\n    }\n    .summary-billing[_ngcontent-%COMP%]{\n        margin: 1rem;\n    }\n}\n\n.summary-address[_ngcontent-%COMP%]{\n    margin-left: 2rem;\n}\n.summary-billing[_ngcontent-%COMP%]{\n    margin-right: 2rem;\n}\n.summary-single-element[_ngcontent-%COMP%]{\ndisplay: flex;\njustify-content: space-between;\npadding: 0.25rem;\n}\n\n.cart-navigation[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    margin: 2rem 3rem;\n    gap: 1rem;\n}\n.order[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    padding: 0.35rem 0.5rem;\n    background-color: var(--lighter-primary1-color);\n    border: 1px solid var(--darker-primary1-color);\n    color: var(--white-color);\n    font-weight: 500;\n    outline-offset: 5px;\n    outline: 1px solid var(--darker-primary1-color);\n\n}\n.cart-navigation-btn[_ngcontent-%COMP%]{\n    width: 35%;\n    cursor: pointer;\n    border-radius: 15px;\n}\n\n.back[_ngcontent-%COMP%]{\n    font-weight: 300;\n    font-size: 120%;\n    background-color: transparent;\n    border: none;\n}\n.cart-navigation[_ngcontent-%COMP%]:hover{\n    color: var(--darker-primary2-color);\n    transition: 0.1s linear;\n}\n@media screen  and (max-width:550px){\n    .cart-navigation[_ngcontent-%COMP%]{\n        margin: 2rem 0.5rem;\n    }\n}\n\n.cart-wrapper[_ngcontent-%COMP%]{\n    margin-top: 2.5rem;\n}\n.cart-info[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1rem;\n}\n.cart-single-element[_ngcontent-%COMP%]{\n    box-shadow: 0 0 5px;\n    border-radius: 5px;\n    max-width: 95%;\n    margin: 0 auto;\n}\n.cart-image[_ngcontent-%COMP%]{\n    width: 7.5rem;\n    margin-top: 1rem;\n}\n.cart-title[_ngcontent-%COMP%]{\n    font-weight: 600;\n    color: var(--darker-primary1-color);\n}\n.cart-count[_ngcontent-%COMP%]{\n    width: 3rem;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n    text-align: center;\n}\n.cart-single-total-price[_ngcontent-%COMP%]{\n    font-weight: 600;\n    font-family: var(--font-Maitree);\n}\n.cart-additional[_ngcontent-%COMP%]{\n    margin-left: 25%;\n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    max-width: 40%;\n    justify-content: space-between;\n    padding-bottom: 0.5rem;\n    text-align: center;\n}\n\n.cart-additional-label[_ngcontent-%COMP%]{\n    text-align: left;\n    font-weight: 500;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {  \n\n   opacity: 1;\n\n}\n\n@media screen and (max-width:450px) {\n.cart-info[_ngcontent-%COMP%]{\n    display: block;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1rem;\n    text-align: center;\n    position: relative;\n}\n.cart-additional[_ngcontent-%COMP%]{\n    margin-left: 5%;\n    max-width: 100%;\n}\n.cart-image[_ngcontent-%COMP%]{\n    width: 100%;\n    \n}\n.cart-title[_ngcontent-%COMP%]{\n    display: inline-block;\n    margin-right: 2rem;\n}\n.cart-price[_ngcontent-%COMP%]{\n    display: inline-block;\n        margin-right: 2rem;\n}\n.close-mobile[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 1%;\n    right: 1%;\n}\n.close-icon-mobile[_ngcontent-%COMP%]{\n    font-size: 1.5rem;\n}\n}\n\n.total-wrapper[_ngcontent-%COMP%]{\n    border-top: 0.1px solid #d2d2d2;\n}\n.total[_ngcontent-%COMP%]{\n    margin: 1rem 5rem;\n    display: flex;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsK0NBQStDO0lBQy9DLDhDQUE4QztJQUM5Qyx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwrQ0FBK0M7O0FBRW5EO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTs7O0dBR0csVUFBVTs7QUFFYjs7QUFFQTtBQUNBO0lBQ0ksY0FBYztJQUNkLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7UUFDakIsa0JBQWtCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiLnN1bW1hcnktdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zdW1tYXJ5LXdyYXBwZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDFmcjtcbiAgICBnYXA6IDNyZW0gO1xuICAgIG1hcmdpbjogMi41cmVtIDA7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbn1cbi5saW5lLXZlcnRpY2Fse1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KSB7XG4gICAgLnN1bW1hcnktd3JhcHBlcntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5saW5lLXZlcnRpY2Fse1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmQyZDI7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5zdW1tYXJ5LWFkZHJlc3N7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICB9XG4gICAgLnN1bW1hcnktYmlsbGluZ3tcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cbn1cblxuLnN1bW1hcnktYWRkcmVzc3tcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbi5zdW1tYXJ5LWJpbGxpbmd7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuLnN1bW1hcnktc2luZ2xlLWVsZW1lbnR7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xucGFkZGluZzogMC4yNXJlbTtcbn1cblxuLmNhcnQtbmF2aWdhdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMnJlbSAzcmVtO1xuICAgIGdhcDogMXJlbTtcbn1cbi5vcmRlcntcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLXByaW1hcnkxLWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvdXRsaW5lLW9mZnNldDogNXB4O1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItcHJpbWFyeTEtY29sb3IpO1xuXG59XG4uY2FydC1uYXZpZ2F0aW9uLWJ0bntcbiAgICB3aWR0aDogMzUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYmFja3tcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uY2FydC1uYXZpZ2F0aW9uOmhvdmVye1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItcHJpbWFyeTItY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuMXMgbGluZWFyO1xufVxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6NTUwcHgpe1xuICAgIC5jYXJ0LW5hdmlnYXRpb257XG4gICAgICAgIG1hcmdpbjogMnJlbSAwLjVyZW07XG4gICAgfVxufVxuXG4uY2FydC13cmFwcGVye1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbn1cbi5jYXJ0LWluZm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW07XG59XG4uY2FydC1zaW5nbGUtZWxlbWVudHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJ0LWltYWdle1xuICAgIHdpZHRoOiA3LjVyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jYXJ0LXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG59XG4uY2FydC1jb3VudHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcnQtc2luZ2xlLXRvdGFsLXByaWNle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtTWFpdHJlZSk7XG59XG4uY2FydC1hZGRpdGlvbmFse1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FydC1hZGRpdGlvbmFsLWxhYmVse1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7ICBcblxuICAgb3BhY2l0eTogMTtcblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ1MHB4KSB7XG4uY2FydC1pbmZve1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcnQtYWRkaXRpb25hbHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNhcnQtaW1hZ2V7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbWFyZ2luLXRvcDogMXJlbTsgKi9cbn1cbi5jYXJ0LXRpdGxle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uY2FydC1wcmljZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbi5jbG9zZS1tb2JpbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMSU7XG4gICAgcmlnaHQ6IDElO1xufVxuLmNsb3NlLWljb24tbW9iaWxle1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxufVxuXG4udG90YWwtd3JhcHBlcntcbiAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCAjZDJkMmQyO1xufVxuLnRvdGFse1xuICAgIG1hcmdpbjogMXJlbSA1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 19416:
/*!***************************************************!*\
  !*** ./src/app/user-profile/user-profile-enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userProfile": () => (/* binding */ userProfile)
/* harmony export */ });
var userProfile;
(function (userProfile) {
  userProfile["userProfileTitle"] = "user-profile-title";
  userProfile["changeValuesBtn"] = "user-profile-change-values-btn";
  userProfile["saveValuesBtn"] = "user-profile-save-values-btn";
  userProfile["changeUsernameCredentialsTitle"] = "user-profile-change-useraname-credentials-title";
  userProfile["changePasswordCredentialsTitle"] = "user-profile-change-password-credentials-title";
  userProfile["nameOfBankAccountDiv"] = "user-profile-name-of-bank-account-div";
  userProfile["nameOfBankAccountInput"] = "user-profile-name-of-bank-account-input";
  userProfile["nameOfBankAccountLabel"] = "user-profile-name-of-bank-account-label";
  userProfile["usernameDiv"] = "user-profile-new-username-div";
  userProfile["usernameInput"] = "user-profile-new-username-input";
  userProfile["usernameLabel"] = "user-profile-new-username-label";
  userProfile["passwordDiv"] = "user-profile-password-div";
  userProfile["passwordInput"] = "user-profile-password-input";
  userProfile["passwordLabel"] = "user-profile-password-label";
  userProfile["newPasswordDiv"] = "user-profile-new-password-div";
  userProfile["newPasswordInput"] = "user-profile-new-password-input";
  userProfile["newPasswordLabel"] = "user-profile-new-password-label";
  userProfile["newConfirmPasswordDiv"] = "user-profile-new-confirm-password-div";
  userProfile["newConfirmPasswordInput"] = "user-profile-new-confirm-password-input";
  userProfile["newConfirmPasswordLabel"] = "user-profile-new-confirm-password-label";
  userProfile["passwordConfirmationDiv"] = "user-profile-password-confirmation-div";
  userProfile["passwordConfirmationInput"] = "user-profile-password-confirmation-input";
  userProfile["passwordConfirmationLabel"] = "user-profile-password-confirmation-label";
  userProfile["changeCredentialsUsernameBtn"] = "user-profile-change-credentials-username-btn";
  userProfile["changeCredentialsPasswordBtn"] = "user-profile-change-credentials-password-btn";
  userProfile["saveCredentialsUsernameBtn"] = "user-profile-save-credentials-username-btn";
  userProfile["saveCredentialsPasswordBtn"] = "user-profile-save-credentials-password-btn";
})(userProfile || (userProfile = {}));

/***/ }),

/***/ 71091:
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _user_profile_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile-enum */ 19416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/resources.service */ 95859);
/* harmony import */ var _shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/data.service */ 91228);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/input-data/input-data.component */ 63781);
/* harmony import */ var _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/error/error.component */ 72765);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 4068);
/* harmony import */ var _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/succuess/succuess.component */ 50393);











const _c0 = ["addressForm"];
function UserProfileComponent_app_error_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 19);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", ctx_r0.resources.problem);
  }
}
function UserProfileComponent_app_succuess_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-succuess", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("successText", ctx_r1.resources.userProfileUserDataChange);
  }
}
function UserProfileComponent_app_loader_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
  }
}
function UserProfileComponent_app_succuess_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-succuess", 20);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("successText", ctx_r3.resources.userProfileUserDataChange);
  }
}
function UserProfileComponent_app_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 19);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", ctx_r4.errorMessageUsername);
  }
}
function UserProfileComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_input_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserProfileComponent_input_20_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.changeValuesCredentials("username"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r7.attr.changeCredentialsUsernameBtn);
  }
}
function UserProfileComponent_input_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 23);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r8.attr.saveCredentialsUsernameBtn);
  }
}
function UserProfileComponent_app_loader_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
  }
}
function UserProfileComponent_app_succuess_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-succuess", 20);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("successText", ctx_r10.resources.userProfileUserDataChange);
  }
}
function UserProfileComponent_app_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-error", 19);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("errorText", ctx_r11.errorMessagePassword);
  }
}
function UserProfileComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Insert value!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_input_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserProfileComponent_input_43_Template_input_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.changeValuesCredentials("password"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r15.attr.changeCredentialsPasswordBtn);
  }
}
function UserProfileComponent_input_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "input", 23);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx_r16.attr.saveCredentialsPasswordBtn);
  }
}
function UserProfileComponent_app_loader_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loader");
  }
}
class UserProfileComponent {
  constructor(resources, data) {
    this.resources = resources;
    this.data = data;
    this.isDisabled = true;
    this.companyUser = false;
    this.editButton = true;
    this.isDisabledUsernameCredentials = true;
    this.isDisabledPasswordCredentials = true;
    this.editButtonUsernameCredentials = true;
    this.editButtonPasswordCredentials = true;
    this.success = false;
    this.successUsername = false;
    this.successPassword = false;
    this.loaderData = false;
    this.loaderUsername = false;
    this.loaderPassword = false;
    this.attr = _user_profile_enum__WEBPACK_IMPORTED_MODULE_0__.userProfile;
    this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      newUsername: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
      // password: new FormControl('', Validators.required),
      // passwordConfirmation: new FormControl('', Validators.required),
    });

    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      // username: new FormControl('', Validators.required),
      newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
      passwordConfirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required)
    });
    this.data.userData.subscribe(data => {
      this.userData = data;
    });
  }
  changeValues() {
    this.isDisabled = !this.isDisabled;
    this.editButton = false;
  }
  getFormData(data) {
    this.loaderData = true;
    this.data.changeUserData(data.value).subscribe(data => {
      this.loaderData = false;
      this.success = true;
    }, err => {
      this.loaderData = false;
      this.error = true;
    });
  }
  changeValuesCredentials(formName) {
    if (formName == 'username') {
      this.isDisabledUsernameCredentials = !this.isDisabledUsernameCredentials;
      this.editButtonUsernameCredentials = false;
    } else if (formName == 'password') {
      this.isDisabledPasswordCredentials = !this.isDisabledPasswordCredentials;
      this.editButtonPasswordCredentials = false;
    }
  }
  saveUsernameValuesCredentials() {
    if (this.username.valid) {
      this.loaderUsername = true;
      this.data.changeUsername({
        username: this.username.value.newUsername
      }).subscribe(data => {
        this.isDisabledUsernameCredentials = !this.isDisabledUsernameCredentials;
        this.editButtonUsernameCredentials = true;
        this.loaderUsername = false;
        this.successUsername = true;
      }, err => {
        this.loaderUsername = false;
        this.errorUsername = true;
        this.errorMessageUsername = err.error.msg;
      });
    }
  }
  savePasswordValuesCredentials() {
    if (this.password.valid) {
      if (this.password.value.newPassword == this.password.value.passwordConfirmation) {
        this.loaderPassword = true;
        this.data.changePassword({
          newPassword: this.password.value.newPassword
        }).subscribe(data => {
          this.isDisabledPasswordCredentials = !this.isDisabledPasswordCredentials;
          this.editButtonPasswordCredentials = true;
          this.editButtonPasswordCredentials = true;
          this.loaderPassword = false;
          this.successPassword = true;
        }, err => {
          this.loaderPassword = false;
          this.errorPassword = true;
          this.errorMessagePassword = err.error.msg;
        });
      } else {
        this.errorPassword = true;
        this.errorMessagePassword = "Passwords are not matching!";
      }
    }
  }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
  return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_resources_service__WEBPACK_IMPORTED_MODULE_1__.resourcesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_data_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["app-user-profile"]],
  viewQuery: function UserProfileComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.addressForm = _t.first);
    }
  },
  decls: 46,
  vars: 44,
  consts: [[1, "user-account-title"], [3, "errorText", 4, "ngIf"], [3, "successText", 4, "ngIf"], [3, "submitBtnName", "prefilledValues", "formData"], [4, "ngIf"], [1, "user-account-title", "martin-top"], ["action", "", 1, "form", "alighn", 3, "formGroup", "ngSubmit"], ["ngFormUsernameCredentials", "ngForm"], [1, "input-wrapper", 3, "disabled"], [1, "input-name"], ["type", "text", "formControlName", "newUsername", 1, "input", "alighn", "input-width", 3, "placeholder"], ["class", "invalid", 4, "ngIf"], [1, "user-accout-buttons2"], ["type", "submit", "class", "edit-button", "value", "Change Username", 3, "click", 4, "ngIf"], ["type", "submit", "class", "edit-button", "value", "Save", 4, "ngIf"], ["ngFormPasswordCredentials", "ngForm"], ["type", "password", "formControlName", "newPassword", 1, "input", "alighn", "input-width", 3, "placeholder"], ["type", "password", "formControlName", "passwordConfirmation", 1, "input", "alighn", "input-width", 3, "placeholder"], ["type", "submit", "class", "edit-button", "value", "Change Password", 3, "click", 4, "ngIf"], [3, "errorText"], [3, "successText"], [1, "invalid"], ["type", "submit", "value", "Change Username", 1, "edit-button", 3, "click"], ["type", "submit", "value", "Save", 1, "edit-button"], ["type", "submit", "value", "Change Password", 1, "edit-button", 3, "click"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UserProfileComponent_app_error_2_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, UserProfileComponent_app_succuess_3_Template, 1, 1, "app-succuess", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-input-data", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formData", function UserProfileComponent_Template_app_input_data_formData_4_listener($event) {
        return ctx.getFormData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UserProfileComponent_app_loader_5_Template, 1, 0, "app-loader", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h5", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, UserProfileComponent_app_succuess_8_Template, 1, 1, "app-succuess", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, UserProfileComponent_app_error_9_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div")(11, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_11_listener() {
        return ctx.saveUsernameValuesCredentials();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "fieldset", 8)(14, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, UserProfileComponent_span_17_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, UserProfileComponent_input_20_Template, 1, 1, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, UserProfileComponent_input_21_Template, 1, 1, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, UserProfileComponent_app_loader_22_Template, 1, 0, "app-loader", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "h5", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, UserProfileComponent_app_succuess_25_Template, 1, 1, "app-succuess", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, UserProfileComponent_app_error_26_Template, 1, 1, "app-error", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div")(28, "form", 6, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_28_listener() {
        return ctx.savePasswordValuesCredentials();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "fieldset", 8)(31, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, UserProfileComponent_span_34_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "fieldset", 8)(37, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, UserProfileComponent_span_40_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, UserProfileComponent_input_43_Template, 1, 1, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, UserProfileComponent_input_44_Template, 1, 1, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, UserProfileComponent_app_loader_45_Template, 1, 0, "app-loader", 4);
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.userProfileTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.resources.userProfileTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.success);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("submitBtnName", "Save")("prefilledValues", ctx.userData);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loaderData);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.changeUsernameCredentialsTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.resources.userProfileUsernameCredentialsTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.successUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isDisabledUsernameCredentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.usernameDiv);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.usernameLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.resources.userProfileUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert new ", ctx.resources.userProfileUsername, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.usernameInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.username.get("newUsername").touched && ctx.username.get("newUsername").invalid || _r5.submitted && ctx.username.get("newUsername").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editButtonUsernameCredentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.editButtonUsernameCredentials && !ctx.loaderUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loaderUsername);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.changePasswordCredentialsTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.resources.userProfilePasswordCredentialsTitle, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.successPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isDisabledPasswordCredentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.newPasswordDiv);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.newPasswordLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("New ", ctx.resources.userProfilePassword, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert new ", ctx.resources.userProfilePassword, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.newPasswordInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.password.get("newPassword").touched && ctx.password.get("newPassword").invalid || _r12.submitted && ctx.password.get("newPassword").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isDisabledPasswordCredentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.newConfirmPasswordDiv);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.newConfirmPasswordLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.resources.userProfilePasswordConfirmation);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("placeholder", "Insert ", ctx.resources.userProfilePasswordConfirmation, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("data-type", ctx.attr.newConfirmPasswordInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.password.get("passwordConfirmation").touched && ctx.password.get("passwordConfirmation").invalid || _r12.submitted && ctx.password.get("passwordConfirmation").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editButtonPasswordCredentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.editButtonPasswordCredentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loaderPassword);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_input_data_input_data_component__WEBPACK_IMPORTED_MODULE_3__.InputDataComponent, _shared_components_error_error_component__WEBPACK_IMPORTED_MODULE_4__.ErrorComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _shared_components_succuess_succuess_component__WEBPACK_IMPORTED_MODULE_6__.SuccuessComponent],
  styles: [".user-profile-wrapper[_ngcontent-%COMP%]{\n    \n    position: relative;\n}\n.user-accout-buttons[_ngcontent-%COMP%]{\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.address-title[_ngcontent-%COMP%]{\n    margin: 1rem;\n    text-align: center;\n}\n.form-style[_ngcontent-%COMP%]{\n    display: block;\n    margin-left: 32.5%;\n    align-items: start;\n    position: relative;\n}\n.form[_ngcontent-%COMP%]{\n    overflow: hidden;\n}\n.input-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    border: none;\n}\n.input-checkbox[_ngcontent-%COMP%]{\n    margin-right: 0.5rem;\n}\n.input-name[_ngcontent-%COMP%]{\n font-size: 70%;\n color: var(--lighter-primary2-color);\n}\n*[_ngcontent-%COMP%]:disabled {\n\n    opacity: 0.6;\n}\n.wrapper[_ngcontent-%COMP%]{\n    \n\n}\n.items[_ngcontent-%COMP%]{\n  width: 70%;\n  margin-left: 20%;\n}\n\n.split[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr auto 1fr;\n    justify-items: center;\n}\n.input-checkbox[_ngcontent-%COMP%]{\n    border: none;\n}\n.user-account-title[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 2rem;\n}\n.martin-top[_ngcontent-%COMP%]{\n  margin-top: 6rem;\n}\n.line[_ngcontent-%COMP%]{\n    position: absolute;\n    \n    left: -50%;\n    width: 100vw;\n    border-top: 0.1px solid #d2d2d2;\n}\n.margin-top[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%]{\n    border: 1px solid red;\n}\n\n\n.button[_ngcontent-%COMP%]{\n    width: 135%;\n}\n\n.form-margin[_ngcontent-%COMP%]{\n  margin-bottom: 10rem;\n}\n\n\n@media screen and (max-width:650px) {\n  .split[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .user-accout-buttons[_ngcontent-%COMP%]{\n        bottom: -5rem;\n  }\n  .form-margin[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n  }\n  .edit-button[_ngcontent-%COMP%]{\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7MENBQ3NDO0lBQ3RDLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0NBQ0MsY0FBYztDQUNkLG9DQUFvQztBQUNyQztBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjs7QUFFMUI7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSDtJQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBR0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtRQUNNLGFBQWE7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1wcm9maWxlLXdyYXBwZXJ7XG4gICAgLyogZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvIDFmcjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXNlci1hY2NvdXQtYnV0dG9uc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5hZGRyZXNzLXRpdGxle1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybS1zdHlsZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMzIuNSU7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3Jte1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW5wdXQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmlucHV0LWNoZWNrYm94e1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmlucHV0LW5hbWV7XG4gZm9udC1zaXplOiA3MCU7XG4gY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTItY29sb3IpO1xufVxuKjpkaXNhYmxlZCB7XG5cbiAgICBvcGFjaXR5OiAwLjY7XG59XG4ud3JhcHBlcntcbiAgICAvKiBtYXJnaW4tbGVmdDogMjAlOyAqL1xuXG59XG4uaXRlbXN7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5zcGxpdHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG8gMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5pbnB1dC1jaGVja2JveHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4udXNlci1hY2NvdW50LXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW07XG59XG4ubWFydGluLXRvcHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cbi5saW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiB0b3A6IDIwJTsgKi9cbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCAjZDJkMmQyO1xufVxuLm1hcmdpbi10b3B7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi8qIC5lZGl0LWJ1dHRvbntcbiAgICB3aWR0aDogMzUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItcHJpbWFyeTEtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG91dGxpbmUtb2Zmc2V0OiA1cHg7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1wcmltYXJ5MS1jb2xvcik7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59ICovXG4uYnV0dG9ue1xuICAgIHdpZHRoOiAxMzUlO1xufVxuXG4uZm9ybS1tYXJnaW57XG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjUwcHgpIHtcbiAgLnNwbGl0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51c2VyLWFjY291dC1idXR0b25ze1xuICAgICAgICBib3R0b206IC01cmVtO1xuICB9XG4gIC5mb3JtLW1hcmdpbntcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5lZGl0LWJ1dHRvbntcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 97354:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  assets: '',
  url: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 23149:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 84362);


/***/ }),

/***/ 53226:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule),
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "renderModule": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 29810);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 65663);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 1898);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ 57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ 71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var localstorage_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! localstorage-polyfill */ 56735);
/* harmony import */ var localstorage_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(localstorage_polyfill__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/main.server */ 23149);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-server */ 78163);








// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'dist/testing-app/browser');
  const indexHtml = (0,fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  global['localStorage'] = localStorage;
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(76353)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(53226)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "vendor" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map