import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
choosen:boolean=false;

choose():boolean{
  this.choosen=!this.choosen;
  return this.choosen;
}

}
