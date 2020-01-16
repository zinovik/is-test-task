import React, { ReactElement } from 'react';
import { Paper, Card, Typography } from '@material-ui/core';

import { CartItem } from './cart-item';
import { CartInterface } from '../../interfaces/cart.interface';
import { ProductInterface } from '../../interfaces/product.interface';

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

  return (
    <Paper>
      {itemsMapped.length > 0 ? (
        <Card>
          {itemsMapped.map(item => (
            <CartItem
              name={item.product.name}
              price={item.product.price}
              amount={item.amount}
              removeFromCart={(): void => removeFromCart(item.product.id)}
              key={item.product.id}
            />
          ))}
        </Card>
      ) : (
        <Typography>The cart is empty</Typography>
      )}

      <Typography>Total: {total}</Typography>
    </Paper>
  );
}
