import { Component } from '@angular/core';
import { resourcesService } from '../../resources.service';
import { Router } from '@angular/router';
import { cartNavigation } from './cart-navigation-enum';

@Component({
  selector: 'app-cart-navigation',
  templateUrl: './cart-navigation.component.html',
  styleUrls: ['./cart-navigation.component.css']
})
export class CartNavigationComponent {
  constructor(public resources: resourcesService, public router: Router){}

  readonly attr = cartNavigation
}
