import { Component, OnInit, ChangeDetectorRef, OnDestroy, AfterContentChecked } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { NavBarService } from './nav-bar.service';
import { Router } from '@angular/router';
import { Search } from '../Shared/Search.interface';
import { PostService } from '../post/post.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy, AfterContentChecked {
  public mobileQuery: MediaQueryList;
  public _mobileQueryListener: () => void;
  public searchEnabled: boolean;
  public resultArray: Search[] = [];
  public value: string;
  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, public _navBar: NavBarService,
    private ref: ChangeDetectorRef, private _location: Location, private _router: Router, private _postService: PostService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener) }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.ref.detectChanges();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  closed() {
    this._router.navigate(['/landing'])
  }

  arrowback() {
    this.searchEnabled = false;
  }

  seachClicked() {
    this.searchEnabled = true;
  }

  movieSelected(movie: Search) {
    console.log(movie)
    this.searchEnabled = false;
    this._router.navigate(['/movie-info'], { queryParams: {id: movie.id, cast: movie.s, img: movie.img}});
  }

  onSearch(value: any) {
    // this._landingService.searchMovies(value.target.value).subscribe(
    //   response => {
    //     console.log('response',response);
    // });
    this._postService.searchDummy(value.target.value).subscribe(
      response => {
        this.resultArray = response.d;
        for(let i = 0;i<this.resultArray.length;i++) {
          this.resultArray[i].img = response.d[i].i.imageUrl;
        }
      }
    )
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
