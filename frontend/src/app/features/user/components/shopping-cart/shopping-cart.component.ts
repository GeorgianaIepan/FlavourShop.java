import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderProductService } from "../../services/orderProduct/order-product.service";
import { OrderProduct } from "../../models/order-product.model";
import { Product } from "../../models/product.model";
import { FormControl, FormGroup, FormGroupDirective, ValidationErrors, Validators } from "@angular/forms";
import { User } from "../../models/user.model";
import { Order } from "../../models/order.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Output() submitForm = new EventEmitter<Order>()

  orderProducts: OrderProduct[] = [];
  order: Order[] = [];

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

  addressValidator(street: string, number: string, code: string, state: string, country: string){
    return this.addressForm.value.street !== null && this.addressForm.value.number !== null && this.addressForm.value.code !== null && this.addressForm.value.state !== null && this.addressForm.value.country !== null;
  }

  addressForm = new FormGroup({
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  })

  onSubmit(formDirective: FormGroupDirective) {
    if (this.addressForm.value.street != null && this.addressForm.value.number != null && this.addressForm.value.code != null && this.addressForm.value.state != null && this.addressForm.value.country != null) {
      this.order[0].address.concat(this.addressForm.value.street, this.addressForm.value.number, this.addressForm.value.code, this.addressForm.value.state, this.addressForm.value.country);
      this.order[0].orderProducts = this.orderProducts;
      this.submitForm.emit(this.order[0] as Order)
    } else {
      this.addressForm.setErrors({ incorrect: true, message: 'Please enter a 5 digit value'});
    }
    this.addressForm.reset()
    formDirective.resetForm()
  }

}
