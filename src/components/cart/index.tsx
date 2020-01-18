import React, { ReactElement } from 'react';
import { Paper, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CartItem } from './cart-item';
import { CartInterface } from '../../interfaces/cart.interface';
import { ProductInterface } from '../../interfaces/product.interface';

const useStyles = makeStyles(theme => ({
  cartContainer: {
    width: theme.spacing(38),
    margin: theme.spacing(1),
  },
  textInCart: {
    margin: theme.spacing(1),
  },
}));

interface ItemsMapped {
  amount: number;
  product: ProductInterface;
}

export function Cart({
  products,
  cart,
  removeFromCart,
}: {
  products: ProductInterface[];
  cart: CartInterface;
  removeFromCart: (itemId: number) => void;
}): ReactElement {
  const itemsMapped: ItemsMapped[] = cart.items.reduce((items: ItemsMapped[], item) => {
    const product = products.find(product => product.id === item.id);

    if (!product) {
      return items;
    }

    items.push({
      product: product,
      amount: item.amount,
    });

    return items;
  }, []);

  const total = itemsMapped.reduce((sum: number, item) => sum + item.product.price * item.amount, 0);

  const classes = useStyles();

  return (
    <>
      <Typography variant="h5">Cart</Typography>
      <Paper variant="outlined" className={classes.cartContainer}>
        {itemsMapped.length > 0 ? (
          <>
            <List>
              {itemsMapped.map(item => (
                <CartItem
                  name={item.product.name}
                  price={item.product.price}
                  amount={item.amount}
                  imageUrl={item.product.imageUrl}
                  removeFromCart={(): void => removeFromCart(item.product.id)}
                  key={item.product.id}
                />
              ))}
            </List>
            <Typography className={classes.textInCart}>Total: ${total}</Typography>
          </>
        ) : (
          <Typography className={classes.textInCart}>The cart is empty</Typography>
        )}
      </Paper>
    </>
  );
}
