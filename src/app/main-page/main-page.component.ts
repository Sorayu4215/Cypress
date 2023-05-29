import { Component, OnDestroy,OnInit } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { DataService } from '../shared/data/data.service';
import { Router } from '@angular/router';
import { mainPage } from './main-page-enum';
import { CommonService } from '../shared/service/common.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnDestroy,OnInit {

  constructor(public resources: resourcesService, private data: DataService, public router:Router, public common:CommonService){

  }

  error:boolean
  errorMessage:string
  readonly attr = mainPage
  items:any = undefined

  
  filterApplied(data:any){   
    this.items = data    
  }

  ngOnInit(): void {
    this.data.getItems().subscribe((data) => {
        this.items = data
    }, err => {
        this.error = true
        this.errorMessage = err.message
    })    
  }

  ngOnDestroy(): void {
    // this.data.data.unsubscribe()
  }

}
