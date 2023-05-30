import { Component, OnInit } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { cart } from './cart-enum';
import { CommonService } from '../shared/service/common.service';
import { DataService } from '../shared/data/data.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(public resources:resourcesService, private common:CommonService, public data:DataService){
    this.originalData = JSON.parse(localStorage.getItem('Items')!)    
    this.data.getItemsAttributes(this.originalData).subscribe((item:any)=>{
      this.items = item
      

      this.allItemPrice =   this.data.allItemsPrice(item)
    })
    if(this.items == null) this.items = []

  }
  originalData : any
  allItemPrice:any = 0
  allItemPriceWithDPH:number = 0
  items:any =[]
  readonly attr = cart


  deleteItem(id:number){
    this.originalData = this.originalData.filter((element: any) =>  element.idItems !== id )
    this.items = this.items.filter((element: any) =>  element.idItems !== id )
    
    localStorage.setItem('Items', JSON.stringify(this.originalData))

    this.common.badge.next('')

  }

  warantyAndReturnOptionChange(dataArray: any, id: number, category: 'waranty' |'returnOption'){
    dataArray.map((element: any) => {
      if (element.idItems == id) {
        element[category] = false
      }
      return element
    })
  }

  deleteWaranty(id:number){
    this.warantyAndReturnOptionChange(this.originalData, id,'waranty')
    this.warantyAndReturnOptionChange(this.items,id ,'waranty')

    localStorage.setItem('Items', JSON.stringify(this.originalData))
  }


  deleteReturnOption(id:number){
    this.warantyAndReturnOptionChange(this.originalData, id, 'returnOption')
    this.warantyAndReturnOptionChange(this.items, id, 'returnOption')

    
    localStorage.setItem('Items', JSON.stringify(this.originalData))

  }


  changevalue(array:any, id:number, value:number){
    array.map((element: any) => {
      if (element.idItems == id) {
        element.amount = value
      }
      if (element.amount == 0) {
        this.deleteItem(id)
      } else {
        return element
      }
    })
  }

  amountChange(id:number, event:Event){
    const value = +(event.target as HTMLInputElement).value   
    
    this.changevalue(this.originalData,id,value)
    this.changevalue(this.items,id,value)

    localStorage.setItem('Items', JSON.stringify(this.originalData))

    this.common.badge.next('')
    
  }


  ngOnInit(): void {
  }
}
