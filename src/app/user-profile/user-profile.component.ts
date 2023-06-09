import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { resourcesService } from '../shared/resources.service';
import { userProfile } from './user-profile-enum';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(public resources:resourcesService, private data:DataService){
    this.data.userData.subscribe((data:any)=>{
      this.userData = data
    })
  }


  isDisabled:boolean = true
  companyUser:boolean = false
  editButton:boolean = true
  isDisabledUsernameCredentials:boolean = true
  isDisabledPasswordCredentials:boolean = true
  editButtonUsernameCredentials: boolean = true
  editButtonPasswordCredentials: boolean = true
  error:boolean
  errorMessage:string
  errorCredentials:boolean
  errorMessageCredentials:string
  userData:any
  success:boolean = false
  successUsername:boolean = false
  successPassword:boolean = false
  errorUsername: boolean
  errorPassword: boolean
  errorMessageUsername: string
  errorMessagePassword: string
  loaderData:boolean = false
  loaderUsername:boolean = false
  loaderPassword:boolean = false
  readonly attr = userProfile
  @ViewChild('addressForm') addressForm: NgForm;

  username = new FormGroup({
    newUsername: new FormControl('', Validators.required),
    // password: new FormControl('', Validators.required),
    // passwordConfirmation: new FormControl('', Validators.required),
  })

  password = new FormGroup({
    // username: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  })
  
  changeValues(){
    this.isDisabled = !this.isDisabled  
    this.editButton = false
  }


  getFormData(data:any){
    this.loaderData = true
    
      this.data.changeUserData(data.value).subscribe((data:any)=>{
        this.loaderData = false
        this.success = true
      },err =>{
        this.loaderData = false
        this.error = true
      })

    
  }

  changeValuesCredentials(formName: 'username' | 'password'){
    if(formName == 'username'){
      this.isDisabledUsernameCredentials = !this.isDisabledUsernameCredentials
      this.editButtonUsernameCredentials = false
      
    } else if (formName == 'password'){
      this.isDisabledPasswordCredentials = !this.isDisabledPasswordCredentials
      this.editButtonPasswordCredentials = false

    }


  }

  saveUsernameValuesCredentials(){
    if (this.username.valid){
      this.loaderUsername = true
      this.data.changeUsername({username: this.username.value.newUsername}).subscribe((data)=>{
        this.isDisabledUsernameCredentials = !this.isDisabledUsernameCredentials
        this.editButtonUsernameCredentials = true
        this.loaderUsername = false
        this.successUsername = true
      },err=>{
        this.loaderUsername = false
        this.errorUsername = true
        this.errorMessageUsername = err.error.msg        
      })
    }
  }

  savePasswordValuesCredentials() {
    if (this.password.valid) {
      if (this.password.value.newPassword == this.password.value.passwordConfirmation){
        this.loaderPassword = true
        this.data.changePassword({ newPassword: this.password.value.newPassword }).subscribe((data) => {
        this.isDisabledPasswordCredentials = !this.isDisabledPasswordCredentials
        this.editButtonPasswordCredentials = true
          this.editButtonPasswordCredentials = true
          this.loaderPassword = false
          this.successPassword = true
        },err =>{
          this.loaderPassword = false
          this.errorPassword = true
          this.errorMessagePassword = err.error.msg  
        })

      }else{
        this.errorPassword = true
        this.errorMessagePassword = "Passwords are not matching!" 
      }
      
    }
  }
}
