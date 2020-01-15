import React, { Fragment } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ProductsList } from '../../components/products-list';
import { Cart } from '../../components/cart';
import { addToCart, removeFromCart } from '../../actions';
import { ProductInterface } from '../../reducers/catalog-reducer';
import { DiscountInterface } from '../../reducers/catalog-reducer';
import { CartInterface } from '../../reducers/cart-reducer';

function HomePage({
  products,
  discounts,
  cart,
  addToCart,
  removeFromCart,
}: {
  products: ProductInterface[];
  discounts: DiscountInterface[];
  cart: CartInterface;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}) {
  return (
    <Fragment>
      <div>Products:</div>
      <ProductsList products={products} discounts={discounts} addToCard={addToCart} />
      <div>Cart:</div>
      <Cart products={products} discounts={discounts} cart={cart} removeFromCart={removeFromCart} />
    </Fragment>
  );
}

const mapStateToProps = (state: any) => ({
  products: state.catalog.products,
  discounts: state.catalog.discounts,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToCart: (id: number) => dispatch(addToCart(id)),
  removeFromCart: (id: number) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
