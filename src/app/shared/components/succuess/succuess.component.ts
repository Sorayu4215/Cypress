import { Component,Input } from '@angular/core';
import { success } from './success-enum';
import { resourcesService } from '../../resources.service';

@Component({
  selector: 'app-succuess',
  templateUrl: './succuess.component.html',
  styleUrls: ['./succuess.component.css']
})
export class SuccuessComponent {

  constructor(public resources:resourcesService){}

  readonly attr = success
  @Input() successText:string
}
