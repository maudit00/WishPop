import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardCategoryComponent } from './components/card-category/card-category.component';



@NgModule({
  declarations: [
    CardCategoryComponent
  ],
  imports: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CardCategoryComponent
  ]
})
export class SharedModule { }
