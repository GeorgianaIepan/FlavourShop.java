import { Injectable } from '@angular/core';
import { BackendService } from "../../../../core/backend/backend.service";
import { Observable } from "rxjs";
import Order = jasmine.Order;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderURL = 'http://localhost:8080/order'

  constructor(private service: BackendService) {
  }

  submit(order: Order): Observable<void> {
    return this.service.post(this.orderURL, order)
  }
}
