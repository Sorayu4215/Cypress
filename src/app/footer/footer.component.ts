import { Component, OnInit } from '@angular/core';
import { resourcesService } from'../shared/resources.service'
import { environment } from 'src/environments/environment';
import { footer } from './footer-enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']

})
export class FooterComponent implements OnInit {

  date = new Date().getFullYear()
  envAssets = environment.assets
  iconSource = this.resources.icon
  readonly attr = footer
  constructor(public resources: resourcesService) { }

  ngOnInit(): void {
  }

}
