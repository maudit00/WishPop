import { iProduct } from '../../../Models/i-product';
import { iUser } from '../../../Models/i-user';
import { ProductService } from '../../../Services/product.service';
import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inserzioni',
  templateUrl: './inserzioni.component.html',
  styleUrl: './inserzioni.component.scss'
})
export class InserzioniComponent {

  constructor(private authService:AuthService, private prodService :ProductService) {
    this.getUser()
    this.getProducts()
   }
  user!:iUser;
  prodArr: iProduct[] = [];
  noRes: boolean = false;

  getUser(){
   this.authService.user$.subscribe((user) => user ? this.user = user : null)
  }
  getProducts(){
    this.prodService.getProductByUser(this.user.id).subscribe((products) => {
      if (products.length == 0) {
        this.noRes = true
      }
      else {
        this.noRes = false
        this.prodArr = products
      }
    })
  }

  remove(product:iProduct){
    if (this.user.id == product.userId){
      this.prodService.deleteProduct(product.id).subscribe(res => {
        this.getProducts()
        this.prodArr = this.prodArr.filter(p => p.id!= product.id)
      })
    }

    }
  }

