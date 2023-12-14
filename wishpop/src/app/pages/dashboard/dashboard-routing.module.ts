import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { WalletComponent } from './wallet/wallet.component';

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
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
