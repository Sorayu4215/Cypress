import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { resourcesService } from 'src/app/shared/resources.service';
import { filters } from './filters-enum';
import { DataService } from '../../shared/data/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(public resources: resourcesService, private data: DataService){
  }


  
  @Input() items:[]
  @Output() filteredData = new EventEmitter()
  @ViewChild('priceInput') priceInput: ElementRef
  @ViewChild('searchInput') searchInput: ElementRef
  originalArray:any
  filterOptions:any[]
  maximumNumber:number
  currentValue: number
  filteredArray:any
  orderArray:any
  category: string | undefined
  order: string | undefined
  activeCategory: undefined | string = this.resources.filtersCategoryAll
  activeOrder: undefined | string 

  applyFilter(category?: undefined | string, order?: undefined | string){
    let searchValue = this.searchInput.nativeElement.value.toLowerCase()
    this.currentValue = this.priceInput.nativeElement.value  

    if (category == this.resources.filtersCategoryAll) {
      this.activeCategory = this.resources.filtersCategoryAll
      this.category = undefined
    } else if (category){
      this.category = category
      this.activeCategory = category
    }
    if (order) this.order = order

    this.filteredArray = this.originalArray.filter((item:any) => {
      //search
      const searchFilter = item.title.toLowerCase().includes(searchValue)
      //category
      const matchCategory = !this.category || item.category == this.category
      //price
      const price = item.price <= this.priceInput.nativeElement.value 
      return price && searchFilter && matchCategory
    })

    this.filteredData.emit(this.filteredArray);
  }


  getFilterValues(data:any){
    const allFilterElement = data.map((element:any)=>{
      return element.category
    });
    const filterValues = [...new Set(allFilterElement)]
    return filterValues
  }

  gefMaximumNumber(data:any){
    const allNumbers = data.map((element: any) => {
      return element.price
    });
    const maxNumber = Math.ceil(Math.max(...allNumbers))
    return maxNumber
  }

  orderChapest(){

    this.orderArray = this.filteredArray.sort((a:any, b:any) => a.price - b.price)
    this.filteredData.emit(this.orderArray)
    this.activeOrder = this.resources.filterCheapers
  }

  orderExpensive(){
    this.orderArray = this.filteredArray.sort((a:any, b:any) => a.price - b.price).reverse()
    this.filteredData.emit(this.orderArray)
    this.activeOrder = this.resources.filterExpensie
  }

  orderAlphabet(){
    this.orderArray = this.filteredArray.sort((a: any, b: any) => a.title.localeCompare(b.title))
    this.filteredData.emit(this.orderArray)
    this.activeOrder = this.resources.filterAlphabetOrder
  }

  orderAlphabetReverse(){
    this.orderArray = this.filteredArray.sort((a: any, b: any) => a.title.localeCompare(b.title)).reverse()
    this.filteredData.emit(this.orderArray)
    this.activeOrder = this.resources.filterReverseAlphabetOrder
  }

  readonly attr = filters

  ngOnInit(){
    this.filterOptions = this.getFilterValues(this.items)
    this.maximumNumber = this.gefMaximumNumber(this.items)
    this.originalArray = this.items
    this.filteredArray = this.originalArray
  }


}
