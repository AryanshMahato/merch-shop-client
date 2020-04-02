import React from "react";
import styles from "./ProductImage.styles";

const ProductImage = ({ imageLink }: ProductImageProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <img src={imageLink} alt="Product" />
    </div>
  );
};

interface ProductImageProps {
  imageLink: string;
}

export default ProductImage;
