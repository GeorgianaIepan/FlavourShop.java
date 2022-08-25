import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BackendService} from "../../../../core/backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  URL = 'http://localhost:8080/reset?username='

  constructor(private service: BackendService) { }

  sendEmail(username: string): Observable<any> {
    return this.service.get(this.URL + username);
  }
}
