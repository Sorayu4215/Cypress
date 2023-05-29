import { Component, Input,OnInit } from '@angular/core';
import { resourcesService } from '../../resources.service';
import { CommonService } from '../../service/common.service';
import { addedToCart } from './added-to-cart-enum';

@Component({
  selector: 'app-added-to-cart',
  templateUrl: './added-to-cart.component.html',
  styleUrls: ['./added-to-cart.component.css']
})
export class AddedToCartComponent implements OnInit{

  constructor(public resources: resourcesService, private common: CommonService){}

  show: boolean = false
  readonly attr = addedToCart
  ngOnInit(): void {   
    this.common.addedToCart.subscribe(()=>{
      this.show = true
    })
  }
}
