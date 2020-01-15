import React, { Fragment } from 'react';

import { Product } from './product';
import { ProductInterface } from '../../reducers/catalog-reducer';
import { DiscountInterface } from '../../reducers/catalog-reducer';

export function ProductsList({
  products,
  discounts,
  addToCard,
}: {
  products: ProductInterface[];
  discounts: DiscountInterface[];
  addToCard: (id: number) => void;
}) {
  return (
    <Fragment>
      {products.map(product => (
        <Product name={product.name} price={product.price} addToCard={() => addToCard(product.id)} key={product.id} />
      ))}
    </Fragment>
  );
}
