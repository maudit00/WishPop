import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../Models/i-login';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router) {
  }

login(data:ILogin){
this.http.post(`${environment.apiUrl}/login`,data)
}

}
