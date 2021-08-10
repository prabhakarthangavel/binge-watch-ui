import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  private findPeopleUrl: string = API.BASE_URL + 'people/searchPeople';
  private followPeopleUrl: string = API.BASE_URL + 'people/followPeople';
  private followingPeopleUrl: string = API.BASE_URL + 'people/followingPeople';
  constructor(private _http: HttpClient) { }

  findPeople(name: string): Observable<any> {
    return this._http.get(this.findPeopleUrl + '/' + name, { observe: 'response' });
  }

  followPeople(userId: number): Observable<any> {
    return this._http.get(this.followPeopleUrl + '/' + userId, { observe: 'response' });
  }

  followingPeople(): Observable<any> {
    return this._http.get(this.followingPeopleUrl, { observe: 'response' });
  }
}
