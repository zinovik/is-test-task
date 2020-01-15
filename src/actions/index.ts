import {
  CartActionTypes,
  AddToCartInterface,
  RemoveFromCartInterface,
  ItemsActionTypes,
  AddProductInterface,
} from './action-types';
import { NewProductInterface } from '../reducers/catalog-reducer';

export const addToCart = (id: number): AddToCartInterface => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    id,
  };
};

export const removeFromCart = (id: number): RemoveFromCartInterface => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    id,
  };
};

export const addProduct = (product: NewProductInterface): AddProductInterface => {
  return {
    type: ItemsActionTypes.ADD_PRODUCT,
    product,
  };
};
