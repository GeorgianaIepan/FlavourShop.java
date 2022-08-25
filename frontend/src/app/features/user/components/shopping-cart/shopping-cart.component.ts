import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from "../../models/product.model";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Order } from "../../models/order.model";
import { OrderService } from "../../services/order/order.service";
import { ProductService } from "../../services/product/product.service";
import { ShoppingCartService } from "./shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Output() submitForm = new EventEmitter<Order>()

  productsCart: Product[] = [];
  addressForm!: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private orderService: OrderService, private shoppingCartService: ShoppingCartService) {
    this.setupForm();
  }

  ngOnInit(): void {
    this.productsCart = this.productService.products;
  }


  incrementQuantity(product: Product): void {
    product.quantityProduct++;
    this.shoppingCartService.setCartItemsNumber(this.shoppingCartService.cartItemsNumber + 1);
  }

  decrementQuantity(product: Product): void {
    product.quantityProduct--;
    this.shoppingCartService.setCartItemsNumber(this.shoppingCartService.cartItemsNumber - 1);

  }


  deleteProductFromCart(product1: Product): void {
    const index: number = this.productsCart.indexOf(product1);
    this.productsCart.splice(index, 1);

    this.shoppingCartService.setCartItemsNumber(this.shoppingCartService.cartItemsNumber - Number.parseInt(product1.quantityProduct.toString()));

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
    this.orderService.submit({products: this.productsCart, address: Object.values(formData).toString() }).subscribe(console.log)
  }

  private setupForm() : void {
    this.addressForm = this.formBuilder.group({
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    });
  }

  itemsInCart(): number{
    let total: number = 0;
    for(let index in this.productsCart){
      total += this.productsCart[index].quantityProduct;
    }
    return total;
  }
}
