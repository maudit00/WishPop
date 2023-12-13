import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    CardCategoryComponent,
    CardProductComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CardCategoryComponent,
    CardProductComponent,

  ]
})
export class SharedModule { }
