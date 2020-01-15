import { ItemsActionTypes, CatalogActions } from '../../actions/action-types';

export interface NewProductInterface {
  name: string;
  price: number;
}

export interface ProductInterface extends NewProductInterface {
  id: number;
}

export interface DiscountInterface extends ProductInterface {
  productId: number;
  amount: number;
}

interface CatalogInterface {
  products: ProductInterface[];
  discounts: DiscountInterface[];
}

const initialState: CatalogInterface = {
  products: [
    {
      id: 0,
      name: 'Popcorn',
      price: 3,
    },
    {
      id: 1,
      name: 'Snickers',
      price: 4,
    },
    {
      id: 2,
      name: 'Soda',
      price: 2,
    },
  ],
  discounts: [
    {
      id: 4,
      name: 'Discount! 5 * Snickers',
      price: 12,
      productId: 1,
      amount: 5,
    },
  ],
};

export default function catalogReducer(state = initialState, action: CatalogActions): CatalogInterface {
  switch (action.type) {
    case ItemsActionTypes.ADD_PRODUCT: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
