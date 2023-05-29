import { Component, OnInit } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { summary } from './summary-enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  
  constructor(public resources: resourcesService, private router: Router){}
  error:boolean
  errorMessage:string
  items:any
  userData:any
  shipping: any
  totalPrice:number
  readonly attr = summary

  allItemsPrice() {
    let price: number = 0

    this.items.forEach((element: any) => {
      price = price + element.amount * element.price

      if (element.waranty == true) {
        price = price + 20
      }
      if (element.returnOption == true) {
        price = price + 10
      }
    });

    this.totalPrice = price * 1.2
    this.totalPrice = +this.totalPrice.toFixed(2)
  }

  totalItemPrice(itemPrice: number, warranty: boolean, returnOption: boolean, amount: number) {
    let totalPrice = itemPrice * amount
    if (warranty) {
      totalPrice = totalPrice + 20
    }
    if (returnOption) {
      totalPrice = totalPrice + 10
    }

    return totalPrice.toFixed(2)
  }

  makeOrder(){
    localStorage.setItem('Confirmed',JSON.stringify(true))
    this.router.navigate([this.resources.orderURL])
  }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('Items')!)
    this.userData = JSON.parse(localStorage.getItem('Address')!)
    this.shipping = JSON.parse(localStorage.getItem('Shipping')!)

    this.allItemsPrice()
  }
}
