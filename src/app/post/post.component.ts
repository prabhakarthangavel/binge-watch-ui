import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Search } from '../Shared/Search.interface';
import { PostService } from '../post/post.service';
import { NavBarService } from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public value: string = '';
  public nameList: string[] = [];
  public resultArray: Search[] = [];
  public selectedMovie: Search;

  constructor(private _postService: PostService, public _navService: NavBarService) { 
    this._navService.setHide();
    this._navService.setTitle("New Post");
  }

  ngOnInit(): void {}

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
        console.log(this.resultArray);
      }
    )
  }

  movieSelected(value: Search) {
    console.log(value);
    this.selectedMovie = value;
    this._navService.setTitle('I Watched');
  }

}
