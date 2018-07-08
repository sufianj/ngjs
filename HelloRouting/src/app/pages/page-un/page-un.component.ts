import { Component, OnInit, Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-un',
  templateUrl: './page-un.component.html',
  styleUrls: ['./page-un.component.css']
})
export class PageUnComponent implements OnInit {

  constructor() { }
  name: string = "page 1 (def)";

  ngOnInit() {
  }

}

@Injectable()
export class PageUnComponentDeact implements CanDeactivate<PageUnComponent> {
  constructor(private router: Router) {}
  canDeactivate(component: PageUnComponent,
              currentRoute: ActivatedRouteSnapshot,
              currentState: RouterStateSnapshot,
              nextState: RouterStateSnapshot): Observable<boolean>|
                                              Promise<boolean> |
                                              boolean {
    return true;
  }
}
