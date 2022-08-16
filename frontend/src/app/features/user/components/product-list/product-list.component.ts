import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result : Product[]) => {
      console.log('result', result),
        this.products = result;
    })
  }

}
