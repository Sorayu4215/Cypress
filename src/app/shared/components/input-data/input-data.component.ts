import { Component, Output , EventEmitter,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { resourcesService } from '../../resources.service';
import { inputData } from './input-data-enum';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {


  constructor(public resources: resourcesService) { }


  @Input() submitBtnName:string 
  @Input() prefilledValues:{}
  @Input() userData:any = {}
  //  undefined | {
  //   email: string, name: string, address: string, city: string, postCode: number | undefined, phoneNumber: number |undefined, newsletter: boolean, termsAndCondition: boolean, companyRegistrationNo?: string, VAT?: string, BIC?: string, IBAN?: string, bankAccountHolder?: string}
  //   = { email: '', name: '', address: '', city: '', postCode: undefined, phoneNumber: undefined, newsletter: false, termsAndCondition: false, companyRegistrationNo: '', VAT: '', BIC: '', IBAN: '', bankAccountHolder: '' }

  companyUser: boolean = false
  editButton: boolean = true
  isDisabledCredentials: boolean = true
  editButtonCredentials: boolean = true
  readonly attr = inputData
  address = new FormGroup({
    email: new FormControl( '' , [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postCode: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
    newsletter: new FormControl(false),
    termsAndConditions: new FormControl(false, Validators.requiredTrue),
    billingBusiness: new FormControl(false),
    companyRegistrationNo: new FormControl(''),
    VAT: new FormControl(''),
    BIC: new FormControl(''),
    IBAN: new FormControl(''),
    bankAccountHolder: new FormControl(''),
  })
  @Output() formData = new EventEmitter()


  addNewItem() {
    this.formData.emit(this.address);
  }

  ngOnInit(): void {
    if(this.userData){
      this.address.setValue(this.userData)    
    }
  }

}
