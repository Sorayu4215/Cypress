import { Component } from '@angular/core';
import { myOrders } from './my-orders-enum';
import { resourcesService } from '../shared/resources.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrderComponent {

  constructor(public resources:resourcesService){}

  readonly attr = myOrders
  error:boolean
  errorMessage:string

  showDetails(event:Event){
    let detailElement = (event.currentTarget as Element).nextElementSibling
    detailElement?.classList.toggle('hide')
  }

}
