import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UrlTree } from '@angular/router'; 
import { resourcesService } from '../resources.service';

@Injectable({
  providedIn: 'root'
})
export class OrderGuardService {

  constructor(private router: Router, private resources: resourcesService) { }

  canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const shipping = JSON.parse(localStorage.getItem('Shipping')!)
    const items= JSON.parse(localStorage.getItem('Items')!)
    const address = JSON.parse(localStorage.getItem('Address')!)
    const confirmed = JSON.parse(localStorage.getItem('Confirmed')!)

    if (shipping && items && address && confirmed) {
      return true
    } else {
      this.router.navigate([this.resources.mainPageURL]);
      return false
    }
  }
}
