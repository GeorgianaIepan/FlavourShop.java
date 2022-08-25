import {Injectable} from '@angular/core';
import {BackendService} from "../../../../core/backend/backend.service";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {logDeprecation} from "sweetalert/typings/modules/options/deprecations";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product | undefined;

  productsURL = 'http://localhost:8080/products/findall';
  saveProductURL = 'http://localhost:8080/product/save';
  deleteProduct = 'http://localhost:8080/product/delete/{id}';

  constructor(private service: BackendService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.service.get(this.productsURL);
  }

  save(product: Product, image: any) {
    return this.service.post(this.saveProductURL, product, image);
  }

  delete(id: number) {
    return this.service.delete(this.deleteProduct, id);
  }

}
