import { iUser } from '../../../Models/i-user';
import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

  constructor(private authService:AuthService){
    this.getUserBalance();
    this.addBalance();
  }

  userBalance!:number;
  id!:string;


  getUserBalance(){
     this.authService.user$.subscribe(user => {
      if(!user) return
      this.id  =  user.user.id
      user.user.balance ? this.userBalance = user.user.balance : this.userBalance = 0 ;
    })
  }

  addBalance(){
      this.authService.addBalance(this.id, 5).subscribe(data=> console.log(data))
  }



}
