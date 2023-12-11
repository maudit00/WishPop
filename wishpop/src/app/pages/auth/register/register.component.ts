import { AuthService } from '../../../Services/auth.service';
import { Component } from '@angular/core';
import { iRegister } from '../../../Models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  registerData:iRegister = {
    email: '',
    password: '',
    nome: ''
  }

  confirmPassword: string = '';

  comparePassword(): boolean{
    return this.registerData.password === this.confirmPassword;
  }

  save(){
    if (!this.comparePassword) return;
    this.authSvc.signUp(this.registerData)
    .subscribe((data) => {
        this.router.navigate(['/auth/login'])
    })
  }

}
