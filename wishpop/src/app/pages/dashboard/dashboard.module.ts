import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddProductComponent,
    ProfileComponent,
    OrdersComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
