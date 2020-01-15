import { CartActionTypes, CartActions } from '../../actions/action-types';

export interface CartItemInterface {
  id: number;
  amount: number;
}

export interface CartInterface {
  items: CartItemInterface[];
}

const initialState: CartInterface = {
  items: [],
};

export default function cartReducer(state = initialState, action: CartActions): CartInterface {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      let isAdded = false;

      const items = state.items.map(item => {
        if (item.id !== action.id) {
          return item;
        }

        isAdded = true;
        return { ...item, amount: item.amount + 1 };
      });

      if (!isAdded) {
        items.push({
          id: action.id,
          amount: 1,
        });
      }

      return { ...state, items };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      const items = state.items.filter(item => item.id !== action.id);

      return { ...state, items };
    }
    default: {
      return state;
    }
  }
}
