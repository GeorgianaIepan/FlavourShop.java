import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {UserModule} from "./features/user/services/user.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './features/header/header.component';
import {HomeComponent} from './features/user/components/home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {ShoppingCartComponent} from './features/user/components/shopping-cart/shopping-cart.component';
import {VerifySuccessComponent} from "./features/user/components/verify-success/verify-success.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingCartComponent,
    VerifySuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
