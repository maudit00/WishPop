import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartcheckoutComponent } from './cartcheckout/cartcheckout.component';

@NgModule({
  declarations: [HomeComponent, CategoriesComponent, CheckoutComponent, CartcheckoutComponent],
  imports: [HomeRoutingModule, SharedModule]
})
export class HomeModule {}
