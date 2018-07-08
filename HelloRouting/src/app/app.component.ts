import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  /*fonction de routage*/
  toRoute(path: string) {
    this.router.navigate([path]);
  }
  constructor(private router: Router) {}
}
