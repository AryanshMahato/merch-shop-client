import React from "react";
import { IProduct } from "../../../types/Store";
import OrderItem from "./OrderItem/OrderItem";
import styles from "./OrderItems.styles";

const OrderItems = ({ products }: OrderItemsProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      {products.map(product => (
        <OrderItem product={product} key={product._id} />
      ))}
    </div>
  );
};

interface OrderItemsProps {
  products: Array<IProduct>;
}

export default OrderItems;
