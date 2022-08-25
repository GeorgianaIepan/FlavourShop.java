import { Injectable } from '@angular/core';
import { BackendService } from "../../../../core/backend/backend.service";
import { Observable } from "rxjs";
import { Product } from "../../models/product.model";
import { Role } from "../../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  productsURL = 'http://localhost:8080/products/findall';
  roleURL = 'http://localhost:8080/user/role';

  constructor(private service: BackendService) {
  }
  oneProductURL = 'http://localhost:8080/products/';

  getAllProducts(): Observable<Product[]> {
    return this.service.get(this.productsURL);
  }

  getProduct(productName: string | null): Observable<Product> {
    return this.service.get(this.oneProductURL + productName);
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

}
