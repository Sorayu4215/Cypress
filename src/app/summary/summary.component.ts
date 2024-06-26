import { Component, OnInit } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { summary } from './summary-enum';
import { Router } from '@angular/router';
import { CommonService } from '../shared/service/common.service';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  constructor(public resources: resourcesService, private router: Router, public common: CommonService, public data: DataService){
    this.loader = true
    this.originalData = JSON.parse(localStorage.getItem('Items')!)
    
    this.data.getItemsAttributes(this.originalData).subscribe((item: any) => {
      this.items = item
      this.loader = false
    },err =>{
      this.loader = false
      this.error = true
      this.errorMessage = "Something went wrong! Currenly isn't possible make order."
    })
    if (this.items == null) this.items = []
  }

  originalData: any

  error:boolean
  errorMessage:string
  items:any
  userData:any
  shipping: any
  totalPrice:number
  loader:boolean
  readonly attr = summary

  makeOrder(){
    localStorage.setItem('Confirmed',JSON.stringify(true))
    this.router.navigate([this.resources.orderURL])
  }


  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('Items')!)
    this.userData = JSON.parse(localStorage.getItem('Address')!)
    this.shipping = JSON.parse(localStorage.getItem('Shipping')!)
  }
}
