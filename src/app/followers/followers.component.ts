import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { FollowersService } from './followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  public searchUserList = [];
  public searched: boolean;
  constructor(private _navService: NavBarService, private _followService: FollowersService) { 
    this._navService.setTitle("People");
  }

  ngOnInit(): void {
  }

  onSearch(event: any) {
    this.searched = true;
    if(event.target.value != '') {
      this._followService.findPeople(event.target.value).subscribe(
        response => {
          if(response && response.status == 200) {
            this.searchUserList = response.body;
          }
        }
      )
    }
  }

}
