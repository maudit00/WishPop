import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { iUser } from '../../../Models/i-user';
import { iProduct } from '../../../Models/i-product';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  constructor(private authService:AuthService, private productService:ProductService) {
    this.productService.product$.subscribe(res => this.product = res)
    this.getUser()
  }

  user!:iUser;
  product!:iProduct;

  getProduct(){
    this.productService.product$.subscribe(product => this.product = product)
  }
  getUser(){
    this.authService.user$.subscribe((user) => user? this.user = user : null)
  }

}
