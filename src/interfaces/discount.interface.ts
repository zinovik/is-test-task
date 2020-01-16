import { ProductInterface } from './product.interface';

export interface DiscountInterface extends ProductInterface {
  productId: number;
  amount: number;
}
