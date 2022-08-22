import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";
import { OrderProductService } from "../../services/orderProduct/order-product.service";
import { OrderProduct } from "../../models/order-product.model";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: (Product & { quantity: number })[] = [];

  pageSlice: (Product & { quantity: number })[] = this.products.slice(0, 4);

  constructor(private productService: ProductService, private orderProductService: OrderProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result: Product[]) => {

      console.log('result', result),
        this.products = result.map(product => {
          return { ...product, quantity: 0 }
        });
    })
    this.pageSlice = this.products.slice(0, 4);
  }
   /* console.log('result', result),
      return this.orderProducts = result;
  }*/

  addProduct(product: Product, quantity: number): void {
    console.log(product);
    console.log(quantity);
    this.orderProductService.addToCart(product, quantity);
  }

  sortProduct(type: string, by: string){
    if(by == "price")
      if(type == "asc")
        this.products.sort((a, b) => a.priceProduct - b.priceProduct);
      else
        this.products.sort((a, b) => b.priceProduct - a.priceProduct);
      else
        if(type == "asc")
          this.products.sort((a, b) => a.nameProduct.localeCompare(b.nameProduct));
        else
          this.products.sort((a, b) => b.nameProduct.localeCompare(a.nameProduct));
    this.pageSlice = this.products.slice(0, 4);
}

  OnPageChange(event: PageEvent){
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if(end > this.products.length){
      end = this.products.length;
    }
    this.pageSlice = this.products.slice(start, end);
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
