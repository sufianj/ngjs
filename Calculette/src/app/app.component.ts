import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './rootclass/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  leTableauMenu: Array<MenuItem> = [
    new MenuItem('Main', 'main'),
    new MenuItem('History', 'history')
  ];

  toRoute(path: string) {
    this.router.navigate([path]);
  }
  constructor(private router: Router) {}
}
