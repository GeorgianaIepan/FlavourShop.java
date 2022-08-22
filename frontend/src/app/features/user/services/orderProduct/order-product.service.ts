import {Injectable} from '@angular/core';
import {OrderProduct} from "../../models/order-product.model";
import {BackendService} from "../../../../core/backend/backend.service";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  orderProduct: OrderProduct[] = [];
  orderProductsURL = 'http://localhost:8080/orderProducts/getorderbypser';

  constructor(private service: BackendService) {
  }

  getAllOrderProducts(): Observable<OrderProduct[]> {
    return this.service.get(this.orderProductsURL);
  }

  addToCart(product: Product, quantity: number) {
    const orderProduct1: OrderProduct = {quantity: quantity, product: {...product /*, nameProduct: ''*/}};
    this.orderProduct.push(orderProduct1);
  }

}

