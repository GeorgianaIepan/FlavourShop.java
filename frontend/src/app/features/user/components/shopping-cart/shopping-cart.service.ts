import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ShoppingCartService {
  private _cartItemsNumber = new BehaviorSubject<number>(0)
  cartItemsNumber$ = this._cartItemsNumber.asObservable();

  get cartItemsNumber(): number {
    return this._cartItemsNumber.getValue();
  }

  setCartItemsNumber(itemsNumber: number) {
    this._cartItemsNumber.next(itemsNumber);
  }
}
