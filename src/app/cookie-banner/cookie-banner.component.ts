import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { resourcesService } from '../shared/resources.service';
import { cookieBanner } from './cookie-banner-enum';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent implements OnInit{

  constructor(public resources: resourcesService, private cookie: CookieService){}

  section = 'Approval' 
  readonly attr = cookieBanner
  accpetedCookie: boolean = false
  neededCookies: boolean = true
  preferencies: boolean = true
  stats: boolean = true
  sectionActivation(section:string){
    this.section = section
    const headerBtns = document.querySelectorAll('#btnSection')   
    headerBtns.forEach( element =>{
      element.classList.remove('active')
      if (element.textContent == section)
      {
        element.classList.add('active')
      }
    })
  }

  disable(){
    if (confirm("Are you sure you don't want to use this cookies? it may case problems with function this page!")){
      this.neededCookies = !this.neededCookies
    }    
  }

  preferenciesAction(){
   this.preferencies = !this.preferencies
  }

  statsAction(){
    this.stats = !this.stats
  }

  confirm(){
    this.cookie.set('Cookie', JSON.stringify({needed: this.neededCookies, preferencies: this.preferencies, stats: this.stats}))
    this.accpetedCookie = false
  }

  ngOnInit(): void {
    if (!this.cookie.check('Cookie')) {     
      this.accpetedCookie = true
    }
  }
}
