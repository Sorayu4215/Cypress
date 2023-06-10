import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { resourcesService } from './shared/resources.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(private meta: Meta, public resources: resourcesService, @Inject(PLATFORM_ID) private platformId: any,){
    this.meta.addTag({ name: 'description', content: this.resources.metaDescription })
    this.meta.addTag({ name: 'keywords', content: this.resources.metaKeywords })
    this.meta.addTag({ name: 'author', content: this.resources.metaAuthor })
    this.meta.addTag({ name: 'template', content: this.resources.metaTemplate })
  }

  title = 'testing-app';
}
