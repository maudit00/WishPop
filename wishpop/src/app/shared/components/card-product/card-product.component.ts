import { Component, Input } from '@angular/core';
import { iProduct } from '../../../Models/i-product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  @Input () product!: iProduct;

}
