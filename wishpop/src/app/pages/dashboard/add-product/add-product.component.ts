import { ProductService } from './../../../Services/product.service';
import { Component, ViewChild } from '@angular/core';
import { iCategory, iProduct } from '../../../Models/i-product';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { iUser } from '../../../Models/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})


export class AddProductComponent {
  constructor(private productSvc:ProductService, private authService:AuthService, private router:Router) {
    this.getCategories()
    this.getUser()
  }
  user!:iUser;

@ViewChild ('f', {static : true})

f!:NgForm;
categories:iCategory[] = []
conditions:string[]= ['A','B','C','D','E','F']

add(prod:iProduct){
  prod.userId = this.user.id
  this.productSvc.addProduct(prod).subscribe(res => res)
  this.router.navigateByUrl('/dashboard/inserzioni')
}

getUser(){
  this.authService.user$.subscribe(user=>{
  user ? this.user=user : null
  })
}
getCategories () {
  this.productSvc.getCategories().subscribe(res=> res.forEach(cat=>this.categories.push(cat)))
}

}
