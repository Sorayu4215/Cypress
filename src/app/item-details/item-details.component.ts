import { Component, OnInit} from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { DataService } from '../shared/data/data.service';
import { Router } from '@angular/router';
import { itemDetails } from './item-detail-enum';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(public data: DataService, private router: Router, public resources: resourcesService, public common:CommonService){
    const id = this.router.url.slice(1)
    this.data.getItem(id).subscribe((data)=>{
      this.item = data
      if (this.item.length == 0){
        this.error = true
        this.errorMessage = "Item doesn't exist!"
      }
    }, err => {
      this.error = true
      this.errorMessage = err.message
    })    
  }

  // waranty = window.document.querySelector('#Warranty')
  waranty:boolean
  returnOption:boolean
  error:boolean
  errorMessage:string
  item:any
  readonly attr = itemDetails

  warantyAndReturnOption(){
    const waranty = window.document.querySelector('#Warranty')
    this.waranty = (waranty as HTMLInputElement).checked;

    const returnOption = window.document.querySelector('#return_option')
    this.returnOption = (returnOption as HTMLInputElement).checked;    
  }
  ngOnInit(){
  }
}
