import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuCollapsed = true
  logged:boolean = false;


  constructor(private authService:AuthService){
    this.authService.isLoggedIn$.subscribe((data) => {
      this.logged = data;
    })
  }

}
