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
  id: string;
  productClicked: (id: string) => void;
}

// Main Function
const ProductCard = ({
  image,
  name,
  price,
  category,
  productClicked,
  id
}: ProductCardProps) => {
  const classes = styles();

  // JSX Return
  return (
    <Card className={classes.root} onClick={() => productClicked(id)}>
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
