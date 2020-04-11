import React from "react";
import Orders from "../Containers/Orders/Orders";
import { connect } from "react-redux";
import { IProduct } from "../../types/Store";

const OrderPage = ({ orderedProducts, success }: OrderPageProps) => {
  return <Orders success={success} products={orderedProducts} />;
};

interface OrderPageProps {
  orderedProducts: Array<IProduct>;
  success: boolean;
}

const mapStateToProps = (state: any) => {
  return {
    success: state.orders.status,
    orderedProducts: state.orders.products
  };
};

export default connect(mapStateToProps)(OrderPage);
