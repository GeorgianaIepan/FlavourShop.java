import { Component, OnInit } from '@angular/core';
import {OrderProductService} from "../../services/orderProduct/order-product.service";
import {OrderProduct} from "../../models/order-product.model";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  orderProducts: OrderProduct[] = [];

  constructor(private orderProductService: OrderProductService) { }

  ngOnInit(): void {
   this.orderProducts = this.orderProductService.orderProduct;
  }

}
