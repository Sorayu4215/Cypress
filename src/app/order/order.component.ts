import { Component } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { order } from './order-enum';
import { DataService } from '../shared/data/data.service';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  
  constructor(public resources:resourcesService, private data: DataService,private common:CommonService){
    const shipping = JSON.parse(localStorage.getItem('Shipping')!)
    const items = JSON.parse(localStorage.getItem('Items')!)
    const address = JSON.parse(localStorage.getItem('Address')!)
    this.id = this.generateUniqueId()
    let date  = new Date().toLocaleDateString('en-GB')
    
    this.data.makeOrder(this.id,items,address,shipping,date).subscribe(data=>{
      this.orderDone = true
      this.deleteItems()
      this.common.badge.next('')
    },err=>{
      this.error = true
      this.errorMessage = 'Something went wrong'     
    })

  }
  id:number
  error:boolean | undefined
  errorMessage: string 
  orderDone: boolean | undefined


generateUniqueId() {
  const currentTime = new Date().getTime();

  const randomNumbers = Math.floor(Math.random() * 1000).toString().padStart(3, '0');

  const uniqueId = Number(`${currentTime}${randomNumbers}`);
  return uniqueId;
}

  deleteItems(){
    localStorage.removeItem('Shipping')
    localStorage.removeItem('Items')
    localStorage.removeItem('Address')
    localStorage.removeItem('Confirmed')
  }

  showLoader = false
  showSuccess = true
  showProblem = false
  readonly attr = order

}
