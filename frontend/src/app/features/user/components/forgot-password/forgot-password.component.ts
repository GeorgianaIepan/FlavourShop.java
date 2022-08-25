import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/user.model";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  userId: number | undefined;
  @Output() submitForm = new EventEmitter<User>()

  constructor(private activatedRoute:ActivatedRoute) { }

  passwordForm = new FormGroup({
    password1: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
    password2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
  })

  matchPasswordValidator(password: string, passwordConfirmation: string) {
    return passwordConfirmation === password;
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.submitForm.emit(formDirective.value)
    this.passwordForm.reset()
    formDirective.resetForm()
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['userId'];
      console.log(this.userId);

    });
  }

}
