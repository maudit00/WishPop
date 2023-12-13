import { iProduct } from './../../Models/i-product';
import { ProductService } from './../../Services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-prodotti',
  templateUrl: './card-prodotti.component.html',
  styleUrl: './card-prodotti.component.scss'
})
export class CardProdottiComponent {

prodArr:iProduct[] = []

constructor (private productService:ProductService){
  this.productService.getProducts().subscribe(products => {
    this.prodArr = products;
  })
}
}
