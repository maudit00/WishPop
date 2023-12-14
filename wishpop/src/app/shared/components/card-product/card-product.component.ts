import { Component, Input } from '@angular/core';
import { iProduct } from '../../../Models/i-product';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  isLoggedIn:boolean = false
  @Input () product!: iProduct;
  constructor(private authService:AuthService) {
    this.isLogged()
  }


  isLogged(){
    this.authService.isLoggedIn$.subscribe(res => this.isLoggedIn = res)
  }
}
