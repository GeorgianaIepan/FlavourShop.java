import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";
import { OrderProductService } from "../../services/orderProduct/order-product.service";
import { OrderProduct } from "../../models/order-product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: (Product & { quantity: number })[] = [];

 // orderProducts: OrderProduct[] = [];
  // OrderProduct list!!!


  // angForm = new FormGroup({
  //   productsQuantity: new FormArray([
  //     new FormControl('', Validators.required),
  //     new FormControl('', Validators.required),
  //   ])
  // });

  constructor(private productService: ProductService, private orderProductService: OrderProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result: Product[]) => {

      console.log('result', result),
        this.products = result.map(product => {
          return { ...product, quantity: 0 }
        });
    })
  }
   /* console.log('result', result),
      return this.orderProducts = result;
  }*/

  addProduct(product: Product, quantity: number): void {
    console.log(product);
    console.log(quantity);
    this.orderProductService.addToCart(product, quantity);
  }

/*
  incrementQuantity(product: OrderProduct): void {
    product.quantity += 1;
  }

  decrementQuantity(product: OrderProduct): void {
    product.quantity -= 1;
  }
*/


}
