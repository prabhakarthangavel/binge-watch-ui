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
  private followersUrl: string = API.BASE_URL + 'people/followers';
  private followingUrl: string = API.BASE_URL + 'people/followings';
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

  getFollowers(): Observable<any> {
    return this._http.get(this.followersUrl, { observe: 'response' });
  }

  getFollowings(): Observable<any> {
    return this._http.get(this.followingUrl, { observe: 'response' });
  }
}
