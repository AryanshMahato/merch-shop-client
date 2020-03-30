import React from "react";
import { CardContent, Grid } from "@material-ui/core";
import styles from "./ProductCardContent.styles";

interface ProductCardContentProps {
  name: string;
  price: any;
  category: string;
}

// Main Function
const ProductCardContent = ({
  name,
  price,
  category
}: ProductCardContentProps) => {
  const classes = styles();

  // JSX Return
  return (
    <CardContent className={classes.cardContent}>
      <Grid container direction={"row"} spacing={1} alignItems={"center"}>
        <Grid item xs={9} className={classes.name}>
          {name}
        </Grid>
        <Grid item xs={2} className={classes.price}>
          <span className={classes.priceSign}>$</span>
          {price}
        </Grid>
        <Grid item xs={12} className={classes.category}>
          {category}
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default ProductCardContent;
