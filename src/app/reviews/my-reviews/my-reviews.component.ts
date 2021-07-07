import { Component, Input, OnInit } from '@angular/core';
import { LandingService } from '../../landing/landing.service';
import { AuthService } from '../../authenticate/auth.service';
import { ReviewCard } from '../../Shared/ReviewCard';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss']
})
export class MyReviewsComponent implements OnInit {
  public reviewData: ReviewCard[] = [];
  constructor(private _landingService: LandingService, private _authService: AuthService) { }

  ngOnInit(): void {
    this._landingService.getPostsForUser(this._authService.getUsername()).subscribe(
      response => {
        if (response && response.status == 200) {
          for (let i = 0; i < response.body.length; i++) {
            this.reviewData.push(new ReviewCard(response.body[i]));
          }
        }
      });
  }

}
