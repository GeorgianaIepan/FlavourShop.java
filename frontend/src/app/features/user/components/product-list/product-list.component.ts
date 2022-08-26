import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../models/product.model";
import { Ingredient } from "../../models/ingredient.model";
import { IngredientService } from "../../services/ingredient/ingredient.service";
import { PageEvent } from "@angular/material/paginator";
import { ShoppingCartService } from "../shopping-cart/shopping-cart.service";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { forkJoin } from "rxjs";
import { PopUpComponent } from "./pop-up/pop-up/pop-up.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  products: Product[] = [];

  selectedProductIngredients: Array<any[]> = [];

  pageSlice: Product[] = this.products.slice(0, 4);

  role: string = '';

  quantities: Array<number> = [];

  constructor(private fg: FormBuilder, private shoppingCartService: ShoppingCartService, private productService: ProductService, private ingredientService: IngredientService, private router: Router, private dialog: MatDialog) {
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe((result: Product[]) => {

      console.log('result', result),
        this.products = result.map(product => {
          return {...product, quantityProduct: 1}
        });
      this.pageSlice = this.products.slice(0, 4);

    })
  }


  ngOnInit(): void {
    this.getAllProducts();
    forkJoin(this.productService.getAllProducts(), this.ingredientService.getAllIngredients()).subscribe(data => {
      const [products, ingredients] = data;
      this.products = products.map(product => {
        return { ...product, quantityProduct: 1 }
      });
      this.ingredients = ingredients.map(ingredient => {
        return { ...ingredient }
      });
      this.pageSlice = this.products.slice(0, 4);
      this.resetQuantities();
      this.resetIngredients();
    })


    this.productService.getRole().subscribe(result => {
      this.role = result.name;
    })
  }

  addProduct(product: Product, index: number): void {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(["/login"]);
    } else {
      const productCopy = {...product};
      productCopy.quantityProduct = +this.quantities[index];
      productCopy.ingredients = this.selectedProductIngredients[index];
      this.productService.addToCart(productCopy);
      this.shoppingCartService.setCartItemsNumber(+this.quantities[index] + this.shoppingCartService.cartItemsNumber);
      this.resetQuantities();
      this.resetIngredients();
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

  resetIngredients() {
    this.selectedProductIngredients = [];
    this.selectedProductIngredients.map(() =>  this.selectedProductIngredients.push([]))
  console.log(this.selectedProductIngredients)
  }

  resetQuantities() {
    this.quantities = []
    this.products.map(() =>  this.quantities.push(1))
    console.log(this.quantities)
  }

  onDeleteProduct(id: number) {
    this.productService.delete(id).subscribe(result => {console.log(result),
        this.getAllProducts()},
      error => console.log(error))
  }

  openDialog(){
    this.dialog.open(PopUpComponent)
  }

}
