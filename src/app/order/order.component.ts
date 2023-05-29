import { Component } from '@angular/core';
import { resourcesService } from '../shared/resources.service';
import { order } from './order-enum';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  
  constructor(public resources:resourcesService){}

  showLoader = false
  showSuccess = true
  showProblem = false
  readonly attr = order

}
