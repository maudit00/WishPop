import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [HomeComponent, CategoriesComponent, CheckoutComponent],
  imports: [HomeRoutingModule, SharedModule]
})
export class HomeModule {}
