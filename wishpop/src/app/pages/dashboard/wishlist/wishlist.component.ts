import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { ProductService } from '../../../Services/product.service';
import { iProduct } from '../../../Models/i-product';
import { iUser } from '../../../Models/i-user';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
constructor(private authService:AuthService, private productService:ProductService) {
  this.getUser()
}

user!:iUser;
wishList:iProduct[] = []

getUser () {
  this.authService.user$.subscribe(user => user? this.user = user : null)
}


}
