import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logged:boolean = false;

  constructor(private authService:AuthService){
    this.authService.isLoggedIn$.subscribe((data) => {
      this.logged = data;
    })
  }

}
