import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';
import { iUser } from '../../../Models/i-user';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

  constructor(private authService:AuthService){
  this.getUser()
  }

  userBalance!:number;
  id!:string;
  user!:iUser;
  amount:number = 0

  getUser(){
     this.authService.user$.subscribe(user => {
      if(!user) return
      this.user = user
      console.log(this.user)
    })
  }


  addBalance(amount:number){
    if (!this.user) return
    const newBalance = {
      balance : this.user.balance + amount
    }
    this.authService.updateBalance(newBalance, this.user.id).subscribe(res => {
      this.user = res
      this.amount = 0
      console.log(res)
    })
  }


}
