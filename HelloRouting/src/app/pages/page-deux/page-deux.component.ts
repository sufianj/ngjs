import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-deux',
  templateUrl: './page-deux.component.html',
  styleUrls: ['./page-deux.component.css']
})
export class PageDeuxComponent implements OnInit {

  constructor() { }
  name: string = "Page two";

  ngOnInit() {
  }

}
