import React, { ReactElement, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';

import { NewProductInterface } from '../../interfaces/new-product.interface';

export function NewProduct({ addProduct }: { addProduct: (product: NewProductInterface) => void }): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleOpenDialogClick = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setPrice(event.target.value);
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setImageUrl(event.target.value);
  };

  const handleAddProductClick = (): void => {
    addProduct({
      name,
      price: Number(price),
      imageUrl,
    });

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
              id="standard-required"
              label="Name"
              value={name}
              onChange={handleNameChange}
              autoFocus
            />
          </div>
          <div>
            <TextField required id="standard-required" label="Price" value={price} onChange={handlePriceChange} />
          </div>
          <div>
            <TextField id="standard-required" label="Image URL" onChange={handleImageUrlChange} />
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
