import { Component,Input } from '@angular/core';
import { resourcesService } from '../../resources.service';
import { error } from './error-rnum';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(public resources:resourcesService){}

  @Input() errorText:string
  readonly attr = error

}
