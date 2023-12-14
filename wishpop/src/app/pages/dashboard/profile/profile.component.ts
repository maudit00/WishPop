import { Component } from '@angular/core';
import { iAddress, iUser } from '../../../Models/i-user';
import { AuthService } from '../../../Services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private authSvc: AuthService) {
    this.getUser()
  }

  editMode:boolean = false;
  address!:iAddress;
  user!: iUser;

  getUser(){
    this.authSvc.user$.subscribe(user => {
      if(!user) return
      this.user = user
      this.address = user.address
      console.log(this.address)
      console.log(this.user)
    })
  }

  toggleEditMode (){
    this.editMode =!this.editMode
  }

  editUser(user:iUser){
   this.authSvc.updatedUser(user).subscribe(res => {
    this.user = res
    this.editMode = false
   })
  }

  joinAddress(address: iAddress){
    return  `${address.state}, ${address.city}, ${address.province}, (${address.cap}) ${address.street}, ${address.number}`
  }
}
