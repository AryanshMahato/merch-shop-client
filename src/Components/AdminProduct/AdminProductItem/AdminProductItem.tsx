import React from "react";
import { IProduct } from "../../../../types/Store";
import styles from "./AdminProductItem.styles";
import {
  DeleteButton,
  EditButton,
} from "../../../Global/Button/Buttons";

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
      <div className={classes.info}>
        <h1 className={classes.name}>
          {product.name}
        </h1>
        <p>{product.category.name}</p>
        <p className={classes.price}>
          <span>$</span>
          {product.price}
        </p>
      </div>
      <div className={classes.buttons}>
        <DeleteButton />
        <EditButton />
      </div>
    </div>
  );
};

interface AdminProductItemProps {
  product: IProduct;
}

export default AdminProductItem;
