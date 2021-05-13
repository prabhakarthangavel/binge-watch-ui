import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private autoComplete: string = '/title/auto-complete';
  constructor(private _http:HttpClient) { }

  searchMovies(query: string): Observable<any> {
    const header = new HttpHeaders({
      'X-Rapidapi-Key': `beb347f7camsh306a582b10915ffp1af296jsn09b6c40008cb`
    })
    let params = new HttpParams();
    params = params.append("q", query);
    return this._http.get(API.BASE_URL + this.autoComplete, {params: params, headers: header, observe: 'response'});
  }

  searchDummy(query: string): Observable<any> {
    return this._http.get("assets/search.json");
  }
}
