import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Search } from '../Shared/Search.interface';
import { PostService } from '../post/post.service';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { FormControl } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { Post } from '../Shared/Post.interface';

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
  public date1 = new Date();
  public stars: number = 0;
  public movieLiked: boolean;
  public movieDisliked: boolean;
  public likeLink = "../../assets/star_gray.png";
  public description: string;
  public tags: string;
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
    if(this.likeLink == '../../assets/star_gray.png') {
      this.likeLink = '../../assets/star_color.png';
    }else if(this.likeLink == '../../assets/star_color.png') {
      this.likeLink = '../../assets/star_gray.png'
    }
  }

  enablePost(): boolean {
    if(this.date1 == null || this.stars == 0) return false;
    return true;
  }

  createPost() {
    const newPost: Post = {
      user_id: 123,
      movie_id: this.selectedMovie.id,
      post_date: this.date1,
      stars: this.stars,
      movie_like: this.likeLink == '../../assets/star_color.png' ? 'Y' : 'N',
      review: this.description,
      tags: this.tags,
      movie_name: this.selectedMovie.l,
      movie_img: this.selectedMovie.img,
      year: this.selectedMovie.y,
      cast: this.selectedMovie.s
    }
    this._postService.createNewPost(newPost).subscribe(
      response => {
        console.log('response',response)
      }
    )
  }
}
