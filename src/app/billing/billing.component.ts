import { Component, ViewChild, OnInit } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { billing } from './billing-enum';



@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  constructor(public resources:resourcesService, private router:Router){}

  readonly attr = billing
  shippingfee : string = ''
  paymentMethodfee: string = ''
  showErrorMessage: boolean = false
  originalShipping: string | any
  originalPaymentMethodFee: string | null

  form = new FormGroup({
    shipping: new FormControl('', Validators.required)
  });

  @ViewChild('payment') payment:any

  shippingFunction(item: string){
    this.shippingfee = item
  }
  paymentMethodFunction(item: string){
    this.paymentMethodfee = item    
  }

  navigateTo(){
    this.showErrorMessage = true
    if (this.paymentMethodfee && this.shippingfee){
      localStorage.setItem('Shipping',JSON.stringify({shipping: this.shippingfee, payment: this.paymentMethodfee}))
      this.router.navigate([this.resources.adresstitle])
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('Shipping')){
      this.shippingfee = JSON.parse(localStorage.getItem('Shipping')!).shipping
      this.paymentMethodfee = JSON.parse(localStorage.getItem('Shipping')!).payment
    }
  }
}
