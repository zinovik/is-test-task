import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';

export function Product({ name, price, addToCard }: { name: string; price: number; addToCard: () => void }) {
  return (
    <Fragment>
      <div>
        {name} - {price}
      </div>
      <Button variant="contained" onClick={addToCard}>
        Add to cart
      </Button>
    </Fragment>
  );
}
