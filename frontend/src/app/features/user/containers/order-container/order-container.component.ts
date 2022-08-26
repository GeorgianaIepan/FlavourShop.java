import { Component, OnInit } from '@angular/core';
import { Order } from "../../models/order.model";
import { OrderService } from "../../services/order/order.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss']
})
export class OrderContainerComponent implements OnInit {

  constructor(private orderService: OrderService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }
  addOrder(order: Order) {
    this.orderService.submit(order).subscribe(() => {
      this._snackBar.open('Order created successfully!', 'OK', {
        duration: 10000,
        panelClass: 'success-snackbar'
      });
      setTimeout(() => this.router.navigate(["/order"]), 1000);
    }, () => this._snackBar.open('Order failed!', 'OK', {
      duration: 3000,
      panelClass: 'fail-snackbar'
    }))

  }
}