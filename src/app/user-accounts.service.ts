import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {accounts} from "./accounts";

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  constructor() { }

  getAccounts(){
    return of(accounts);
  }
}
