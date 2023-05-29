import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resourcesService } from '../resources.service';


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




  // data = [
  //   {
  //     id: "001",
  //     title: "T-Shirt",
  //     price: 15.99,
  //     description: "A comfortable and stylish cotton T-shirt, available in various sizes and colors.",
  //     category: "Clothing",
  //     image: "T-shirt.jpg"
  //   },
  //   {
  //     id: "002",
  //     title: "Sneakers",
  //     price: 79.99,
  //     description: "High-quality sneakers with excellent grip and support, available in various sizes and colors.",
  //     category: "Footwear",
  //     image: "sneakers.jpg"
  //   },
  //   {
  //     id: "003",
  //     title: "Backpack",
  //     price: 49.99,
  //     description: "A durable and spacious backpack with multiple compartments, perfect for everyday use or hiking trips.",
  //     category: "Bags",
  //     image: "BackPack2.png"
  //   },
  //   {
  //     id: "004",
  //     title: "Smartphone",
  //     price: 699.99,
  //     description: "The latest smartphone with a high-resolution display, powerful processor, and advanced camera system.",
  //     category: "Electronics",
  //     image: "Smartphone3.png"
  //   },
  //   {
  //     id: "005",
  //     title: "Headphones",
  //     price: 129.99,
  //     description: "Premium noise-cancelling headphones with exceptional sound quality and comfortable fit.",
  //     category: "Electronics",
  //     image: "headphones.jpg"
  //   },
  //   {
  //     id: "006",
  //     title: "Dress",
  //     price: 69.99,
  //     description: "A beautiful and elegant dress for formal occasions, available in various colors and sizes.",
  //     category: "Clothing",
  //     image: "Dress1.jpg"
  //   },
  //   {
  //     id: "007",
  //     title: "Running Shoes",
  //     price: 99.99,
  //     description: "Lightweight and breathable running shoes, designed for comfort and performance.",
  //     category: "Footwear",
  //     image: "runningShoes.jpg"
  //   },
  //   {
  //     id: "008",
  //     title: "Smart Watch",
  //     price: 199.99,
  //     description: "A stylish and functional smart watch, with a variety of health and fitness features.",
  //     category: "Electronics",
  //     image: "smartWatch.jpg"
  //   },
  //   {
  //     id: "009",
  //     title: "Sunglasses",
  //     price: 39.99,
  //     description: "Fashionable sunglasses with UV protection, perfect for sunny days.",
  //     category: "Accessories",
  //     image: "sunGlasses.jpg"
  //   },
  //   {
  //     id: "010",
  //     title: "Hiking Boots",
  //     price: 129.99,
  //     description: "Sturdy and waterproof hiking boots, designed for rugged terrain and all weather conditions.",
  //     category: "Footwear",
  //     image: "hikingBoots.jpg"
  //   }
  // ]

}
