import React from "react";
import { IProduct } from "../../../types/Store";
import OrderItems from "../../Components/OrderItems/OrderItems";
import Background from "../../Components/Background/Background";
import styles from "./Orders.styles";
import { connect } from "react-redux";

const Orders = ({ success, products, product }: OrdersProps) => {
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
      <OrderItems products={products} singleProduct={product} />
    </Background>
  );
};

interface OrdersProps {
  success: boolean;
  products: Array<IProduct>;
  product: IProduct;
}

const mapStateToProps = (state: any) => {
  return {
    success: state.orders.success
  };
};

export default connect(mapStateToProps)(Orders);
