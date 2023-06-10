import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { resourcesService } from './shared/resources.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private meta: Meta, public resources: resourcesService){
    this.meta.addTag({ name: 'description', content: this.resources.metaDescription })
    this.meta.addTag({ name: 'keywords', content: this.resources.metaKeywords })
    this.meta.addTag({ name: 'author', content: this.resources.metaAuthor })
    this.meta.addTag({ name: 'template', content: this.resources.metaTemplate })
  }

  title = 'testing-app';
}
