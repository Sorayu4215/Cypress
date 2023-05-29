import { Component,Input, Output } from '@angular/core';
import { resourcesService } from 'src/app/shared/resources.service';
import { search } from './search-enum';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(public resources:resourcesService){}

  readonly attr = search

  @Input() items: any
  @Output() filteredData: any
}
