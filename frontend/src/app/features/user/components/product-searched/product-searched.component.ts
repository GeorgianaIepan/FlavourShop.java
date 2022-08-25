import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Ingredient} from "../../models/ingredient.model";
import {IngredientService} from "../../services/ingredient/ingredient.service";

@Component({
  selector: 'app-product-searched',
  templateUrl: './product-searched.component.html',
  styleUrls: ['./product-searched.component.scss']
})
export class ProductSearchedComponent implements OnInit {

  private nameProduct: string | null = null;
  product: Product = {idProduct: 0,nameProduct: '', priceProduct: 0, stockProduct: '', quantityProduct: 0, imgProduct: '', ingredients: [], description:''};
  ingredients: Ingredient[] = [];

  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute, private router: Router, private _snackBar: MatSnackBar, private ingredientService: IngredientService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.nameProduct = params['name'];
      if(this.nameProduct == ''){
        this.router.navigate(["/products"]);
      }else {
        this.productService.getProduct(this.nameProduct).subscribe(result => {
          this.product = result;
          this.product.quantityProduct = 1;
          this.router.navigate(["/product/" + result.nameProduct]);
        }), () => this._snackBar.open('Failed to search for this product!', 'OK', {
          duration: 3000,
          panelClass: 'fail-snackbar'
        })
      }
    });

    this.ingredientService.getAllIngredients().subscribe((result: Ingredient[]) => {
        this.ingredients = result.map(ingredient => {
          return { ...ingredient }
        });
    })
  }

  addProduct(product: Product): void {
    this.productService.addToCart(product);
  }

}
