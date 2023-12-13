import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    AddProductComponent
  ],
  imports: [
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
