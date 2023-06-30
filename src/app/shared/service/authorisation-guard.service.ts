import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router'; 
import { resourcesService } from '../resources.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor(private http: HttpClient, private resources: resourcesService) { 

  }

  canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user:any
    if (JSON.parse(localStorage.getItem('User')!)){
      return false
    }else{  
      return true
    }

  }
}
