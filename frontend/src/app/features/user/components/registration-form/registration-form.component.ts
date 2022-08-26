import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<User>()

  constructor() {
  }

  ngOnInit(): void {
  }

  matchPasswordValidator(password: string, passwordConfirmation: string) {
    return passwordConfirmation === password;
  }

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
    confirmationPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0][7][0-9]{8}$')]),
  })

  onSubmit(formDirective: FormGroupDirective) {
    this.submitForm.emit(this.registrationForm.value as User)
    this.registrationForm.reset()
    formDirective.resetForm()
  }
}
