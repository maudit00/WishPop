import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { iUser } from '../../../Models/i-user';
import { iProduct } from '../../../Models/i-product';
import { ProductService } from '../../../Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  constructor(private authService:AuthService, private productService:ProductService, private active:ActivatedRoute) {
    this.active.params.subscribe(params => {
      this.productService.getProductById(params['id']).subscribe(res => {
        res ? this.product = res : null
      })
    })
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
