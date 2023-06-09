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
  // address = new FormGroup({
  //   email: new FormControl('', [Validators.required,Validators.email]),
  //   name: new FormControl('', [Validators.required]),
  //   address: new FormControl('', Validators.required),
  //   city: new FormControl('', Validators.required),
  //   postCode: new FormControl('', Validators.required),
  //   phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
  //   newsletter: new FormControl(false),
  //   termsAndConditions: new FormControl(false, Validators.required),
  //   billingBusiness: new FormControl(false, Validators.required),
  // })
  // businessAccout = new FormGroup({
  //   companyRegistrationNo: new FormControl('', Validators.required),
  //   VAT: new FormControl('', Validators.required),
  //   BIC: new FormControl('', Validators.required),
  //   IBAN: new FormControl('', Validators.required),
  //   bankAccountHolder: new FormControl('', Validators.required),
  // })

  // navigateTo() {
  //   this.showErrorMessage = true
    
  //   if (this.address.valid == true) {
  //     this.router.navigate([this.resources.summarryPageTitle])
  //   }
  // }


  item(event:any){
    if(event.status == 'VALID'){
      localStorage.setItem('Address', JSON.stringify(event.value))
      this.router.navigate([this.resources.summarryPageURL])
    }
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('Address')!)
  }

}
