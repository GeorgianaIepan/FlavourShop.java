import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";
import { OrderProductService } from "../../services/orderProduct/order-product.service";
import { Ingredient } from "../../models/ingredient.model";
import { IngredientService } from "../../services/ingredient/ingredient.service";
import { PageEvent } from "@angular/material/paginator";
import { OrderProduct } from "../../models/order-product.model";
import {PageEvent} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  products: (Product & { quantity: number })[] = [];

  selectedProductIngredients: Ingredient[] = [];

  pageSlice: (Product & { quantity: number })[] = this.products.slice(0, 4);

  constructor(private productService: ProductService, private orderProductService: OrderProductService, private ingredientService: IngredientService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result: Product[]) => {

      console.log('result', result),
        this.products = result.map(product => {
          return { ...product, quantity: 1 }
        });
      this.pageSlice = this.products.slice(0, 4);

    })

    this.ingredientService.getAllIngredients().subscribe((result: Ingredient[]) => {

      console.log('result', result),
        this.ingredients = result.map(ingredient => {
          return { ...ingredient }
        });
    })
  }

  addProduct(product: Product, quantity: number): void {
    console.log(product);
    console.log(quantity);
    console.log('token: ', localStorage.getItem('token'));
    if(localStorage.getItem('token') == null){
      this.router.navigate(["/login"]);
    }
    else
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

  onPageChange(event: PageEvent){
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if(end > this.products.length){
      end = this.products.length;
    }
    this.pageSlice = this.products.slice(start, end);
  }

  onSelectionChange(): void {
    console.log(this.selectedProductIngredients);
  }
}
