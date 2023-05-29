import { Component, OnInit } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { cart } from './cart-enum';
import { CommonService } from '../shared/service/common.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public resources:resourcesService, private common:CommonService){
    this.items = JSON.parse(localStorage.getItem('Items')!)    
    if(this.items == null) this.items = []
  }

  allItemPrice:number = 0
  allItemPriceWithDPH:number = 0
  items:any =[]
  readonly attr = cart


  totalItemPrice(itemPrice:number, warranty:boolean , returnOption:boolean , amount:number){
    let totalPrice = itemPrice * amount
    if(warranty){
      totalPrice = totalPrice + 20
    }
    if(returnOption){
      totalPrice = totalPrice + 10
    }
   
    return totalPrice.toFixed(2)
  }

  allItemsPrice(){
    let price: number = 0

    this.items.forEach((element:any) => {
      price = price + element.amount * element.price

      if (element.waranty == true) {
        price = price + 20
      }
      if (element.returnOption == true) {
        price = price + 10
      }
    });

    this.allItemPrice = price
    this.allItemPrice = +this.allItemPrice.toFixed(2)
  }

  totalPriceWithDPH(){
    let allItemsPrice: any = this.allItemPrice
    allItemsPrice = allItemsPrice * 1.2

    this.allItemPriceWithDPH = allItemsPrice
    this.allItemPriceWithDPH = +this.allItemPriceWithDPH.toFixed(2) 
  }

  deleteItem(id:number){
    this.items = this.items.filter((element: any) =>  element.idItems !== id )
    
    this.common.badge.next('')
    this.allItemsPrice()
    this.totalPriceWithDPH()
    
    localStorage.setItem('Items', JSON.stringify(this.items))
  }

  deleteWaranty(id:number){
    this.items.map((element:any) =>{
      if(element.idItems == id){
        element.waranty = false
      }
      return element
    })
    localStorage.setItem('Items',JSON.stringify(this.items))

    this.allItemsPrice()
    this.totalPriceWithDPH()
  }

  deleteReturnOption(id:number){
    this.items.map((element:any) =>{
      if(element.idItems == id){
        element.returnOption = false
      }
      return element
    })
    localStorage.setItem('Items',JSON.stringify(this.items))

    this.allItemsPrice()
    this.totalPriceWithDPH()
  }

  amountChange(id:number, event:Event){
    const value = +(event.target as HTMLInputElement).value    
    this.items.map((element: any) => {
      if (element.idItems == id) {
        element.amount = value
      }
      if(element.amount == 0){
        this.deleteItem(id)
      }else{
        return element
      }
    })

    localStorage.setItem('Items', JSON.stringify(this.items))

    this.common.badge.next('')
    this.allItemsPrice()
    this.totalPriceWithDPH()
      
    
  }



  ngOnInit(): void {
    this.allItemsPrice()
    this.totalPriceWithDPH()
  }
}
