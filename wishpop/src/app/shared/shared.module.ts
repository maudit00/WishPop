import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CardCategoryComponent,
    CardProductComponent,
    LoaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CardCategoryComponent,
    CardProductComponent,
    LoaderComponent,
    NgbDropdownModule
  ]
})
export class SharedModule { }
