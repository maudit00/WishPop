import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { iProduct } from '../../Models/i-product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private productService:ProductService) {
    this.getAll()
   }
prodArr:iProduct[]=[]

getAll(){
  this.productService.getProducts().subscribe(res => this.prodArr = res)
}


}
