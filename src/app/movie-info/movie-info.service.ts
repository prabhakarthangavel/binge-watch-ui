import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieInfoService {

  private overview: string = '/title/get-overview-details';
  constructor(private _http:HttpClient) { }

  getMovieOverview(id: string): Observable<any> {
    const header = new HttpHeaders({
      'X-Rapidapi-Key': `beb347f7camsh306a582b10915ffp1af296jsn09b6c40008cb`
    })
    let params = new HttpParams();
    params = params.append("tconst", id);
    return this._http.get(API.RAPID_API + this.overview, {params: params, headers: header, observe: 'response'});
  }

  getMovieOverviewDummy(id: string): Observable<any> {
    return this._http.get("assets/overview.json");
  }
}
