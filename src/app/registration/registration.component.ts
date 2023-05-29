import { Component } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { registration } from './registration-enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(public resources: resourcesService){}

  readonly attr = registration
  error:boolean
  errorMessage:string 

  getFormData(data:any){
    console.log(data);
    
  }

}
