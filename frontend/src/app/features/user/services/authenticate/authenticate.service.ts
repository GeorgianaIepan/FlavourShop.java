import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import {User} from "../../models/user.model";
import {BackendService} from "../../../../core/backend/backend.service";
import jwt_decode from "jwt-decode";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private jwtHelper :JwtHelperService,
    private service: BackendService
  ) {
    this.userSubject = new BehaviorSubject<User>(null as unknown as User);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(user: User) {
    return this.service.post(`${environment.apiUrl}/login`, user)

  }

}
