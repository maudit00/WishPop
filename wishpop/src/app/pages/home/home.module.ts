import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [HomeComponent, CategoriesComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
