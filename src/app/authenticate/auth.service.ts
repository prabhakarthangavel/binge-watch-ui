import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Shared/Login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = API.BASE_URL + 'public/authenticate';
  constructor(private _http: HttpClient) { }

  isAuthenticated() {
    return false;
  }

  loginUser(loginData: Login):Observable<any> {
    return this._http.post(this.loginUrl, loginData, { observe: 'response' });
  }
}
