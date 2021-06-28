import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing/landing.service';
import { AuthService } from '../../authenticate/auth.service';

@Component({
  selector: 'app-reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrls: ['./reviews-card.component.scss']
})
export class ReviewsCardComponent implements OnInit {

  constructor(private _landingService: LandingService, private _authService: AuthService) { }

  ngOnInit(): void {
    this._landingService.getPostsForUser(this._authService.getUsername()).subscribe(
      response => {
        console.log('response',response);
      }
    )
  }

}
