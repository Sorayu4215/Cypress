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
}
