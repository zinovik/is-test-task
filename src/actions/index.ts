import { Dispatch } from 'redux';
import { StateInterface } from '../interfaces/state.interface';

import {
  CartActionTypes,
  AddToCartInterface,
  RemoveFromCartInterface,
  ItemsActionTypes,
  AddProductInterface,
} from './action-types';
import { NewProductInterface } from '../interfaces/new-product.interface';

export const addToCart = (itemId: number) => (
  dispatch: Dispatch,
  getState: () => StateInterface,
): AddToCartInterface => {
  const { products, discounts } = getState().catalog;

  return dispatch({
    type: CartActionTypes.ADD_TO_CART,
    itemId,
    products,
    discounts,
  });
};

export const removeFromCart = (itemId: number) => (dispatch: Dispatch): RemoveFromCartInterface => {
  return dispatch({
    type: CartActionTypes.REMOVE_FROM_CART,
    itemId,
  });
};

export const addProduct = (product: NewProductInterface) => (dispatch: Dispatch): AddProductInterface => {
  return dispatch({
    type: ItemsActionTypes.ADD_PRODUCT,
    product,
  });
};
