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
  public followingPeople = [];
  constructor(private _followersService: FollowersService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.userName = changes.user.currentValue.firstName + ' ' + changes.user.currentValue.lastName;
    
  }

  ngOnInit(): void {
    this._followersService.followingPeople().subscribe(
      response => {
        if(response && response.status == 200) {
          console.log(response);
          this.followingPeople = response.body;
        }
      })
  }

  followUser() {
    this._followersService.followPeople(this.user.id).subscribe(
      response => {
        if(response && response.status == 200) {
          this.followEnable = true;
        }
      });
  }

}
