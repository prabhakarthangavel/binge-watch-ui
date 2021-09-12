import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Users } from '../../Shared/Users.interface';
import { FollowersService } from '../followers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() user: Users;
  public userName: string;
  public followEnable: boolean;
  public followingPeople: number[] = [];
  constructor(private _followersService: FollowersService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.userName = changes.user.currentValue.firstName + ' ' + changes.user.currentValue.lastName;
    this.followEnable = changes.user.currentValue.following;
  }

  ngOnInit(): void {}

  followUser() {
    this._followersService.followPeople(this.user.id).subscribe(
      response => {
        console.log("is.follwinginPeopleth",response);
        if(response && response.status == 200) {
          
        }
      });
  }

}
