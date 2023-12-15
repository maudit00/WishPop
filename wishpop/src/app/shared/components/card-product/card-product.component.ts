import { ProductService } from './../../../Services/product.service';
import { Component, Input } from '@angular/core';
import { iProduct } from '../../../Models/i-product';
import { AuthService } from '../../../Services/auth.service';
import { iUser } from '../../../Models/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  user!: iUser;
  isLoggedIn:boolean = false
  wished: boolean = false;

  @Input () product!: iProduct;
  constructor(private authService:AuthService,private productService:ProductService, private router:Router) {
    this.isLogged()
    this.getUser()
  }


  isLogged(){
    this.authService.isLoggedIn$.subscribe(res => this.isLoggedIn = res)
  }


  isWished (prod: iProduct){
   if (this.user.wishList && this.user.wishList.includes(prod)){
    return true;
  }
  return false
  }

  getUser(){
    this.authService.user$.subscribe(user => user ? this.user = user : null)
  }

  setItem (product: iProduct){
    this.productService.setProduct(product)
   }


  toggleWishList(prod:iProduct){
  if (!this.user) return
  if (this.user.wishList == undefined) this.user.wishList = []
  if (!this.user.wishList.some(p => p.id == prod.id)){
    this.user.wishList.push(prod)
  } else {
    this.user.wishList = this.user.wishList.filter(p => p.id!= prod.id)
  }
  this.authService.updatedUser(this.user).subscribe(res => console.log(res))
  }
}
