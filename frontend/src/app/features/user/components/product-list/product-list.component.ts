import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../models/product.model";
import {Ingredient} from "../../models/ingredient.model";
import {IngredientService} from "../../services/ingredient/ingredient.service";
import {PageEvent} from "@angular/material/paginator";
import {ShoppingCartService} from "../shopping-cart/shopping-cart.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopUpComponent} from "./pop-up/pop-up/pop-up.component";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  products: Product[] = [];
  // orderProducts: OrderProduct[] = [];
  // OrderProduct list!!!

  selectedProductIngredients: Ingredient[] = [];

  pageSlice: Product[] = this.products.slice(0, 4);

  role: string = '';

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService,
              private ingredientService: IngredientService,
              private router: Router,
              private dialog: MatDialog) {
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

  onDeleteProduct(id: number) {
    this.productService.delete(id).subscribe(result => {console.log(result),
        this.getAllProducts()},
      error => console.log(error))
  }

  openDialog(){
    this.dialog.open(PopUpComponent)
  }

}
