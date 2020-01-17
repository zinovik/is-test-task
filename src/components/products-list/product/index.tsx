import React, { ReactElement } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const NO_IMAGE_URL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjPyd1vVjVlSXRpFC7CsczD2L7yfjFhafA0nxQAgMGOI-pV2_j';

const useStyles = makeStyles(theme => ({
  card: {
    width: theme.spacing(34),
    margin: theme.spacing(1),
  },
}));

export function Product({
  name,
  price,
  imageUrl,
  addToCard,
}: {
  name: string;
  price: number;
  imageUrl?: string;
  addToCard: () => void;
}): ReactElement {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" alt={name} height="140" image={imageUrl || NO_IMAGE_URL} title={name} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" onClick={addToCard}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
