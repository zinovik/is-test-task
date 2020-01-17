import React, { ReactElement } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Container, Grid, Box } from '@material-ui/core';

import { ProductsList } from '../../components/products-list';
import { Cart } from '../../components/cart';
import { NewProduct } from '../../components/new-product';

import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  addProduct as addProductAction,
} from '../../actions';
import { ProductInterface } from '../../interfaces/product.interface';
import { NewProductInterface } from '../../interfaces/new-product.interface';
import { CartInterface } from '../../interfaces/cart.interface';
import { StateInterface } from '../../interfaces/state.interface';

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
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box my={4}>
            <ProductsList products={products} addToCard={addToCart} />
          </Box>

          <Box my={4}>
            <NewProduct addProduct={addProduct} />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box my={4}>
            <Cart products={products} cart={cart} removeFromCart={removeFromCart} />
          </Box>
        </Grid>
      </Grid>
    </Container>
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
