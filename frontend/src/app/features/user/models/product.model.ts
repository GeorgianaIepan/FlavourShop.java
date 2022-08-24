import { Ingredient } from "./ingredient.model";

export type Product = {
  priceProduct: number;
  nameProduct: string;
  stockProduct: string;
  description: string;
  imgProduct: string;
  ingredients: Ingredient[];
  quantityProduct: number;
}




