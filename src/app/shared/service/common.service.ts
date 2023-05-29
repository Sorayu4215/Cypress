import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  badge = new Subject<any>()
  addedToCart = new Subject<any>()


  addToCart(event: Event, item: any,waranty?:boolean , returnOption?:boolean) {
    event.stopPropagation()
    
    if(waranty){
      item.waranty = true
    }
    if(returnOption){
      item.returnOption = true      
    }

    if (localStorage.getItem('Items') == null) {
      item.amount = 1
      localStorage.setItem('Items', JSON.stringify([item]))
    } else {
      let items: any = JSON.parse(localStorage.getItem('Items')!)
      item.amount = 1

      //if there is element not duplic him but only add amount
      let isPresent: boolean = false
      items.forEach((element: any) => {
        if (element.idItems == item.idItems) { isPresent = true }
      });

      if (isPresent) {
        items.map((element: any) => {

          if (element.idItems == item.idItems) { 
            if (waranty) {
              element.waranty = true
            }
            if (returnOption) {
              element.returnOption = true
            }
            
            element.amount++ }
          return element
        })
      } else {
        items.push(item)
      }

      localStorage.setItem('Items', JSON.stringify(items))
    }
    this.badge.next('')
    this.addedToCart.next('')
  }
}
