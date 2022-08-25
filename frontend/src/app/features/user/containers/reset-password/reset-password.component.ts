import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ForgotPasswordComponent} from "../../components/forgot-password/forgot-password.component";
import {ForgotPasswordService} from "../../services/forgotPassword/forgot-password.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar, private forgotPassword: ForgotPasswordService) { }

  ngOnInit(): void {
  }

  reset(user: User){
    this.forgotPassword.sendPassword(user).subscribe(result=>{
          console.log('OK');
          console.log(result);
    });


  }

}
