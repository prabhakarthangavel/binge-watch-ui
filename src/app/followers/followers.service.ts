import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {
  private findPeopleUrl: string = API.BASE_URL + 'people/searchPeople';
  private followPeopleUrl: string = API.BASE_URL + 'people/followPeople';
  private followingPeopleUrl: string = API.BASE_URL + 'people/followingPeople';
  private unFollowPeopleUrl: string = API.BASE_URL + 'people/unfollowPeople';
  constructor(private _http: HttpClient) { }

  findPeopleAndFollwings(name: string): Observable<any[]> {
    let findPeople = this._http.get(this.findPeopleUrl + '/' + name, { observe: 'response' });
    let followings = this._http.get(this.followingPeopleUrl, { observe: 'response' });
    return forkJoin([findPeople, followings]);
  }

  followPeople(userId: number): Observable<any> {
    return this._http.get(this.followPeopleUrl + '/' + userId, { observe: 'response' });
  }

  followingPeople(): Observable<any> {
    return this._http.get(this.followingPeopleUrl, { observe: 'response' });
  }

  unfollowPeople(userId: number): Observable<any> {
    return this._http.get(this.unFollowPeopleUrl + '/' + userId, { observe: 'response' });
  }
}
