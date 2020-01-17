import React, { ReactElement } from 'react';
import { Typography, Box } from '@material-ui/core';

import { Product } from './product';
import { ProductInterface } from '../../interfaces/product.interface';

export function ProductsList({
  products,
  addToCard,
}: {
  products: ProductInterface[];
  addToCard: (itemId: number) => void;
}): ReactElement {
  return (
    <>
      <Typography variant="h5">Products</Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
        {products.map(product => (
          <Product
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            addToCard={(): void => addToCard(product.id)}
            key={product.id}
          />
        ))}
      </Box>
    </>
  );
}
