import { Component } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { registration } from './registration-enum';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(public resources: resourcesService,private data:DataService){}

  readonly attr = registration
  error:boolean
  errorMessage:string 
  submitted:boolean = false
  success:boolean =false
  loader:boolean = false

  credentials = new FormGroup({
    username: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  })

  getFormData(data?:any){
    this.submitted = true
    this.loader = true
    if(data.status == 'VALID' && this.credentials.status == 'VALID'){

      //password matching check
      if(this.credentials.value.newPassword !== this.credentials.value.passwordConfirmation) {
        this.error = true
        this.errorMessage = 'Passwords are not matching'
        this.loader = false
      } else{
        this.data.registration({ ...data.value, password: this.credentials.value.newPassword, username: this.credentials.value.username }).subscribe((data:any)=>{
          localStorage.setItem('User', JSON.stringify({ token: data.token, username: data.username }))
          this.success = true
          this.data.logedIn.next('')
          this.loader = false
          this.error = false   
        },err =>{
          this.error = true
          this.errorMessage = err.error.msg
          this.loader = false
        })
      }
    }else{
      this.loader = false
    }
  }
}
