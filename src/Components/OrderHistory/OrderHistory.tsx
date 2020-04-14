import React from "react";
import { connect } from "react-redux";
import OrderItems from "../OrderItems/OrderItems";
import { IProduct } from "../../../types/Store";
import Background from "../Background/Background";
import styles from "./OrderHistory.styles";

const OrderHistory = ({ orderedProducts }: OrderHistoryProps) => {
  const classes = styles();

  return (
    <Background maxWidth={"850px"} className={classes.root}>
      <OrderItems products={orderedProducts} />
    </Background>
  );
};

interface OrderHistoryProps {
  orderedProducts: Array<IProduct>;
}

const mapStateToProps = (state: any) => ({
  orderedProducts: state.orders.historyProducts
});

export default connect(mapStateToProps)(OrderHistory);
