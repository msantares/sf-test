import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {requests} from "./requests";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor() { }

  getRequests(){
    return of(requests);
  }
}
