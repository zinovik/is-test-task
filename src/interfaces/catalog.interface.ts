import { ProductInterface } from './product.interface';
import { DiscountInterface } from './discount.interface';

export interface CatalogInterface {
  products: ProductInterface[];
  discounts: DiscountInterface[];
}
