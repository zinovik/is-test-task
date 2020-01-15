import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';

export function CartItem({
  name,
  amount,
  removeFromCart,
}: {
  name: string;
  amount: number;
  removeFromCart: () => void;
}) {
  return (
    <Fragment>
      <div>
        {name} - {amount}
      </div>
      <Button variant="contained" onClick={removeFromCart}>
        Remove from cart
      </Button>
    </Fragment>
  );
}
