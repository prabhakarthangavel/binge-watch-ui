import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from './landing.service';
import { Search } from '../Shared/Search.interface';
import { NavBarService } from '../nav-bar/nav-bar.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  constructor(private _router: Router, private _navService: NavBarService){
    this._navService.setShow();
    this._navService.setTitle('Posts');
  }

  ngOnInit() {}
 
  addPost() {
    console.log(); 
    this._router.navigate(['/posts']);
  }
}
