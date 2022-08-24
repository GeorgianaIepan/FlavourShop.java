import { Injectable } from '@angular/core';
import { BackendService } from "../../../../core/backend/backend.service";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  productsURL = 'http://localhost:8080/products/findall';

  constructor(private service: BackendService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.service.get(this.productsURL);
  }

  addToCart(product: Product) {
    this.products.push(product);
  }

}
