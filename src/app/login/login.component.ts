import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    this.loginService.login({
      username: String(this.validateForm.get('userName').value) , // this.username,
      password: String(this.validateForm.get('password').value) , // this.password,
      // rememberMe: String(this.validateForm.get('rememberMe').value) // this.rememberMe
    }).subscribe(data => {
      this.router.navigate(['/schedule']);
    },
    error => {
      console.log(error);
    }
    );
  }

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService ) {
    this.credentials = {};
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
