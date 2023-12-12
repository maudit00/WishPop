import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardCategotiaComponent } from './card-categotia/card-categotia.component';

@NgModule({
  declarations: [HomeComponent, CardCategotiaComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
