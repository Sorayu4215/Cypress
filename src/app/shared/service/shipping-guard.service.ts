import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UrlTree } from '@angular/router'; 


@Injectable({
  providedIn: 'root'
})
export class ShippingGuardService implements CanActivate {

  constructor(private router: Router) { }


  canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const itemsProvided = JSON.parse(localStorage.getItem('Items')!)
 
    if (itemsProvided !== null){
      if(itemsProvided.length == 0) {
          // Navigate to a specific component or route
          this.router.navigate(['Shop']);
        return false
      }
      return true
    }  else{
      this.router.navigate(['Shop']);
      return false
    }
}

}