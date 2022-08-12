import { Injectable } from '@angular/core';
import {BackendService} from "../../../../core/backend/backend.service";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsURL = 'http://localhost:8080/order/getall';
  constructor(private service: BackendService) { }

  getAllProducts(): Observable<void> {
    return this.service.post(this.productsURL)
  }
}
