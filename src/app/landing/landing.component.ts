import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public value: String = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(value:any) {
    console.log("value",value.target.value)
  }

}
