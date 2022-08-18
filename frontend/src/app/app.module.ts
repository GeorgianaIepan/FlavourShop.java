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
import { VerifySuccessComponent } from './features/user/components/verify-success/verify-success.component';
import { VerifyFailedComponent } from './features/user/components/verify-failed/verify-failed.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        VerifySuccessComponent,
        VerifyFailedComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        UserModule
    ],
    providers: [],
    exports: [
        HeaderComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
