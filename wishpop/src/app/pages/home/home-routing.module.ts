import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartcheckoutComponent } from './cartcheckout/cartcheckout.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [

{ path: '', component: HomeComponent
},
{
  path: 'checkout/:id', component: CheckoutComponent
},
{
  path: 'checkout', component: CartcheckoutComponent
},
{ path: 'categories', component: CategoriesComponent },
{ path: 'secret', component: SecretComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
