import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService:AuthService) { }
  @ViewChild('f', { static: true })
  f!: NgForm;

  send(){
    this.authService.login(this.f.value).subscribe(res => {
      console.log(res)
    })
  }
}
