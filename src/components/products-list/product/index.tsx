import React, { ReactElement } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    width: 300,
  },
});

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
  const image =
    imageUrl ||
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjPyd1vVjVlSXRpFC7CsczD2L7yfjFhafA0nxQAgMGOI-pV2_j';

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" alt={name} height="140" image={image} title={name} />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {name} - ${price}
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
