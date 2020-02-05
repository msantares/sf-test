import { Component, OnInit } from '@angular/core';
import {UserRequestService} from "../user-request.service";

@Component({
  selector: 'app-request-short-list',
  templateUrl: './request-short-list.component.html',
  styleUrls: ['./request-short-list.component.styl']
})
export class RequestShortListComponent implements OnInit {
  requests = [];

  constructor(
    private userRequestService: UserRequestService,
  ) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests(){
    this.userRequestService.getRequests()
      .pipe()
      .subscribe(requests => this.requests = requests)
  }
}
