import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Users } from '../../Shared/Users.interface';
import { FollowersService } from '../followers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() user$: Observable<Users[]>;
  @Output() follow = new EventEmitter<number>();
  @Output() unfollow = new EventEmitter<number>();
  public usersList: Users[];
  public userName: string;
  public followEnable: boolean;
  public followingPeople: number[] = [];
  constructor(private _followersService: FollowersService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.user$.currentValue != 'undefined') {
      (changes.user$.currentValue as Observable<Users>).subscribe(
        (users: any) => {
          this.usersList = users;
        })
    }
  }

  ngOnInit(): void { }

  followUser(id: number) {
    this.follow.emit(id);
  }

  unfollowUser(id: number) {
    this.unfollow.emit(id);
  }
}