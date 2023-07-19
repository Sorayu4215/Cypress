import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UrlTree } from '@angular/router';
import { resourcesService } from '../resources.service';


@Injectable({
  providedIn: 'root'
})
export class SummaryGuardService implements CanActivate {

  constructor(private router: Router, private resources: resourcesService) { }

  canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const shipping = JSON.parse(localStorage.getItem('Shipping')!)
    const itemsProvided = JSON.parse(localStorage.getItem('Items')!)
    const address = JSON.parse(localStorage.getItem('Address')!)

    if (shipping && itemsProvided && address) {
      return true
    } else {
      // Navigate to a specific component or route
      this.router.navigate([this.resources.mainPageURL]);
      return false
    }
  }
}
