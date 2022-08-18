import { Injectable } from '@angular/core';
import {BackendService} from "../../../../core/backend/backend.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerifySuccessService {

  verifySuccessUrl = 'http://localhost:8080/verify'

  constructor( private service: BackendService) { }
  verifySuccess(): Observable<any>{
    return this.service.get(this.verifySuccessUrl);
  }
}
