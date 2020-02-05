import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  authorizeUser(){
    return of(true);
  }
}
