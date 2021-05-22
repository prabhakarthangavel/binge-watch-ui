import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { ActivatedRoute } from '@angular/router';
import { MovieInfo } from '../Shared/Movie-info.interface';
import { MovieInfoService } from './movie-info.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  public movieInfo: MovieInfo;

  constructor(private _navService: NavBarService,private _route: ActivatedRoute, private _movieService: MovieInfoService) {
    this._navService.setHide();
    this._navService.setTitle("Movie Info");
   }

  ngOnInit(): void {
    this._route.queryParams.subscribe(query =>{
      const movie: MovieInfo = {
        id: query.id as string,
        img: query.img as string,
        cast: query.cast as string,
        name: '',
    director: '',
    year: 12,
    running_length: 1,
    rating: 1,
    description: '',
    maturity: '',
    genres: [],
    releasedate: new Date()
      }
      this.movieInfo = movie;
      // this.movieInfo.id = query.id as string;
      // this.movieInfo.img = query.img;
      // this.movieInfo.cast = query.cast;
      this._movieService.getMovieOverviewDummy(query.id as string).subscribe(
        response => {
          console.log(this.movieInfo)
        }
      )
    })
  }

}
