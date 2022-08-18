import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthenticateService} from "../authenticate/authenticate.service";

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private jwtHelper :JwtHelperService, private authenticateService: AuthenticateService) {}

  // @ts-ignore
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    // const user = this.authenticateService.userValue;
    // const isLoggedIn = user && user.;
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    // if (isLoggedIn && isApiUrl) {
    //   request = request.clone({
    //     setHeaders: { Authorization: `Bearer ${user.jwtToken}` }
    //   });
    }

    // return next.handle(request);
  }
