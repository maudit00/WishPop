import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { iLogin } from '../Models/i-login';
import { iRegister } from '../Models/register';
import { iAccessData } from '../Models/i-access-data';
import { BehaviorSubject, Observable, Subject, map, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { iUser } from '../Models/i-user';
import { iProduct } from '../Models/i-product';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  authSubject = new BehaviorSubject<iAccessData | null>(null);
  user$ = this.authSubject.asObservable().pipe(map((accessData) => accessData?.user));
  isLoggedIn$ = this.user$.pipe(map((user) => !!user));



  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser();
  }


  registerUrl: string = environment.apiUrl + '/register';
  loginUrl: string = environment.apiUrl + '/login';
  userInfoUrl: string = environment.apiUrl + '/users';

  signUp(data: iRegister): Observable<iAccessData> {
    return this.http.post<iAccessData>(this.registerUrl, data);
  }

  login(data: iLogin): Observable<iAccessData> {
    return this.http.post<iAccessData>(this.loginUrl, data).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('accessData', JSON.stringify(data));
        this.autoLogout(data.accessToken);
      })
    );
  }

  autoLogout(jwt: string) {
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();
    setTimeout(() => {
      this.logout();
    }, expMs);
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/auth/login']);
  }


  restoreUser() {
    const userJson: string | null = localStorage.getItem('accessData');
    if (!userJson) return;
    const accessData: iAccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;
    this.authSubject.next(accessData);
    this.autoLogout(accessData.accessToken);
  }

  getUserInfo() {
    this.user$.subscribe((user) => {
      if (!user){
        this.router.navigate(['/auth/login']);
      }
      return user
    });
  }

  updatedUser(user:iUser){
    const url = environment.apiUrl + '/users/' + user.id
        return this.http.patch<iUser>(url, user).pipe(tap((data) => {
          this.updateIAccessData(user)
        }))
  }

  updateIAccessData(user:Partial<iUser>){
    const userJson: string | null = localStorage.getItem('accessData');
    if (!userJson) return;
    const accessData: iAccessData = JSON.parse(userJson);
    let updatedUser = {...accessData.user,...user}
    accessData.user = updatedUser;
    this.authSubject.next(accessData);
    localStorage.setItem('accessData', JSON.stringify(accessData));
  }


}
