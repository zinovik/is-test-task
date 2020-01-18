import React, { ReactElement, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';

import { NewProductInterface } from '../../interfaces/new-product.interface';

export function NewProduct({ addProduct }: { addProduct: (product: NewProductInterface) => void }): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [nameErrorText, setNameErrorText] = useState('');
  const [priceErrorText, setPriceErrorText] = useState('');

  const isNameValid = (nameValue: string): boolean => {
    const nameRegexp = new RegExp('[0-9a-zA-Z ]{3,50}');

    return nameRegexp.test(nameValue);
  };

  const isPriceValid = (priceValue: string): boolean => {
    return Boolean(Number(priceValue));
  };

  const handleOpenDialogClick = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setName(event.target.value);

    if (nameErrorText && isNameValid(name)) {
      setNameErrorText('');
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setPrice(event.target.value);

    if (priceErrorText && isPriceValid(price)) {
      setPriceErrorText('');
    }
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setImageUrl(event.target.value);
  };

  const handleAddProductClick = (): void => {
    const nameError = isNameValid(name) ? '' : 'Invalid value';
    const priceError = isPriceValid(price) ? '' : 'Invalid value';

    if (nameError || priceError) {
      setNameErrorText(nameError);
      setPriceErrorText(priceError);

      return;
    }

    addProduct({
      name,
      price: Number(price),
      imageUrl,
    });

    setName('');
    setPrice('');
    setImageUrl('');

    handleClose();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenDialogClick}>
        Add New Product
      </Button>

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              required
              id="name-required"
              label="Name"
              value={name}
              onChange={handleNameChange}
              autoFocus
              error={Boolean(nameErrorText)}
              helperText={nameErrorText}
            />
          </div>
          <div>
            <TextField
              required
              id="price-required"
              label="Price, $"
              value={price}
              onChange={handlePriceChange}
              error={Boolean(priceErrorText)}
              helperText={priceErrorText}
            />
          </div>
          <div>
            <TextField id="image-url" label="Image URL" onChange={handleImageUrlChange} />
          </div>
          <DialogActions>
            <Button size="small" color="primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button size="small" color="primary" onClick={handleAddProductClick}>
              Add product
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
