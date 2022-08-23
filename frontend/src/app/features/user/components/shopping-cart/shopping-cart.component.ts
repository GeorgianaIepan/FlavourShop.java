import { Component, OnInit } from '@angular/core';
import { OrderProductService } from "../../services/orderProduct/order-product.service";
import { OrderProduct } from "../../models/order-product.model";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  orderProducts: OrderProduct[] = [];

  constructor(private orderProductService: OrderProductService) {
  }

  ngOnInit(): void {
    this.orderProducts = this.orderProductService.orderProduct;
  }

  incrementQuantity(orderProduct: OrderProduct): void {
    orderProduct.quantity++;
  }

  decrementQuantity(orderProduct: OrderProduct): void {
    orderProduct.quantity--;
  }

  deleteProductFromCart(orderProduct1: OrderProduct): void {
    const index: number = this.orderProducts.indexOf(orderProduct1);
    this.orderProducts.splice(index, 1);
  }

  getTotal(): number {
    let total = 0;

    for (let index in this.orderProducts) {
      total += this.getPrice(this.orderProducts[index].product) * this.orderProducts[index].quantity;
    }
    return total;
  }

  getPrice(product: Product): number {
    let total = product.priceProduct;
    for (let index in product.ingredients) {
      total += product.ingredients[index].priceIngredient;
    }
    return total;
  }
}
