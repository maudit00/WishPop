import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { iCategory, iProduct } from '../../Models/i-product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private productService:ProductService) {
    this.getAllProducts()
    this.getAllCategories()
   }

prodArr:iProduct[]=[]
catArr:iCategory[]=[]
catClicked:boolean=false;
loadingContent:boolean=false;
errorLoading:boolean=false;

getAllProducts(){
  this.productService.getProducts().subscribe(res => this.prodArr = res)
}

getAllCategories(){
  this.loadingContent = true
  this.productService.getCategories().subscribe(res => {
    this.catArr = res
    this.loadingContent = false
  }, err => {
    this.loadingContent = false
    this.errorLoading = true
    console.log(err)
  })
}

toggleCatClicked (){
  this.catClicked=!this.catClicked
}

}
