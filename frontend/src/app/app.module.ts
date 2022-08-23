import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {UserModule} from "./features/user/services/user.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './features/user/components/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import { ShoppingCartComponent } from './features/user/components/shopping-cart/shopping-cart.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { IngredientComponent } from './features/user/components/ingredient/ingredient.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ShoppingCartComponent,
        //IngredientComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule
  ],
    providers: [],
  exports: [
    HeaderComponent,
    MatInputModule
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
