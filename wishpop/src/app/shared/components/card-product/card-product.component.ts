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
      this.authService.user$.subscribe(user => {
        this.isLoggedIn = true
        user ? this.user = user : null
      })
  }


  isWished (prod: iProduct){
   if (this.user.wishList && this.user.wishList.some(p => p.id == prod.id)){
    return true;
  }
  return false
  }


  getSellerName (id:string){
    this.authService.getUserName(id).subscribe(user => {
      this.user = user
    })
  }

  toggleWishList(prod:iProduct){
  if (!this.user) return
  if (this.user.wishList == undefined) this.user.wishList = []
  if (!this.user.wishList.some(p => p.id == prod.id)){
    this.user.wishList.push(prod)
  } else {
    this.user.wishList = this.user.wishList.filter(p => p.id!= prod.id)
  }
  this.authService.updatedUser(this.user).subscribe(res => res)
  }

  buy(product:iProduct){
    if (this.user.cart == undefined) this.user.cart = []
    this.user.cart.push(product)
    this.authService.updatedUser(this.user).subscribe(res =>{
      this.productService.setProduct(product)
    })
  }

 }
