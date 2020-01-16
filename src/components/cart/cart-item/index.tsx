import React, { ReactElement } from 'react';
import { Card, Button, Typography } from '@material-ui/core';

export function CartItem({
  name,
  price,
  amount,
  removeFromCart,
}: {
  name: string;
  price: number;
  amount: number;
  removeFromCart: () => void;
}): ReactElement {
  return (
    <Card>
      <Typography>
        {name} - {amount} * ${price} = ${amount * price}
      </Typography>
      <Button variant="contained" color="primary" onClick={removeFromCart}>
        Remove
      </Button>
    </Card>
  );
}
