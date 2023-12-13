import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [

{ path: '', component: HomeComponent
},
{
  path: 'checkout', component: CheckoutComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
