import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { resourcesService } from '../shared/resources.service';
import { HttpClient } from '@angular/common/http';
import { authorization } from './authorization-enum';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(public resources: resourcesService, private http: HttpClient) { }

  forgotPassword:boolean = false
  password:string = ''
  error:boolean
  errorMessage:string
  errorForgot:boolean
  errorMessageForgot:string
  readonly attr = authorization

  
  LogIn = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  })
  
  ForgotPassword = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
  })
  
  
  LogInFunction() {
    if (this.LogIn.valid){
      const { username, password } = this.LogIn.value
      // this.auth.LogIn(username, password)
    }
  }
  
  forgotPasswordFunction(){
    if (this.ForgotPassword.valid) {
      const { username: email } = this.ForgotPassword.value
      // this.auth.forgotPassword(email)
    }
  }
  
  ngOnInit(): void {
  }


}
