import { NewProductInterface } from '../interfaces/new-product.interface';
import { DiscountInterface } from '../interfaces/discount.interface';

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export enum ItemsActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

export interface AddToCartInterface {
  type: CartActionTypes.ADD_TO_CART;
  itemId: number;
  discounts: DiscountInterface[];
}

export interface RemoveFromCartInterface {
  type: CartActionTypes.REMOVE_FROM_CART;
  itemId: number;
}

export interface AddProductInterface {
  type: ItemsActionTypes.ADD_PRODUCT;
  product: NewProductInterface;
}

export type CartActions = AddToCartInterface | RemoveFromCartInterface;
export type CatalogActions = AddProductInterface;

export type Actions = CartActions | CatalogActions;
