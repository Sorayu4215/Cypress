import { Component, Output , EventEmitter,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { resourcesService } from '../../resources.service';
import { inputData } from './input-data-enum';
import { countries } from '../../data/country';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {


  constructor(public resources: resourcesService, private data: DataService) { 
    if (localStorage.getItem('User')){
      const token = JSON.parse(localStorage.getItem('User')!).token
      this.data.user(token).subscribe((data: any) => {
        this.loader = false
        this.address.setValue(data)
        this.companyUser = data.bussiness_account
      })
    }else{
      this.loader = false
    }
  }


  @Input() submitBtnName:string 
  @Input() prefilledValues:{}
  @Input() userData:any = {}
  //  undefined | {
  //   email: string, name: string, address: string, city: string, postCode: number | undefined, phoneNumber: number |undefined, newsletter: boolean, termsAndCondition: boolean, companyRegistrationNo?: string, VAT?: string, BIC?: string, IBAN?: string, bankAccountHolder?: string}
  //   = { email: '', name: '', address: '', city: '', postCode: undefined, phoneNumber: undefined, newsletter: false, termsAndCondition: false, companyRegistrationNo: '', VAT: '', BIC: '', IBAN: '', bankAccountHolder: '' }
  countries = countries
  companyUser: boolean = false
  editButton: boolean = true
  isDisabledCredentials: boolean = true
  editButtonCredentials: boolean = true
  readonly attr = inputData
  address = new FormGroup({
    email: new FormControl( '' , [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    post_code: new FormControl('', Validators.required),
    phone_number: new FormControl('', [Validators.required, Validators.minLength(9)]),
    newsletter: new FormControl(false),
    terms_and_condition: new FormControl(false, Validators.requiredTrue),
    bussiness_account: new FormControl(false),
    compaty_reg_number: new FormControl(''),
    VAT: new FormControl(''),
    BIC: new FormControl(''),
    IBAN: new FormControl(''),
    bank_account_holder: new FormControl(''),
    idUsers: new FormControl(''),
  })
  loader = true
  @Output() formData = new EventEmitter()

  addNewItem() {   
    const { email, name, address, country, city, post_code, phone_number, newsletter, terms_and_condition, bussiness_account, compaty_reg_number, VAT, BIC, IBAN, bank_account_holder } = this.address.value
    if (
      this.address.get('email')?.status == 'VALID' 
      && this.address.get('name')?.status == 'VALID' 
      && this.address.get('address')?.status !== undefined 
      && this.address.get('country')?.status !== undefined 
      && this.address.get('city')?.status !== undefined 
      && this.address.get('post_code')?.status !== undefined 
      && this.address.get('phone_number')?.status !== undefined 
      && this.address.get('terms_and_condition')?.status !== undefined
      ) {
            
      if (
        bussiness_account == true 
        && this.address.get('compaty_reg_number')?.status == 'VALID' 
        && this.address.get('VAT')?.status == 'VALID' 
        && this.address.get('BIC')?.status == 'VALID' 
        && this.address.get('IBAN')?.status == 'VALID' 
        && this.address.get('bank_account_holder')?.status == 'VALID'
        ){
        this.formData.emit(this.address);
      } else if(bussiness_account == false){
        this.formData.emit(this.address);
      }
    }    
  }

  ngOnInit(): void {
    this.address.setValue(this.userData)  
    this.loader = false
    this.companyUser = this.userData.bussiness_account
    this.data.userData.subscribe((data: any) => { 
      this.loader = false
      this.address.setValue(data)  
    })
  }

}
