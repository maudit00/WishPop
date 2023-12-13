import { Component } from '@angular/core';
import { iUser } from '../../../Models/i-user';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private authSvc: AuthService) {
    this.authSvc.user$.subscribe((user) => {
      if (!user) return;
      console.log(user.user);

      this.user = user.user;
    });
  }
  user: iUser = {
    id: '',
    nome: '',
    cognome: '',
    email: '',
    password: '',
    address: {
      state: '',
      city: '',
      province: '',
      cap: 0,
      street: '',
      number: 0,
    },
    favPayMethod: '',
    balance: 0,
    level: '',
    transaction: {
      in: 0,
      out: 0,
    },
    feedback: 0,
    firstTime: false,
  };

  save(user: iUser) {}
}
