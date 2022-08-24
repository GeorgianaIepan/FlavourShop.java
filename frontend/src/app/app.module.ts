import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {UserModule} from "./features/user/services/user.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { UserModule } from "./features/user/services/user.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './features/header/header.component';
import { HomeComponent } from './features/user/components/home/home.component';
import { MatIconModule } from "@angular/material/icon";
import { ShoppingCartComponent } from './features/user/components/shopping-cart/shopping-cart.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { OrderComponent } from './features/user/components/order/order.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import { OrderContainerComponent } from './features/user/containers/order-container/order-container.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ShoppingCartComponent,
        OrderComponent,
        OrderContainerComponent,
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
    HeaderComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
