import { Injectable } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faSignOut, faEnvelope, faArrowRight, faArrowLeft, faInfo,faShoppingCart, faMagnifyingGlass, faClose, faCheck,faArrowDown, faWarning } from '@fortawesome/free-solid-svg-icons';
import { billing } from '../billing/billing-enum';

@Injectable({ providedIn: 'root' })
export class resourcesService {

  nameOfOrganization = 'Testing App'

  //api server
  apiURL = 'http://localhost:3000'

  //icons
  facebook = faFacebook
  instagram = faInstagram
  location = faLocationDot
  phone = faPhone
  email = faEnvelope
  cart=  faShoppingCart
  info = faInfo
  magnifyingGlass = faMagnifyingGlass
  close = faClose
  arrowLeft= faArrowLeft
  arrowRight = faArrowRight
  arrowDown = faArrowDown
  success = faCheck
  warning = faWarning
  logOut = faSignOut


  //authorizaition
  authorizationURL= 'logIn'
  authorizationTitle = 'Log In'
  authorizationSucessful = "Authorization was successful!"
  authorizationInsertValue = 'Insert Value!'
  authorizationLogInBtn = 'Log In'
  authorizationForgotPasswordBtn = "Forgot Password?"
  authorisationUsername = 'Username'
  authorisationPassword = 'Password'
  authorizationShowPassword = 'Your password is: '

  //registration
  registrationURL = 'Registration'
  registrationTitle = 'Registration'
  registrationSuccess = 'User was successfully registered!'

  //main Page
  mainPageTitle = 'Shop'
  mainPageURL = 'shop'

  //filter
  filterTitle= 'Filters'
  filtersCategory= 'Category'
  filtersCategoryAll = 'All'
  filterPrice = "Price"
  filterOrder = 'Order'
  filterAlphabetOrder = 'From A-Z'
  filterReverseAlphabetOrder = 'From Z-A'
  filterCheapers = 'From cheap'
  filterExpensie= 'From expensive'
  feitlerSearch = 'Search'

  //item details
  detailsAddToCartButton = 'Add to Cart'
  detailsExtendedWarranty = 'Extended Warranty + 1 Year | 20€'
  detailReturnOption = '60-Day Return Option | 10€'

  //billing page
  billingEnum = billing
  billingPageTitle = 'Shipping'
  billingPageURL = 'Shipping'
  billingMainDescription = 'Select a delivery method'
  billintChoosePaymentType = 'Choose payment type'
  billingShiping = [{ title: 'Personal pickup', fee: 'For free', delivery: 'Tomorrow from 8:00', TRData: this.billingEnum.deliveryPersonalPickupTr, inputData: this.billingEnum.deliveryPersonalPickupInput, optionData: this.billingEnum.deliveryPersonalPickupOption, feeData: this.billingEnum.deliveryPersonalPickupFee, deliveryData: this.billingEnum.deliveryPersonalPickupDelivery}, 
    { title: 'Post', fee: 'For free', delivery: 'In 2 days from 8:00', TRData: this.billingEnum.deliveryPostTr, inputData: this.billingEnum.deliveryPostInput, optionData: this.billingEnum.deliveryPostOption, feeData: this.billingEnum.deliveryPostFee, deliveryData: this.billingEnum.deliveryPostDelivery }, 
    { title: 'Curier', fee: 'For free', delivery: 'Tomorow from 9:00', TRData: this.billingEnum.deliveryCurierTr, inputData: this.billingEnum.deliveryCurierInput, optionData: this.billingEnum.deliveryCurierOption, feeData: this.billingEnum.deliveryCurierFee, deliveryData: this.billingEnum.deliveryPostDelivery}]
  billingPaymentMethod = [{ title: 'Credit / Debit Card', fee: 'For free', TRData: this.billingEnum.paymentCardTr, inputData: this.billingEnum.paymentCardInput, optionData: this.billingEnum.paymentCardOption, feeData: this.billingEnum.paymentCardFee }, 
    { title: 'Google Pay', fee: 'For free', TRData: this.billingEnum.paymentGooglePayTr, inputData: this.billingEnum.paymentGooglePayInput, optionData: this.billingEnum.paymentGooglePayOption, feeData: this.billingEnum .paymentGooglePayFee}, 
    { title: 'Paypal', fee: 'For free', TRData: this.billingEnum.paymentPaypalTr, inputData: this.billingEnum.paymentPaypalInput, optionData: this.billingEnum.paymentPaypalOption, feeData: this.billingEnum.paymentPaypalFee }, 
    { title: 'Cryptocurrency', fee: 'For free', TRData: this.billingEnum.paymentCryptocurrencyTr, inputData: this.billingEnum.paymentCryptocurrencyInput, optionData: this.billingEnum.paymentCryptocurrencyOption, feeData: this.billingEnum.paymentCryptocurrencyFee }, 
    { title: 'Bank transfer', fee: 'For free', TRData: this.billingEnum.paymentBankTransferTr, inputData: this.billingEnum.paymentBankTransferInput, optionData: this.billingEnum.paymentCryptocurrencyOption, feeData: this.billingEnum.paymentCryptocurrencyInput }, 
    { title: 'Cash', fee: 'For free', TRData: this.billingEnum.paymentCashTr, inputData: this.billingEnum.paymentCashInput, optionData: this.billingEnum.paymentCashOption, feeData: this.billingEnum.paymentCashFee}]
  billingErrorMessage = 'Choose option!'

  // adress page
  adresstitle = 'Address'
  adressURL = 'Address'
  addressEmail = 'Email'
  addressFullName = 'Full Name'
  addressAddress = 'Address'
  addressCountry = 'Country'
  addressCity = 'City'
  addressPostCode = 'Postcode'
  addressPhoneNumber = 'Phone Number'
  addressNwssletter = 'Newsletter subscribe'
  addressTermsAndCondition = 'Agree with terms and conditions'
  addressBusinessAccount = 'Business Account'
  addressCompanyRegistrationNumber = 'Company Registration No.'
  addressVATNumber = 'VAT No.'
  addressBIC= 'BIC'
  addressIBAN = 'IBAN'
  addressNameOfBank = 'Name of Bank Account Holder'
  addressErrorMessage = 'Insert value!'

  //added to cart
  addedToCartMessage = 'Your item was sucesfully added into cart!'
  addedToCartNavigateShoping = 'Continue shopping'
  addedToCartNavigateToCart = 'Navigate to Cart'

  //cart
  cartTitle = 'Cart'
  cartURL = 'cart'
  cartWarranty = 'Warranty + 1 year'
  cartReturnOption = 'Return option'
  cartDPH = 'Tax'
  cartPriceWithoutDPH = 'Price without Tax'
  cartTotalPrice = 'Total Price with TAX'
  cartBillingNavigation = this.billingPageTitle
  cartBactToShopingNavigation = `Back to ${this.mainPageURL}`

  //summary page
  summarryPageTitle = 'Summary'
  summarryPageURL = 'Summary'
  summaryMakeOrderBtn = 'Order'
  summaryEmail = this.addressEmail
  summaryName = this.addressFullName
  summaryAddress = this.addressAddress
  summaryCity = this.addressCity
  summaryPostcode = this.addressPostCode
  summaryPhoneNumber = this.addressPhoneNumber
  summaryCompanyRegistrationNo= this.addressCompanyRegistrationNumber
  summaryVAT = this.addressVATNumber
  summaryBIC = this.addressBIC
  summaryIBAN = this.addressIBAN
  summaryNameOfBankAccountHolder = this.addressNameOfBank
  summaryDeliveryMethod = 'Delivery Method'
  summaryPaymentType = 'Payment Type'

  //order
  orderTitle = 'Order'
  orderURL = 'Order'
  orderSuccessfulThank = 'Thank you for your order.'
  orderSuccessful = 'Order was made successful!'
  orderProblem = 'Something went wrong.'

  //my-orders
  myOrdersURL = 'my-orders'
  myOrdersTitle = 'My Orders'
  myOrderID = 'ID: '
  myOrderTime = 'Time: '

  //user-profile
  userProfileTitle= "User Profile"
  userProfileURL= "user-profile"
  userProfileUsernameCredentialsTitle = 'Change username'
  userProfilePasswordCredentialsTitle = 'Change password'
  userProfileUsername = 'Username'
  userProfilePassword = 'Password'
  userProfilePasswordConfirmation = 'Password confirmation'
  userProfileCredentials = 'Save credentials'
  userProfileCredentialsChange = 'Yours credentials was successfully changed!'
  userProfileUserDataChange = 'Yours data was successfully changed!'

  //cookie-banner
  cookieBanner = 'Cookie Banner'
  cookieBannerApprovalTopSection = 'Approval'
  cookieBannerDetailsTopSection = 'Details'
  cookieBannerAboutTopSection = 'About Cookies'
  cookieBannerUsagesOfCookiesTitle = 'This website use cookie files'
  cookieBannerUsagesOfCookiesDescription = "At Autmation Web, we do our best to only show you content that interests you. But for that we need consent to the use of cookies. By doing so, you allow us to use data about your browsing on AutomationWeb.com. Don't worry, there is noobligation. You can adjust or disable this setting at any time."
  cookieBannerNeededTitle = 'Needed'
  cookieBannerNeededDescription = "Necessary cookies help create usable websites by enabling basic functions such as site navigation and access to protected areas of websites.Websites cannot function properly without these cookies."
  cookieBannerPreferenciesTitle = 'Preferencies'
  cookieBannerPreferenciesDescription = "Preference cookies allow the website to remember information that will change the way the website behaves or looks, such as your preferred language or the region you are currently in."
  cookieBannerStatsTitle = 'Stats'
  cookieBannerStatsDescription = "Statistical cookies help website owners understand how to interact with website visitors by collecting and reporting information anonymously."
  cookieBannerAbout = 'Cookies are small text files that can be used by websites to improve the user experience. <br><br> The law says that we can store cookies on your device if they are necessary for the operation of these sites.For all other types of cookies, we need your consent. <br> <br> This page uses different types of cookies.Some cookies are placed here by third - party services that appear on our pages. <br> <br> You can change or revoke your consent to the Cookie Policy at any time on our website. <br> '
  cookieBannerAdjust = 'Adjust'
  cookieBannerAllow = 'Allow'

  
  //footer
  kontaktLinkFacebook = 'https://www.facebook.com'
  kontaktFacebook = 'Facebook'
  kontaktLinkInstagram = 'https://www.instagram.com'
  kontaktInstagram = 'Instagram'
  kontaktTown = '924 01 Galanta'
  kontaktPhone: string = '+421 908 123 456'
  kontaktLinkPhone: string = 'tel:' + this.kontaktPhone
  kontaktEmail: string = 'info@test.sk'
  kontaktStreet = 'Hlavna ulica 2'


  problem= 'Something went wrong!'
  icon: string = 'logo.png'

  Sections = [{ section: this.mainPageURL, title: this.mainPageTitle }, { section: this.authorizationURL, title: this.authorizationTitle }, { section: this.myOrdersURL, title: this.myOrdersTitle }, { section: this.userProfileURL, title: this.userProfileTitle },{section: this.cartURL , title: this.cartTitle}]
}
