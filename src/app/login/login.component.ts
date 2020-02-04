import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.loginForm =  this.fb.group({
      phone: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

}
