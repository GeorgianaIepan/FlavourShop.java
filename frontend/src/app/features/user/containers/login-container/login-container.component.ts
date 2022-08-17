import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthenticateService} from "../../services/authenticate/authenticate.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  constructor(
    private jwtHelper :JwtHelperService, private loginService: AuthenticateService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  loginUser(user: User) {
    this.loginService.login(user).subscribe(res => {
      console.log(typeof res, res);
      console.log(this.jwtHelper.decodeToken(JSON.stringify(res)));
    });
  }

}
