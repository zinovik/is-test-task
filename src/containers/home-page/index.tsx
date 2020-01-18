import React, { ReactElement } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addToCart as addToCartAction, removeFromCart as removeFromCartAction } from '../../actions/cart-actions';
import { addProduct as addProductAction } from '../../actions/catalog-actions';
import { ProductInterface } from '../../interfaces/product.interface';
import { NewProductInterface } from '../../interfaces/new-product.interface';
import { CartInterface } from '../../interfaces/cart.interface';
import { StateInterface } from '../../interfaces/state.interface';
import { MainLayout } from '../../components/main-layout';

interface StateProps {
  products: ProductInterface[];
  cart: CartInterface;
}

interface DispatchProps {
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  addProduct: (product: NewProductInterface) => void;
}

type Props = StateProps & DispatchProps;

function HomePage({ products, cart, addToCart, removeFromCart, addProduct }: Props): ReactElement {
  return (
    <MainLayout
      products={products}
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      addProduct={addProduct}
    />
  );
}

const mapStateToProps = (state: StateInterface): StateProps => ({
  products: [...state.catalog.discounts, ...state.catalog.products],
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addToCart: bindActionCreators(addToCartAction, dispatch),
  removeFromCart: bindActionCreators(removeFromCartAction, dispatch),
  addProduct: bindActionCreators(addProductAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
