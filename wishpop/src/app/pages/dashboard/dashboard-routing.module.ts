import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { WalletComponent } from './wallet/wallet.component';
import { InserzioniComponent } from './inserzioni/inserzioni.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
  {
    path: 'inserzioni',
    component: InserzioniComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
