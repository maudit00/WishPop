import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificaComponent } from './notifica/notifica.component';

const routes: Routes = [
  {
    path: 'auth',
     loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
