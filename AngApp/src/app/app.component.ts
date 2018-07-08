import { Component } from '@angular/core';
import { MenuItem } from './rootclass/InfoMenu/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  leTableauMenu: Array<MenuItem> = [
    new MenuItem("Creation", "creation"),
    new MenuItem("Modification", "modification"),
    new MenuItem("Liste", "liste"),
    new MenuItem("Afficharge", "afficharge")
  ];
  toRoute(path: string) {
    this.router.navigate([path]);
  }
  constructor(private router: Router) {}
}
