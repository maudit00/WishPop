import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { InserzioniComponent } from './inserzioni/inserzioni.component';

const routes: Routes = [
  {
   path: '',
   component: DashboardComponent
  },
  {
   path: 'addproduct',
   component: AddProductComponent
  },
  {
    path: 'inserzioni',
    component: InserzioniComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
