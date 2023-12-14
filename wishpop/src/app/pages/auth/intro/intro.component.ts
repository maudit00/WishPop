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

    //prendere id da observable
    this.authSvc.user$.subscribe(user => {
      if (!user) return
      user.id;
     this.user.id = user.id;
     this.user.email =  user.email;
      }
    )
  }

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      this.user.nome = userForm.value.nome;
      this.user.cognome = userForm.value.cognome;
      this.user.address.state = userForm.value.state;
      this.user.address.city = userForm.value.city;
      this.user.address.province = userForm.value.province;
      this.user.address.cap = userForm.value.cap;
      this.user.address.street = userForm.value.street;
      this.user.address.number = userForm.value.number;
      this.user.favPayMethod = userForm.value.favPayMethod;
      this.user.password = userForm.value.password;
      this.user.firstTime = false;
      this.authSvc.addInfoToUser(this.user).subscribe(res => {
        this.router.navigate(['/dashboard'])
      })

    } else {
      console.error('Il form non è valido!');
    }
  }
}
