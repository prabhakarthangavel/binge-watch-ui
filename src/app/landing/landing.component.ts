import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import { Search } from '../Shared/Search.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public value: string = '';
  public nameList: string[] = [];
  public resultArray: Search[] = [];
  constructor(private _landingService: LandingService) { }

  ngOnInit(): void {
  }

  onSearch(value: any) {
    // this._landingService.searchMovies(value.target.value).subscribe(
    //   response => {
    //     console.log('response',response);
    // });
    this._landingService.searchDummy(value.target.value).subscribe(
      response => {
        this.resultArray = response.d;
        for(let i = 0;i<this.resultArray.length;i++) {
          this.resultArray[i].img = response.d[i].i.imageUrl;
        }
        console.log(this.resultArray);
      }
    )
  }

}
