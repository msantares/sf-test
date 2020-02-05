import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorizationService} from "../authorization.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordInputType: 'password' | 'text' = 'password';

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.loginForm =  this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  authorizeUser(){
    this.authorizationService.authorizeUser()
      .pipe(first())
      .subscribe(result => {
        if(result)
          this.router.navigate(['/cabinet']);
        else
          console.log('some error');
      })
  }

  switchInputType(){
    this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
  }

}
