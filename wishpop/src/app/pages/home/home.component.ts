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
    this.productService.product$.subscribe(product => product)
    this.getAllCategories()
   }

prodArr:iProduct[]=[]
catArr:iCategory[]=[]
catClicked:boolean=false;
loading:boolean=false;
errorLoading:boolean=false;



getAllCategories(){
  this.loading = true
  this.productService.getCategories().subscribe(res => {
    this.catArr = res
    this.loading = false
  }, err => {
    this.loading = false
    this.errorLoading = true
    console.log(err)
  })
}

toggleCatClicked (){
  this.catClicked=!this.catClicked
}

}
