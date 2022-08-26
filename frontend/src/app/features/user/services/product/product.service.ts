import {Injectable} from '@angular/core';
import {BackendService} from "../../../../core/backend/backend.service";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {error} from "@angular/compiler-cli/src/transformers/util";

import { Role } from "../../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  productsURL = 'http://localhost:8080/products/findall';
  roleURL = 'http://localhost:8080/user/role';
  oneProductURL = 'http://localhost:8080/products/';
  saveProductURL = 'http://localhost:8080/product/save';
  deleteProduct = 'http://localhost:8080/product/delete/';

  constructor(private service: BackendService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.service.get(this.productsURL);
  }

  getProduct(productName: string | null): Observable<Product> {
    return this.service.get(this.oneProductURL + productName);
}

  save(formData: FormData) {
    return this.service.post(this.saveProductURL, formData);
  }

  addToCart(product: Product) {
    this.products.push(product);
  }

  /*addToCart2(product: Product) {
    const rezFind: undefined | Product = this.products.find(el => {
      let ok: boolean = true;
      console.log("here")
      console.log(el);
      // if(el.ingredients !== null && product.ingredients !== null){
      //   el.ingredients.forEach(i => {
      //     if(product.ingredients.includes(i)=== false){
      //       ok = false;
      //     }
      //   })
      //   if(el.ingredients.length !== product.ingredients.length){
      //     ok = false;
      //   }
      // }
      // if(el.ingredients === null && product.ingredients !== null)
      //   ok = false;
      // if(el.ingredients !== null && product.ingredients === null)
      //   ok = false;

      return product.idProduct === el.idProduct;
    });

    if (!!rezFind) {
      this.products.forEach((el) => {
        if (!!rezFind) {
          console.log(el.quantityProduct);
          console.log(product.quantityProduct);
          el.quantityProduct = el.quantityProduct + product.quantityProduct;
          console.log(el.quantityProduct);
        }
      });
    } else {
      this.products.push(product);
    }
  }*/

  getRole(): Observable<Role> {
    console.log(this.service.get(this.roleURL))
    return this.service.get(this.roleURL);
  }
  delete(id: number) {
    return this.service.delete(this.deleteProduct + id);
  }

}
