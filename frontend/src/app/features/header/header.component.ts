import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginService} from "../user/services/login/login.service";
import {Router} from "@angular/router";
import {map, Observable, startWith} from "rxjs";
import {FormControl} from "@angular/forms";
import {Product} from "../user/models/product.model";
import {ProductService} from "../user/services/product/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  logedin: boolean = false;
  myControl = new FormControl<string | Product>('');
  options: Product[] = [];
  filteredOptions: Observable<Product[]> | undefined;
  nameProduct: string = '';

  constructor(private productService: ProductService, private loginService: LoginService, private router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loginService.currentLoginState.subscribe( result => this.logedin = result);
    this.productService.getAllProducts().subscribe((result: Product[]) => {

      console.log('result', result),
        this.options = result.map(product => {
          return {...product}
        });

      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.nameProduct;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginService.loginState.next(false);
    setTimeout(() => this.router.navigate(["/home"]), 1000);
  }

  displayFn(item: any): string {
    if (item == undefined) { return '';}
    return item.nameProduct;
  }

  _filter(myproduct: string): Product[] {
    const filterValue = myproduct.toLowerCase();

    return this.options.filter(option => option.nameProduct.toLowerCase().includes(filterValue));
  }

}
