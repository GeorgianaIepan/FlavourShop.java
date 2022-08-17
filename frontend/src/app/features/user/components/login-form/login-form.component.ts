import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter<User>()
  constructor() { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username:  new FormControl('', [Validators.required]),
    //email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  onSubmit(formDirective: FormGroupDirective){
    this.submitForm.emit(this.loginForm.value as User)
    this.loginForm.reset()
    formDirective.resetForm()
  }

}
