import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/user.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss']
})
export class RegistrationContainerComponent {

  constructor(private userService: UserService, private _snackBar: MatSnackBar) {
  }

  addUser(user: User) {
    this.userService.registration(user).subscribe(() => this._snackBar.open('Inregistrarea a avut loc cu succes!', 'OK', {
      duration: 10000,
      panelClass: 'success-snackbar'
    }), () => this._snackBar.open('Inregistrarea a esuat!', 'OK', {
      duration: 3000,
      panelClass: 'fail-snackbar'
    }))
  }
}
