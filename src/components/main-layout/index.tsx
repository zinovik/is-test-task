import React, { ReactElement } from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ProductsList } from '../../components/products-list';
import { Cart } from '../../components/cart';
import { NewProduct } from '../../components/new-product';

import { ProductInterface } from '../../interfaces/product.interface';
import { NewProductInterface } from '../../interfaces/new-product.interface';
import { CartInterface } from '../../interfaces/cart.interface';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  productsContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  cartContainer: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 0,
  },
  newProductButtonContainer: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
}));

export function MainLayout({
  products,
  cart,
  addToCart,
  removeFromCart,
  addProduct,
}: {
  products: ProductInterface[];
  cart: CartInterface;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  addProduct: (product: NewProductInterface) => void;
}): ReactElement {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.mainContainer}>
        <Box className={classes.productsContainer}>
          <Box>
            <ProductsList products={products} addToCard={addToCart} />
          </Box>

          <Box className={classes.newProductButtonContainer}>
            <NewProduct addProduct={addProduct} />
          </Box>
        </Box>

        <Box className={classes.cartContainer}>
          <Cart products={products} cart={cart} removeFromCart={removeFromCart} />
        </Box>
      </Box>
    </Container>
  );
}
