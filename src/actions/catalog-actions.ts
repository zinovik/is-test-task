import { Dispatch } from 'redux';

import { ItemsActionTypes, AddProductInterface } from './action-types';
import { NewProductInterface } from '../interfaces/new-product.interface';

export const addProduct = (product: NewProductInterface) => (dispatch: Dispatch): AddProductInterface => {
  return dispatch({
    type: ItemsActionTypes.ADD_PRODUCT,
    product,
  });
};
