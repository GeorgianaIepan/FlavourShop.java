import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";
import { OrderProductService } from "../../services/orderProduct/order-product.service";
import { Ingredient } from "../../models/ingredient.model";
import { IngredientService } from "../../services/ingredient/ingredient.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  products: (Product & { quantity: number })[] = [];

  selectedProductIngredients: Ingredient[] = [];


  // orderProducts: OrderProduct[] = [];
  // OrderProduct list!!!

  // angForm = new FormGroup({
  //   productsQuantity: new FormArray([
  //     new FormControl('', Validators.required),
  //     new FormControl('', Validators.required),
  //   ])
  // });

  constructor(private productService: ProductService, private orderProductService: OrderProductService, private ingredientService: IngredientService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result: Product[]) => {

      console.log('result', result),
        this.products = result.map(product => {
          return { ...product, quantity: 0 }
        });
    })
    // TODO REPLACE WITH INGREDIENTS
  /*  this.ingredientService.getAllIngredients().subscribe((result: Ingredient[]) => {

      console.log('result', result),
        this.ingredients = result.map(ingredient => {
          return { ...ingredient }
        });
    })*/
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


  onSelectionChange(): void {
    console.log(this.selectedProductIngredients);
  }
}
