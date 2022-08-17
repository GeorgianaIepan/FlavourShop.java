import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginFormComponent} from "../../components/login-form/login-form.component";
import {FormGroup} from "@angular/forms";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  loginUser(user: User) {
    this.loginService.login(user).subscribe(result =>
    console.log(result))
  }

}
