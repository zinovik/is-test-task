import { NewProductInterface } from '../reducers/catalog-reducer';

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export enum ItemsActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
}

export interface AddToCartInterface {
  type: CartActionTypes.ADD_TO_CART;
  id: number;
}

export interface RemoveFromCartInterface {
  type: CartActionTypes.REMOVE_FROM_CART;
  id: number;
}

export interface AddProductInterface {
  type: ItemsActionTypes.ADD_PRODUCT;
  product: NewProductInterface;
}

export type CartActions = AddToCartInterface | RemoveFromCartInterface;
export type CatalogActions = AddProductInterface;

export type Actions = CartActions | CatalogActions;
