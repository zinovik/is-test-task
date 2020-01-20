import { CartActionTypes, CartActions } from '../actions/action-types';
import { CartInterface } from '../interfaces/cart.interface';
import { CartItemInterface } from '../interfaces/cart-item.interface';
import { DiscountInterface } from '../interfaces/discount.interface';

const initialState: CartInterface = {
  items: [],
};

const addItems = (items: CartItemInterface[], itemId: number, amount = 1): CartItemInterface[] => {
  let isAdded = false;

  const updatedItems = items.map(item => {
    if (item.id !== itemId) {
      return item;
    }

    isAdded = true;

    return { ...item, amount: item.amount + amount };
  });

  if (!isAdded) {
    updatedItems.push({
      id: itemId,
      amount,
    });
  }

  return updatedItems;
};

const checkDiscounts = (cartItems: CartItemInterface[], discounts: DiscountInterface[]): CartItemInterface[] => {
  const updatedCartItems = cartItems.reduce((items: CartItemInterface[], item) => {
    const productDiscount = discounts.find(discount => discount.productId === item.id);

    if (!productDiscount || item.amount < productDiscount.amount) {
      return addItems(items, item.id, item.amount);
    }

    const amountDiscount = Math.floor(item.amount / productDiscount.amount);
    const amountRemainder = item.amount % productDiscount.amount;

    const itemsWithDiscount = addItems(
      amountRemainder ? addItems(items, item.id, amountRemainder) : items,
      productDiscount.id,
      amountDiscount,
    );

    return itemsWithDiscount;
  }, []);

  return updatedCartItems;
};

export default function cartReducer(state = initialState, action: CartActions): CartInterface {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const updatedItems = addItems(state.items, action.itemId);
      const itemsWithDiscounts = checkDiscounts(updatedItems, action.discounts);

      return { ...state, items: itemsWithDiscounts };
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      const items = state.items.filter(item => item.id !== action.itemId);

      return { ...state, items };
    }
    default: {
      return state;
    }
  }
}
