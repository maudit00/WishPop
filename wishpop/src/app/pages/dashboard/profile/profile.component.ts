import { Component } from '@angular/core';
import { iUser } from '../../../Models/i-user';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  user: iUser = {

    id: '',
    nome: '',
    email: '',
    password: '',
    address: {
      state: '',
      city: '',
      province: '',
      cap: 0,
      street: '',
      number: 0
    },
    favPayMethod: '',
    balance: 0,
    level:'',
    transaction:{
      in: 0,
      out: 0
    },
    feedback: 0

  }

  constructor(
    private authSvc: AuthService,
    private router:Router){

    //prendere id da observable
    this.authSvc.user$.subscribe(user => {
      user?.user.id;
     this.user.id = user!.user.id;
     this.user.email = user!.user.email;
     this.user.password = user!.accessToken;
      }
    )
  }

  ngOnInit() {
    if (this.user) {


    } else {
      console.error('Il form non è valido!');
    }
  }


}
