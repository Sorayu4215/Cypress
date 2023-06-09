import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resourcesService } from '../resources.service';
import { map,Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http:HttpClient, private resources:resourcesService) {
    this.logedIn.subscribe(() => {
      this.initializeApp()
    })
  }
  
  error:boolean
  userData = new Subject<any>()
  test:any
  logedIn = new Subject<any>()

  getItems(){
    return this.http.get(`${environment.url}/api/v1/items`)
  }
  getItem(id:number | string){
    return this.http.get(`${environment.url}/api/v1/items/${id}`)
  }

  makeOrder(idProperty:number,itemProperty:any,addressProperty:any, shippinngProperty:any, date:string){
    let token:undefined | string = undefined
    if(localStorage.getItem('User')){
      token = JSON.parse(localStorage.getItem('User')!).token
    }
    return this.http.post(`${environment.url}/api/v1/order`, { id: idProperty, item: itemProperty, address: addressProperty, shipping: shippinngProperty, date: date }, { headers: { Authorization: `Bearer ${token}` }})
  }

  getItemsAttributes(arrayOfIds: { idItems: number, amount?: number, waranty?: boolean, returnOption ?:boolean}[] ){
    return this.getItems().pipe(map((data:any)=>{
      if(arrayOfIds == null) return []

       const updatedItems:any = [];

       data.forEach((item:any) => {
        const option = arrayOfIds.find(opt => opt.idItems === item.idItems);

        if (option) {
          const updatedItem = {
            ...item,
            amount: option.amount,
            waranty: option.waranty,
            returnOption: option.returnOption
          };
          updatedItems.push(updatedItem);
          }
        });
      return updatedItems
    }))
  }

  user(token: string) {
    return this.http.get(`${environment.url}/api/v1/user`, { headers: { Authorization: `Bearer ${token}` } })
  }

  registration(data: any) {
    return this.http.post(`${environment.url}/api/v1/registration`, data,)
  }

  getOrders(){
    let token: undefined | string = undefined
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')!).token
    }
    return this.http.get(`${environment.url}/api/v1/order`, { headers: { Authorization: `Bearer ${token}` } })
  }

  changeUserData(data:any){
    let token: undefined | string = undefined
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')!).token
    }
    return this.http.post(`${environment.url}/api/v1/change-user-data`, data, { headers: { Authorization: `Bearer ${token}` } } )
  }

  changeUsername(data:any){
    let token: undefined | string = undefined
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')!).token
    }
    return this.http.post(`${environment.url}/api/v1/change-username`, data, { headers: { Authorization: `Bearer ${token}` } })
  }
  changePassword(data:any){
    let token: undefined | string = undefined
    if (localStorage.getItem('User')) {
      token = JSON.parse(localStorage.getItem('User')!).token
    }
    return this.http.post(`${environment.url}/api/v1/change-password`, data, { headers: { Authorization: `Bearer ${token}` } })
  }

  initializeApp(): Promise<any> {
    if (JSON.parse(localStorage.getItem('User')!)) {
      const user = JSON.parse(localStorage.getItem('User')!)
      this.user(user.token).subscribe((data) => {
        this.userData.next(data)
      },err =>{
        localStorage.removeItem('User')
      })
    } else{
      this.userData.next(false)
    }
    
    return Promise.resolve();
  }

}
