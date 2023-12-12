import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iUser, iAddress, iTransaction, iAddInfo } from '../../Models/i-user';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: []
})
export class IntroComponent {
  [x: string]: any;
  user: iAddInfo = {
    id: '',
    adress: {
      state: '',
      city: '',
      cap: 0,
      street: '',
      number: 0
      },
    favPayMethod: ''
    }


  constructor(private authSvc: AuthService){

    //prendere id da observable
    this.authSvc.user$.subscribe(user => {
      user?.user.id;
     this.user.id = user!.user.id
      }
    )
  }

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {

      this.user.adress.state = userForm.value.state;
      this.user.adress.city = userForm.value.city;
      this.user.adress.cap = userForm.value.cap;
      this.user.adress.street = userForm.value.street;
      this.user.adress.number = userForm.value.number;

      this.user.favPayMethod = userForm.value.favPayMethod;
      //chiamata ad user/id-user
      //una chiamata POST http
      this.authSvc.addInfoToUser(this.user)
      console.log(this.user);

    } else {
      console.error('Il form non è valido!');
    }
  }
}
