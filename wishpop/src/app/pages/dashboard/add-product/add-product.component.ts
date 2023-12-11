import { ProductService } from './../../../Services/product.service';
import { Component, ViewChild } from '@angular/core';
import { iAddProduct } from '../../../Models/i-product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})


export class AddProductComponent {
  constructor(private productSvc:ProductService) {
    this.getCategories()
    console.log(this.categories)
  }

@ViewChild ('f', {static : true})

f!:NgForm;
categories:any[] = []
conditions:string[]= ['A','B','C','D','E','F']

add(prod:iAddProduct){
  this.productSvc.addProduct(prod).subscribe(res=>{console.log(res)})
}

getCategories () {
  this.productSvc.getCategories().subscribe(res=> res.forEach(cat=>this.categories.push(cat.name)))
}

}
