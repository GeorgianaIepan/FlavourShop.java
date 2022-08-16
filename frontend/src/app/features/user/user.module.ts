import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserService} from "./services/user/user.service";
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { RegistrationContainerComponent } from './containers/registration-container/registration-container.component';
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ProductListComponent } from './components/product-list/product-list.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationContainerComponent,
    ProductListComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatSnackBarModule,
        MatCardModule
    ],
  providers: [UserService]
})
export class UserModule { }
