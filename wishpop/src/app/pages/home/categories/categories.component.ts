import { Component, Input } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { iProduct } from '../../../Models/i-product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {


  prodArr:iProduct[] = []
  constructor(private productService:ProductService) {
    this.productService.catSearched != '' ? this.getProductByCat(this.productService.catSearched) : this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(res => {
      this.prodArr = res
    })
  }

  getProductByCat (name:string) {
    this.productService.getProductByCat(name).subscribe(products => this.prodArr = products)
  }



}
