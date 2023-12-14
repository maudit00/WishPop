import { Component, Input } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { iUser } from '../../../Models/i-user';
import { iProduct } from '../../../Models/i-product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

  constructor(private authService:AuthService) {
    this.getUser()
    this.getProduct()
    console.log(this.user)
  }

  user!:iUser;
  product!:iProduct;

  getUser(){
    this.authService.user$.subscribe((user) => user? this.user = user : null)
  }
  getProduct () {
    this.authService.item$.subscribe((product) => product? this.product = product : null)
  }

}
