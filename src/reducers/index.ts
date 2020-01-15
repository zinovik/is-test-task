import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import catalogReducer from './catalog-reducer';

export default combineReducers({
  cart: cartReducer,
  catalog: catalogReducer,
});
