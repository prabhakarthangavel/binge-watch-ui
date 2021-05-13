import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from './landing.service';
import { Search } from '../Shared/Search.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  constructor(private _router: Router){}

  ngOnInit() {}
 
  addPost() {
    console.log(); 
    this._router.navigate(['/posts']);
  }
}
