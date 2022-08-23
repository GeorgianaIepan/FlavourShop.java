import { Injectable } from '@angular/core';
import { BackendService } from "../../../../core/backend/backend.service";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product | undefined;

  productsURL = 'http://localhost:8080/products/findall';

  constructor(private service: BackendService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.service.get(this.productsURL);
  }
}
