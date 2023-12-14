import { Component } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { iProduct } from '../../../Models/i-product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  loading:boolean = false;
  noRes:boolean = false;
  prodArr:iProduct[] = []
  catName:string=''

  constructor(private productService:ProductService) {
    this.getProductByCat(this.productService.catSearched)
    this.catName = this.productService.catSearched
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(res => {
      this.prodArr = res
    })
  }

  getProductByCat (name:string) {
    this.loading = true;
    this.productService.getProductByCat(name).subscribe(products => {
      products.length > 0? this.prodArr = products : (this.getAllProducts(), this.noRes = true)
      this.loading = false
    })
  }
}
