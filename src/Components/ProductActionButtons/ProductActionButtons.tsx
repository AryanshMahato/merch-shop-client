import React from "react";
import { AddToCartButton } from "../../Global/Button/Buttons";
import styles from "./ProductActionButtons.styles";
import { IProduct } from "../../../types/Store";
import BuyNow from "../../Containers/BuyNow/BuyNow";

const ProductActionButtons = ({
  addToCartClicked,
  product
}: ProductActionButtonsProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <AddToCartButton onClick={addToCartClicked} />
      <BuyNow product={product} />
    </div>
  );
};

interface ProductActionButtonsProps {
  addToCartClicked: () => void;
  product: IProduct;
}

export default ProductActionButtons;
