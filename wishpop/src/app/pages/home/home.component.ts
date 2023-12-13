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

getAllProducts(){
  this.productService.getProducts().subscribe(res => this.prodArr = res)
}

getAllCategories(){
  this.productService.getCategories().subscribe(res => this.catArr = res)
}

}
