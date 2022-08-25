import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from "../../models/product.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Order } from "../../models/order.model";
import { OrderService } from "../../services/order/order.service";
import { ProductService } from "../../services/product/product.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Output() submitForm = new EventEmitter<Order>()

  productsCart: Product[] = [];
  addressForm: FormGroup = new FormGroup({
    street: new FormControl('', [Validators.required, Validators.minLength(3)]),
    number: new FormControl('', [Validators.required, Validators.minLength(1)]),
    code: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
    state: new FormControl('', [Validators.required, Validators.minLength(3)]),
    country: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private productService: ProductService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.productsCart = this.productService.products;
  }


  incrementQuantity(product: Product): void {
    product.quantityProduct++;
  }

  decrementQuantity(product: Product): void {
    product.quantityProduct--;
  }


  deleteProductFromCart(product1: Product): void {
    const index: number = this.productsCart.indexOf(product1);
    this.productsCart.splice(index, 1);
  }

  getTotal(): number {
    let total = 0;

    for (let index in this.productsCart) {
      total += this.getPrice(this.productsCart[index]) * this.productsCart[index].quantityProduct;
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

  onSubmit(): void {
    const formData = this.addressForm.getRawValue()
    this.submitForm.emit({products: this.productsCart, address: Object.values(formData).toString() })
  }

}
