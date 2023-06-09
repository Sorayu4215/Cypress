import { Component } from '@angular/core';
import { myOrders } from './my-orders-enum';
import { resourcesService } from '../shared/resources.service';
import { DataService } from '../shared/data/data.service';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrderComponent {

  constructor(public resources: resourcesService, private data: DataService, public common: CommonService){
    this.loader = true
    this.data.getOrders().subscribe((data:any)=>{
      this.items = data
      this.loader = false
      if(data.length == 0){
        this.error = true
        this.errorMessage = "You don't have any orders."
      }
    },err=>{
      this.error = true
      this.loader = false
      this.errorMessage = 'Something went wrong!'
    })
  }

  items:any
  readonly attr = myOrders
  error:boolean
  errorMessage:string
  loader:boolean

  showDetails(event:Event){
    let detailElement = (event.currentTarget as Element).nextElementSibling
    detailElement?.classList.toggle('hide')
  }

}
