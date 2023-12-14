import { AuthService } from './../../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

  constructor(private authService:AuthService){


  }

  // getUserBalance():number{
  //   return this.authService.user$
  // }

}
