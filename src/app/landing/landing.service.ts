import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private fetchPostsUrl: string = 'posts/getPosts';

  constructor(private _http: HttpClient) { }

  getPostsForUser(userName: string): Observable<any> {
    return this._http.get(API.BASE_URL + this.fetchPostsUrl + '/' + userName, { observe: 'response' });
  }
}