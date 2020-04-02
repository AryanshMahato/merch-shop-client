import React from "react";
import { AddToCartButton, BuyNowButton } from "../../Global/Button/Buttons";
import styles from "./ProductActionButtons.styles";

const ProductActionButtons = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <AddToCartButton />
      <BuyNowButton />
    </div>
  );
};

export default ProductActionButtons;
