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

  constructor(private orderProductService: OrderProductService) { }

  ngOnInit(): void {
   this.orderProducts = this.orderProductService.orderProduct;
  }


  incrementQuantity(orderProduct: OrderProduct): void {
    if(orderProduct.quantity > 0)
      orderProduct.quantity += 1;
    //else

  }

  decrementQuantity(orderProduct: OrderProduct): void {
    orderProduct.quantity -= 1;
  }


  deleteProductFromCart(orderProduct1: OrderProduct): void {
    const index: number= this.orderProducts.indexOf(orderProduct1);
    this.orderProducts.splice(index, 1);
  }

  getTotal(): number{
    let total = 0;
    for(let index in this.orderProducts){
      total += this.orderProducts[index].product.priceProduct * this.orderProducts[index].quantity;
    }
    return total;
  }
}
