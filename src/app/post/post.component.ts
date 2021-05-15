import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Search } from '../Shared/Search.interface';
import { PostService } from '../post/post.service';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { FormControl } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';

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
  public date1 = new FormControl(new Date());
  public stars: number;
  public movieLiked: boolean;
  public movieDisliked: boolean;
  public likeLink = "../../assets/up.png";
  public disLikeLink = "../../assets/down.png";
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

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.stars = $event.newValue;
  }

  likeDislike(value: string) {
    this.likeLink = value == 'like' ?  "../../assets/up_green.png" : "../../assets/up.png";
    this.disLikeLink = value == 'dislike' ?  "../../assets/down_red.png" : "../../assets/down.png";
  }
}
