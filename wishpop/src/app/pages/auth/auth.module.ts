import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    IntroComponent
  ],
  imports: [
    AuthRoutingModule,
  ]
})
export class AuthModule {}
