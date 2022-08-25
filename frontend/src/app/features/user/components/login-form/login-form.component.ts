import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<User>()

  constructor() {
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  onSubmit(formDirective: FormGroupDirective) {
    this.submitForm.emit(formDirective.value)
    this.loginForm.reset()
    formDirective.resetForm()
  }

}
