import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormControl} from "@angular/forms";
import {ProductService} from "../../../../services/product/product.service";
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(  private productService: ProductService,) { }

  ngOnInit(): void {

  }

  saveProductForm = new FormGroup({
    priceProduct: new FormControl(''),
    nameProduct: new FormControl(''),
    quantityProduct: new FormControl(''),
    description: new FormControl(''),
    imgProduct: new FormControl()
  })

  uploadFile(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    this.saveProductForm.patchValue({
      imgProduct: file,
    });
    this.saveProductForm.get('imgProduct')!.updateValueAndValidity();
  }

  submit() {
    let formData: any = new FormData();
    let product: Partial<Product> = this.saveProductForm.value as Partial<Product>;
    product.imgProduct = undefined;
    formData.append('product', JSON.stringify(product));
    formData.append('file', this.saveProductForm.controls['imgProduct'].value);
    this.productService.save(formData).subscribe(result => {
        console.log(result);
      },
      error => console.log(error))
  }

}
