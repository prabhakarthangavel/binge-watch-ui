import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { Users } from '../Shared/Users';
import { FollowersService } from './followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  public searchUserList: Users[] = [];
  public searched: boolean;
  constructor(private _navService: NavBarService, private _followService: FollowersService) {
    this._navService.setTitle("People");
  }

  ngOnInit(): void {
  }

  onSearch(event: any) {
    this.searchUserList = [];
    this.searched = true;
    if (event.target.value != '') {
      this._followService.findPeopleAndFollwings(event.target.value).subscribe(
        responseList => {
            responseList[0].body.forEach((element: any) => {
              this.searchUserList.push(new Users(element, (responseList[1].body as Array<any>).includes(element.id) ? true : false));
            });
          });
    }
  }

}
