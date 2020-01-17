import React, { ReactElement } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, ListItemText, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const NO_IMAGE_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjPyd1vVjVlSXRpFC7CsczD2L7yfjFhafA0nxQAgMGOI-pV2_j';

export function CartItem({
  name,
  price,
  amount,
  imageUrl,
  removeFromCart,
}: {
  name: string;
  price: number;
  amount: number;
  imageUrl?: string;
  removeFromCart: () => void;
}): ReactElement {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt={name} src={imageUrl || NO_IMAGE_URL} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`${amount} * $${price} = $${amount * price}`} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={removeFromCart}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
