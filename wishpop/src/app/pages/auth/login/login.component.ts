import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService:AuthService, private route:Router) { }
  @ViewChild('f', { static: true })
  f!: NgForm;

  send(){
    this.authService.login(this.f.value).subscribe(res => {
      this.route.navigate(['/dashboard']);
    })
  }
}
