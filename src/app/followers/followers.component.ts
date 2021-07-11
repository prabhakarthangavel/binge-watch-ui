import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar/nav-bar.service';
import { FollowersService } from './followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(private _navService: NavBarService, private _followService: FollowersService) { 
    // this._navService.setHide();
    this._navService.setTitle("People");
  }

  ngOnInit(): void {
  }

  onSearch(event: any) {
    console.log(event)
    this.
  }

}
