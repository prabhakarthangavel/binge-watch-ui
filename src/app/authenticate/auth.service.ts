import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Login } from '../Shared/Login.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = API.BASE_URL + 'public/authenticate';
  private _spinner = new Subject();
  public spinner = this._spinner.asObservable();
  constructor(private _http: HttpClient) { }

  isAuthenticated(): boolean {
    if (new JwtHelperService().decodeToken(localStorage.getItem('token')!)) {
      return true;
    }
    return false;
  }

  getfullName() {
    return new JwtHelperService().decodeToken(localStorage.getItem('token')!).fullname;
  }

  getUsername() {
    return new JwtHelperService().decodeToken(localStorage.getItem('token')!).sub;
  }

  loginUser(loginData: Login): Observable<any> {
    return this._http.post(this.loginUrl, loginData, { observe: 'response' });
  }

  spinnerState(value: boolean): void {
    this._spinner.next(value);
  }
}
