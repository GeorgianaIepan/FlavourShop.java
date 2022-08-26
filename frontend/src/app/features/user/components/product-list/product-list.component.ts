import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../models/product.model";
import {Ingredient} from "../../models/ingredient.model";
import {IngredientService} from "../../services/ingredient/ingredient.service";
import {PageEvent} from "@angular/material/paginator";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {logDeprecation} from "sweetalert/typings/modules/options/deprecations";
import { LoginService } from "../../services/login/login.service";
import { Order } from "../../models/order.model";
import { Review } from "../../models/review.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Output() submitReview = new EventEmitter<number>();
  rating:number = 0;
  ingredients: Ingredient[] = [];
  logedin: boolean = false;
  private ratingArr = [];

  products: Product[] = [];
  // orderProducts: OrderProduct[] = [];
  // OrderProduct list!!!

  selectedProductIngredients: Ingredient[] = [];

  pageSlice: Product[] = this.products.slice(0, 4);

  role: string = '';

  constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService, private ingredientService: IngredientService, private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.currentLoginState.subscribe(result => this.logedin = result);
    this.productService.getAllProducts().subscribe((result: Product[]) => {

      console.log('result', result),
        this.products = result.map(product => {
          return {...product, quantityProduct: 1}
        });
      this.pageSlice = this.products.slice(0, 4);

    })

    this.ingredientService.getAllIngredients().subscribe((result: Ingredient[]) => {

      console.log('result', result),
        this.ingredients = result.map(ingredient => {
          return {...ingredient}
        });
    })

    this.productService.getRole().subscribe(result => {
      this.role = result.name;
    })
  }

  addProduct(product: Product): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(["/login"]);
    } else {
      this.productService.addToCart(product);
      this.shoppingCartService.setCartItemsNumber(this.shoppingCartService.cartItemsNumber + Number.parseInt(product.quantityProduct.toString()));
    }
  }

  sortProduct(type: string, by: string) {
    if (by == "price")
      if (type == "asc") {
        this.products.sort((a, b) => a.priceProduct - b.priceProduct);
      } else
        this.products.sort((a, b) => b.priceProduct - a.priceProduct);
    else if (type == "asc")
      this.products.sort((a, b) => a.nameProduct.localeCompare(b.nameProduct));
    else
      this.products.sort((a, b) => b.nameProduct.localeCompare(a.nameProduct));
    this.pageSlice = this.products.slice(0, 4);
  }


  onPageChange(event: PageEvent) {
    const start = event.pageIndex * event.pageSize;
    let end = start + event.pageSize;
    if (end > this.products.length) {
      end = this.products.length;
    }
    this.pageSlice = this.products.slice(start, end);
  }

  onSelectionChange(): void {
    console.log(this.selectedProductIngredients);
  }

  odSaveProduct(product: Product, image: any) {
    this.productService.save(product, image).subscribe(result => {
        console.log(result);
      },
      error => console.log(error))
  }

  onDeleteProduct(id: number) {
    this.productService.delete(id).subscribe(result => console.log(result),
      error => console.log(error))
  }

  reviewSubmit(review: Review): void {
    this.productService.addReview(review);
  }

  onRatingChanged(rating: number){
    this.rating = rating;
  }

}
