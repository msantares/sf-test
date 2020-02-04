import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  showHeader = false;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
      )
      .subscribe((event) => {
        this.showHeader = this.router.url !== '/';
      });
  }
}
