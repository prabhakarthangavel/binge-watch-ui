import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { Users } from '../Shared/Users';
import { FollowersService } from './followers.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  public searchUserList: Users[] = [];
  public searchObservable$: Observable<any>;
  public searched: boolean;
  public followersList: string[] = [];
  public followingList: Users[] = [];
  constructor(private _navService: NavBarService, private _followService: FollowersService) {
    this._navService.setTitle("People");
  }

  ngOnInit(): void {
    this._followService.getFollowers().subscribe(
      response => {
        response.body.forEach((element: any) => {
          this.followersList.push(element.firstName + " " + element.lastName);
        });
      });

    this._followService.getFollowings().subscribe(
      response => {
        response.body.forEach((element: any) => {
          this.followingList.push(new Users(element, true));
        });
      });
  }

  onSearch(event: any) {
    this.searchUserList = [];
    this.searched = true;
    if (event.target.value != '') {
      this._followService.findPeopleAndFollwings(event.target.value).subscribe(
        responseList => {
          responseList[0].body.forEach((element: any) => {
            this.searchUserList.push(new Users(element, (responseList[1].body as Array<any>).includes(element.id) ? true : false));
            this.searchObservable$ = of(this.searchUserList);
          });
        });
    }
  }

  followUser(userId: any) {
    this._followService.followPeople(userId).subscribe(
      response => {
        if (response && response.status == 200) {
          let index = this.searchUserList.findIndex(items => items.id == response.body);
          this.searchUserList[index].following = true;
          this.searchObservable$ = of(this.searchUserList);
        }
      });
  }

  unfollowUser(userId: any, samePage: boolean) {
    this._followService.unfollowPeople(userId).subscribe(
      response => {
        if (response && response.status == 200) {
          let index = this.searchUserList.findIndex(items => items.id == response.body);
          if (samePage) {
            this.followingList = this.followingList.filter(user => user.id != userId);
          }else {
            this.searchUserList[index].following = false;
            this.searchObservable$ = of(this.searchUserList);
          }
        }
      });
  }

}
