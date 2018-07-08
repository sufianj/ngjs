import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css']
})
export class PageMainComponent implements OnInit {
  clavierNumerique: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  operator: number = 0;

  operation: str = '=';
  res: number = 0;

  @Input()
  inputStr: string = '';

  append(str: string) {
    this.inputStr += str;
    this.operator = parseInt(this.inputStr, 10);
   /* console.log(this.operator);*/
  }

  constructor() {
   }

  ngOnInit() {
  }

}
