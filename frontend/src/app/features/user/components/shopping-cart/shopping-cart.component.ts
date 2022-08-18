import { Component, OnInit } from '@angular/core';
import {OrdrrProductService} from "../../services/orderProduct/orderProduct.service";
import {OrderProduct} from "../../models/orderProduct.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
