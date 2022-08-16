import { Injectable } from '@angular/core';
import {BackendService} from "../../../../core/backend/backend.service";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginURL = 'http://localhost:8080/user';

  constructor(private service: BackendService) { }

  login(user: User): Observable<void>{
    return this.service.post(this.loginURL, user)
  }
}
