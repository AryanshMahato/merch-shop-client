import React from "react";
import { IProduct } from "../../../../types/Store";
import styles from "./OrderItem.styles";

const OrderItem = ({ product }: OrderItemProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <img
        src={process.env.REACT_APP_STATIC_LINK + product.imageName}
        alt={product.name}
        className={classes.image}
      />
      <div className={classes.info}>
        <h1 className={classes.name}>{product.name}</h1>
        <h2 className={classes.category}>{product.category.name}</h2>
        <p className={classes.description}>{product.description}</p>
      </div>
      <div className={classes.statusRoot}>
        <p className={classes.statusAnnotation}>{"Status"}</p>
        <p className={classes.status}>{"Payment Received"}</p>
      </div>
    </div>
  );
};

interface OrderItemProps {
  product: IProduct;
}

export default OrderItem;
