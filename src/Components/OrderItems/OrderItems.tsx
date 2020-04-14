import React from "react";
import { IProduct } from "../../../types/Store";
import OrderItem from "./OrderItem/OrderItem";
import styles from "./OrderItems.styles";

const OrderItems = ({ products, singleProduct }: OrderItemsProps) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      {products.length ? (
        products.map(product => (
          <OrderItem product={product} key={product._id} />
        ))
      ) : (
        <OrderItem product={singleProduct!} />
      )}
    </div>
  );
};

interface OrderItemsProps {
  products: Array<IProduct>;
  singleProduct?: IProduct;
}

export default OrderItems;
