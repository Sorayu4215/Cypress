import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  badge = new Subject<any>()
  addedToCart = new Subject<any>()


  addToCart(event: Event, itemId: number, waranty?:boolean , returnOption?:boolean) {
    event.stopPropagation()
    let singleItems: any = { idItems: itemId }

    if(waranty){
      singleItems.waranty = true
    }
    if(returnOption){
      singleItems.returnOption = true      
    }

    if (localStorage.getItem('Items') == null) {
      singleItems.amount = 1
      localStorage.setItem('Items', JSON.stringify([singleItems]))
    } else {
      const items = JSON.parse(localStorage.getItem('Items')!)
      singleItems.amount = 1

      //if there is element not duplic him but only add amount
      let isPresent: boolean = false
      items.forEach((element: any) => {
        if (element.idItems == itemId) { isPresent = true }
      });

      if (isPresent) {
        items.map((element: any) => {

          if (element.idItems == itemId) { 
            if (waranty) {
              element.waranty = true
            }
            if (returnOption) {
              element.returnOption = true
            }
            
            element.amount++ 
          }
          return element
        })
      } else {
        items.push(singleItems)
      }

      localStorage.setItem('Items', JSON.stringify(items))
    }
    this.badge.next('')
    this.addedToCart.next('')
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


  allItemsPrice(items: any) {
    let price: number = 0

    items.forEach((element: any) => {
      price = price + element.amount * element.price

      if (element.waranty == true) {
        price = price + 20
      }
      if (element.returnOption == true) {
        price = price + 10
      }
    });

    return price.toFixed(2)
  }

  amountWithDPH(amount: any) {
    return (amount * 1.2).toFixed(2)
  }

}
