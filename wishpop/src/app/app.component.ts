import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wishpop';
  logged: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((data) => {
      this.logged = data;
    });
  }
}
