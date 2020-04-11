import React from "react";
import Orders from "../Containers/Orders/Orders";
import { connect } from "react-redux";
import { IProduct } from "../../types/Store";

const OrderPage = ({ orderedProducts }: OrderPageProps) => {
  return <Orders products={orderedProducts} />;
};

interface OrderPageProps {
  orderedProducts: Array<IProduct>;
}

const mapStateToProps = (state: any) => {
  return {
    orderedProducts: state.orders.products
  };
};

export default connect(mapStateToProps)(OrderPage);
