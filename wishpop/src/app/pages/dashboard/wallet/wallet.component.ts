import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';
import { iAccessData } from '../../../Models/i-access-data';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

  constructor(private authService:AuthService){
    this.getUser();
  }

  userBalance!:number;
  id!:string;
  user!:iAccessData | null;
  amount:number = 0

  getUser(){
     this.authService.user$.subscribe(user => {
      if(!user) return
      this.user = user
      console.log(this.user)
    })
  }

  // addBalance(){
  //   if (!this.user) return
  //   this.authService.updateBalance(this.user).subscribe(res => {
  //    this.userBalance = res.user.balance
  //  })
  // }

  addBalance(amount:number){
    if (!this.user) return
    const newBalance = {
      balance : this.user.user.balance + amount
    }
    this.authService.updateBalance(newBalance, this.user.user.id).subscribe(res => {
      this.user = res
      this.amount = 0
      console.log(res)
    })
  }


}
