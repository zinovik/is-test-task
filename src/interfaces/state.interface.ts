import { CatalogInterface } from './catalog.interface';
import { CartInterface } from './cart.interface';

export interface StateInterface {
  catalog: CatalogInterface;
  cart: CartInterface;
}
