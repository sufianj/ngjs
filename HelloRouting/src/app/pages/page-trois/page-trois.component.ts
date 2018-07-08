import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-trois',
  templateUrl: './page-trois.component.html',
  styleUrls: ['./page-trois.component.css']
})
export class PageTroisComponent implements OnInit {

  constructor() { }
  name: string = "page trois à ù è ç ï ϑ θήτα";
  ngOnInit() {
  }

}
