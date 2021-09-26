import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Users } from '../../Shared/Users.interface';
import { FollowersService } from '../followers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() user: Users;
  @Output() follow = new EventEmitter<number>();
  @Output() unfollow = new EventEmitter<number>();
  public userName: string;
  public followEnable: boolean;
  public followingPeople: number[] = [];
  constructor(private _followersService: FollowersService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.userName = changes.user.currentValue.firstName + ' ' + changes.user.currentValue.lastName;
    this.followEnable = changes.user.currentValue.following;
  }

  ngOnInit(): void { }

  followUser() {
    this.follow.emit(this.user.id);
  }

  unfollowUser() {
    this.unfollow.emit(this.user.id);
  }
}