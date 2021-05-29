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
  public movieInfo: MovieInfo = {
    id: '',
    img: '',
    cast: '',
    name: '',
    year: 0,
    running_length: 0,
    rating: 0,
    description: '',
    maturity: '',
    genres: [],
    releasedate: new Date()
  };

  constructor(private _navService: NavBarService, private _route: ActivatedRoute, private _movieService: MovieInfoService) {
    this._navService.setHide();
    this._navService.setTitle("Movie Info");
  }

  ngOnInit(): void { 
    this._route.queryParams.subscribe(query => {
      this._movieService.getMovieOverviewDummy(query.id as string).subscribe(
        response => {
          const movie: MovieInfo = {
            id: query.id as string,
            img: query.img as string,
            cast: query.cast as string,
            name: response.title.title,
            year: response.title.year,
            running_length: response.title.runningTimeInMinutes,
            rating: response.ratings.rating,
            description: response.plotOutline.text,
            maturity: response.certificates.US[0].certificate,
            genres: response.genres,
            releasedate: response.releaseDate
          }
          this.movieInfo = movie;
          console.log('mvoieInfo',response)
        }
      )
    })
  }

}
