import React, { Fragment, ReactElement } from 'react';
import { Button, Input } from '@material-ui/core';

import { NewProductInterface } from '../../interfaces/new-product.interface';

export function NewProduct({ addProduct }: { addProduct: (product: NewProductInterface) => void }): ReactElement {
  const clickHandle = (): void => {
    addProduct({
      name: 'new Product',
      price: 10,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjPyd1vVjVlSXRpFC7CsczD2L7yfjFhafA0nxQAgMGOI-pV2_j',
    });
  };

  return (
    <Fragment>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Button variant="contained" color="primary" onClick={clickHandle}>
        Add product
      </Button>
    </Fragment>
  );
}
