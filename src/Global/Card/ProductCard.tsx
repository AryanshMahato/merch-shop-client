import React from "react";
import styles from "./ProductCard.styles";
import { Card, CardActionArea } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import ProductCardContent from "./CardContent/ProductCardContent";

interface ProductCardProps {
  image: any;
  name: string;
  price: any;
  category: string;
}

// Main Class
const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  const classes = styles();

  // JSX Return
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} title={name}>
          <img src={image} className={classes.image} alt={name} />
        </CardMedia>
        <ProductCardContent name={name} price={price} category={category} />
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
