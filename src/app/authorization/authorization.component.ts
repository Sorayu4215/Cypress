import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { resourcesService } from '../shared/resources.service';
import { HttpClient } from '@angular/common/http';
import { authorization } from './authorization-enum';
import { DataService } from '../shared/data/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  constructor(public resources: resourcesService, private http: HttpClient, private data:DataService) {     
  }

  forgotPassword:boolean = false
  sucess:boolean = false
  password:string = ''
  error:boolean
  errorMessage:string
  errorForgot:boolean
  errorMessageForgot:string
  loader: boolean = false
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
      this.loader = true
      const { username, password } = this.LogIn.value
      this.http.post(`${environment.url}/api/v1/login`,{username:username, password:password}).subscribe((data:any)=>{        
        localStorage.setItem('User', JSON.stringify({ token: data.token, username: data.username}))      
        this.sucess = true  
        this.data.logedIn.next('')
        this.loader = false
        this.error = false   
      },err =>{
        this.error = true        
        this.errorMessage = err.error.msg
        this.loader = false
      })
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
