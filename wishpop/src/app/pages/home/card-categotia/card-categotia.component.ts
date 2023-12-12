import { Component } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { iCategory } from '../../../Models/i-product';

@Component({
  selector: 'app-card-categotia',
  templateUrl: './card-categotia.component.html',
  styleUrl: './card-categotia.component.scss'
})
export class CardCategotiaComponent {
catArr:iCategory[] = []

constructor(private productService:ProductService){
  this.productService.getCategories().subscribe(categories => {
    this.catArr = categories;
    console.log(categories);
  })
}
}
