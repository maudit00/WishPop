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

 user!: iUser;

  getUser(){
    this.authSvc.user$.subscribe(user => {
      if(!user) return
      this.user = user
      console.log(this.user)
      this.address = this.joinAddress(this.user.address)
    })
  }

  joinAddress (address: iAddress):string{
   return this.address = `${address.state} ${address.city} ${address.province} ${address.cap} ${address.street} ${address.number}`
  }
}
