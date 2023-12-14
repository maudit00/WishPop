import { Component } from '@angular/core';
import { iAddress, iUser } from '../../../Models/i-user';
import { AuthService } from '../../../Services/auth.service';
import { iAccessData } from '../../../Models/i-access-data';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private authSvc: AuthService) {
    this.getUser()
  }


  balance: number | undefined = 0;
  level: string | undefined = '';
 address: string = '';
 transaction : number | undefined = 0;

 user!: iAccessData;

  // getUserInfo(){
  //  this.authSvc.user$.subscribe(user => {
  //   user ? this.user.id = user.user.id : console.error("user not found");
  //   this.authSvc.getUserInfo(this.user.id).subscribe(user => {
  //     user.nome ? this.user.nome = user.nome : this.user.nome = 'Non definito';
  //     user.cognome? this.user.cognome = user.cognome : this.user.cognome = 'Non definito';
  //     user.email? this.user.email = user.email : this.user.email = 'Non definito';
  //     user.address ? this.address = this.joinAddress(user.address) : this.address = 'Non definito';
  //     user.favPayMethod? this.user.favPayMethod = user.favPayMethod : this.user.favPayMethod = 'Non definito';
  //     user.level == '' ? this.user.level = 'Bronze' : this.user.level = user.level;
  //     user.balance? this.user.balance = user.balance : this.user.balance = 0
  //     user.transaction ? this.transaction = Math.abs( user.transaction.in - user.transaction.out) : this.transaction = 0
  //   })
  //  })
  // }

  getUser(){
    this.authSvc.user$.subscribe(user => {
      if(!user) return
      this.user = user
      console.log(this.user)
      this.address = this.joinAddress(this.user.user.address)
    })
  }

  joinAddress (address: iAddress):string{
   return this.address = `${address.state} ${address.city} ${address.province} ${address.cap} ${address.street} ${address.number}`
  }
}
