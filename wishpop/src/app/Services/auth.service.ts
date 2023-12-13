import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { iLogin } from '../Models/i-login';
import { iRegister } from '../Models/register';
import { iAccessData } from '../Models/i-access-data';

import { BehaviorSubject, Observable, Subject, map, tap, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { iAddInfo, iUser } from '../Models/i-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService(); //ci permette di lavorare facilmente con i jwt

  authSubject = new BehaviorSubject<iAccessData | null>(null); //null è il valore di default, quindi si parte con utente non loggato
  infoSubject = new Subject<iAddInfo | null>();
  userInfo$= this.infoSubject.asObservable() //null è il valore di default, quindi si parte con
  user$ = this.authSubject.asObservable(); //contiene i dati dell'utente loggato oppure null
  isLoggedIn$ = this.user$.pipe(map((user) => !!user)); //fornisce true o false in base allo stato di autenticaziuone dell'utente
  //isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)))

  constructor(
    private http: HttpClient, //per le chiamate http
    private router: Router //per i redirect
  ) {
    this.restoreUser(); //come prima cosa controllo se è già attiva una sessione, e la ripristino
  }

  //ng g environment
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
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date; //recupero la data di scadenza del jwt
    const expMs = expDate.getTime() - new Date().getTime(); //sottraggo i ms della data attuale da quelli della data del jwt

    setTimeout(() => {
      //avvio un timer che fa logout allo scadere del tempo
      this.logout();
    }, expMs);
  }

  logout() {
    this.authSubject.next(null); //comunico al behaviorsubject che il valore da propagare è null
    localStorage.removeItem('accessData'); //elimino i dati salvati in localstorage
    this.router.navigate(['/auth/login']); //redirect al login
  }

  //metodo che controlla al reload di pagina se l'utente è loggato e se il jwt è scaduto
  restoreUser() {
    const userJson: string | null = localStorage.getItem('accessData'); //recupero i dati di accesso
    if (!userJson) return; //se i dati non ci sono blocco la funzione

    const accessData: iAccessData = JSON.parse(userJson); //se viene eseguita questa riga significa che i dati ci sono, quindi converto la stringa(che conteneva un json) in oggetto
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return; //ora controllo se il token è scaduto, se lo è fermiamo la funzione

    //se nessun return viene eseguito proseguo
    this.authSubject.next(accessData); //invio i dati dell'utente al behaviorsubject
    this.autoLogout(accessData.accessToken); //riavvio il timer per la scadenza della sessione
  }

  addInfoToUser(info: iAddInfo) {
    this.userInfoUrl = this.userInfoUrl + '/' + info.id;
    return this.http.put<iAddInfo>(this.userInfoUrl, info).pipe(tap((data) =>
    {
      this.infoSubject.next(data)
      localStorage.setItem('userInfo', JSON.stringify(data))
    }
    ));
  }

  getUserInfo (id:string){
    this.userInfoUrl = this.userInfoUrl + '/' + id;
    return this.http.get<iUser>(this.userInfoUrl);
  }
}
