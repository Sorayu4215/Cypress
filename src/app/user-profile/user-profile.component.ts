import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { resourcesService } from '../shared/resources.service';
import { userProfile } from './user-profile-enum';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(public resources:resourcesService){}

  isDisabled:boolean = true
  companyUser:boolean = false
  editButton:boolean = true
  isDisabledCredentials:boolean = true
  editButtonCredentials: boolean = true
  error:boolean
  errorMessage:string
  errorCredentials:boolean
  errorMessageCredentials:string
  readonly attr = userProfile
  @ViewChild('addressForm') addressForm: NgForm;
  // address = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   name: new FormControl( '', [Validators.required]),
  //   address: new FormControl('', Validators.required),
  //   city: new FormControl('', Validators.required),
  //   postCode: new FormControl('', Validators.required),
  //   phoneNumber: new FormControl( '', [Validators.required, Validators.minLength(9)]),
  //   newsletter: new FormControl(false),
  //   billingBusiness: new FormControl(false),
  //   companyRegistrationNo: new FormControl(''),
  //   VAT: new FormControl(''),
  //   BIC: new FormControl(''),
  //   IBAN: new FormControl(''),
  //   bankAccountHolder: new FormControl(''),
  // })
  credentials = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  })
  
  changeValues(){
    this.isDisabled = !this.isDisabled  
    this.editButton = false
  }

  // saveValues(){
  //   if(this.address.valid){
  //     console.log(this.address.value);
  //     console.log(this.address.valid);
  //   }
  // }

  getFormData(data:any){
    console.log(data);
    
  }

  changeValuesCredentials(){
    this.isDisabledCredentials = !this.isDisabledCredentials
    this.editButtonCredentials = false
  }
  saveValuesCredentials(){
    if (this.credentials.valid){
      this.isDisabledCredentials = !this.isDisabledCredentials
      this.editButtonCredentials = true
    }
  }
}
