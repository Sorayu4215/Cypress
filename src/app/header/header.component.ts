import { Component, HostListener, OnInit} from '@angular/core';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { resourcesService } from '../shared/resources.service';
import { headerTransition } from '../animations/animations';
import { environment } from 'src/environments/environment';
import { header } from './header-enum';
import { CommonService } from '../shared/service/common.service';
import { DataService } from '../shared/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    headerTransition
  ]
})
export class HeaderComponent implements OnInit {
  constructor(public resources: resourcesService, private common:CommonService, private data:DataService, private router:Router) {  
    this.data.userData.subscribe((data:any)=>{
      if(data){
        this.authorized = true
      }else if (data == false){
        this.authorized = false
      }  
    })    
    
  }

  //pouzite v hmtl
  bars = faBarsStaggered
  iconSource = this.resources.icon
  scrolled = false
  Sections = this.resources.Sections
  dropdownShow: boolean = false
  dropdownAuthorizatedShow:boolean = false
  shopingCart = this.resources.cart
  amountItems: number = 0
  authorized:boolean = false

  readonly attr = header 

  getAmount(){
    this.amountItems = 0
    if(localStorage.getItem('Items')){
      let items: any = JSON.parse(localStorage.getItem('Items')!)
      items.forEach((element: any) => {
        this.amountItems += element.amount
      });
    }
  }

  logOut(){
    localStorage.removeItem('User')
    this.data.logedIn.next('')
    this.router.navigate([this.resources.mainPageURL])
  }

  ngOnInit(): void {
    this.getAmount()
    this.common.badge.subscribe(()=>{
      this.getAmount()
    })
  }


  @HostListener('document:click', ['$event']) documentClick(event:MouseEvent) {
    let element:any = (event.target! as HTMLElement).classList     
    if (!element.contains('dropdown-button-cover') && !element.contains('dropdown-auth-button-cover')){
      this.dropdownShow = false
      this.dropdownAuthorizatedShow = false
    }
  }
}
