import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result) => {
      console.warn('result', result)
    })
  }

}
