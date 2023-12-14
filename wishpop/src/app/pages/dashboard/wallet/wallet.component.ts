import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';
import { iTransaction, iUser } from '../../../Models/i-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

  constructor(private authService:AuthService, private router:Router){
  this.getUser()
  }

  userBalance!:number;
  id!:string;
  user!:iUser;
  amount:number = 0
  transaction:iTransaction = {
    transaction:{
      amount:0,
      type:'',
      date:new Date()
    }
  }

  getUser(){
     this.authService.user$.subscribe(user => {
      if(!user) return
      this.user = user
      console.log(this.user)
    })
  }

  addBalance (amount:number){
    if (!this.user) return
    this.transaction.transaction.amount = amount
    this.transaction.transaction.type = 'Deposit'
    this.transaction.transaction.date = new Date()
    if (!this.user.in) this.user.in = []
    let updatedUser = {...this.user, balance : this.user.balance + amount, in : [...this.user.in ,this.transaction] }
    this.authService.updatedUser(updatedUser).subscribe(res => console.log(res))
  }
}
