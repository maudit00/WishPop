import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../Models/i-login';
import { environment } from '../../environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IAuthData } from '../Models/i-auth-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  loginUrl:string = `${environment.apiUrl}/login`;
  registerUrl:string = `${environment.apiUrl}/register`;
  jwt:JwtHelperService = new JwtHelperService();
  authSub = new BehaviorSubject<IAuthData | null>(null);
  user$ = this.authSub.asObservable();
  isLogged$ = this.user$.pipe(map(user => !!user))



  login(data: ILogin) {
    this.http.post<IAuthData>(`${environment.apiUrl}/login`, data)
    .pipe(tap(data =>{
      this.authSub.next(data);
      localStorage.setItem('token', data.token);
    }));
  }

}
