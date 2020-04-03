import React from "react";
import { AddToCartButton, BuyNowButton } from "../../Global/Button/Buttons";
import styles from "./ProductActionButtons.styles";

const ProductActionButtons = ({
  addToCartClicked,
  buyNowClicked
}: ProductActionButtonsProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <AddToCartButton onClick={addToCartClicked} />
      <BuyNowButton onClick={buyNowClicked} />
    </div>
  );
};

interface ProductActionButtonsProps {
  addToCartClicked: () => void;
  buyNowClicked: () => void;
}

export default ProductActionButtons;
