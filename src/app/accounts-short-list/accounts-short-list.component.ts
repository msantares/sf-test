import {Component, OnInit} from '@angular/core';
import {UserAccountsService} from "../user-accounts.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-accounts-short-list',
  templateUrl: './accounts-short-list.component.html',
  styleUrls: ['./accounts-short-list.component.styl']
})
export class AccountsShortListComponent implements OnInit {
  accounts = null;

  constructor(
    private userAccountsService: UserAccountsService
  ) {
  }

  ngOnInit() {
    this.userAccountsService.getAccounts()
      .pipe(first())
      .subscribe(accounts => this.accounts = accounts)
  }

}
