import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { iAddInfo, iUser } from '../../../Models/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: []
})
export class IntroComponent {
  user!:iUser;

  constructor(
    private authSvc: AuthService,
    private router:Router){
    this.getUser()
  }

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
     if (this.user.firstTime) {
      this.user.level = 'Bronze'
      this.user.firstTime = false
      this.user.balance = 0
    }
    this.user = {...userForm.value, ...this.user}
    console.log(this.user)
    this.authSvc.updatedUser(this.user).subscribe(res => {
      this.router.navigate(['/dashboard'])
    })

  }
    else {
      console.error('Il form non è valido!');
    }
  }

  getUser(){
    this.authSvc.user$.subscribe(user => user ? this.user = user : null)
  }
}
