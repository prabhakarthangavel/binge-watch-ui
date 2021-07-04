import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing/landing.service';
import { AuthService } from '../../authenticate/auth.service';
import { Post } from '../../Shared/Post.interface';
import { ReviewCard } from '../../Shared/ReviewCard';

@Component({
  selector: 'app-reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrls: ['./reviews-card.component.scss']
})
export class ReviewsCardComponent implements OnInit {
  public reviewData: ReviewCard;
  public img_link: string;
  constructor(private _landingService: LandingService, private _authService: AuthService) { }

  ngOnInit(): void {
    this._landingService.getPostsForUser(this._authService.getUsername()).subscribe(
      response => {
        if(response && response.status == 200) {
          this.reviewData = new ReviewCard(response.body[0]);
          console.log(this.reviewData)
        }
      }
    )
  }

}
