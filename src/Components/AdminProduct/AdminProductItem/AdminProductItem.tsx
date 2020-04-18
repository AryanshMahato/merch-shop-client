import React from "react";
import { IProduct } from "../../../../types/Store";
import styles from "./AdminProductItem.styles";

const AdminProductItem = ({
  product,
}: AdminProductItemProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <img
        src={
          process.env.REACT_APP_STATIC_LINK +
          product.imageName
        }
        alt={product.name}
        className={classes.image}
      />
      <h1 className={classes.name}>
        {product.name}
      </h1>
      <p className={classes.category}>
        {product.category.name}
      </p>
      <p className={classes.price}>
        ${product.price}
      </p>
    </div>
  );
};

interface AdminProductItemProps {
  product: IProduct;
}

export default AdminProductItem;
