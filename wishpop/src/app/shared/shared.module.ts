import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



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
    CardCategoryComponent,
    NgbDropdownModule
  ]
})
export class SharedModule { }
