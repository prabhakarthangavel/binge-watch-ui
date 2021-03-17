import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input('name') name:string; 
  @Input('year') year:number;
  @Input('cast') cast:string;

  constructor() { }

  ngOnInit(): void {
  }

}
