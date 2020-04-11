import React from "react";
import { IProduct } from "../../../types/Store";
import OrderItems from "../../Components/OrderItems/OrderItems";
import Background from "../../Components/Background/Background";
import styles from "./Orders.styles";

const Orders = ({ success, products }: OrdersProps) => {
  const classes = styles();

  return (
    <Background className={classes.root}>
      {success ? (
        <h1 className={classes.annotation + " " + classes.success}>
          Order Successful!
        </h1>
      ) : (
        <h1 className={classes.annotation + " " + classes.failed}>
          Order Failed!
        </h1>
      )}
      <OrderItems products={products} />
    </Background>
  );
};

interface OrdersProps {
  success: boolean;
  products: Array<IProduct>;
}

export default Orders;
