import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { resourcesService } from '../shared/resources.service';
import { Router } from '@angular/router';
import { address } from './enum-address';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{

  constructor(public resources: resourcesService, private router:Router){
  }

  readonly summary = address
  showErrorMessage = false
  companyUser:boolean = false
  data: any


  item(event:any){
      localStorage.setItem('Address', JSON.stringify(event.value))
      this.router.navigate([this.resources.summarryPageURL])
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Address')!)
  }

}
