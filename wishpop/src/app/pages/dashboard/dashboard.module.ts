import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { WalletComponent } from './wallet/wallet.component';
import { InserzioniComponent } from './inserzioni/inserzioni.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddProductComponent,
    ProfileComponent,
    OrdersComponent,
    WalletComponent,
    InserzioniComponent,
    WishlistComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
