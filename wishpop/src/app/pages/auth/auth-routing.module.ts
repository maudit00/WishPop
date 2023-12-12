import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotificaComponent } from '../../notifica/notifica.component';


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent
  },
  {path: "notifica",
  component: NotificaComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
