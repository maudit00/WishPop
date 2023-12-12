import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private authService:AuthService, private route:Router) { }

  logout(){
    this.authService.logout();
  }

}
