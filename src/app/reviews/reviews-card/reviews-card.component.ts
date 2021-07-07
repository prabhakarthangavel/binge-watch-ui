import { Component, OnInit, Input } from '@angular/core';
import { ReviewCard } from '../../Shared/ReviewCard';

@Component({
  selector: 'app-reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrls: ['./reviews-card.component.scss']
})
export class ReviewsCardComponent implements OnInit {
  @Input() reviewData: ReviewCard[];
  public img_link: string;
  constructor() { }

  ngOnInit(): void {
   
  }

}
