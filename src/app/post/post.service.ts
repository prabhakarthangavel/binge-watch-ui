import { Injectable } from '@angular/core';
import { API } from '../Constants/api.cont';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Shared/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private autoComplete: string = 'title/auto-complete';
  private newPost: string = 'posts/addPosts';
  private editPostUrl: string = 'posts/editPosts';
  constructor(private _http:HttpClient) { }

  searchMovies(query: string): Observable<any> {
    const header = new HttpHeaders({
      'X-Rapidapi-Key': `beb347f7camsh306a582b10915ffp1af296jsn09b6c40008cb`
    })
    let params = new HttpParams();
    params = params.append("q", query);
    return this._http.get(API.RAPID_API + this.autoComplete, {params: params, headers: header, observe: 'response'});
  }

  searchDummy(query: string): Observable<any> {
    return this._http.get("assets/search.json");
  }

  createNewPost(post: Post): Observable<any> {
    return this._http.post(API.BASE_URL + this.newPost, post, { observe: 'response'});
  }

  editPost(data: any): Observable<any> {
    return this._http.post(API.BASE_URL + this.editPostUrl, data, { observe: 'response'});
  }
}
