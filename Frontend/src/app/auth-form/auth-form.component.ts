import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from "rxjs";
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  isLogin: boolean = true;
  hasError: boolean = false;
  errorText: string;
  isAuthenticating: boolean = false;


  constructor(private authServive: AuthService) { }

  ngOnInit(): void {
  }

  onLogIn(form: NgForm) {
    let email = form.value['email'];
    let password = form.value['password'];
    this.isAuthenticating = true;
    this.authServive.logIn(email, password).subscribe((response) => {
      if(!response.token) {
        this.hasError = true;
        this.errorText = response.message;
        this.isAuthenticating = false;
      } else {
        this.hasError = false;
        console.log(response.message);
        this.authServive.setToken(response.token);
        this.authServive.setLogIn();
        this.isAuthenticating = false;
      }
    });
  }

  onSignUp(form: NgForm) {
    let email = form.value['email'];
    let password = form.value['password'];
    this.isAuthenticating = true;
    this.authServive.signUp(email, password).subscribe((response) => {
      if(!response.isAuth) {
        this.hasError = true;
        this.errorText = response.message;
        this.isAuthenticating = false;
      } else {
        this.hasError = false;
        this.isAuthenticating = false;
        console.log(response.message);
      }
    })
  }

  onCreate() {
    this.isLogin = !this.isLogin;
  }

}
