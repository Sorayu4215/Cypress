import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resourcesService } from '../resources.service';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http:HttpClient, private resources:resourcesService) {}
  
  error:boolean

  getItems(){
    return this.http.get(`${this.resources.apiURL}/api/v1/items`)
  }
  getItem(id:number | string){
    return this.http.get(`${this.resources.apiURL}/api/v1/items/${id}`)
  }

  makeOrder(idProperty:number,itemProperty:any,addressProperty:any, shippinngProperty:any, tokenProperty?:any){
    return this.http.post(`${this.resources.apiURL}/api/v1/order`, { id: idProperty,item: itemProperty, address: addressProperty, shipping:shippinngProperty })
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
    return this.http.get(`${this.resources.apiURL}/api/v1/user`, { headers: { Authorization: `Bearer ${token}` } })
  }

}
