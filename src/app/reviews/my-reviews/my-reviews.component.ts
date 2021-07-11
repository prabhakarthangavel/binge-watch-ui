import { Component, Input, OnInit } from '@angular/core';
import { LandingService } from '../../landing/landing.service';
import { AuthService } from '../../authenticate/auth.service';
import { ReviewCard } from '../../Shared/ReviewCard';
import { NavBarService } from '../../nav-bar/nav-bar.service';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss']
})
export class MyReviewsComponent implements OnInit {
  public reviewData: ReviewCard[] = [];
  public filterdData: ReviewCard[] = [];
  constructor(private _landingService: LandingService, private _authService: AuthService, private _navService: NavBarService) {
    this._navService.setTitle("Rating History");
   }

  ngOnInit(): void {
    this._landingService.getPostsForUser(this._authService.getUsername()).subscribe(
      response => {
        if (response && response.status == 200) {
          for (let i = 0; i < response.body.length; i++) {
            this.reviewData.push(new ReviewCard(response.body[i]));
            this.filterdData = this.reviewData;
          }
        }
      });
  }

  onSearch(event: any) {
    this.filterdData = this.reviewData.filter(data => data.movie_name.toLowerCase().includes((event.target.value as string).toLowerCase()));
  }


}
