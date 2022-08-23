import { OrderProduct } from "./order-product.model";

export type Order = {
  address: string;
  orderProducts: OrderProduct[];
}
